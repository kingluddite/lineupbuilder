//Zips = new Meteor.Collection("zips");
States = new Meteor.Collection("states");

States.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  update: function(userId, doc) {
    return !! userId;
  },
  remove: function(userId, doc) {
    return !! userId;
  }
});