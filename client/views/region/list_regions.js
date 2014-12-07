Template.tListRegions.helpers({
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

  // are you in edit mode or not?
  sEditMode: function() {
    return Session.get('sEditMode');
  },

  // cLeague: function() {
  //   return Leagues.findOne({
  //     _id: Session.get('sLeagueId')
  //   });
  // },

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
