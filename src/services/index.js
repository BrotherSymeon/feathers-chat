const users = require('./users/users.service.js')
const messages = require('./messages/messages.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  console.log('exporting the user service')
  app.configure(users)
  app.configure(messages);
}
