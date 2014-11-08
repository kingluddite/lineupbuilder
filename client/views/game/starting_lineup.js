// Template.tStartingLineup.cStarters = function() {
//   return Players.find({
//     gameStatus: "starting"
//   }, {
//     sort: {
//       firstName: 1
//     }
//   });
// };

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

// Template.tStartingLineup.sPlayerId = function() {
//     return Session.get("sPlayerId");
// };

Template.tStartingLineup.helpers({
  sPlayerId: function () {
    return Session.get("sPlayerId");
  }
});