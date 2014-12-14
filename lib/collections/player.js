/*jshint -W020 */
Players = new Mongo.Collection('players');

validatePlayer = function(player) {
  var errors = {};
  if (!player.firstName) {
    errors.firstName = 'Please provide a player name.';
  }
  return errors;
};

Meteor.methods({
  addPlayer: function(playerAttributes) {
    var user = Meteor.user();

    var errors = validatePlayer(playerAttributes);
    if (errors.firstName) {
      throw new Meteor.Error('invalid', 'You must provide a player first name');
    }
    // pick out the whitelisted keys
    // Those on the list will be accepted, approved or recognized


    var player = _.extend(_.pick(playerAttributes, 'firstName', 'lastName', 'teamId', 'fieldPosition', 'teamId', 'gameStatus', 'jerseyNumber', 'seasonFeeOwed', 'seasonFeePaid', 'playerNotes'), {

      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var playerId = Players.insert(player);

    return {
      _id: playerId
    };
  },

  deletePlayer: function(playerId) {
    var loggedInUser = Meteor.user();
    if (!Roles.userIsInRole(loggedInUser, 'league')) {
      throw new Meteor.Error('not-authorized to delete this player');
    }
    Players.remove(playerId);
  }
});

// Players.allow({
//   insert: function(userId, doc) {
//     // only allow posting if you are logged in
//     return ownsDocument(userId, doc);
//   },
//   update: function(userId, doc) {
//     return ownsDocument(userId, doc);
//   },
//   remove: function(userId, doc) {
//     return ownsDocument(userId, doc);
//   }
// });
