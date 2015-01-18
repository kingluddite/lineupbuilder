/*

id, 
Game, 
Team, 
Score,
Home
Aggregating and comparing scores of teams using mongodb
{ 
    "_id" : ObjectId("53ae9da2e24682cac4215e0c"), 
    "match" : ObjectId("53ae9d78e24682cac4215e0b"), 
    "score" : 1 
}
{
    "_id" : ObjectId("53ae9da5e24682cac4215e0d"),
    "match" : ObjectId("53ae9d78e24682cac4215e0b"),
    "score" : 5
}
{ 
    "_id" : ObjectId("53aea6cde24682cac4215e15"),
    "match" : ObjectId("53aea6c1e24682cac4215e14"), 
    "score" : 2
}
{
    "_id" : ObjectId("53aea6e4e24682cac4215e16"),
    "match" : ObjectId("53aea6c1e24682cac4215e14"),
    "score" : 1
}
{ 
    "_id" : ObjectId("53aea6eae24682cac4215e18"), 
    "match" : ObjectId("53aea6e6e24682cac4215e17"), 
    "score" : 2
}
{ 
    "_id" : ObjectId("53aea6ece24682cac4215e19"),
    "match" : ObjectId("53aea6e6e24682cac4215e17"),
    "score" : 2
}
What that basically represents is the scores for "six" teams in "three" distinct matches.

Given that, my take on getting to results would be this:

db.matches.aggregate([

    // Group on matches and find the "min" and "max" score
    { "$group": {
        "_id": "$match",
        "teams": {
            "$push": {
               "_id": "$_id",
               "score": "$score"
            }
        },
        "minScore": { "$min": "$score" },
        "maxScore": { "$max": "$score" }
    }},

    // Unwind the "teams" array created
    { "$unwind": "$teams" },

    // Compare scores for "win", "loss" or "draw"
    { "$group": {
        "_id": "$_id",
        "win": {
           "$min": { "$cond": [
               { "$and": [
                   { "$eq": [ "$teams.score", "$maxScore" ] },
                   { "$gt": [ "$teams.score", "$minScore" ] }
               ]},
               "$teams",
               false
           ]}
        },
        "loss": {
           "$min": { "$cond": [
               { "$and": [
                   { "$eq": [ "$teams.score", "$minScore" ] },
                   { "$lt": [ "$teams.score", "$maxScore" ] }
               ]},
               "$teams",
               false
           ]}
        },
        "draw": {
            "$push": { "$cond": [
               { "$eq": [ "$minScore", "$maxScore" ] },
               "$teams",
               false
            ]}
        },
        "difference": { 
            "$max": { "$subtract": [ "$maxScore", "$minScore" ] }
        }
    }},

    // Just fix up those "draw" results with a [false,false] array
    { "$project": {
        "win": 1,
        "loss": 1,
        "draw": { "$cond": [ 
             { "$gt": [
                 { "$size": { "$setDifference": [ "$draw", [false] ] } },
                 0
             ]},
             "$draw",
             false
        ]},
        "difference": 1
    }}
])
And this gives you a quite nice result:

{
    "_id" : ObjectId("53ae9d78e24682cac4215e0b"),
    "win" : {
            "_id" : ObjectId("53ae9da5e24682cac4215e0d"),
            "score" : 5
    },
    "loss" : {
            "_id" : ObjectId("53ae9da2e24682cac4215e0c"),
            "score" : 1
    },
    "draw" : false,
    "difference" : 4
}
{
    "_id" : ObjectId("53aea6c1e24682cac4215e14"),
    "win" : {
            "_id" : ObjectId("53aea6cde24682cac4215e15"),
            "score" : 2
    },
    "loss" : {
            "_id" : ObjectId("53aea6e4e24682cac4215e16"),
            "score" : 1
    },
    "draw" : false,
    "difference" : 1
}
{
    "_id" : ObjectId("53aea6e6e24682cac4215e17"),
    "win" : false,
    "loss" : false,
    "draw" : [
            {
                    "_id" : ObjectId("53aea6eae24682cac4215e18"),
                    "score" : 2
            },
            {
                    "_id" : ObjectId("53aea6ece24682cac4215e19"),
                    "score" : 2
            }
    ],
    "difference" : 0
}
That is essentially the results per "match" and determines the "difference" between winner and looser while identifying which team "won" or "lost". The final stage there uses some operators only introduced in MongoDB 2.6, but that really is not necessary if you do not have that version available. Or you could actually still do the same thing if you wanted to by using $unwind and some other processing.


// how to calculate wins and losses
// http://stackoverflow.com/questions/24292100/mongodb-aggregating-fields-from-arrays-of-subdocuments
// http://stackoverflow.com/questions/22301716/mongodb-aggregation-sum-based-on-array-names

/* inserting numbers in meteor collection
   makes them a string to avoid that...
    example:
    Gifts.insert({
      category: t.find('#selectCat').value,
      amount: Number(inputAmount),
      desc: description,
      createdAt: new Date();
      createdBy: Meteor.user().username,
    });

/* adding numbers in a collection
var total = 0;
myCollection.find({name: "test3"}).map(function(doc) {
  total += doc.price;
});
*/

