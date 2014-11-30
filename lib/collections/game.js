/*jshint -W020 */
Games = new Mongo.Collection('games');

validateGame = function(game) {
  var errors = {};
  if (!game.homeTeamName) {
    errors.homeTeamName = 'What is the name of the Home team?';
  }
  if (!game.awayTeamName) {
    errors.url = 'What is the name of the Away team?';
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
  game: function(gameAttributes) {
    // check(Meteor.userId(), String);
    // check(gameAttributes, {
    //   // title: String,
    //   // url: String
    // });
    var user = Meteor.user();

    // ensure the user is logged in
    // if (!user) {
    //   throw new Meteor.Error(401, "You need to login to add new Games");
    // }

    // ensure the post has a title
    // if (!gameAttributes.gameDate) {
    //   throw new Meteor.Error(422, "Please provide a season name");
    // }

    // pick out the whitelisted keys
    // Those on the list will be accepted, approved or recognized
    var game = _.extend(_.pick(gameAttributes,
      'gameDate',
      'homeTeam',
      'awayTeam',
      'homeScore',
      'awayScore',
      'gameNotes'
    ), {

      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var gameId = Games.insert(game);

    return {
      _id: gameId
    };
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
