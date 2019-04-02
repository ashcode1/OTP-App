const twilio = require('twilio');
const twilioCreds = require('./twilioCreds');

module.exports = new twilio.Twilio(
  twilioCreds.accountSid, 
  twilioCreds.authToken
)