// grab all teams in this season
// Template.tListPlayers.helpers({

//   cPlayers: function() {
//     return Players.find();
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

// Template.tListPlayers.events({
//   'click li.player': function() {
//     var playerId = this._id;
//     console.log(this.teamId);
//     Session.set('sPlayerId', playerId);
//   },
//   'click .add': function() {
//     Session.set('sEditMode', true);
//   },
//   'click .remove': function() {
//     Session.set('sEditMode', false);
//   }
// });
