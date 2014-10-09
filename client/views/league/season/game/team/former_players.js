Template.tFormerPlayers.cFormerPlayers = function() {
  return Players.find({
     gameStatus: "former"
  }, {
    sort: {
      firstName: 1
    }
  });
};
Template.tFormerPlayers.helpers({
  formerCount: function () {
    return Players.find({gameStatus: "former"}).count();
  }
});

Template.tFormerPlayers.sPlayerId = function() {
    Session.get("sPlayerId");
};
