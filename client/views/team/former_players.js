// Template.tFormerPlayers.cFormerPlayers = function() {
//   return Players.find({
//     gameStatus: "former"
//   }, {
//     sort: {
//       firstName: 1
//     }
//   });
// };

Template.tFormerPlayers.helpers({
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
Template.tFormerPlayers.helpers({
  formerPlayersCount: function() {
    return Players.find({
      gameStatus: "former"
    }).count();
  }
});

// Template.tFormerPlayers.sPlayerId = function() {
//     Session.get("sPlayerId");
// };

Template.tFormerPlayers.helpers({
  sPlayerId: function() {
    Session.get("sPlayerId");
  }
});
