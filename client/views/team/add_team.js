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
  }
});

// adding events to our templates (duh!)
Template.tAddTeam.events({
  'click .cancel': function() {
    Session.set('sEditMode', false);
  },

  'submit form': function(evt) {
    console.log('you');
    evt.preventDefault();

    var team = {
      teamName: $(evt.target).find('[name=teamName]').val(),
      seasonId: $(evt.target).find('[name=seasonId]').val(),
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

    Session.set('sEditmode', false);

  }
});
