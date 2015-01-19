// grab all teams in this season
Template.tListTeams.helpers({
  sLeagueId: function() {
    return Session.get('sLeagueId');
  },
  sRegionId: function() {
    return Session.get('sRegionId');
  },
  sSeasonId: function() {
    return Session.get('sSeasonId');
  },
  cLeague: function() {
    return Leagues.findOne({
      _id: Session.get('sLeagueId')
    });
  },
  cRegion: function() {
    return Regions.findOne({
      _id: Session.get('sRegionId')
    });
  },
  cSeason: function() {
    return Seasons.findOne({
      _id: Session.get('sSeasonId')
    });
  },
  cTeams: function() {
    return Teams.find({
      seasonId: Session.get('sSeasonId')
    });
  },

  sEditMode: function() {
    return Session.get('sEditMode');
  },

  // grab the team id
  sTeamId: function() {
    return Session.get('sTeamId');
  },

  // highlight currently selected team
  selectedClass: function() {
    var selectedTeam = Session.get('sTeamId');
    var teamId = this._id;
    if (selectedTeam === teamId) {
      return 'selected';
    }
  }
});

Template.tListTeams.events({
  'click .add': function() {
    Session.set('sEditMode', true);
  },
  'mouseover li.team': function() {
    var teamId = this._id;
    Session.set('sTeamId', teamId);
  }
});

/* ADD TEAM */

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
  },
  sTeamEditMode: function() {
    return Session.get('sTeamEditMode');
  },
  sSeasonId: function() {
    return Session.get('sSeasonId');
  },
  sRegionId: function() {
    return Session.get('sRegionId');
  },
  sLeagueId: function() {
    return Session.get('sLeagueId');
  }
});

// adding events to our templates (duh!)
Template.tAddTeam.events({
  'click .cancel': function() {
    Session.set('sEditMode', false);
    Session.set('sTeamEditMode', false);
  },

  'submit form': function(evt) {
    evt.preventDefault();


    var team = {
      teamName: $(evt.target).find('[name=teamName]').val(),
      seasonId: $(evt.target).find('[name=seasonId]').val(),
      regionId: $(evt.target).find('[name=regionId]').val(),
      leagueId: $(evt.target).find('[name=leagueId]').val(),
      seasonDivison: $(evt.target).find('[name=seasonDivison]').val(),
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
    if (Session.get('sEditMode')) {
      Session.set('sEditmode', false);
    } else {
      Session.set('sTeamEditMode', false);
    }
  }
});

/* Details Team */
// all starting players in today's game
Template.tDetailTeam.helpers({
  cStarters: function() {
    return Players.find({
      gameStatus: {
        $in: ['starting']
      }
    }, {
      sort: {
        firstName: 1
      }
    });
  },

  // what is the players's id?
  sPlayerId: function() {
    return Session.get('sPlayerId');
  },
  playersOff: function() {

    return Players.find({
      gameStatus: 'out'
    }, {
      sort: {
        firstName: 1
      }
    });
  },
  gameDayRosterCount: function() {
    return Players.find({
      gameStatus: {
        $in: ['starting', 'sub']
      }
    }).count();
  },
  totalCurrentRoster: function() {
    return Players.find().count();
  }
});

/* edit team */
// get the team id
Template.tEditTeam.helpers({
  sTeamId: function() {
    return Session.get('sTeamId');
  }
});

Template.tEditTeam.events({
  // remove a team
  'click .remove': function(evt) {
    evt.preventDefault();

    // make sure you want to delete something
    if (confirm('Sure you want to delete this?')) {
      Meteor.call('deleteTeam', this._id);
    }
  },
  'click .edit': function() {
    Session.set('sTeamId', this._id);
    $('#team-modal-id').modal('show');
    setTimeout(function() {
      $('input[name="teamName"]').focus();
    }, 500);
    setTimeout(function() {
      $('input[name="teamName"]').select();
    }, 500);
  }
});
