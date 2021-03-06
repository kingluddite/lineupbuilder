// // compare mongodb and sql - http://docs.mongodb.org/manual/reference/sql-comparison/
// Template.tListGames.helpers({
//   sSeasonId: function() {
//     return Session.get('sSeasonId');
//   },
//   // cGames: function() {
//   //   return Games.find({
//   //     seasonId: Session.get('sSeasonId')
//   //   }, {
//   //     sort: {
//   //       gameNumber: 1,
//   //       gameDate: 1,
//   //       gameTime: 1
//   //     }
//   //   });
//   // },
//   cGames: function() {
//     // compare mongodb and sql - http://docs.mongodb.org/manual/reference/sql-comparison/
//     return Games.find({
//       $or: [{
//         homeTeam: Session.get('sTeamId')
//       }, {
//         awayTeam: Session.get('sTeamId')
//       }]
//     }, {
//       sort: {
//         gameNumber: 1,
//         gameDate: 1,
//         gameTime: 1
//       }
//     });

//   },

//   // you need to show the team name and not the id
//   // so you have to search the teams collection
//   // and pass the id stored in the games collection
//   // under awayTeam
//   cAwayTeam: function() {
//     return Teams.findOne({
//       _id: this.awayTeam
//     });
//   },
//   cHomeTeam: function() {
//     return Teams.findOne({
//       _id: this.homeTeam
//     });
//   },

//   // all teams in dropdown when a team is
//   //  selected only that season will appear
//   cTeams: function() {
//     return Teams.find({
//       seasonId: Session.get('sSeasonId')
//     });
//   },

//   didHomeTeamWin: function() {
//     if (this.homeTeamScore > this.awayTeamScore) {
//       return 'winner';
//     }
//   },

//   // find out if away team won
//   //   need to test this more to make sure string
//   //   comparison works in many different scenarios
//   //   do testing for home team score as well
//   didAwayTeamWin: function() {
//     if (this.awayTeamScore > this.homeTeamScore) {
//       return 'winner';
//     }
//   },
//   // style will have a white bg if game not played
//   //   and a gray bg it it has been played
//   gameResultStyle: function() {
//     if (this.gameStatus === 'to_be_played') {
//       return 'upcoming';
//     } else if (this.gameStatus === 'played') {
//       return 'complete';
//     } else {
//       return '';
//     }
//   },

//   gameStatusPretty: function() {
//     if (this.gameStatus === 'to_be_played') {
//       return 'TBD';
//     } else if (this.gameStatus === 'played') {
//       return 'FT';
//     } else {
//       return '?';
//     }
//   },

//   sLeagueId: function() {
//     return Session.get('sSeasonId');
//   },
//   cLeague: function() {
//     return Leagues.find(Session.get('sSeasonId'));
//   },
//   sRegionId: function() {
//     return Session.get('sRegionId');
//   },
//   cRegion: function() {
//     return Regions.find(Session.get('sRegionId'));
//   },
//   sEditMode: function() {
//     return Session.get('sEditMode');
//   },
//   // have 2 buttons on season games page and want to show two forms
//   sTeamEditMode: function() {
//     return Session.get('sTeamEditMode');
//   }
// });

// Template.tListGames.events({
//   'click .add': function() {
//     Session.set('sEditMode', true);
//   },
//   'click .dd-team-name': function(evt) {
//     var teamId = this._id;
//     Session.set('sTeamId', teamId);
//     //console.log(this._id);
//   },
//   // when the add team button is clicked set the session to true
//   'click .add-team': function() {
//     Session.set('sTeamEditMode', true);
//   },
//   'mouseover li.game': function() {
//     var gameId = this._id;
//     Session.set('sGameId', gameId);
//     // var selectedGame = Session.get('sGameId');
//   }
// });
