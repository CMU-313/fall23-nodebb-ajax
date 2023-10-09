'use strict';


define('forum/tags', ['forum/infinitescroll', 'alerts'], function (infinitescroll, alerts) {
    const Tags = {};

    Tags.init = function () {
        app.enterRoom('tags');
        handleCreate();
        $('#tag-search').focus();
        $('#tag-search').on('input propertychange', utils.debounce(function () {
            if (!$('#tag-search').val().length) {
                return resetSearch();
            }

            socket.emit('topics.searchAndLoadTags', { query: $('#tag-search').val() }, function (err, results) {
                if (err) {
                    return alerts.error(err);
                }
                onTagsLoaded(results.tags, true);
            });
        }, 250));

        infinitescroll.init(Tags.loadMoreTags);
    };
    // handleCreate : void -> void
    function handleCreate() {
        const createModal = $('#create-modal');
        const createTagName = $('#create-tag-name');
        const createModalGo = $('#create-modal-go');

        // map enter key press to create button click
        createModal.on('keypress', function (e) {
            if (e.keyCode === 13) {
                createModalGo.click();
            }
        });

        // show modal when create course button is clicked
        $('#create').on('click', function () {
            createModal.modal('show');
            setTimeout(function () {
                createTagName.focus();
            }, 250);
        });

        // logic for create tag button inside modal
        createModalGo.on('click', function () {
            socket.emit('admin.tags.create', {
                tag: createTagName.val(),
                uid: app.user.uid,
            }, function (err) {
                if (err) {
                    return alerts.error(err);
                }

                createTagName.val('');
                createModal.on('hidden.bs.modal', function () {
                    ajaxify.refresh();
                });
                createModal.modal('hide');
            });
        });
    }

    Tags.loadMoreTags = function (direction) {
        if (direction < 0 || !$('.tag-list').length || $('#tag-search').val()) {
            return;
        }

        infinitescroll.loadMore('topics.loadMoreTags', {
            after: $('.tag-list').attr('data-nextstart'),
        }, function (data, done) {
            if (data && data.tags && data.tags.length) {
                onTagsLoaded(data.tags, false, done);
                $('.tag-list').attr('data-nextstart', data.nextStart);
            } else {
                done();
            }
        });
    };

    function resetSearch() {
        socket.emit('topics.loadMoreTags', {
            after: 0,
        }, function (err, data) {
            if (err) {
                return alerts.error(err);
            }
            onTagsLoaded(data.tags, true);
        });
    }

    function onTagsLoaded(tags, replace, callback) {
        callback = callback || function () {};
        app.parseAndTranslate('tags', 'tags', { tags: tags }, function (html) {
            $('.tag-list')[replace ? 'html' : 'append'](html);
            utils.makeNumbersHumanReadable(html.find('.human-readable-number'));
            callback();
        });
    }

    return Tags;
});
