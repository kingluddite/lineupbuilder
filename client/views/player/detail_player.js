Template.tDetailPlayer.helpers({
  cPlayer: function() {
    return Players.findOne({
      _id: this._id
    });
  }
});
