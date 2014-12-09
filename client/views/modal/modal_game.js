Template.tModalGame.helpers({
  sEditMode: function() {
    return Session.get('sEditMode');
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
  }
});

Template.tModalGame.events({
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
