Template.tModalPlayer.cPlayer = function() {
  return Players.findOne({
    _id: Session.get("sPlayerId")
  });
};

Template.tModalPlayer.cTeams = function() {
  return Teams.find();
};

Template.tModalPlayer.sPlayerId = function() {
  Session.get("sPlayerId");
};

Template.tAddPlayer.sPlayerEdit = function() {
  return Session.get('sPlayerEdit');
};



Template.tModalPlayer.events({
  'click .save-changes': function(evt, tmpl) {
    var firstName = $('.first-name').val();
    var gameStatus = $('.game-status').val();
    var fieldPosition = $('.field-position').val();
    var teamId = $('.team-name').val();
    var jerseyNumber = $('.jersey-number').val();
    var seasonFeeOwed = $('.season-fee-owed').val();
    var seasonFeePaid = $('.season-fee-paid').val();
    var gameNotes = $('.game-notes').val();
    updatePlayer(firstName, gameStatus, fieldPosition, teamId, jerseyNumber, seasonFeeOwed, seasonFeePaid, gameNotes);
    $("#modal-id").modal("hide");
    Session.set('sPlayerId', null);
    Session.set('sPlayerEdit', false);
  }
});

var updatePlayer = function(firstName, gameStatus, fieldPosition, teamId, jerseyNumber, seasonFeeOwed, seasonFeePaid, gameNotes) {
  Players.update(Session.get("sPlayerId"), {
    $set: {
      firstName: firstName,
      gameStatus: gameStatus,
      fieldPosition: fieldPosition,
      teamId: teamId,
      jerseyNumber: jerseyNumber,
      seasonFeeOwed: seasonFeeOwed,
      seasonFeePaid: seasonFeePaid,
      gameNotes: gameNotes
    }
  });

  return true;
};