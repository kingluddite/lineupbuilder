/*jshint -W020 */
Regions = new Mongo.Collection('regions');

validateRegion = function(region) {
  var errors = {};
  if (!region.regionName) {
    errors.regionName = 'Please provide a region name.';
  }
  return errors;
};

Meteor.methods({
  addRegion: function(regionAttributes) {
    var user = Meteor.user();

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
  },
  deleteRegion: function(regionId) {
    var loggedInUser = Meteor.user();
    if (!Roles.userIsInRole(loggedInUser, 'league')) {
      throw new Meteor.Error('not-authorized to delete this Region');
    }

    Regions.remove(regionId);
  }
});

Regions.allow({
  insert: function(userId) {
    // only allow posting if you are logged in
    return !!userId;
  },
  update: function(userId) {
    return !!userId;
  },
  remove: function(userId) {
    return !!userId;
  }
});
