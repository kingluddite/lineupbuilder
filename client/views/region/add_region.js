Template.tAddRegion.helpers({
  cRegions: function() {
    return Regions.find();
  },

  sEditMode: function() {
    return Session.get('sEditMode');
  },

  sLeagueId: function() {
    return Session.get('sLeagueId');
  }
});

Template.tAddRegion.events({
  'click .cancel': function() {
    Session.set('sEditMode', false);
  },

  'submit form': function(evt) {
    evt.preventDefault();

    var region = {
      regionName: $(evt.target).find('[name=regionName]').val(),
      leagueId: $(evt.target).find('[name=leagueId]').val()
    };

    Meteor.call('addRegion', region, function(error) {
      if (error) {
        // return alert(error.reason);
        return throwError(error.reason);
      }
    });

    Session.set('sEditMode', false);
  }
});
