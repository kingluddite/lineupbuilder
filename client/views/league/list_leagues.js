Template.tListLeagues.helpers({
  cLeagues: function() {
    return Leagues.find();
  },

  sEditMode: function() {
    return Session.get('sEditMode');
  },

  sLeagueId: function() {
    return Session.get('sLeagueId');
  },
  // highlight currently selected team
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
  'click .add': function() {
    Session.set('sEditMode', true);
  },
  'mouseover li.league': function() {
    var leagueId = this._id;
    Session.set('sLeagueId', leagueId);
  }
});
