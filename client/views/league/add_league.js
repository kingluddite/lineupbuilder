Template.tAddLeague.created = function() {
    Session.set('postSubmitErrors', {});
};

Template.tAddLeague.helpers({
    cLeagues: function() {
        return Leagues.find();
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

Template.tAddLeague.events({
    'click .cancel': function() {
        Session.set('sEditMode', false);
    },
    'submit form': function(evt) {
        evt.preventDefault();

        var league = {
            leagueName: $(evt.target).find('[name=leagueName]').val(),
            leagueAdminFirstName: $(evt.target).find('[name=leagueAdminFirstName]').val(),
            leagueAdminLastName: $(evt.target).find('[name=leagueAdminLastName]').val(),
            leagueAdminEmail: $(evt.target).find('[name=leagueAdminEmail]').val(),
            leagueSummary: $(evt.target).find('[name=leagueSummary]').val()
        };

        var errors = validateLeague(league);
        if (errors.leagueName) {
            return Session.set('postSubmitErrors', errors);
        }

        Meteor.call('addLeague', league, function(error, result) {
            if (error) {
                // return alert(error.reason);
                return throwError(error.reason);
            }
            if (result.postExists) {
                throwError('A league with this name already exists');
            }
            Session.set('sEditMode', false);
            // Router.go('tDetailLeague', {
            //   _id: _id
            // });
        });
    }
});
