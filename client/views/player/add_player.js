Template.tAddPlayer.helpers({
  sTeams: function() {
    return Teams.find();
  },
  sEditMode: function() {
    return Session.get('sEditMode');
  },
  sPlayerId: function() {
    return Session.get('sPlayerId');
  }
});

// adding events to our templates (duh!)
Template.tAddPlayer.events({
  'click .add': function(evt, tmpl) {
    // makes focus on first form work as it should
    setTimeout(function() {
      $('input[name="firstName"]').focus();
    }, 500);
    Session.set("sEditMode", true);
  },

  'click .remove': function(evt, tmpl) {
    Session.set("sEditMode", false);
  },

  'submit form': function(evt) {
    evt.preventDefault();

    var player = {
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

    Meteor.call('addPlayer', player, function(error, id) {
      if (error) {
        // return alert(error.reason);
        return throwError(error.reason);
      }
      // Router.go('playerPage', {
      //     _id: id
      // });
    });

    Session.set("sEditMode", false);
  }
});
