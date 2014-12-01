/*jshint -W020 */
Teams = new Mongo.Collection('teams');

Meteor.methods({
    addTeam: function(teamAttributes) {

        var user = Meteor.user();

        // pick out the whitelisted keys
        // Those on the list will be accepted, approved or recognized
        var team = _.extend(_.pick(teamAttributes, 'teamName', 'leagueId'), {
            createdBy: user._id,
            author: user.username,
            submitted: new Date().getTime()
        });

        var teamId = Teams.insert(team);

        return {
            _id: teamId
        };
    },
    'deleteTeam': function(teamId) {
        var loggedInUser = Meteor.user();
        if (!Roles.userIsInRole(loggedInUser, 'league')) {
            throw new Meteor.Error('not authorized to delete this season');
        }

        Teams.remove(teamId);
    }
});

Teams.allow({
    insert: function(userId) {
        // only allow posting if you are logged in
        return !!userId;
    },
    update: function(userId) {
        return !!userId;
    },
    remove: function(userId) {
        return !!userId;
    }
});
