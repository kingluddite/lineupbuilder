Template.tListSeasons.helpers({
  sRegionId: function() {
    return Session.get('sRegionId');
  },
  cSeasons: function() {
    //return Seasons.find();
    return Seasons.find({
      regionId: Session.get('sRegionId')
    });
  },

  sEditMode: function() {
    return Session.get('sEditMode');
  },
  cRegion: function() {
    return Regions.findOne({
      _id: Session.get('sRegionId')
    });
  },

  sLeagueId: function() {
    return Session.get('sLeagueId');
  },

  cLeague: function() {
    return Leagues.findOne({
      _id: Session.get('sLeagueId')
    });
  },

  sSeasonId: function() {
    return Session.get('sSeasonId');
  },

  // highlight currently selected item
  selectedClass: function() {
    var selectedSeason = Session.get('sSeasonId');
    var seasonId = this._id;
    if (selectedSeason === seasonId) {
      return 'selected';
    } else {
      return '';
    }
  }

});

Template.tListSeasons.events({
  'click .add': function() {
    Session.set('sEditMode', true);
  },
  'mouseover li.season': function() {
    var seasonId = this._id;
    Session.set('sSeasonId', seasonId);
  }
});

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
  'click .add': function() {
    // makes focus on first form work as it should
    setTimeout(function() {
      $('input[name="seasonName"]').focus();
    }, 500);
    Session.set('sEditMode', true);
  },

  'focus #datepicker': function() {
    $('#datepicker').datepicker();
  },

  'click .remove': function() {
    Session.set('sEditMode', false);
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
      seasonFee: $(evt.target).find('[name=seasonFee]').val(),
      seasonSummary: $(evt.target).find('[name=seasonSummary]').val()
    };
    /* Method.call function calls a Method named by its first argument.
        You can provide arguments to the call (we did with our 'season' object
        we constructed from the form), and finally attach a callback
        which will execute when the server-side Method is done.
        Meteor method callbacks ALWAYS have TWO ARGUMENTS (error and result)
        If there's an error we show it, if not we can redirect them with the
        Router.go('pageToGoTo', {_id: result._id})
    */
    Meteor.call('addSeason', season, function(error) {
      if (error) {
        // display the error to the user and abort
        return throwError(error.reason);
      }
    });

    Session.set('sEditMode', false);
  }
});

Template.tEditSeason.helpers({
  sSeasonId: function() {
    return Session.get('sSeasonId');
  }
});

// when someone edits or removes aSeason 
Template.tEditSeason.events({
  'click .remove': function(evt) {
    evt.preventDefault();

    // make sure you want to delete something
    if (confirm('Delete this Season?')) {
      Meteor.call('deleteSeason', this._id);
    }
  },
  // when someone edits a Season, open the modal winow, place the cursor in the first box and highlight the current placeholder content
  'click .edit': function() {

    // need access to session
    Session.set('sSeasonId', this._id);
    $('#season-modal-id').modal('show');
    setTimeout(function() {
      $('input[name="seasonName"]').focus();
    }, 500);
    setTimeout(function() {
      $('input[name="seasonName"]').select();
    }, 500);
  }
});
