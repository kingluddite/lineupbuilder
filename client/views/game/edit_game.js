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
