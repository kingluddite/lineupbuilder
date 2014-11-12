// for the teams dropdown
Template.tModalPlayer.cTeams = function() {
  return Teams.find();
};

// find the player primary key to populate the modal
Template.tModalPlayer.cPlayer = function() {
  return Players.findOne({
    _id: Session.get("sPlayerId")
  });
};

// give the template access to the primary key
Template.tModalPlayer.sPlayerId = function() {
  Session.get("sPlayerId");
};

// good session to have to show or hide the modal
Template.tModalPlayer.sPlayerEdit = function() {
  return Session.get('sPlayerEdit');
};

Template.tModalPlayer.events({
  'submit form.updatePlayer': function(evt) {
      evt.preventDefault();

      var currentPlayerId = this._id;
      console.log(currentPlayerId);
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
      Session.set('sPlayerEdit', false);
    }
});