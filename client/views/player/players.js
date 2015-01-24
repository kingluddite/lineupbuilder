Template.tPlayer.helpers({
  sPlayerId: function() {
    return Session.get('sPlayerId');
  },
  cPlayer: function() {
    return Players.findOne({
      _id: Session.get('sPlayerId')
    });
  }
});
Template.tListPlayers.helpers({
  sTeamId: function() {
    return Session.get('sTeamId');
  },
  // grab the player id
  sPlayerId: function() {
    return Session.get('sPlayerId');
  },
  cPlayers: function() {
    return Players.find({
      teamId: Session.get('sTeamId')
    });
  },

  sEditMode: function() {
    return Session.get('sEditMode');
  },
  // highlight currently selected team
  selectedClass: function() {
    var selectedTeam = Session.get('sPlayerId');
    var playerId = this._id;
    if (selectedTeam === playerId) {
      return 'selected';
    }
  }
});

Template.tListPlayers.events({
  'click li.player': function() {
    var playerId = this._id;
    Session.set('sPlayerId', playerId);
  },
  'click .add': function() {
    Session.set('sEditMode', true);
  },
  'click .remove': function() {
    Session.set('sEditMode', false);
  }
});

Template.tAddPlayer.created = function() {
  Session.set('postSubmitErrors', {});
};

Template.tAddPlayer.helpers({
  // do I show only teams in the season?
  sTeams: function() {
    return Teams.find();
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

// adding events to our templates (duh!)
Template.tAddPlayer.events({
  'click .add': function() {
    Session.set('sEditMode', true);
  },
  'click .remove': function() {
    Session.set('sEditMode', false);
  },

  'submit form': function(evt) {
    evt.preventDefault();

    var player = {
      firstName: $(evt.target).find('[name=firstName]').val(),
      lastName: $(evt.target).find('[name=lastName]').val(),
      teamId: $(evt.target).find('[name=teamId]').val(),
      fieldPosition: $(evt.target).find('[name=fieldPosition]').val(),
      gameStatus: $(evt.target).find('[name=gameStatus]').val(),
      jerseyNumber: $(evt.target).find('[name=jerseyNumber]').val(),
      seasonFeeOwed: $(evt.target).find('[name=seasonFeeOwed]').val(),
      seasonFeePaid: $(evt.target).find('[name=seasonFeePaid]').val(),
      playerNotes: $(evt.target).find('[name=playerNotes]').val()
    };

    var errors = validatePlayer(player);
    if (errors.firstName) {
      return Session.set('postSubmitErrors', errors);
    }

    Meteor.call('addPlayer', player, function(error) {
      if (error) {
        // return alert(error.reason);
        return throwError(error.reason);
      }
    });

    Session.set('sEditMode', false);
  }
});

Template.tPlayer.helpers({
  // sLeagueId: function() {
  //   return Session.get('sLeagueId');
  // },
  // sRegionId: function() {
  //   return Session.get('sRegionId');
  // },
  // sSeasonId: function() {
  //   return Session.get('sSeasonId');
  // },
  // sTeamId: function() {
  //   return Session.get('sTeamId');
  // },
  // sPlayerId: function() {
  //   return Session.get('sPlayerId');
  // },

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
  cTeam: function() {
    return Teams.findOne({
      _id: Session.get('sTeamId')
    });
  }
});
