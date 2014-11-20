Template.tAddSeason.helpers({
  cSeason: function() {
    return Seasons.find();
  },
  sEditMode: function() {
    return Session.get('sEditMode');
  },
  sLeagueId: function() {
    return Session.get('sLeagueId');
  },
  sRegionId: function() {
    return Session.get('sRegionId');
  }
});

Template.tAddSeason.events({
  'click .add': function(evt, tmpl) {
    // makes focus on first form work as it should
    setTimeout(function() {
      $('input[name="seasonName"]').focus();
    }, 500);
    Session.set("sEditMode", true);
  },

  'focus #datepicker': function() {
    $("#datepicker").datepicker();
  },

  'click .remove': function(evt, tmpl) {
    Session.set("sEditMode", false);
  },

  'submit form': function(evt) {
    evt.preventDefault();
    // validation rule
    // if season status is complete no games can be added
    // not started, started, playoffs, completed
    var season = {
      leagueId: $(evt.target).find('[name=leagueId]').val(),
      regionId: $(evt.target).find('[name=regionId]').val(),
      seasonName: $(evt.target).find('[name=seasonName]').val(),
      seasonStartDate: $(evt.target).find('[name=seasonStartDate]').val(),
      seasonStatus: $(evt.target).find('[name=seasonStatus]').val(),
      seasonDivision: $(evt.target).find('[name=seasonDivision]').val(),
      seasonSummary: $(evt.target).find('[name=seasonSummary]').val(),
    };
    /* Method.call function calls a Method named by its first argument.
        You can provide arguments to the call (we did with our 'season' object
        we constructed from the form), and finally attach a callback
        which will execute when the server-side Method is done.
        Meteor method callbacks ALWAYS have TWO ARGUMENTS (error and result)
        If there's an error we show it, if not we can redirect them with the
        Router.go('pageToGoTo', {_id: result._id})
    */
    Meteor.call('addSeason', season, function(error, result) {
      if (error) {
        // display the error to the user and abort
        return throwError(error.reason);
      }

      // if you wanted to go to another page after submitting
      // Router.go('pageYouWantToGoTo', {_id: result._id})
    });

    Session.set("sEditMode", false);
  }
});
