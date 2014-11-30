Template.tEditLeague.helpers({
  sLeagueId: function() {
    return Session.get('sLeagueId');
  }
});

// when someone edits or removes a league
Template.tEditLeague.events({
  'click .remove': function(evt) {
    evt.preventDefault();

    // make sure you want to delete something
    if (confirm('Delete this League?')) {
      // Session.set('sLeagueId', this._id);
      // removeLeague();

      Meteor.call('deleteLeague', this._id);

      // Session.set('sLeagueId', null);
    }
  },
  // when someone edits a league, open the modal winow, place the cursor in the first box and highlight the current placeholder content
  'click .edit': function() {
    // need access to session
    Session.set('sLeagueId', this._id);
    $('#league-modal-id').modal('show');
    setTimeout(function() {
      $('input[name="leagueName"]').focus();
    }, 500);
    setTimeout(function() {
      $('input[name="leagueName"]').select();
    }, 500);
  }
});
