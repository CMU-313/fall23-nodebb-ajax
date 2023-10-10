'use strict';

define('forum/tag', ['topicList', 'forum/infinitescroll', 'alerts'], function (topicList, alerts) {
    const Tag = {};

    Tag.init = function () {
        app.enterRoom('tags');
        topicList.init('tag');
    };

    return Tag;
});
