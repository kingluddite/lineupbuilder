Template.tRoster.cRoster = function() {
  return Players.find({
    gameStatus: {
      $in: ["starting", "sub"]
    }
  }, {
    sort: {
      firstName: 1
    }
  });
};

Template.tRoster.sPlayerId = function() {
  return Session.get('sPlayerId');
};

Template.tRoster.playersOff = function() {
  return Players.find({
    gameStatus: "out"
  }, {
    sort: {
      firstName: 1
    }
  });
};

Template.tRoster.helpers({

  gameDayRosterCount: function() {
    return Players.find({
      gameStatus: {
        $in: ["starting", "sub"]
      }
    }).count();
  },
  totalRoster: function() {
    return Players.find().count();
  }
});