Template.tRosterHistory.helpers({
  cFormerPlayers: function() {
    return Players.find({
      gameStatus: "former"
    }, {
      sort: {
        firstName: 1
      }
    })
  }
});

Template.tRosterHistory.helpers({
  formerPlayersCount: function() {
    return Players.find({
      gameStatus: "former"
    }).count();
  }
});

Template.tRosterHistory.helpers({
  sPlayerId: function() {
    Session.get("sPlayerId");
  }
});
