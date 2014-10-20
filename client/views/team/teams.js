Template.tTeams.cTeams = function() {
    return Teams.find();
};

Template.tTeams.sTeamId = function() {
    return Session.get('sTeamId');
};

Template.tTeams.sTeamEdit = function() {
    return Session.get('sTeamEdit');
};

Template.tTeams.selectedClass = function() {
    var selectedTeam = Session.get('sTeamId');
    var teamId = this._id;
    if (selectedTeam === teamId) {
      return 'selected'; 
    }
};

Template.tTeams.events({
    'click li.team': function() {
      var teamId = this._id;
      Session.set('sTeamId', teamId);
      var selectedTeam = Session.get('sTeamId');
    }
});