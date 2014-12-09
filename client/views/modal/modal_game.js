Template.tModalGame.helpers({
  sEditMode: function() {
    return Session.get('sEditMode');
  },
  sSeasonId: function() {
    return Session.get('sSeasonId');
  },
  // show all teams in season in dropdown
  // sort teams in ascending order
  cTeams: function() {
    return Teams.find({
      seasonId: Session.get('sSeasonId')
    }, {
      sort: {
        teamName: 1
      }
    });
  },
  sGameId: function() {
    Session.get('sGameId');
  },
  cGame: function() {
    return Games.findOne({
      _id: Session.get('sGameId')
    });
  },
  cHomeTeam: function() {
    return Teams.findOne({
      _id: Session.get('sHomeTeamId')
    });
  },

  cAwayTeam: function() {
    return Teams.findOne({
      _id: Session.get('sAwayTeamId')
    });
  },
  // check all the teams in dropdown and compare their team id with the current
  //  home and away team id - if there's a match, output a 'selected' in the html dropdown
  whichHomeTeamSelected: function() {
    var currentHomeTeamId = Session.get('sHomeTeamId');
    if (this._id === currentHomeTeamId) {
      return 'selected';
    }
  },
  whichAwayTeamSelected: function() {
    var currentAwayTeamId = Session.get('sAwayTeamId');
    if (this._id === currentAwayTeamId) {
      return 'selected';
    }
  }
});

Template.tModalGame.events({

  'focus .datepicker': function() {
    $('.datepicker').datepicker();
  },
  'focus .clockpicker': function() {
    $('.clockpicker').clockpicker();
  },

  'submit form.updateGame': function(evt) {
    evt.preventDefault();

    var currentGameId = Session.get('sGameId');

    var gameProperties = {
      gameTime: $(evt.target).find('[name=gameTime]').val(),
      gameDate: $(evt.target).find('[name=gameDate]').val(),
      homeTeam: $(evt.target).find('[name=homeTeam]').val(),
      awayTeam: $(evt.target).find('[name=awayTeam]').val(),
      gameType: $(evt.target).find('[name=gameType]').val()
    };

    Games.update(currentGameId, {
      $set: gameProperties
    }, function(error) {
      if (error) {
        return throwError(error.reason);
      }
    });
    $('#game-modal-id').modal('hide');
    Session.set('sGameId', null);
    Session.set('sEditMode', false);
  }
});
