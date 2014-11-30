Template.tEditRegion.helpers({
  sRegionId: function() {
    return Session.get('sRegionId');
  }
});

// when someone edits or removes a Region
Template.tEditRegion.events({
  'click .remove': function(evt) {
    evt.preventDefault();

    // make sure you want to delete something
    if (confirm('Delete this Region?')) {

      Meteor.call('deleteRegion', this._id);

      // Session.set('sRegionId', null);
    }
  },
  // when someone edits a Region, open the modal winow, place the cursor in the first box and highlight the current placeholder content
  'click .edit': function() {
    // need access to session
    Session.set('sRegionId', this._id);
    $('#region-modal-id').modal('show');
    setTimeout(function() {
      $('input[name="regionName"]').focus();
    }, 500);
    setTimeout(function() {
      $('input[name="regionName"]').select();
    }, 500);
  }
});
