Template.tListRegions.helpers({
  cRegions: function() {
    return Regions.find();
  }
});
Template.tListRegions.helpers({
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tListRegions.helpers({
  cLeague: function() {
    return Leagues.findOne({
      _id: Session.get("sLeagueId")
    });
  }
});

Template.tListRegions.helpers({
    sLeagueId: function () {
        return Session.get('sLeagueId');
    }
});

Template.tListRegions.helpers({
  sRegionId: function() {
    return Session.get('sRegionId');
  }
});

// highlight currently selected team
Template.tListRegions.helpers({
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
  'click .add': function(evt, tmpl) {
    Session.set("sEditMode", true);
  },
  'click .remove': function(evt, tmpl) {
    Session.set("sEditMode", false);
  },
  'mouseover li.Region': function() {
    var RegionId = this._id;
    Session.set('sRegionId', RegionId);
    var selectedRegion = Session.get('sRegionId');
  },
  'mouseout li.Region': function() {
    var RegionId = this._id;
    Session.set('sRegionId', null);
    var selectedRegion = Session.get('sRegionId');
  }
});