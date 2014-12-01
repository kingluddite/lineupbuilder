// grab all teams in this season
Template.tListTeams.helpers({
    cTeams: function() {
        return Teams.find();
    },

    // grab the team id
    sTeamId: function() {
        return Session.get('sTeamId');
    },

    sEditMode: function() {
        return Session.get('sEditMode');
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
    'click li.team': function() {
        var teamId = this._id;
        Session.set('sTeamId', teamId);
    },
    'click .add': function() {
        console.log(this);
        Session.set('sEditMode', true);
    },
    'click .remove': function() {
        Session.set('sEditMode', false);
    }
});
