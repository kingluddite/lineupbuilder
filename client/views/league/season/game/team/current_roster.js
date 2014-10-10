Template.tCurrentRoster.cCurrentRoster = function() {
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
Template.tCurrentRoster.cStarters = function() {
  return Players.find({
    gameStatus: {
      $in: ["starting"]
    }
  }, {
    sort: {
      firstName: 1
    }
  });
};

Template.tCurrentRoster.sPlayerId = function() {
  return Session.get('sPlayerId');
};

Template.tCurrentRoster.playersOff = function() {
  return Players.find({
    gameStatus: "out"
  }, {
    sort: {
      firstName: 1
    }
  });
};

Template.tCurrentRoster.helpers({

  gameDayRosterCount: function() {
    return Players.find({
      gameStatus: {
        $in: ["starting", "sub"]
      }
    }).count();
  },
  totalCurrentRoster: function() {
    return Players.find().count();
  }
});