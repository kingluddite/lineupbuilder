Regions = new Mongo.Collection('regions');

validateRegion = function(region) {
  var errors = {};
  if (!region.regionName) {
    errors.regionName = "Please provide a region name.";
  }
  if (!region.regionAdminFirstName) {
    errors.url = "Please provide a region admin first name.";
  }
  return errors; 
};

Meteor.methods({
  addRegion: function(regionAttributes) {
    // check(Meteor.userId(), String);
    // check(regionAttributes, {
    //   title: String,
    //   url: String
    // });

    var user = Meteor.user();

    // ensure the user is logged in
    // if (!user) {
    //   throw new Meteor.Error(401, "You need to login to add new Regions");
    // }

    // ensure the post has a title
    // if (!postAttributes.regionName) {
    //   throw new Meteor.Error(422, "Please provide a region name");
    // }
    // pick out the whitelisted keys
    // Those on the list will be accepted, approved or recognized
    var region = _.extend(_.pick(regionAttributes, 'regionName', 'leagueId', 'regionSummary'), {

      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var regionId = Regions.insert(region);

    return {
      _id: regionId
    };
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
