Template.tListRegions.helpers({
  // are you in edit mode or not?
  sEditMode: function() {
    return Session.get('sEditMode');
  },

  // you need the league id to make sure you are only showing regions inside their respective leagues
  sLeagueId: function() {
    return Session.get('sLeagueId');
  },

  cRegions: function() {
    // only show the regions within their respective leagues
    return Regions.find({
      leagueId: Session.get('sLeagueId')
        // leagueId: this._id
    });
  },
// in order to show the name of your current league
// you need to get the session league id
// and you need to create a collection just for that specific record
  cLeague: function() {
    return Leagues.findOne({
      _id: Session.get('sLeagueId')
    });
  },

  sRegionId: function() {
    return Session.get('sRegionId');
  },

  // highlight currently selected team
  selectedClass: function() {
    var selectedRegion = Session.get('sRegionId');
    var regionId = this._id;
    if (selectedRegion === regionId) {
      return 'selected';
    } else {
      return '';
    }
  }
});

Template.tListRegions.events({
  'click .add': function() {
    Session.set('sEditMode', true);
  },
  'mouseover li.region': function() {
    var regionId = this._id;
    Session.set('sRegionId', regionId);
  }
});
