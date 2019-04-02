const functions = require('firebase-functions');
const createUser = require('./create_user');
const admin = require('firebase-admin');

exports.createUser = functions.https.onRequest(createUser);