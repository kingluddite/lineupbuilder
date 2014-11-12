// we need to grab the id of the team they are part of
Template.tAddPlayer.sTeams = function() {
    return Teams.find();
};
// note: session variables are not accessible to the template by default
// you have to explicitly associate them so...
// below is associating our sPlayerEdit session to this template
Template.tAddPlayer.sPlayerEdit = function() {
    return Session.get('sPlayerEdit');
};
Template.tAddPlayer.sPlayerId = function() {
    return Session.get('sPlayerId');
};



// adding events to our templates (duh!)
Template.tAddPlayer.events({
    // when someone clicks a class of player-add
    // set the session sPlayerEdit to true
    'click .player-add': function(evt, tmpl) {
        // makes focus on first form work as it should
        setTimeout(function() {
            $('input[name="firstName"]').focus();
        }, 500);
        // $(evt.target).find('[name=frmAddPlayer]').first().focus();
        // if (Session.get("sPlayerEdit", false)) {
        Session.set("sPlayerEdit", true);
        // }

    },

    'click .player-remove': function(evt, tmpl) {
        Session.set("sPlayerEdit", false);
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
            playerNotes: $(evt.target).find('[name=playerNotes]').val(),
        };

        Meteor.call('addPlayer', player, function(error, id) {
            if (error) {
                return alert(error.reason);
            }
            // Router.go('playerPage', {
            //     _id: id
            // });
        });


        Session.set("sPlayerEdit", false);
      }

});
