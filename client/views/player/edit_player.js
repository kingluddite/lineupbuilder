// give the edit player access to the PlayerId session variable
Template.tEditPlayer.sPlayerId = function() {
    return Session.get('sPlayerId');
};

// when someone edits or removes a player
Template.tEditPlayer.events({
    'click .remove': function(evt) {
        evt.preventDefault();
        // make sure you want to delete something
        if (confirm('Delete this post?')) {
            Meteor.call('deletePlayer', this._id);
        }
    },
    // when someone edits a player, open the modal winow, place the cursor in the first box and highlight the current placeholder content
    'click .edit': function() {
        Session.set('sPlayerId', this._id);
        $('#modal-id').modal('show');
        setTimeout(function() {
            $('input[name="firstName"]').focus();
        }, 500);
        setTimeout(function() {
            $('input[name="firstName"]').select();
        }, 500);
        var player = Players.findOne(Session.get('sPlayerId'));
        // make dropdown equal to the current value in the collection record
        $('.game-status').val(player.gameStatus);
        $('.game-reminder-status').val(player.gameReminderStatus);
        $('.field-position').val(player.fieldPosition);
        $('.team-id').val(player.teamId);
    }
});
