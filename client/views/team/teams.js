// grab all teams in this season
// Template.tTeams.cTeams = function() {
//     return Teams.find();
// };

// grab all teams in this season
Template.tTeams.helpers({
  cTeams: function() {
    return Teams.find();
  }
});
// grab the team id
// Template.tTeams.sTeamId = function() {
//     return Session.get('sTeamId');
// };

// grab the team id
Template.tTeams.helpers({
  sTeamId: function() {
    return Session.get('sTeamId');
  }
});
// find out if edit is on or off
// Template.tTeams.sTeamEdit = function() {
//     return Session.get('sTeamEdit');
// };

Template.tTeams.helpers({
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

// Template.tTeams.selectedClass = function() {
//     var selectedTeam = Session.get('sTeamId');
//     var teamId = this._id;
//     if (selectedTeam === teamId) {
//       return 'selected'; 
//     }
// };

// highlight currently selected team
Template.tTeams.helpers({
  selectedClass: function() {
    var selectedTeam = Session.get('sTeamId');
    var teamId = this._id;
    if (selectedTeam === teamId) {
      return 'selected';
    }
  }
});

Template.tTeams.events({
  'click li.team': function() {
    var teamId = this._id;
    Session.set('sTeamId', teamId);
    var selectedTeam = Session.get('sTeamId');
  }
});
