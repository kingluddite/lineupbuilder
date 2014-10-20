Template.tAddTeam.sTeamId = function() {
    return Session.get('sTeamId');
};

Template.tAddTeam.sTeamEdit = function() {
    return Session.get('sTeamEdit');
};

// adding events to our templates (duh!)
Template.tAddTeam.events({
    // when someone clicks a class of player-add
    // set the session sPlayerEdit to true
    'click .team-add': function(evt, tmpl) {
        // makes focus on first form work as it should
        setTimeout(function() {
            $('input[name="teamName"]').focus();
        }, 500);
        Session.set("sTeamEdit", true);
    },

    'click .team-remove': function(evt, tmpl) {
        Session.set("sTeamEdit", false);
    },

    'submit form': function(theEvent, theTemplate) {
        theEvent.preventDefault();

        var team = {
            teamName: $(theEvent.target).find('[name=teamName]').val()
        };

        Meteor.call('addTeam', team, function(error, id) {
            if (error) {
                return alert(error.reason);
            }
            // Router.go('playerPage', {_id: id});
        });


        Session.set("sTeamEdit", false);
    }
});
