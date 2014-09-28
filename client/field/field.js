// we have a template called tAddPlayer
// we are adding a variable called players to that template
// the players variable is holding an object
// we are attaching a function to that object
//    that will return all of the players in our Players Collection (table)
Template.tField.cPlayers = function() {
  return Players.find({
    gameStatus: "starting"
  });
};

Template.tField.helpers({
    moneyOwed: function(evt, tmpl) {
      var totalFeesStillOwed = this.seasonFeeOwed - this.seasonFeePaid;
      if (totalFeesStillOwed > 0) {
        return "$" + totalFeesStillOwed;
      }
    }
});

// when someone clicks on a class of remove-name
// set the session 'sPlayerId' to the id of that record
// call the remove method
// note: use of this, refers to context of the collection
//   when you use handlebars and a collection object
//     with an each statement, this will refer to that particular
//     record (this._id...... grabs the unique id)
Template.tField.events({
  'click .remove-name': function(evt, tmpl) {
    Session.set('sPlayerId', this._id);
    removePlayer();
  },
  'click .player-edit': function(evt, tmpl) {
    Session.set('sShowModal', true);
    console.log('yo');
  }
});

// use Mongo to remove the record by passing it the primary key
// of the player's record (unique id every single record has)
// result: should remove the player from the list (and obviously)
//   the collection
var removePlayer = function() {
  Players.remove({
    _id: Session.get('sPlayerId')
  });
};
