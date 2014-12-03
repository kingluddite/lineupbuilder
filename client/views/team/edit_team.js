// get the team id
Template.tEditTeam.helpers({
    sTeamId: function() {
        return Session.get('sTeamId');
    }
});

Template.tEditTeam.events({
    // remove a team
    'click .remove': function(evt) {
        evt.preventDefault();

        // make sure you want to delete something
        if (confirm('Sure you want to delete this?')) {
            Meteor.call('deleteTeam', this._id);
        }
    },
    'click .edit': function() {
        Session.set('sTeamId', this._id);
        $('#team-modal-id').modal('show');
        setTimeout(function() {
            $('input[name="teamName"]').focus();
        }, 500);
        setTimeout(function() {
            $('input[name="teamName"]').select();
        }, 500);
    }
});
