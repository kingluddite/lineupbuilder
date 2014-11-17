Regions = new Mongo.Collection('regions');

Meteor.methods({
  addRegion: function(postAttributes) {
    var user = Meteor.user();

    // ensure the user is logged in
    if (!user) {
      throw new Meteor.Error(401, "You need to login to add new Regions");
    }

    // ensure the post has a title
    if (!postAttributes.regionName) {
      throw new Meteor.Error(422, "Please provide a region name");
    }
    // pick out the whitelisted keys
    // Those on the list will be accepted, approved or recognized
    var region = _.extend(_.pick(postAttributes, 'regionName', 'leagueId', 'regionSummary'), {

      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    var regionId = Regions.insert(region);

    return regionId;
  }
});

Regions.allow({
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
