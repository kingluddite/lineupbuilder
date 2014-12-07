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

// Router.route("/nested1",{
//   name:"nested1",
//   parent:"home"
// });
// Router.route("/nested1/nested2",{
//   name:"nested2",
//   parent:"nested1"
// });
// // etc...

Router.map(function() {
  this.route('/', {
    //path: '/',
    name: 'tHome'
      //template: 'tHome'
  });

  // when you click on this
  // is show all leagues
  this.route('/leagues', {
    name: 'tListLeagues',
    parent: 'tHome',
    label: 'leagues',
    data: function() {
      return Leagues.find();
    }
  });

  this.route('/leagues/:_id', {
    name: 'tDetailLeague',
    parent: 'tListLeagues',
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

  this.route('/leagues/regions/seasons/games/teams/:_id', {
    name: 'tDetailTeam',
    parent: 'tListTeams',
    label: 'players',
    data: function() {
      return Teams.find(this.params._id);
    }
  });

  this.route('/leagues/regions/seasons/games/teams/players/:_id', {
    name: 'tDetailPlayer',
    parent: 'tListPlayers',
    label: 'player name',
    data: function() {
      return Players.find(this.params._id);
    }
  });

  // when you click on a league
  // it takes you to that league
  this.route('/leagues/regions', {
    name: 'tListRegions',
    parent: 'tListLeagues',
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
  only: ['tListLeagues', 'tListRegions', 'tListSeasons', 'tListTeams', 'tListGames', 'tListGames']
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
