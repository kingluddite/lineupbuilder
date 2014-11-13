Types = new Meteor.Collection('types');

Meteor.methods({
  addType: function(postAttributes) {
    var user = Meteor.user();

    // ensure the user is logged in
    if (!user) {
      throw new Meteor.Error(401, "You need to login to add new Types");
    }

    // ensure the post has a title
    if (!postAttributes.typeName) {
      throw new Meteor.Error(422, "Please provide a Type name");
    }
    // pick out the whitelisted keys
    // Those on the list will be accepted, approved or recognized
    var type = _.extend(_.pick(postAttributes, 'typeName', 'leagueId', 'regionId', 'typeSummary'), {

      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    var typeId = Types.insert(type);

    return typeId;
  }
});

Types.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  },
  remove: function(userId, doc) {
    return !!userId;
  }
});
