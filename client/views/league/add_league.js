Template.tAddLeague.helpers({
  cLeagues: function() {
    return Leagues.find();
  },

  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tAddLeague.events({
  'click .cancel': function(evt, tmpl) {
    Session.set("sEditMode", false);
  },
  'submit form': function(evt) {
    evt.preventDefault();

    var league = {
      leagueName: $(evt.target).find('[name=leagueName]').val(),
      leagueAdminFirstName: $(evt.target).find('[name=leagueAdminFirstName]').val(),
      leagueAdminLastName: $(evt.target).find('[name=leagueAdminLastName]').val(),
      leagueAdminEmail: $(evt.target).find('[name=leagueAdminEmail]').val(),
      leagueRegion: $(evt.target).find('[name=leagueRegion]').val(),
      leagueAdminPhone: $(evt.target).find('[name=leagueAdminEmail]').val(),
      leagueSummary: $(evt.target).find('[name=leagueSummary]').val(),
    };

    Meteor.call('addLeague', league, function(error, id) {
      if (error) {
        return alert(error.reason);
      } else {
        Session.set('sEditMode', false);
        Router.go('tDetailLeague', {
          _id: id
        });
      }

    });
  }
});
