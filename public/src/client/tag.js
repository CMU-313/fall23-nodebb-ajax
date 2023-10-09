'use strict';

define('forum/tag', ['topicList', 'forum/infinitescroll'], function (topicList) {
    const Tag = {};

    Tag.init = function () {
        app.enterRoom('tags');
        handleAddStudents();
        topicList.init('tag');
    };

    // handleAddStudents: void -> void
    function handleAddStudents() {
        const addStudentsModal = $('#add-students-modal');
        const addStudentNames = $('#add-student-names');
        const addStudentsModalGo = $('#add-students-modal-go');

        // map enter key press to add students button click
        addStudentsModal.on('keypress', function (e) {
            if (e.keyCode === 13) {
                addStudentsModalGo.click();
            }
        });

        // show modal when add students button is clicked
        $('#add').on('click', function () {
            addStudentsModal.modal('show');
            setTimeout(function () {
                addStudentNames.focus();
            }, 250);
        });

        // logic for create tag button inside modal
        addStudentsModalGo.on('click', function () {
            /* socket.emit('admin.tags.create', {
                tag: addStudentNames.val(),
                uid: app.user.uid,
            }, function (err) {
                if (err) {
                    return alerts.error(err);
                }

                addStudentNames.val('');
                addStudentsModal.on('hidden.bs.modal', function () {
                    ajaxify.refresh();
                });
                addStudentsModal.modal('hide');
            });*/
        });
    }

    return Tag;
});
