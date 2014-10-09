// note: session variables are not accessible to the template by default
// you have to explicitly associate them so...
// below is associating our sPlayerEdit session to this template
Template.tAddPlayer.sPlayerEdit = function() {
  return Session.get('sPlayerEdit');
};
Template.tAddPlayer.sPlayerId = function() {
  return Session.get('sPlayerId');
};

// adding events to our templates (duh!)
Template.tAddPlayer.events({
  // when someone clicks a class of player-add
  // set the session sPlayerEdit to true
  'click .player-add': function(evt, tmpl) {
    // makes focus on first form work as it should
  setTimeout(function() { $('input[name="firstName"]').focus(); }, 500);
    // $(evt.target).find('[name=frmAddPlayer]').first().focus();
    // if (Session.get("sPlayerEdit", false)) {
    Session.set("sPlayerEdit", true);
    // }

  },

  'submit form': function(evt) {
    evt.preventDefault();

    var player = {
      firstName: $(evt.target).find('[name=firstName]').val(),
      fieldPosition: $(evt.target).find('[name=fieldPosition]').val(),
      gameStatus: $(evt.target).find('[name=gameStatus]').val(),
      jerseyNumber: $(evt.target).find('[name=jerseyNumber]').val(),
      seasonFeeOwed: $(evt.target).find('[name=seasonFeeOwed]').val(),
      seasonFeePaid: $(evt.target).find('[name=seasonFeePaid]').val(),
      playerNotes: $(evt.target).find('[name=playerNotes]').val(),
    };

    Meteor.call('player', player, function(error, id) {
      if (error) {
        return alert(error.reason);
      }
      Router.go('playerPage', {_id: id});
    });


    Session.set("sPlayerEdit", false);

    // player._id = Players.insert(player); // we use a meteor call method instead of inserting directly into the Player's collection
  },

  'keyup .season-fee-paid': function(evt, tmpl) {
    // console.log(evt.which);
    if (evt.which === 13) {
      // note: the function has the evt object and template object
      // passed to it, the event object holds all the events (there's a lot)
      // the template object (tmpl) hold all the html elements in one big object
      // so you can refer to them and use them inside this function (like in the next line)
      //   grab the class of first-name, get the value inside text box and store
      // store that value inside the variable firstName
    var firstName = $('.first-name').val();
    var fieldPosition = $('.field-position').val();
    var gameStatus = $('.game-status').val();
    var jerseyNumber = $('.jersey-number').val();
    var seasonFeeOwed = $('.season-fee-owed').val();
    var seasonFeePaid = $('.season-fee-paid').val();
    var playerNotes = $('.player-notes').val();
      // set the session sPlayerEdit to false
      Session.set("sPlayerEdit", false);
      // call the addPlayer method (note below it is a variable that has a function tied to it)
      //  and pass the addPlayer method, the variable firstName (which remember..
      // hold whatever the user typed in the text box... the name of the player)
      addPlayer(firstName, fieldPosition, gameStatus, jerseyNumber, seasonFeeOwed, seasonFeePaid, playerNotes);
    }
  }
});

// here is the method called when the player-add class element is clicked
// it takes the firstName argument that was passed and stores it in its parameter
//   then the method takes the parameter value and uses MongoDb syntax
//   to insert the name into our collection (aka table)
var addPlayer = function(firstName, fieldPosition, gameStatus, jerseyNumber, seasonFeePaid, seasonFeeOwed, playerNotes) {
  Players.insert({
    firstName: firstName,
    fieldPosition: fieldPosition,
    gameStatus: gameStatus,
    jerseyNumber: jerseyNumber,
    seasonFeePaid: seasonFeePaid,
    seasonFeeOwed: seasonFeeOwed,
    playerNotes: playerNotes
  });
};
