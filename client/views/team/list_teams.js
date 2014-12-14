// grab all teams in this season
Template.tListTeams.helpers({
  sSeasonId: function() {
    return Session.get('sSeasonId');
  },

  cTeams: function() {
    return Teams.find({
      seasonId: Session.get('sSeasonId')
    });

  },

  sEditMode: function() {
    return Session.get('sEditMode');
  },

  // grab the team id
  sTeamId: function() {
    return Session.get('sTeamId');
  },

  // highlight currently selected team
  selectedClass: function() {
    var selectedTeam = Session.get('sTeamId');
    var teamId = this._id;
    if (selectedTeam === teamId) {
      return 'selected';
    }
  }
});

Template.tListTeams.events({
  'click .add': function() {
    Session.set('sEditMode', true);
  },
  'mouseover li.team': function() {
    var teamId = this._id;
    Session.set('sTeamId', teamId);
  }
});
