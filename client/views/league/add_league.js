Template.tAddLeague.helpers({
    cLeagues: function () {
        return Leagues.find();   
    }
});
Template.tAddLeague.helpers({
    sEditMode: function () {
        return Session.get('sEditMode');
    }
});

Template.tAddLeague.events({
    'click .league-add': function(evt, tmpl) {
        // makes focus on first form work as it should
        setTimeout(function() {
            $('input[name="leagueName"]').focus();
        }, 500);
        Session.set("sEditMode", true);
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
            Router.go('tLeagueDetail', {
                _id: id
            });
        });


        Session.set("sEditMode", false);
      }
});
