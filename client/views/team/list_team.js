// grab all teams in this season
Template.tTeams.helpers({
  cTeams: function() {
    return Teams.find();
  }
});

// grab the team id
Template.tTeams.helpers({
  sTeamId: function() {
    return Session.get('sTeamId');
  }
});

Template.tTeams.helpers({
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

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
