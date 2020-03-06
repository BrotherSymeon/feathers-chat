// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    //throw an error if there is no text
    if(!data.text){
      throw new Error('messages should have a text')
    }

    //get the logged in user
    const { user } = context.params

    const text = data.text.substring(0,400)

    //update original data

    context.data = {
      text,
      userId: user._id,
      createdAt: new Date().getTime()
    }

    return context;
  };
};
