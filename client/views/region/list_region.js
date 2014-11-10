Template.tListRegion.helpers({
  cRegions: function() {
    return Regions.find();
  }
});
Template.tListRegion.helpers({
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tListRegion.helpers({
  cLeague: function() {
    return Leagues.findOne({
      _id: Session.get("sLeagueId")
    });
  }
});

Template.tListLeague.helpers({
    sLeagueId: function () {
        return Session.get('sLeagueId');
    }
});

Template.tListRegion.helpers({
  sRegionId: function() {
    return Session.get('sRegionId');
  }
});

// highlight currently selected team
Template.tListRegion.helpers({
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

Template.tListRegion.events({
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
