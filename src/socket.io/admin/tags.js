'use strict';

const topics = require('../../topics');
const db = require('../../database');
const user = require('../../user');

const Tags = module.exports;

Tags.create = async function (socket, data) {
    if (!data) {
        throw new Error('[[error:invalid-data]]');
    }
    await topics.createEmptyTag(data.tag);

    await db.setAdd(`uid:${data.uid}:courses`, data.tag);
    data.students.forEach(async function(username) {
        const uid = await user.getUidByUsername(username);
        await db.setAdd(`user:${uid}:courses`, data.tag);
    });
};

Tags.rename = async function (socket, data) {
    if (!Array.isArray(data)) {
        throw new Error('[[error:invalid-data]]');
    }

    await topics.renameTags(data);
};

Tags.deleteTags = async function (socket, data) {
    if (!data) {
        throw new Error('[[error:invalid-data]]');
    }

    await topics.deleteTags(data.tags);
};
