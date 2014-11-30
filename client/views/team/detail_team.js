// all starting players in today's game
Template.tRoster.helpers({
  cStarters: function() {
    return Players.find({
      gameStatus: {
        $in: ['starting']
      }
    }, {
      sort: {
        firstName: 1
      }
    });
  },

  // what is the players's id?
  sPlayerId: function() {
    return Session.get('sPlayerId');
  },
  playersOff: function() {

    return Players.find({
      gameStatus: 'out'
    }, {
      sort: {
        firstName: 1
      }
    });
  },
  gameDayRosterCount: function() {
    return Players.find({
      gameStatus: {
        $in: ['starting', 'sub']
      }
    }).count();
  },
  totalCurrentRoster: function() {
    return Players.find().count();
  }
});
