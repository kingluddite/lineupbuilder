Seasons = new Mongo.Collection('seasons');

validateSeason = function(season) {
  var errors = {};
  if (!season.seasonName) {
    errors.seasonName = "Please provide a season name.";
  }
  return errors; 
};

Meteor.methods({
  addSeason: function(seasonAttributes) {
    check(Meteor.userId(), String);
    check(seasonAttributes, {
      title: String,
      url: String
    });
    var user = Meteor.user();

    // if (!user) {
    //   throw new Meteor.Error(401, "You need to login to add new seasons");
    // }

    // if (!postAttributes.seasonName) {
    //   throw new Meteor.Error(422, "Please provide a season name");
    // }
 
    // the _.extend() method is part of the Underscore library,
    //   and simply lets you "extend" one object with the properties of another
    var season = _.extend(_.pick(seasonAttributes,
      'leagueId',
      'regionId',
      'seasonName',
      'seasonStartDate',
      'seasonStatus',
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
    // return seasonId;
  }
});
Seasons.allow({
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
