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
        console.log(Session.get('sPlayerId'));
        // need access to session
        Session.set('sPlayerId', this._id);
        $("#modal-id").modal("show");
        var player = Players.findOne(Session.get("sPlayerId"));
        $(".game-status").val(player.gameStatus);
    }
});



var removePlayer = function() {
    Players.remove({
        _id: Session.get('sPlayerId')
    });
};
