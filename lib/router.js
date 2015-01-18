Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'tNotFound',
  waitOn: function() {
    return [
      Meteor.subscribe('leagues'),
      Meteor.subscribe('regions'),
      Meteor.subscribe('seasons'),
      Meteor.subscribe('teams'),
      Meteor.subscribe('games'),
      Meteor.subscribe('players'),
      Meteor.subscribe('tasks')
    ];
  }
});

Router.map(function() {
  this.route('/', {
    //path: '/',
    name: 'tHome',
    layoutTemplate: 'tHomeLayout',
    yieldTemplates: {
      'tNav': {
        to: 'mainMenu'
      }
    }
  });

  // when you click on this
  // is show all leagues
  this.route('/leagues', {
    name: 'tLeagues',
    parent: 'tHome',
    layoutTemplate: 'tComplexLayout',
    yieldTemplates: {
      'tNav': {
        to: 'menu'
      },
      'tAddLeague': {
        to: 'sidebar'
      },
      'tFooter': {
        to: 'footer'
      }
    },
    label: 'leagues',
    data: function() {
      return Leagues.find();
    }
  });

  // this is where the regions page layout is created
  this.route('/leagues/:_id', {
    name: 'tDetailLeague',
    layoutTemplate: 'tComplexLayout',
    yieldTemplates: {
      'tNav': {
        to: 'menu'
      },
      'tAddLeague': {
        to: 'sidebar'
      },
      'tFooter': {
        to: 'footer'
      }
    },
    parent: 'tLeagues',
    label: 'regions',
    data: function() {
      return Leagues.find(this.params._id);
    }
  });

  this.route('/leagues/regions/:_id', {
    name: 'tDetailRegion',
    parent: 'tListRegions',
    label: 'seasons',
    data: function() {
      return Regions.find(this.params._id);
    }
  });
  this.route('/leagues/regions/seasons/:_id', {
    name: 'tDetailSeason',
    parent: 'tListSeasons',
    label: 'games',
    data: function() {
      return Seasons.find(this.params._id);
    }
  });

  this.route('/leagues/regions/seasons/games/:_id', {
    name: 'tDetailGame',
    parent: 'tListGames',
    label: 'teams',
    data: function() {
      return Games.find(this.params._id);
    }
  });

  // this was my original route for teams
  //  the problem was when I linked to this page
  //  it was in context to the game id and when I
  //  clicked on a team in that game list, it brought me
  //  to a page listing all the players and not just the players
  //  on that team
  // this.route('/leagues/regions/seasons/games/:_id', {
  //   name: 'tDetailTeam',
  //   parent: 'tListTeams',
  //   label: 'players',
  //   data: function() {
  //     return Teams.find(this.params._id);
  //   }
  // });

  // multiple values in route is easily done
  //  just pull fields from the collection
  //  and use this.params. (and then add your field value inside the
  //  data property of the route)
  // routes must have different paths or the next identicle path
  // will be ignored!
  this.route('/leagues/regions/seasons/games/:_id/away_team/:awayTeam', {
    name: 'tDetailAwayTeam',
    parent: 'tListTeams',
    label: 'players',
    data: function() {
      // console.log(this.params);
      return Teams.findOne(this.params.awayTeam);
    }
  });
  this.route('/leagues/regions/seasons/games/:_id/home_team/:homeTeam', {
    name: 'tDetailHomeTeam',
    parent: 'tListTeams',
    label: 'players',
    data: function() {
      // console.log(this.params);
      return Teams.findOne(this.params.homeTeam);
    }
  });

  this.route('/leagues/regions/season/:seasonId/team/:_id/schedule', {
    name: 'tScheduleTeam',
    parent: 'tListTeams',
    label: 'players',
    data: function() {
      //console.log(this.params._id);
      // return Games.find({
      //   homeTeam: this.params._id
      //     // $or: [{
      //     //   homeTeam: this.params._id
      //     // }, {
      //     //   awayTeam: this.params._id
      //     // }]
      // });
      return Games.find();
    }
  });



  /*
   how do I have a dropdown that has all the team names (done)
     and when each team is clicked the show you a list of games, 
     ordered by gameNumber just for the team that was clicked
     that means we'll need to return a collection where the team id
     passed to the game collection matches either the home team id
     or the away team id
  */
  this.route('/leagues/regions/seasons/schedule/team/:_id', {
    name: 'tListGamesByTeam',
    data: function() {
      // console.log( this.params._id );
      // return Games.find({
      //   teamId: {
      //     $in: [homeTeam, awayTeam]
      //   }
      // })
      return Games.find();
    }
  });

  this.route('/leagues/regions/seasons/games/teams/players/:_id', {
    name: 'tDetailPlayer',
    parent: 'tListPlayers',
    label: 'player name',
    data: function() {
      return Players.findOne(this.params._id);
    }
  });

  // when you click on a league
  // it takes you to that league
  this.route('/leagues/regions', {
    name: 'tListRegions',
    parent: 'tLeagues',
    label: 'regions',
    data: function() {
      return Regions.find();
    }
  });

  this.route('/leagues/regions/seasons', //function() {
    //   var id = this.params.id; // "5"
    //   // var leagueName = this.params.leagueName;
    // }, 
    {
      name: 'tListSeasons',
      parent: 'tListRegions',
      label: 'seasons',
      data: function() {
        return Seasons.find();
      }
    });


  this.route('/leagues/regions/seasons/games/', {
    name: 'tListGames',
    parent: 'tListSeasons',
    label: 'games',
    data: function() {
      return Games.find();
    }
  });

  this.route('/leagues/regions/seasons/games/teams', {
    name: 'tListTeams',
    parent: 'tListGames',
    label: 'teams',
    data: function() {
      return Teams.find();
    }
  });


  this.route('/leagues/regions/seasons/games/teams/players', {
    name: 'tListPlayers',
    parent: 'tListGames',
    label: 'players',
    data: function() {
      return Players.find();
    }
  });

  //code after this is dead
  this.route('tCivitas', {
    path: '/civitas'
  });
  this.route('tGameReminder', {
    path: '/game_reminder'

  });

});


var requireLogin = function() {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
};

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {
  only: ['tLeagues', 'tListRegions', 'tListSeasons', 'tListTeams', 'tListGames', 'tListGames']
});

_.extend(Router, {
  parentRoutes: function() {
    if (!this.current()) {
      return;
    }
    //
    var routes = [];
    for (var route = this.current().route; !_.isUndefined(route); route = this.routes[route.options.parent]) {
      routes.push(route);
    }
    return routes.reverse();
  }
});
