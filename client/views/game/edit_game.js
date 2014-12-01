Template.tEditGame.helpers({
    sLeagueId: function() {
        return Session.get('sLeagueId');
    }
});

// when someone edits or removes a league
Template.tEditGame.events({
    'click .remove': function(evt) {
        evt.preventDefault();

        // make sure you want to delete something
        if (confirm('Delete this Game?')) {
            Meteor.call('deleteGame', this._id);
        }
    },
    // when someone edits a league, open the modal winow, place the cursor in the first box and highlight the current placeholder content
    'click .edit': function() {
        // need access to session
        Session.set('sGameId', this._id);
        $('#game-modal-id').modal('show');
    }
});
