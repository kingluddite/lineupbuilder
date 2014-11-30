Template.tAddGame.helpers({
  cTeams: function() {
    return Teams.find();
  },
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tAddGame.events({

  'focus .datepicker': function() {
    $('.datepicker').datepicker();
  },
  'focus .clockpicker': function() {
    $('.clockpicker').clockpicker();
  }
});

Template.tAddGame.events({
  'click .cancel': function() {
    Session.set('sEditMode', false);
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
      leagueSummary: $(evt.target).find('[name=leagueSummary]').val()
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
      // Router.go('tDetailLeague', {
      //   _id: id
      // });

    });
  }
});
