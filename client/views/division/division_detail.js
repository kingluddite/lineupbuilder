Template.tDivisionDetail.helpers({
  cLeague: function() {
    return Leagues.findOne({
      _id: Session.get("sLeagueId")
    });
  }
});

Template.tDivisionDetail.helpers({
  sLeagueId: function() {
    return Session.get("sLeagueId");
  }
});
