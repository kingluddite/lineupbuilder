/*jshint -W020 */
Games = new Mongo.Collection('games');

validateGame = function(game) {
  var errors = {};
  if (!game.homeTeamName) {
    errors.homeTeamName = 'What is the name of the Home team?';
  }
  if (!game.awayTeamName) {
    errors.awayTeamName = 'What is the name of the Away team?';
  }
  if (game.homeTeamName === game.awayTeamName) {
    errors.homeTeamName = 'A team can not play itself';
  }

  if (game.awayTeamName === game.homeTeamName) {
    errors.awayTeamName = 'A team can not play itself';
  }
  return errors;
};

Meteor.methods({
  addGame: function(gameAttributes) {

    var user = Meteor.user();

    // pick out the whitelisted keys
    // Those on the list will be accepted, approved or recognized
    var game = _.extend(_.pick(gameAttributes,
      'leagueId',
      'regionId',
      'seasonId',
      'gameTime',
      'gameDate',
      'gameNumber',
      'homeTeam',
      'homeTeamScore',
      'awayTeam',
      'awayTeamScore',
      'gameType',
      'gameStatus'
    ), {

      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var gameId = Games.insert(game);

    return {
      _id: gameId
    };
  },

  deleteGame: function(gameId) {
    var loggedInUser = Meteor.user();
    if (!Roles.userIsInRole(loggedInUser, 'league')) {
      throw new Meteor.Error('not-authorized to delete this game');
    }

    Games.remove(gameId);
  }
});

Games.allow({
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
