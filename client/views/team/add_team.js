Template.tAddTeam.helpers({
  sTeamId: function() {
    return Session.get('sTeamId');
  },
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

// adding events to our templates (duh!)
Template.tAddTeam.events({
  'click .add': function() {
    // makes focus on first form work as it should
    setTimeout(function() {
      $('input[name="teamName"]').focus();
    }, 500);
    Session.set('sEditMode', true);
  },

  'click .remove': function() {
    Session.set('sEditMode', false);
  },

  'submit form': function(evt) {
    evt.preventDefault();

    var team = {
      teamName: $(evt.target).find('[name=teamName]').val(),
      leagueId: $(evt.target).find('[name=teamName]').val()
    };

    Meteor.call('addTeam', team, function(error) {
      if (error) {
        // return alert(error.reason);
        return throwError(error.reason);
      }
      // Router.go('playerPage', {_id: id});
    });

    Session.set('sEditMode', false);
  }
});
