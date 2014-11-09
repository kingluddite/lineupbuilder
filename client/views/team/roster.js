// all starting players in today's game
Template.tRoster.helpers({
  cStarters: function() {
    return Players.find({
      gameStatus: {
        $in: ["starting"]
      }
    }, {
      sort: {
        firstName: 1
      }
    });
  }
});

// what is the players's id?
Template.tRoster.helpers({
  sPlayerId: function() {
    return Session.get('sPlayerId');
  }
});


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
  totalCurrentRoster: function() {
    return Players.find().count();
  }
});
