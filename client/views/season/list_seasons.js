Template.tListSeasons.helpers({
  cSeasons: function() {
    return Regions.find();
  }
});
Template.tListSeasons.helpers({
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tListSeasons.helpers({
  cSeason: function() {
    return Leagues.findOne({
      _id: Session.get("sLeagueId")
    });
  }
});

Template.tListSeasons.helpers({
  sSeasonId: function() {
    return Session.get('sSeasonId');
  }
});

// highlight currently selected team
Template.tListSeasons.helpers({
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
