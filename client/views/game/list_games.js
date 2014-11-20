Template.tListGames.helpers({
  cGames: function() {
    return Games.find();
  },
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tListGames.events({
  'click .add': function(evt, tmpl) {
    console.log( 'test' );
    Session.set("sEditMode", true);
  },
  'mouseover li.game': function(evt, tmpl) {
    var gameId = this._id;
    Session.set('sGameId', gameId);
    var selectedGame = Session.get('sGameId');
  }
});