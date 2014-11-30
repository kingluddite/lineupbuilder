Template.tListGames.helpers({
  cGames: function() {
    return Games.find();
  },
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tListGames.events({
  'click .add': function() {
    Session.set('sEditMode', true);
  },
  'mouseover li.game': function() {
    var gameId = this._id;
    Session.set('sGameId', gameId);
    // var selectedGame = Session.get('sGameId');
  }
});
