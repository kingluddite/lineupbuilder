// Template.tGameDayRoster.cRoster = function() {
//   return Players.find({
//     gameStatus: {
//       $in: ["starting", "sub"]
//     }
//   }, {
//     sort: {
//       firstName: 1
//     }
//   });
// };

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
// Template.tGameDayRoster.cStarters = function() {
//   return Players.find({
//     gameStatus: {
//       $in: ["starting"]
//     }
//   }, {
//     sort: {
//       firstName: 1
//     }
//   });
// };

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
