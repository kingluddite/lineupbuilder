// Template.gameDayRoster.rendered = function() {
        //     $("#listOfAvailablePlayers li").draggable({
        //         appendTo: "body",
        //         helper: "clone"
        //     });
        // };

        // Template.starters.rendered = function() {
        //     $("#myStarters ul").droppable({
        //         activeClass: "ui-state-default",
        //         hoverClass: "ui-state-hover",
        //         accept: ":not(.ui-sortable-helper)",
        //         drop: function(event, ui) {
        //             console.log('dropped');
        //             $(this).find(".placeholder").remove();
        //             $("<li></li>").text(ui.draggable.text()).appendTo(this);
        //         }
        //     });
        // };




Template.tCivitas.helpers({
  playersOweThisAmount: function() {
    var total = 0;
    Players.find({
      teamId: "WSNoNmbiT63pxxLr4"
    }).map(function(doc) {
      total += Number(doc.seasonFeeOwed);
    });
    return total;
  },
  playersPaidThisAmount: function() {
    var total = 0;
    Players.find({
      teamId: "WSNoNmbiT63pxxLr4"
    }).map(function(doc) {
      total += Number(doc.seasonFeePaid);
    });
    return total;
  }
})

// UI.registerHelper('sumSeasonFeeOwed', function(theEvent, theTemplate) {
//   var total = 0;
//   // console.log(teamId);
//   Players.find({teamId: "WSNoNmbiT63pxxLr4"}).map(function(doc) {
//     total += doc.seasonFeeOwed;
//     return total;
//   });
// });
