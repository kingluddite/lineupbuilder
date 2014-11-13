// grab all teams in this season
Template.tListTeams.helpers({
  cTeams: function() {
    return Teams.find();
  }
});

// grab the team id
Template.tListTeams.helpers({
  sTeamId: function() {
    return Session.get('sTeamId');
  }
});

Template.tListTeams.helpers({
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

// highlight currently selected team
Template.tListTeams.helpers({
  selectedClass: function() {
    var selectedTeam = Session.get('sTeamId');
    var teamId = this._id;
    if (selectedTeam === teamId) {
      return 'selected';
    }
  }
});

Template.tListTeams.events({
  'click li.team': function() {
    var teamId = this._id;
    Session.set('sTeamId', teamId);
    var selectedTeam = Session.get('sTeamId');
  }
});
