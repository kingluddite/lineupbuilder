Template.tAddTeam.created = function() {
  Session.set('postSubmitErrors', {});
};


Template.tAddTeam.helpers({
  errorMessage: function(field) {
    return Session.get('postSubmitErrors')[field];
  },

  errorClass: function(field) {
    return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
  },


  sEditMode: function() {
    return Session.get('sEditMode');
  },
  sTeamEditMode: function() {
    return Session.get('sTeamEditMode');
  },
  sSeasonId: function() {
    return Session.get('sSeasonId');
  },
  sRegionId: function() {
    return Session.get('sRegionId');
  },
  sLeagueId: function() {
    return Session.get('sLeagueId');
  }
});

// adding events to our templates (duh!)
Template.tAddTeam.events({
  'click .cancel': function() {
    Session.set('sEditMode', false);
    Session.set('sTeamEditMode', false);
  },

  'submit form': function(evt) {
    evt.preventDefault();


    var team = {
      teamName: $(evt.target).find('[name=teamName]').val(),
      seasonId: $(evt.target).find('[name=seasonId]').val(),
      regionId: $(evt.target).find('[name=regionId]').val(),
      leagueId: $(evt.target).find('[name=leagueId]').val(),
      seasonDivison: $(evt.target).find('[name=seasonDivison]').val(),
      aboutTeam: $(evt.target).find('[name=aboutTeam]').val()
    };
    var errors = validateTeam(team);
    if (errors.teamName) {
      return Session.set('postSubmitErrors', errors);
    }
    Meteor.call('addTeam', team, function(error) {

      if (error) {
        // return alert(error.reason);
        return throwError(error.reason);
      }
    });
    if (Session.get('sEditMode')) {
      Session.set('sEditmode', false);
    } else {
      Session.set('sTeamEditMode', false);
    }
  }
});
