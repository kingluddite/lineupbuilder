/**/

// compare mongodb and sql - http://docs.mongodb.org/manual/reference/sql-comparison/
Template.tListGames.helpers({
  sLeagueId: function() {
    return Session.get('sLeagueId');
  },
  sRegionId: function() {
    return Session.get('sRegionId');
  },
  sSeasonId: function() {
    return Session.get('sSeasonId');
  },
  sTeamId: function() {
    return Session.get('sTeamId');
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
  cTeam: function() {
    return Teams.findOne({
      _id: Session.get('sTeamId')
    });
  },

  // all teams in dropdown when a team is
  //  selected only that season will appear
  cTeams: function() {
    return Teams.find({
      seasonId: Session.get('sSeasonId')
    });
  },

  cGames: function() {
    // compare mongodb and sql - http://docs.mongodb.org/manual/reference/sql-comparison/
    return Games.find({
      $or: [{
        homeTeam: Session.get('sTeamId')
      }, {
        awayTeam: Session.get('sTeamId')
      }]
    }, {
      sort: {
        gameNumber: 1,
        gameDate: 1,
        gameTime: 1
      }
    });

  },
  // you need to show the team name and not the id
  // so you have to search the teams collection
  // and pass the id stored in the games collection
  // under awayTeam
  cAwayTeam: function() {
    return Teams.findOne({
      _id: this.awayTeam
    });
  },
  cHomeTeam: function() {
    return Teams.findOne({
      _id: this.homeTeam
    });
  },

  didHomeTeamWin: function() {
    if (this.homeTeamScore > this.awayTeamScore) {
      return 'winner';
    }
  },

  // find out if away team won
  //   need to test this more to make sure string
  //   comparison works in many different scenarios
  //   do testing for home team score as well
  didAwayTeamWin: function() {
    if (this.awayTeamScore > this.homeTeamScore) {
      return 'winner';
    }
  },
  // style will have a white bg if game not played
  //   and a gray bg it it has been played
  gameResultStyle: function() {
    if (this.gameStatus === 'to_be_played') {
      return 'upcoming';
    } else if (this.gameStatus === 'played') {
      return 'complete';
    } else {
      return '';
    }
  },

  gameStatusPretty: function() {
    if (this.gameStatus === 'to_be_played') {
      return 'TBD';
    } else if (this.gameStatus === 'played') {
      return 'FT';
    } else {
      return '?';
    }
  },

  sEditMode: function() {
    return Session.get('sEditMode');
  },
  // have 2 buttons on season games page and want to show two forms
  sTeamEditMode: function() {
    return Session.get('sTeamEditMode');
  }
});

Template.tListGames.events({
  'click .add': function() {
    Session.set('sEditMode', true);
  },
  'click .dd-team-name': function() {
    var teamId = this._id;
    Session.set('sTeamId', teamId);
    //console.log(this._id);
  },

  'click .player': function() {
    var playerId = this._id;
    Session.set('sPlayerId', playerId);
  },
  // if either the home or away team is clicked (this and next event handler)
  //  we capture the team id and store it in the session
  //  then in our pathFor we call the tGames template
  //  which uses the sTeamId to query the Games collection
  //  and return the result set from either the home or away team
  //  had problems with this code and it took awhile to sort out
  //  the problem arose from context. I was previously using the
  //  team collection which capturing the team id was easier because
  //  it was simply a property of teamId but in the Games collection
  //  it was a bit trickier because we had two properties to sort out
  //  for teamId and they were homeTeamName (an ID) and awayTeamName (also an ID)
  //  the solution came by adding a home or away class in the tGamesList Template
  //  and creating an event handler for either event scenario
  'click .team-name.home': function() {
    var teamId = this.homeTeam;
    Session.set('sTeamId', teamId);
  },
  'click .team-name.away': function() {
    var teamId = this.awayTeam;
    Session.set('sTeamId', teamId);
  },
  // when the add team button is clicked set the session to true
  'click .add-team': function() {
    Session.set('sTeamEditMode', true);
  },
  'mouseover li.game': function() {
    var gameId = this._id;
    Session.set('sGameId', gameId);
    // var selectedGame = Session.get('sGameId');
  }
});

Template.tAddGame.helpers({
  cTeams: function() {
    return Teams.find({
      seasonId: Session.get('sSeasonId')
    }, {
      sort: {
        teamName: 1
      }
    });
  },
  sEditMode: function() {
    return Session.get('sEditMode');
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

Template.tAddGame.events({
  'focus .datepicker': function() {
    $('.datepicker').datepicker('option', 'dateFormat', 'yyyy-mm-dd');
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

    var game = {
      leagueId: $(evt.target).find('[name=leagueId]').val(),
      seasonId: $(evt.target).find('[name=seasonId]').val(),
      regionId: $(evt.target).find('[name=regionId]').val(),
      gameTime: $(evt.target).find('[name=gameTime]').val(),
      gameDate: $(evt.target).find('[name=gameDate]').val(),
      gameNumber: Number($(evt.target).find('[name=gameNumber]').val()),
      homeTeam: $(evt.target).find('[name=homeTeam]').val(),
      // we need all the scores to be numbers
      // not strings (default value when coming from
      // html input objects)
      homeTeamScore: Number($(evt.target).find('[name=homeTeamScore]').val()),
      awayTeam: $(evt.target).find('[name=awayTeam]').val(),
      awayTeamScore: Number($(evt.target).find('[name=awayTeamScore]').val()),
      gameType: $(evt.target).find('[name=gameType]').val(),
      gameStatus: $(evt.target).find('[name=gameStatus]').val()
        // gameResult: Number($(evt.target).find('[name=gameResult]').val())
    };

    var errors = validateGame(game);
    if (errors.gameTime || errors.gameDate || errors.gameNumber) {
      return Session.set('postSubmitErrors', errors);
    }

    Meteor.call('addGame', game, function(error, result) {
      if (error) {
        // return alert(error.reason);
        return throwError(error.reason);
      }
      if (result.postExists) {
        throwError('This link has already been posted');
      }
      Session.set('sEditMode', false);

    });
  }
});

Template.tEditGame.helpers({
  sLeagueId: function() {
    return Session.get('sLeagueId');
  },
  // you need to show the team name and not the id
  // so you have to search the teams collection
  // and pass the id stored in the games collection
  // under awayTeam
  cAwayTeam: function() {
    return Teams.findOne({
      _id: Games.findOne({
        _id: Session.get('sGameId')
      })
    });
  },
  cHomeTeam: function() {
    return Teams.findOne({
      _id: this.homeTeam
    });
  }

});

// when someone edits or removes a league
Template.tEditGame.events({
  'click .remove': function(evt) {
    evt.preventDefault();

    // make sure you want to delete something
    if (confirm('Delete this Game?')) {
      Meteor.call('deleteGame', this._id);
    }
  },
  // when someone edits a league, open the modal winow, place the cursor in the first box and highlight the current placeholder content
  'click .edit': function() {
    // need access to session
    Session.set('sHomeTeamId', this.homeTeam);
    Session.set('sAwayTeamId', this.awayTeam);
    Session.set('sGameId', this._id);
    // var homeTeam = Teams.findOne(Session.get('sHomeTeamId'));
    // var awayTeam = Teams.findOne(Session.get('sAwayTeamId'));
    var currentGame = Games.findOne(Session.get('sGameId'));
    // // make dropdown equal to the current value in the collection record
    $('.game-type').val(currentGame.gameType);
    $('.game-status').val(currentGame.gameStatus);
    $('#game-modal-id').modal('show');
  }
});
