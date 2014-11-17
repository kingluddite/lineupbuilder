Seasons = new Mongo.Collection('seasons');

Meteor.methods({
  addSeason: function(postAttributes) {
    var user = Meteor.user();

    if (!user) {
      throw new Meteor.Error(401, "You need to login to add new seasons");
    }

    if (!postAttributes.seasonName) {
      throw new Meteor.Error(422, "Please provide a season name");
    }

    var season = _.extend(_.pick(postAttributes,
      'leagueId',
      'regionId',
      'seasonName',
      'seasonStartDate',
      'seasonStatus',
      'seasonSummary'
    ), {

      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    var seasonId = Seasons.insert(season);


    return seasonId;
  }
});
// Seasons.allow({
//   insert: function(userId, doc) {
//     // only allow posting if you are logged in
//     return !! userId;
//   },
//   update: function(userId, doc) {
//     return !! userId;
//   },
//   remove: function(userId, doc) {
//     return !! userId;
//   }
// });
