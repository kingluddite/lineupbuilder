Template.tModalPlayer.helpers({
  cTeams: function() {
    return Teams.find();
  },
  cPlayer: function() {
    return Players.findOne({
      _id: Session.get('sPlayerId')
    });
  },
  sPlayerId: function() {
    return Session.get('sPlayerId');
  },
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tModalPlayer.events({
  'submit form.updatePlayer': function(evt) {
    evt.preventDefault();

    var currentPlayerId = Session.get('sPlayerId');

    var playerProperties = {
      firstName: $(evt.target).find('[name=firstName]').val(),
      lastName: $(evt.target).find('[name=lastName]').val(),
      teamId: $(evt.target).find('[name=teamId]').val(),
      fieldPosition: $(evt.target).find('[name=fieldPosition]').val(),
      gameReminderStatus: $(evt.target).find('[name=gameReminderStatus]').val(),
      gameStatus: $(evt.target).find('[name=gameStatus]').val(),
      jerseyNumber: $(evt.target).find('[name=jerseyNumber]').val(),
      seasonFeeOwed: $(evt.target).find('[name=seasonFeeOwed]').val(),
      seasonFeePaid: $(evt.target).find('[name=seasonFeePaid]').val(),
      playerNotes: $(evt.target).find('[name=playerNotes]').val()
    };

    Players.update(currentPlayerId, {
      $set: playerProperties
    }, function(error) {
      if (error) {
        // return alert(error.reason);
        return throwError(error.reason);
      }
    });
    $('#modal-id').modal('hide');
    Session.set('sPlayerId', null);
    Session.set('sEditMode', false);
  }
});
