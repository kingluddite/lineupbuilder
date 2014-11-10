Template.tDetailDivision.helpers({
  cLeague: function() {
    return Leagues.findOne({
      _id: Session.get("sLeagueId")
    });
  }
});

Template.tDetailDivision.helpers({
  sLeagueId: function() {
    return Session.get("sLeagueId");
  }
});
