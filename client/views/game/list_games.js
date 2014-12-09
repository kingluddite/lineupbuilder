Template.tListGames.helpers({
  sSeasonId: function() {
    return Session.get('sSeasonId');
  },
  cGames: function() {
    return Games.find({
      seasonId: Session.get('sSeasonId')
    }, {
      sort: {
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

  sLeagueId: function() {
    return Session.get('sSeasonId');
  },
  cLeague: function() {
    return Leagues.find(Session.get('sSeasonId'));
  },
  sRegionId: function() {
    return Session.get('sRegionId');
  },
  cRegion: function() {
    return Regions.find(Session.get('sRegionId'));
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
