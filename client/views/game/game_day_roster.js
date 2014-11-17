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
  },
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
  },
  sPlayerId: function() {
    return Session.get('sPlayerId');

  },
  playersOff: function() {
    return Players.find({
      gameStatus: "out"
    }, {
      sort: {
        firstName: 1
      }
    });
  },
  gameDayRosterCount: function() {
    return Players.find({
      gameStatus: {
        $in: ["starting", "sub"]
      }
    }).count();
  },
  totalRoster: function() {
    return Players.find().count();
  },
  cPlayer: function() {
    return Players.findOne({
      _id: Session.get("sPlayerId")
    });
  }


});

// Subs template
Template.tSubs.helpers({
  sPlayerId: function() {
    Session.get("sPlayerId");
  },
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
  },
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

// starting lineup template
Template.tStartingLineup.helpers({
  cStarters: function() {
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
  sPlayerId: function() {
    return Session.get("sPlayerId");
  }
});

// Template.tField.cPlayers = function() {
//   return Players.find({
//     gameStatus: "starting"
//   });
// };
