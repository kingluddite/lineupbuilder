Template.tListSeasons.helpers({
  cSeasons: function() {
    return Seasons.find();
  },
  sEditMode: function() {
    return Session.get('sEditMode');
  },
  cSeason: function() {
    return Seasons.findOne({
      _id: Session.get("sSeasonId")
    });
  },
  sLeagueId: function() {
    return Session.get('sLeagueId');
  },
  sRegionId: function() {
    return Session.get('sRegionId');
  },
  sSeasonId: function() {
    return Session.get('sSeasonId');
  },
  // highlight currently selected item
  selectedClass: function() {
    var selectedSeason = Session.get('sSeasonId');
    var seasonId = this._id;
    if (selectedSeason === seasonId) {
      return 'selected';
    } else {
      return '';
    }
  }
});

Template.tListSeasons.events({
  'click .add': function(evt, tmpl) {
    Session.set("sEditMode", true);
  },
  'click .remove': function(evt, tmpl) {
    Session.set("sEditMode", false);
  },
  'mouseover li.season': function() {
    var seasonId = this._id;
    Session.set('sSeasonId', seasonId);
    var selectedSeason = Session.get('sSeasonId');
  },
  'mouseout li.season': function() {
    var seasonId = this._id;
    Session.set('sSeasonId', null);
    var selectedRegion = Session.get('sSeasonId');
  }
});
