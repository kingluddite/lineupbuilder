Games = new Meteor.Collection('games');

Meteor.methods({
  game: function(postAttributes) {
    var user = Meteor.user();

      // ensure the user is logged in
      if (!user) {
        throw new Meteor.Error(401, "You need to login to add new Games");
      }

      // ensure the post has a title
      if (!postAttributes.gameDate) {
        throw new Meteor.Error(422, "Please provide a season name");
      }

      // pick out the whitelisted keys
      // Those on the list will be accepted, approved or recognized
      var game = _.extend(_.pick(postAttributes, 'gameDate, homeTeam, awayTeam, homeScore, awayScore, gameNotes'), 
      {

        userId: user._id,
        author: user.username,
        submitted: new Date().getTime()
      });

      var gameId = Games.insert(game);

      return gameId;
  }
});

Games.allow({
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