Template.tListLeagues.helpers({
  cLeagues: function() {
    return Leagues.find();
  }
});

Template.tListLeagues.helpers({
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tListLeagues.helpers({
  sLeagueId: function() {
    return Session.get('sLeagueId');
  }
});

// highlight currently selected team
Template.tListLeagues.helpers({
  selectedClass: function() {
    var selectedLeague = Session.get('sLeagueId');
    var leagueId = this._id;
    if (selectedLeague === leagueId) {
      return 'selected';
    } else {
      return '';
    }
  }
});

Template.tListLeagues.events({
  'click .add': function(evt, tmpl) {
    Session.set("sEditMode", true);
  },
  'mouseover li.league': function(evt, tmpl) {
    var leagueId = this._id;
    Session.set('sLeagueId', leagueId);
    var selectedLeague = Session.get('sLeagueId');
  }
});
