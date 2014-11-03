// find the player primary key to populate the modal
Template.tModalLeague.cLeague = function() {
  return Leagues.findOne({
    _id: Session.get("sLeagueId")
  });
};

// give the template access to the primary key
Template.tModalLeague.sLeagueId = function() {
  Session.get("sLeagueId");
};

// good session to have to show or hide the modal
Template.tModalLeague.sLeagueEdit = function() {
  return Session.get('sLeagueEdit');
};

Template.tModalLeague.events({
  'submit form.updateLeague': function(evt) {
      evt.preventDefault();

      var currentLeagueId = this._id;

      var leagueProperties = {
          leagueName: $(evt.target).find('[name=leagueName]').val(),
          leagueAdminFirstName: $(evt.target).find('[name=leagueAdminFirstName]').val(),
          leagueAdminLastName: $(evt.target).find('[name=leagueAdminLastName]').val(),
          leagueAdminEmail: $(evt.target).find('[name=leagueAdminEmail]').val(),
          leagueAdminPhone: $(evt.target).find('[name=leagueAdminPhone]').val(),
          leagueSummary: $(evt.target).find('[name=leagueSummary]').val(),
      };

      Leagues.update(currentLeagueId, {$set: leagueProperties}, function(error) {
        if (error) {
          alert(error.reason);
        } 
      });
      $("#league-modal-id").modal("hide");
      Session.set('sLeagueId', null);
      Session.set('sLeagueEdit', false);
    }
});