// compare mongodb and sql - http://docs.mongodb.org/manual/reference/sql-comparison/
Template.tListGames.helpers({
  sSeasonId: function() {
    return Session.get('sSeasonId');
  },
  // cGames: function() {
  //   return Games.find({
  //     seasonId: Session.get('sSeasonId')
  //   }, {
  //     sort: {
  //       gameNumber: 1,
  //       gameDate: 1,
  //       gameTime: 1
  //     }
  //   });
  // },
  cGames: function() {
    // compare mongodb and sql - http://docs.mongodb.org/manual/reference/sql-comparison/
    return Games.find({
      $or: [{
        homeTeam: Session.get('sTeamId')
      }, {
        awayTeam: Session.get('sTeamId')
      }]
    }, {
      sort: {
        gameNumber: 1,
        gameDate: 1,
        gameTime: 1
      }
    });

  },
  // you need to show the team name and not the id
  // so you have to search the teams collection
  // and pass the id stored in the games collection
  // under awayTeam
  cAwayTeam: function() {
    return Teams.findOne({
      _id: this.awayTeam
    });
  },
  cHomeTeam: function() {
    return Teams.findOne({
      _id: this.homeTeam
    });
  },

  // all teams in dropdown when a team is
  //  selected only that season will appear
  cTeams: function() {
    return Teams.find({
      seasonId: Session.get('sSeasonId')
    });
  },

  didHomeTeamWin: function() {
    if (this.homeTeamScore > this.awayTeamScore) {
      return 'winner';
    }
  },

  // find out if away team won
  //   need to test this more to make sure string
  //   comparison works in many different scenarios
  //   do testing for home team score as well
  didAwayTeamWin: function() {
    if (this.awayTeamScore > this.homeTeamScore) {
      return 'winner';
    }
  },
  // style will have a white bg if game not played
  //   and a gray bg it it has been played
  gameResultStyle: function() {
    if (this.gameStatus === 'to_be_played') {
      return 'upcoming';
    } else if (this.gameStatus === 'played') {
      return 'complete';
    } else {
      return '';
    }
  },

  gameStatusPretty: function() {
    if (this.gameStatus === 'to_be_played') {
      return 'TBD';
    } else if (this.gameStatus === 'played') {
      return 'FT';
    } else {
      return '?';
    }
  },

  sLeagueId: function() {
    return Session.get('sSeasonId');
  },
  cLeague: function() {
    return Leagues.find(Session.get('sSeasonId'));
  },
  sRegionId: function() {
    return Session.get('sRegionId');
  },
  cRegion: function() {
    return Regions.find(Session.get('sRegionId'));
  },
  sEditMode: function() {
    return Session.get('sEditMode');
  },
  // have 2 buttons on season games page and want to show two forms
  sTeamEditMode: function() {
    return Session.get('sTeamEditMode');
  }
});

Template.tListGames.events({
  'click .add': function() {
    Session.set('sEditMode', true);
  },
  'click .dd-team-name': function(evt) {
    var teamId = this._id;
    Session.set('sTeamId', teamId);
    //console.log(this._id);
  },
  // when the add team button is clicked set the session to true
  'click .add-team': function() {
    Session.set('sTeamEditMode', true);
  },
  'mouseover li.game': function() {
    var gameId = this._id;
    Session.set('sGameId', gameId);
    // var selectedGame = Session.get('sGameId');
  }
});

