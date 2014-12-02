Template.tAddTeam.helpers({
  sTeamId: function() {
    return Session.get('sTeamId');
  },
  sLeagueId: function() {
    return Session.get('sLeagueId');
  },
  sSeasonId: function() {
    return Session.get('sSeasonId');
  },
  sRegionId: function() {
    return Session.get('sRegionId');
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
      $('input[name="teamname"]').focus();
    }, 500);
    Session.set('seditmode', true);
  },

  'click .cancel': function() {
    Session.set('seditmode', false);
  },

  'submit form': function(evt) {
    evt.preventdefault();

    var team = {
      teamName: $(evt.target).find('[name=teamName]').val(),
      leagueId: $(evt.target).find('[name=leagueId]').val(),
      regionId: $(evt.target).find('[name=regionId]').val(),
      seasonId: $(evt.target).find('[name=seasonId]').val(),
      aboutTeam: $(evt.target).find('[name=aboutTeam]').val()
    };

    Meteor.call('addTeam', team, function(error) {
      if (error) {
        // return alert(error.reason);
        return throwError(error.reason);
      }
      // router.go('playerpage', {_id: id});
    });

    Session.set('seditmode', false);
  }
});
