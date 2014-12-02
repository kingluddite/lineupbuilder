Template.tAddTeam.created = function() {
    Session.set('postSubmitErrors', {});
};

Template.tAddTeam.helpers({
    cTeams: function() {
        return Teams.find();
    },
    errorMessage: function(field) {
        return Session.get('postSubmitErrors')[field];
    },

    errorClass: function(field) {
        return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
    },
    sTeamId: function() {
        return Session.get('sTeamId');
    },
    sLeagueId: function() {
        return Session.get('sLeagueId');
    },
    sSeasonId: function() {
        return Session.get('sSeasonId');
    },
    sRegionId: function() {
        return Session.get('sRegionId');
    },
    sEditMode: function() {
        return Session.get('sEditMode');
    }
});

// adding events to our templates (duh!)
Template.tAddTeam.events({


    'click .cancel': function() {
        Session.set('sEditMode', false);
    },

    'submit form': function(evt) {
        evt.preventdefault();

        var team = {
            // leagueId: $(evt.target).find('[name=leagueId]').val(),
            // regionId: $(evt.target).find('[name=regionId]').val(),
            // seasonId: $(evt.target).find('[name=seasonId]').val(),
            teamName: $(evt.target).find('[name=teamName]').val(),
            aboutTeam: $(evt.target).find('[name=aboutTeam]').val()
        };
        var errors = validateTeam(team);
        if (errors.teamName) {
            return Session.set('postSubmitErrors', errors);
        }
        Meteor.call('addTeam', team, function(error) {
            if (error) {
                // return alert(error.reason);
                return throwError(error.reason);
            }
            Session.set('sEditmode', false);
            // router.go('playerpage', {_id: id});
        });
    }
});