Template.tAddGame.helpers({
  cTeams: function() {
    return Teams.find({
      seasonId: Session.get('sSeasonId')
    }, {
      sort: {
        teamName: 1
      }
    });
  },
  sEditMode: function() {
    return Session.get('sEditMode');
  },
  sSeasonId: function() {
    return Session.get('sSeasonId');
  },
  sRegionId: function() {
    return Session.get('sRegionId');
  },
  sLeagueId: function() {
    return Session.get('sLeagueId');
  }
});

Template.tAddGame.events({
  'focus .datepicker': function() {
    $('.datepicker').datepicker('option', 'dateFormat', 'yyyy-mm-dd');
  },
  'focus .clockpicker': function() {
    $('.clockpicker').clockpicker();
  }
});

Template.tAddGame.events({
  'click .cancel': function() {
    Session.set('sEditMode', false);
  },
  'submit form': function(evt) {
    evt.preventDefault();

    var game = {
      leagueId: $(evt.target).find('[name=leagueId]').val(),
      seasonId: $(evt.target).find('[name=seasonId]').val(),
      regionId: $(evt.target).find('[name=regionId]').val(),
      gameTime: $(evt.target).find('[name=gameTime]').val(),
      gameDate: $(evt.target).find('[name=gameDate]').val(),
      gameNumber: Number($(evt.target).find('[name=gameNumber]').val()),
      homeTeam: $(evt.target).find('[name=homeTeam]').val(),
      // we need all the scores to be numbers
      // not strings (default value when coming from
      // html input objects)
      homeTeamScore: Number($(evt.target).find('[name=homeTeamScore]').val()),
      awayTeam: $(evt.target).find('[name=awayTeam]').val(),
      awayTeamScore: Number($(evt.target).find('[name=awayTeamScore]').val()),
      gameType: $(evt.target).find('[name=gameType]').val(),
      gameStatus: $(evt.target).find('[name=gameStatus]').val()
        // gameResult: Number($(evt.target).find('[name=gameResult]').val())
    };

    var errors = validateGame(game);
    if (errors.gameTime || errors.gameDate || errors.gameNumber) {
      return Session.set('postSubmitErrors', errors);
    }

    Meteor.call('addGame', game, function(error, result) {
      if (error) {
        // return alert(error.reason);
        return throwError(error.reason);
      }
      if (result.postExists) {
        throwError('This link has already been posted');
      }
      Session.set('sEditMode', false);

    });
  }
});

Template.tEditGame.helpers({
  sLeagueId: function() {
    return Session.get('sLeagueId');
  },
  // you need to show the team name and not the id
  // so you have to search the teams collection
  // and pass the id stored in the games collection
  // under awayTeam
  cAwayTeam: function() {
    return Teams.findOne({
      _id: Games.findOne({
        _id: Session.get('sGameId')
      })
    });
  },
  cHomeTeam: function() {
    return Teams.findOne({
      _id: this.homeTeam
    });
  }

});

// when someone edits or removes a league
Template.tEditGame.events({
  'click .remove': function(evt) {
    evt.preventDefault();

    // make sure you want to delete something
    if (confirm('Delete this Game?')) {
      Meteor.call('deleteGame', this._id);
    }
  },
  // when someone edits a league, open the modal winow, place the cursor in the first box and highlight the current placeholder content
  'click .edit': function() {
    // need access to session
    Session.set('sHomeTeamId', this.homeTeam);
    Session.set('sAwayTeamId', this.awayTeam);
    Session.set('sGameId', this._id);
    // var homeTeam = Teams.findOne(Session.get('sHomeTeamId'));
    // var awayTeam = Teams.findOne(Session.get('sAwayTeamId'));
    var currentGame = Games.findOne(Session.get('sGameId'));
    // // make dropdown equal to the current value in the collection record
    $('.game-type').val(currentGame.gameType);
    $('.game-status').val(currentGame.gameStatus);
    $('#game-modal-id').modal('show');
  }
});

