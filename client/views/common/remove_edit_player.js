Template.tRemoveEditPlayer.sPlayerId = function() {
  return Session.get('sPlayerId');
};

Template.tRemoveEditPlayer.events({
    'click .remove-player': function(evt, tmpl) {
        Session.set('sPlayerId', this._id);
        removePlayer();
        Session.set('sPlayerId', null);
    },
    'click .edit-player': function(evt, tmpl) {
        // need access to session
        Session.set('sPlayerId', this._id);
        $("#modal-id").modal("show");
        setTimeout(function() { $('input[name="firstName"]').focus(); }, 500);
        setTimeout(function() { $('input[name="firstName"]').select(); }, 500);
        var player = Players.findOne(Session.get("sPlayerId"));
        // make dropdown equal to the current value in the collection record
        $(".game-status").val(player.gameStatus);
        $(".field-position").val(player.fieldPosition);
    }
});



var removePlayer = function() {
    Players.remove({
        _id: Session.get('sPlayerId')
    });
};
