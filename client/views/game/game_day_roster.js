Template.tGameDayRoster.helpers({
  cRoster: function() {
    return Players.find({
      gameStatus: {
        $in: ["starting", "sub"]
      }
    }, {
      sort: {
        firstName: 1
      }
    });
  }
});

Template.tGameDayRoster.helpers({
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

Template.tGameDayRoster.sPlayerId = function() {
  return Session.get('sPlayerId');
};

Template.tGameDayRoster.playersOff = function() {
  return Players.find({
    gameStatus: "out"
  }, {
    sort: {
      firstName: 1
    }
  });
};

Template.tGameDayRoster.helpers({

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

Template.tSubs.helpers({
  cPlayer: function() {
    return Players.findOne({
      _id: Session.get("sPlayerId")
    });
  }
});

Template.tSubs.helpers({
  sPlayerId: function() {
    Session.get("sPlayerId");
  }
});

Template.tSubs.helpers({
  cPlayers: function() {
    // var currentUserId = Meteor.userId();
    return Players.find({
      // createdBy: currentUserId,
      gameStatus: "sub"
    }, {
      sort: {
        firstName: 1
      }
    });
  }
});

Template.tSubs.helpers({
  haveSubs: function() {
    if (Players.find({
        gameStatus: "sub"
      }).count() > 0) {
      return true;
    } else {
      return "no subs";
    }
  },
  subCount: function() {
    return Players.find({
      gameStatus: "sub"
    }).count();
  }
});

Template.tStartingLineup.helpers({
  cStarters: function () {
    return Players.find({
      gameStatus: "starting"
    }, {
      sort: {
        firstName: 1
      }
    });
  }
});

Template.tStartingLineup.helpers({
  sPlayerId: function () {
    return Session.get("sPlayerId");
  }
});

Template.tField.cPlayers = function() {
  return Players.find({
    gameStatus: "starting"
  });
};
