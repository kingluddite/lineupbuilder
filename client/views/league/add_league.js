// we need to grab the id of the team they are part of
Template.tAddLeague.cLeagues = function() {
    return Leagues.find();
};
// note: session variables are not accessible to the template by default
// you have to explicitly associate them so...
// below is associating our sPlayerEdit session to this template
Template.tAddLeague.sEditMode = function() {
    return Session.get('sEditMode');
};
Template.tAddLeague.sLeagueId = function() {
    return Session.get('sLeagueId');
};

// adding events to our templates (duh!)
Template.tAddLeague.events({
    // when someone clicks a class of player-add
    // set the session sPlayerEdit to true
    'click .league-add': function(evt, tmpl) {
        // makes focus on first form work as it should
        setTimeout(function() {
            $('input[name="leagueName"]').focus();
        }, 500);
        // $(evt.target).find('[name=frmAddPlayer]').first().focus();
        // if (Session.get("sPlayerEdit", false)) {
        Session.set("sEditMode", true);
        // }

    },

    'click .league-remove': function(evt, tmpl) {
        Session.set("sEditMode", false);
    },

    'submit form': function(evt) {
        evt.preventDefault();

        var league = {
            leagueName: $(evt.target).find('[name=leagueName]').val(),
            leagueAdminFirstName: $(evt.target).find('[name=leagueAdminFirstName]').val(),
            leagueAdminLastName: $(evt.target).find('[name=leagueAdminLastName]').val(),
            leagueAdminEmail: $(evt.target).find('[name=leagueAdminEmail]').val(),
            leagueAdminPhone: $(evt.target).find('[name=leagueAdminEmail]').val(),
            leagueSummary: $(evt.target).find('[name=leagueSummary]').val(),
        };

        Meteor.call('addLeague', league, function(error, id) {
            if (error) {
                return alert(error.reason);
            }
            // Router.go('playerPage', {
            //     _id: id
            // });
        });


        Session.set("sEditMode", false);
      }
});
