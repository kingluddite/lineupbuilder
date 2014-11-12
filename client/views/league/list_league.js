Template.tListLeague.helpers({
  cLeagues: function() {
    return Leagues.find();
  }
});

Template.tListLeague.helpers({
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tListLeague.helpers({
  sLeagueId: function() {
    return Session.get('sLeagueId');
  }
});

// highlight currently selected team
Template.tListLeague.helpers({
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

Template.tListLeague.events({
  'click .add': function(evt, tmpl) {
    Session.set("sEditMode", true);
  },
  'mouseover li.league': function(evt, tmpl) {
    var leagueId = this._id;
    Session.set('sLeagueId', leagueId);
    var selectedLeague = Session.get('sLeagueId');
  }
});
