// this will not be on server and is client only
// this data will never be saved on the client side
Errors = new Mongo.Collection(null);

throwError = function(message) {
  Errors.insert({
    message: message
  });
};
