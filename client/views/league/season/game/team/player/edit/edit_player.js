// give the edit player access to the PlayerId session variable
Template.tRemoveEditPlayer.sPlayerId = function() {
  return Session.get('sPlayerId');
};

// when someone edits or removes a player
Template.tRemoveEditPlayer.events({
    'click .remove-player': function(evt, tmpl) {
        evt.preventDefault();
        
        // make sure you want to delete something
        if (confirm("Delete this post?")) {
          Session.set('sPlayerId', this._id);
          removePlayer();
          Session.set('sPlayerId', null);  
        }
    },
    // when someone edits a player, open the modal winow, place the cursor in the first box and highlight the current placeholder content
    'click .edit-player': function(evt, tmpl) {
        // need access to session
        Session.set('sPlayerId', this._id);
        $("#modal-id").modal("show");
        setTimeout(function() { $('input[name="firstName"]').focus(); }, 500);
        setTimeout(function() { $('input[name="firstName"]').select(); }, 500);
        // grab the player id being edited by grabbing the current player id
        var player = Players.findOne(Session.get("sPlayerId"));
        // make dropdown equal to the current value in the collection record
        $(".game-status").val(player.gameStatus);
        $(".field-position").val(player.fieldPosition);
    }
});

// when the trashcan icon is clicked, the player is deleted
var removePlayer = function() {
    Players.remove({
        _id: Session.get('sPlayerId')
    });
};