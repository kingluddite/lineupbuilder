// // grab all teams in this season
// Template.tListPlayersOnHomeTeam.helpers({
//   sTeamId: function() {
//     return Session.get('sTeamId');
//   },

//   cPlayers: function() {
//     console.log(this._id);
//     return Players.find({
//       teamId: this._id
//     }, {
//       sort: {
//         firstName: 1
//       }
//     });
//   },

//   // grab the team id
//   sPlayerId: function() {
//     return Session.get('sPlayerId');
//   },

//   sEditMode: function() {
//     return Session.get('sEditMode');
//   },
//   // highlight currently selected team
//   selectedClass: function() {
//     var selectedTeam = Session.get('sPlayerId');
//     var playerId = this._id;
//     if (selectedTeam === playerId) {
//       return 'selected';
//     }
//   }
// });

// Template.tListPlayersOnHomeTeam.events({
//   'click li.player': function() {
//     var playerId = this._id;
//     console.log(this.teamId);
//     Session.set('sPlayerId', playerId);
//   },
//   'click .add': function() {
//     Session.set('sEditMode', true);
//     console.log('add clicked');
//     setTimeout(function() {
//       $('input[name="firstName"]').focus();
//     }, 500);
//     setTimeout(function() {
//       $('input[name="firstName"]').select();
//     }, 500);
//   },
//   'click .remove': function() {
//     Session.set('sEditMode', false);
//   }
// });
