Template.tAddTeam.helpers({
    sTeamId: function () {
        return Session.get('sTeamId');
    }
});

Template.tAddTeam.helpers({
    sEditMode: function () {
        return Session.get('sEditMode');
    }
});

// adding events to our templates (duh!)
Template.tAddTeam.events({
    'click .add': function(evt, tmpl) {
        // makes focus on first form work as it should
        setTimeout(function() {
            $('input[name="teamName"]').focus();
        }, 500);
        Session.set("sEditMode", true);
    },

    'click .remove': function(evt, tmpl) {
        Session.set("sEditMode", false);
    },

    'submit form': function(theEvent, theTemplate) {
        theEvent.preventDefault();

        var team = {
            teamName: $(theEvent.target).find('[name=teamName]').val(),
            leagueId: $(theEvent.target).find('[name=teamName]').val()
        };

        Meteor.call('addTeam', team, function(error, id) {
            if (error) {
                return alert(error.reason);
            }
            // Router.go('playerPage', {_id: id});
        });


        Session.set("sEditMode", false);
    }
});
