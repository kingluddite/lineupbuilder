Template.tCivitas.helpers({
  playersOweThisAmount: function() {
    var total = 0;
    Players.find({teamId: "WSNoNmbiT63pxxLr4"}).map(function(doc) {
    total += Number(doc.seasonFeeOwed);
  });
    return total;
  },
  playersPaidThisAmount: function() {
    var total = 0;
    Players.find({teamId: "WSNoNmbiT63pxxLr4"}).map(function(doc) {
    total += Number(doc.seasonFeePaid);
  });
    return total;
  }
});

// UI.registerHelper('sumSeasonFeeOwed', function(theEvent, theTemplate) {
//   var total = 0;
//   // console.log(teamId);
//   Players.find({teamId: "WSNoNmbiT63pxxLr4"}).map(function(doc) {
//     total += doc.seasonFeeOwed;
//     return total;
//   });
// });