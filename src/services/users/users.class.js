const { Service } = require('feathers-nedb')

const crypto = require('crypto')

const gravatarUrl = 'https://s.gravatar.com/avatar'

const query = 's=60'


exports.Users = class Users extends Service {
  create(data, params){
    console.log('creating user with data ' , data)
    const { email, password, githubId } = data
    // Gravatar uses MD5 hashes from an email address (all lowercase) to get the image
    const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
    // The full avatar URL
    const avatar = `${gravatarUrl}/${hash}?${query}`;
    // The complete user
    const userData = {
      email,
      password,
      githubId,
      avatar
    };
    
    console.log('creating user with userData ' , userData)
    // Call the original `create` method with existing `params` and new data
    return super.create(userData, params);
  }

}
