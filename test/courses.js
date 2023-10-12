'use strict';

const assert = require('assert');
const io = require('socket.io-client');
const db = require('./mocks/databasemock');
const admin = require('../src/socket.io/admin');

describe('Tags Feature', () => {
    describe('Create Tags', () => {
        it('should create a new tag', (done) => {
            const socket = io('http://localhost:4567', {
                transports: ['websocket'],
                'force new connection': true,
            });

            const tagData = {
                tag: 'NewTag',
                uid: 1,
                students: ['Student 1', 'Student 2'],
            };

            socket.emit('admin.tags.create', tagData, (err) => {
                assert.ifError(err);
                socket.disconnect();
                done();
            });
        });
    });

    describe('Rename Tags', () => {
        it('should rename existing tags', (done) => {
            const socket = io('http://localhost:4567', {
                transports: ['websocket'],
                'force new connection': true,
            });

            const tagData = ['OldTag', 'NewTag'];

            socket.emit('admin.tags.rename', tagData, (err) => {
                assert.ifError(err);
                socket.disconnect();
                done();
            });
        });
    });

    describe('Delete Tags', () => {
        it('should delete existing tags', (done) => {
            const socket = io('http://localhost:4567', {
                transports: ['websocket'],
                'force new connection': true,
            });

            const tagData = {
                tags: ['TagToDelete'],
            };

            socket.emit('admin.tags.deleteTags', tagData, (err) => {
                assert.ifError(err);
                socket.disconnect();
                done();
            });
        });
    });
    describe('Add Student to Tag', () => {
        it('should add a student to an existing tag', (done) => {
            const socket = io('http://localhost:4567', {
                transports: ['websocket'],
                'force new connection': true,
            });

            const addStudentData = {
                tag: 'TagToAddStudentTo',
                student: 'xuchaoz',
            };

            socket.emit('admin.tags.addStudent', addStudentData, (err) => {
                assert.ifError(err);
                socket.disconnect();
                done();
            });
        });
    });
});
