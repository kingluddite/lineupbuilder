Template.tRosterHistory.helpers({
  cFormerPlayers: function() {
    return Players.find({
      gameStatus: 'former'
    }, {
      sort: {
        firstName: 1
      }
    });
  },

  formerPlayersCount: function() {
    return Players.find({
      gameStatus: 'former'
    }).count();
  },

  sPlayerId: function() {
    Session.get('sPlayerId');
  }
});
