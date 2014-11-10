Template.tLeagueList.helpers({
    cLeagues: function () {
        return Leagues.find();   
    }
});

Template.tLeagueList.helpers({
    sLeagueId: function () {
        return Session.get('sLeagueId');
    }
});

// highlight currently selected team
Template.tLeagueList.helpers({
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

Template.tLeagueList.events({
    'click .remove': function(evt, tmpl) {
        Session.set("sEditMode", false);
    },
    'mouseover li.league': function() {
    var leagueId = this._id;
    Session.set('sLeagueId', leagueId);
    var selectedLeague = Session.get('sLeagueId');
  },
  'mouseout li.league': function() {
    var leagueId = this._id;
    Session.set('sLeagueId', null);
    var selectedLeague = Session.get('sLeagueId');
  }
});
