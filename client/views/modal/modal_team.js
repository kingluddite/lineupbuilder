Template.tModalTeam.helpers({
  cTeam: function() {
    return Teams.findOne({
      _id: Session.get('sTeamId')

    });
  },
  sTeamId: function() {
    Session.get('sTeamId');
  },
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tModalTeam.events({
  'submit form.updateTeam': function(evt) {
    evt.preventDefault();

    var currentTeamId = Session.get('sTeamId');

    var leagueProperties = {
      leagueName: $(evt.target).find('[name=leagueName]').val(),
      leagueAdminFirstName: $(evt.target).find('[name=leagueAdminFirstName]').val(),
      leagueAdminLastName: $(evt.target).find('[name=leagueAdminLastName]').val(),
      leagueAdminPhone: $(evt.target).find('[name=leagueAdminPhone]').val(),
      leagueSummary: $(evt.target).find('[name=leagueSummary]').val()
    };

    Leagues.update(currentTeamId, {
      $set: leagueProperties
    }, function(error) {
      if (error) {
        // return alert(error.reason);
        return throwError(error.reason);
      }
    });
    $('#league-modal-id').modal('hide');
    Session.set('sLeagueId', null);
    Session.set('sEditMode', false);
  }
});
