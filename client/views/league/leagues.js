Template.tListLeagues.helpers({
  cLeagues: function() {
    return Leagues.find();
  },
  sLeagueId: function() {
    return Session.get('sLeagueId');
  },
  // highlight currently selected team
  selectedClass: function() {
    var selectedLeague = Session.get('sLeagueId');
    var leagueId = this._id;
    if (selectedLeague === leagueId) {
      return 'selected';
    } else {
      return '';
    }
  }
});

Template.tListLeagues.events({
  'click li.league': function() {
    var leagueId = this._id;
    Session.set('sLeagueId', leagueId);
  }
});

Template.tAddLeague.created = function() {
  Session.set('postSubmitErrors', {});
};

Template.tAddLeague.helpers({
  cLeagues: function() {
    return Leagues.find();
  },

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

Template.tAddLeague.events({
  'click .cancel': function() {
    Session.set('sEditMode', false);
  },
  'click .add': function() {
    Session.set('sEditMode', true);
  },
  'submit form': function(evt) {

    evt.preventDefault();

    var league = {
      leagueName: $(evt.target).find('[name=leagueName]').val(),
      leagueAdminFirstName: $(evt.target).find('[name=leagueAdminFirstName]').val(),
      leagueAdminLastName: $(evt.target).find('[name=leagueAdminLastName]').val(),
      leagueAdminEmail: $(evt.target).find('[name=leagueAdminEmail]').val(),
      leagueSummary: $(evt.target).find('[name=leagueSummary]').val()
    };

    var errors = validateLeague(league);
    if (errors.leagueName) {
      return Session.set('postSubmitErrors', errors);
    }

    Meteor.call('addLeague', league, function(error, result) {
      if (error) {
        // return alert(error.reason);
        return throwError(error.reason);
      }
      if (result.postExists) {
        throwError('A league with this name already exists');
      }
      Session.set('sEditMode', false);
      // Router.go('tDetailLeague', {
      //   _id: _id
      // });
    });
  }
});

Template.tEditLeague.helpers({
  sLeagueId: function() {
    return Session.get('sLeagueId');
  }
});

// when someone edits or removes a league
Template.tEditLeague.events({
  'click .remove': function(evt) {
    evt.preventDefault();

    // make sure you want to delete something
    if (confirm('Delete this League?')) {
      // Session.set('sLeagueId', this._id);
      // removeLeague();

      Meteor.call('deleteLeague', this._id);

      // Session.set('sLeagueId', null);
    }
  },
  // when someone edits a league, open the modal winow, place the cursor in the first box and highlight the current placeholder content
  'click .edit': function() {
    // need access to session
    Session.set('sLeagueId', this._id);
    $('#league-modal-id').modal('show');
    setTimeout(function() {
      $('input[name="leagueName"]').focus();
    }, 500);
    setTimeout(function() {
      $('input[name="leagueName"]').select();
    }, 500);
  }
});
