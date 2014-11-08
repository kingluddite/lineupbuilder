// Template.tTeamRoster.cCurrentRoster = function() {
//   var currentUserId = Meteor.userId();
//   return Players.find({
//     gameStatus: {
//       $in: ["starting", "sub", "out", "noReply"]
//     }
//   },
//   {
//     createdBy: currentUserId
//   }, 
//   {
//     sort: {
//       firstName: 1
//     }
//   });
// };

// shows all players currently on the team
// Template.tTeamRoster.helpers({
      //   cTeamRoster: function() {
      //     var currentUserId = Meteor.userId();
      //     return Players.find({
      //       gameStatus: {
      //         $in: ["starting", "sub", "out", "noReply"]
      //       },
      //       {
      //         createdBy: currentUserId
      //       },
      //       {
      //         sort: {
      //           firstName: 1
      //         }
      //       }
      //     });
      //   }
      // });


// all starting players in today's game
// Template.tTeamRoster.cStarters = function() {
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

// all starting players in today's game
Template.tTeamRoster.helpers({
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

// Template.tTeamRoster.sPlayerId = function() {
//   return Session.get('sPlayerId');
// };

// what is the players's id?
Template.tTeamRoster.helpers({
  sPlayerId: function() {
    return Session.get('sPlayerId');
  }
});


Template.tTeamRoster.playersOff = function() {
  return Players.find({
    gameStatus: "out"
  }, {
    sort: {
      firstName: 1
    }
  });
};

// Template.tTeamRoster.helpers({
//   notPlaying: function() {
//     return Players.find({
//         gameStatus: "out"
//       }, {
//         sort: {
//           firstName: 1
//         }
//       }
//     });
// });

Template.tTeamRoster.helpers({

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
