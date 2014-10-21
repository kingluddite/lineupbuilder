// for the teams dropdown
Template.tModalPlayer.cTeams = function() {
  return Teams.find();
};

// find the player primary key to populate the modal
Template.tModalPlayer.cPlayer = function() {
  return Players.findOne({
    _id: Session.get("sPlayerId")
  });
};

// give the template access to the primary key
Template.tModalPlayer.sPlayerId = function() {
  Session.get("sPlayerId");
};

// good session to have to show or hide the modal
Template.tAddPlayer.sPlayerEdit = function() {
  return Session.get('sPlayerEdit');
};

Template.tModalPlayer.events({
  'submit form.updatePlayer': function(evt) {
      evt.preventDefault();

      var player = {
          firstName: $(evt.target).find('[name=firstName]').val(),
          lastNameInitial: $(evt.target).find('[name=lastNameInitial]').val(),
          teamId: $(evt.target).find('[name=teamId]').val(),
          fieldPosition: $(evt.target).find('[name=fieldPosition]').val(),
          gameStatus: $(evt.target).find('[name=gameStatus]').val(),
          jerseyNumber: $(evt.target).find('[name=jerseyNumber]').val(),
          seasonFeeOwed: $(evt.target).find('[name=seasonFeeOwed]').val(),
          seasonFeePaid: $(evt.target).find('[name=seasonFeePaid]').val(),
          playerNotes: $(evt.target).find('[name=playerNotes]').val(),
      };

      Meteor.call('updatePlayer', player, function(error, id) {
          if (error) {
              return alert(error.reason);
          }
          // Router.go('playerPage', {
          //     _id: id
          // });
      });


      Session.set("sPlayerEdit", false);
    }
  // 'click .save-changes': function(evt, tmpl) {
  //   var firstName = $('.first-name').val();
  //   var lastNameInitial = $('.last-name-first-initial').val();
  //   var gameStatus = $('.game-status').val();
  //   var fieldPosition = $('.field-position').val();
  //   var teamId = $('.team-name').val();
  //   var jerseyNumber = $('.jersey-number').val();
  //   var seasonFeeOwed = $('.season-fee-owed').val();
  //   var seasonFeePaid = $('.season-fee-paid').val();
  //   var gameNotes = $('.game-notes').val();
  //   updatePlayer(firstName, gameStatus, fieldPosition, teamId, jerseyNumber, seasonFeeOwed, seasonFeePaid, gameNotes);
  //   $("#modal-id").modal("hide");
  //   Session.set('sPlayerId', null);
  //   Session.set('sPlayerEdit', false);
  // }
});

// var updatePlayer = function(firstName, gameStatus, fieldPosition, teamId, jerseyNumber, seasonFeeOwed, seasonFeePaid, gameNotes) {
//   Players.update(Session.get("sPlayerId"), {
//     $set: {
//       firstName: firstName,
//       gameStatus: gameStatus,
//       fieldPosition: fieldPosition,
//       teamId: teamId,
//       jerseyNumber: jerseyNumber,
//       seasonFeeOwed: seasonFeeOwed,
//       seasonFeePaid: seasonFeePaid,
//       gameNotes: gameNotes
//     }
//   });

//   return true;
// };