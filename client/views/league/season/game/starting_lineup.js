Template.tStartingLineup.cStarters = function() {
  return Players.find({
    gameStatus: "starting"
  }, {
    sort: {
      firstName: 1
    }
  });
};

Template.tStartingLineup.sPlayerId = function() {
    return Session.get("sPlayerId");
};