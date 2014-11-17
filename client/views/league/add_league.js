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

        var errors = validatePost(league);
        if (errors.title || errors.url) {
          return Session.set('postSubmitErrors', errors);
        }

        Meteor.call('addLeague', league, function(error, result) {
          if (error) {
            // return alert(error.reason);
            return throwError(error.reason);
          }
          console.log(result);
          if (result.postExists) {
            throwError('This link has already been posted');
          }
          Session.set('sEditMode', false);
          Router.go('tDetailLeague', {
            _id: id
          });
        });
      }
    });
