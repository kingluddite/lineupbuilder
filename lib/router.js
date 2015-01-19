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

// the home page layout
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
    layoutTemplate: 'tHeaderFooter',
    yieldTemplates: {
      'tNav': {
        to: 'menu'
      },
      'tFooter': {
        to: 'footer'
      }
    },
    label: 'leagues'
  });

  // this is where the regions page layout is created
  this.route('/leagues/regions', {
    name: 'tRegions',
    layoutTemplate: 'tHeaderFooter',
    parent: 'tLeagues',
    label: 'regions',
    yieldTemplates: {
      'tNav': {
        to: 'menu'
      },
      'tFooter': {
        to: 'footer'
      }
    }
  });

  this.route('/leagues/regions/seasons', {
    name: 'tSeasons',
    parent: 'tRegions',
    label: 'seasons',
    layoutTemplate: 'tHeaderFooter',
    yieldTemplates: {
      'tNav': {
        to: 'menu'
      },
      'tFooter': {
        to: 'footer'
      }
    }
  });
  this.route('/leagues/regions/seasons/teams/', {
    name: 'tTeams',
    parent: 'tSeasons',
    label: 'teams'
  });

  // this.route('/leagues/regions/seasons/:_id', {
  //   name: 'tGames',
  //   parent: 'tSeasons',
  //   label: 'games'
  // });


  // this.route('/leagues/regions/seasons/games/:_id', {
  //   name: 'tDetailGame',
  //   parent: 'tListGames',
  //   label: 'teams'
  //   // data: function() {
  //   //   return Games.find(this.params._id);
  //   // }
  // });

  // multiple values in route is easily done
  //  just pull fields from the collection
  //  and use this.params. (and then add your field value inside the
  //  data property of the route)
  // routes must have different paths or the next identicle path
  // will be ignored!
  // this.route('/leagues/regions/seasons/games/:_id/away_team/:awayTeam', {
  //   name: 'tDetailAwayTeam',
  //   parent: 'tListTeams',
  //   label: 'players',
  //   data: function() {
  //     // console.log(this.params);
  //     return Teams.findOne(this.params.awayTeam);
  //   }
  // });
  // this.route('/leagues/regions/seasons/games/:_id/home_team/:homeTeam', {
  //   name: 'tDetailHomeTeam',
  //   parent: 'tListTeams',
  //   label: 'players',
  //   data: function() {
  //     // console.log(this.params);
  //     return Teams.findOne(this.params.homeTeam);
  //   }
  // });

  // this.route('/leagues/regions/season/:seasonId/team/:_id/schedule', {
  //   name: 'tScheduleTeam',
  //   parent: 'tListTeams',
  //   label: 'players',
  //   data: function() {
  //     //console.log(this.params._id);
  //     // return Games.find({
  //     //   homeTeam: this.params._id
  //     //     // $or: [{
  //     //     //   homeTeam: this.params._id
  //     //     // }, {
  //     //     //   awayTeam: this.params._id
  //     //     // }]
  //     // });
  //     return Games.find();
  //   }
  // });




  /*
   how do I have a dropdown that has all the team names (done)
     and when each team is clicked the show you a list of games, 
     ordered by gameNumber just for the team that was clicked
     that means we'll need to return a collection where the team id
     passed to the game collection matches either the home team id
     or the away team id
  */
  // this.route('/leagues/regions/seasons/schedule/team/:_id', {
  //   name: 'tListGamesByTeam',
  //   data: function() {
  //     // console.log( this.params._id );
  //     // return Games.find({
  //     //   teamId: {
  //     //     $in: [homeTeam, awayTeam]
  //     //   }
  //     // })
  //     return Games.find();
  //   }
  // });

  this.route('/leagues/regions/seasons/games/teams/players/:_id', {
    name: 'tDetailPlayer',
    parent: 'tListPlayers',
    label: 'player name',
    data: function() {
      return Players.findOne(this.params._id);
    }
  });

  // this.route('/leagues/regions/seasons/games/', {
  //   name: 'tListGames',
  //   parent: 'tListSeasons',
  //   label: 'games',
  //   data: function() {
  //     return Games.find();
  //   }
  // });

  // this.route('/leagues/regions/seasons/games/teams', {
  //   name: 'tListTeams',
  //   parent: 'tListGames',
  //   label: 'teams',
  //   data: function() {
  //     return Teams.find();
  //   }
  // });


  // this.route('/leagues/regions/seasons/games/teams/players', {
  //   name: 'tListPlayers',
  //   parent: 'tListGames',
  //   label: 'players',
  //   data: function() {
  //     return Players.find();
  //   }
  // });


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
  only: ['tLeagues', 'tRegions', 'tSeasons', 'tGames', 'tTeams', 'tPlayers']
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
