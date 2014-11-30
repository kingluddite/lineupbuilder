// when the trashcan icon is clicked, the Season is deleted
var removeSeason = function() {
  Seasons.remove({
    _id: Session.get('sSeasonId')
  });
};

Template.tEditSeason.helpers({
  sSeasonId: function() {
    return Session.get('sSeasonId');
  }
});

// when someone edits or removes aSeason 
Template.tEditSeason.events({
  'click .remove': function(evt) {
    evt.preventDefault();

    // make sure you want to delete something
    if (confirm('Delete this Season?')) {
      Session.set('sSeasonId', this._id);
      removeSeason();
      Session.set('sSeasonId', null);
    }
  },
  // when someone edits a Season, open the modal winow, place the cursor in the first box and highlight the current placeholder content
  'click .edit': function() {
    // need access to session
    Session.set('sSeasonId', this._id);
    $('#season-modal-id').modal('show');
    setTimeout(function() {
      $('input[name="seasonName"]').focus();
    }, 500);
    setTimeout(function() {
      $('input[name="seasonName"]').select();
    }, 500);
  }
});

