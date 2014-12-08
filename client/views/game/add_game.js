Template.tAddGame.helpers({
  cTeams: function() {
    return Teams.find({
      seasonId: Session.get('sSeasonId')
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

    var game = {
      leagueId: $(evt.target).find('[name=leagueId]').val(),
      seasonId: $(evt.target).find('[name=seasonId]').val(),
      regionId: $(evt.target).find('[name=regionId]').val(),
      gameTime: $(evt.target).find('[name=gameTime]').val(),
      gameDate: $(evt.target).find('[name=gameDate]').val(),
      gameNumber: $(evt.target).find('[name=gameNumber]').val(),
      homeTeam: $(evt.target).find('[name=homeTeam]').val(),
      awayTeam: $(evt.target).find('[name=awayTeam]').val(),
      gameType: $(evt.target).find('[name=gameType]').val()
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
