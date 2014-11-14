Template.tModalPlayer.helpers({
  cTeams: function () {
    return Teams.find();
  }
});

Template.tModalPlayer.helpers({
  cPlayer: function () {
    return Players.findOne({
      _id: Session.get("sPlayerId")
    });
  }
});

Template.tModalPlayer.helpers({
  sPlayerId: function () {
    return Session.get("sPlayerId");
  }
});

Template.tModalPlayer.helpers({
  sEditMode: function () {
    return Session.get('sEditMode');
  }
});

Template.tModalPlayer.events({
  'submit form.updatePlayer': function(evt) {
      evt.preventDefault();
      
      var currentPlayerId = Session.get("sPlayerId");
      

      var playerProperties = {
          firstName: $(evt.target).find('[name=firstName]').val(),
          lastNameInitial: $(evt.target).find('[name=lastNameInitial]').val(),
          teamId: $(evt.target).find('[name=teamId]').val(),
          fieldPosition: $(evt.target).find('[name=fieldPosition]').val(),
          gameStatus: $(evt.target).find('[name=gameStatus]').val(),
          jerseyNumber: $(evt.target).find('[name=jerseyNumber]').val(),
          seasonFeeOwed: $(evt.target).find('[name=seasonFeeOwed]').val(),
          seasonFeePaid: $(evt.target).find('[name=seasonFeePaid]').val(),
          playerNotes: $(evt.target).find('[name=playerNotes]').val(),
      };

      Players.update(currentPlayerId, {$set: playerProperties}, function(error) {
        if (error) {
          alert(error.reason);
        } 
      });
      $("#modal-id").modal("hide");
      Session.set('sPlayerId', null);
      Session.set('sEditMode', false);
    }
});