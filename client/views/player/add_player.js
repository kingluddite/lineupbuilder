Template.tAddPlayer.created = function() {
    Session.set('postSubmitErrors', {});
};

Template.tAddPlayer.helpers({
    // do I show only teams in the season?
    sTeams: function() {
        return Teams.find();
    },

    errorMessage: function(field) {
        return Session.get('postSubmitErrors')[field];
    },

    errorClass: function(field) {
        return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
    },

    sEditMode: function() {
        return Session.get('sEditMode');
    }
});

// adding events to our templates (duh!)
Template.tAddPlayer.events({
    'click .cancel': function() {
        Session.set('sEditMode', false);
    },

    'submit form': function(evt) {
        evt.preventDefault();

        var player = {
            firstName: $(evt.target).find('[name=firstName]').val(),
            lastNameInitial: $(evt.target).find('[name=lastNameInitial]').val(),
            teamId: $(evt.target).find('[name=teamId]').val(),
            fieldPosition: $(evt.target).find('[name=fieldPosition]').val(),
            gameStatus: $(evt.target).find('[name=gameStatus]').val(),
            jerseyNumber: $(evt.target).find('[name=jerseyNumber]').val(),
            seasonFeeOwed: $(evt.target).find('[name=seasonFeeOwed]').val(),
            seasonFeePaid: $(evt.target).find('[name=seasonFeePaid]').val(),
            playerNotes: $(evt.target).find('[name=playerNotes]').val()
        };

        var errors = validatePlayer(player);
        if (errors.firstName) {
            return Session.set('postSubmitErrors', errors);
        }

        Meteor.call('addPlayer', player, function(error, result) {
            if (error) {
                // return alert(error.reason);
                return throwError(error.reason);
            }
        });

        Session.set('sEditMode', false);
    }
});
