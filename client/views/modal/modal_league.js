Template.tModalLeague.helpers({
  cLeague: function() {
    return Leagues.findOne({
      _id: Session.get('sLeagueId')

    });
  },
  sLeagueId: function() {
    Session.get('sLeagueId');
  },
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tModalLeague.events({
  'submit form.updateLeague': function(evt) {
    evt.preventDefault();

    var currentLeagueId = Session.get('sLeagueId');

    var leagueProperties = {
      leagueName: $(evt.target).find('[name=leagueName]').val(),
      leagueAdminFirstName: $(evt.target).find('[name=leagueAdminFirstName]').val(),
      leagueAdminLastName: $(evt.target).find('[name=leagueAdminLastName]').val(),
      leagueAdminPhone: $(evt.target).find('[name=leagueAdminPhone]').val(),
      leagueSummary: $(evt.target).find('[name=leagueSummary]').val()
    };

    Leagues.update(currentLeagueId, {
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
