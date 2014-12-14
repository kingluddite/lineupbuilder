Template.tScheduleTeam.helpers({
  // search the games collection
  // find all games that have the team id
  // sent to this page(chosen from the dropdown)
  sTeamId: function() {
    return Session.get('sTeamId');
  },
  cGames: function() {
    // return Games.find({
    //   //homeTeam: 'bdFEn5jZfHdG4xPKD'
    //   homeTeam: Session.get('sTeamId')
    // });
    // return Games.find({

    //   // homeTeam: this.homeTeam
    // });
    // return Games.find({
    //   homeTeam: this._id
    // });
    // compare mongodb and sql - http://docs.mongodb.org/manual/reference/sql-comparison/
    return Games.find({
      $or: [{
        homeTeam: Session.get('sTeamId')
      }, {
        awayTeam: Session.get('sTeamId')
      }]
    });

  },
  cAwayTeam: function() {
    return Teams.findOne({
      _id: this.awayTeam
    });
  },
  cHomeTeam: function() {
    return Teams.findOne({
      _id: this.homeTeam
    });
  }
});
