/*jshint -W020 */
Seasons = new Mongo.Collection('seasons');

validateSeason = function(season) {
  var errors = {};
  if (!season.seasonName) {
    errors.seasonName = 'Please provide a season name.';
  }
  return errors;
};

Meteor.methods({
  addSeason: function(seasonAttributes) {
    // check(Meteor.userId(), String);
    // check(seasonAttributes, {
    //   seasonName: String
    // });
    var user = Meteor.user();

    // the _.extend() method is part of the Underscore library,
    //   and simply lets you "extend" one object with the properties of another
    var season = _.extend(_.pick(seasonAttributes,
      'leagueId',
      'regionId',
      'seasonName',
      'seasonStartDate',
      'seasonStatus',
      'seasonFee',
      'seasonSummary'
    ), {

      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var seasonId = Seasons.insert(season);

    return {
      _id: seasonId
    };
  },
  deleteSeason: function(seasonId) {
    console.log(seasonId);
    var loggedInUser = Meteor.user();
    if (!Roles.userIsInRole(loggedInUser, 'league')) {
      throw new Meteor.Error('not-authorized to delete this season');
    }

    Seasons.remove(seasonId);
  }
});
Seasons.allow({
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
