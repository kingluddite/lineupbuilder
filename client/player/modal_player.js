Template.tModalPlayer.cPlayer = function() {
  return Players.findOne({
    _id: Session.get("sPlayerId")
  });
};

Template.tModalPlayer.sPlayerId = function() {
  Session.get("sPlayerId");
};

// getting drop downs to populate properly
// var dropdownMenu = function() {
//   console.log( this.findAll );
//   var player = Players.findOne({
//     _id: Session.get('sPlayerId')
//   });
//   // $('.game-status').val(player.gameStatus);
// };


Template.tModalPlayer.events({
  'click .save-changes': function(evt, tmpl) {
    var firstName = $('.first-name').val();
    var gameStatus = $('.game-status').val();
    var fieldPosition = $('.field-position').val();
    var gerseyNumber = $('.gersey-number').val();
    var seasonFeeOwed = $('.season-fee-owed').val();
    var seasonFeePaid = $('.season-fee-paid').val();
    updatePlayer(firstName, gameStatus, fieldPosition, gerseyNumber, seasonFeeOwed, seasonFeePaid);
    $("#modal-id").modal("hide");
    Session.set('sPlayerId', null);
  }
});

var updatePlayer = function(firstName, gameStatus, fieldPosition, gerseyNumber, seasonFeeOwed, seasonFeePaid) {
  Players.update(Session.get("sPlayerId"), {
    $set: {
      firstName: firstName,
      gameStatus: gameStatus,
      fieldPosition: fieldPosition,
      gerseyNumber: gerseyNumber,
      seasonFeeOwed: seasonFeeOwed,
      seasonFeePaid: seasonFeePaid
    }
  });

  return true;
}

var removeProject = function() {
  Projects.remove({
    _id: Session.get('editing_project')
  });
};
