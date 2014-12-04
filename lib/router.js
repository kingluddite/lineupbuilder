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
  this.route('/leagues', {
    // path: '/leagues',
    name: 'tListLeagues',
    parent: 'tHome',
    label: 'leagues',
    data: function() {
      return Leagues.find();
    }
  });
  this.route('/leagues/:_id', {
    //path: '/leagues/:_id',
    name: 'tDetailLeague',
    parent: 'tListLeagues',
    label: 'regions',
    data: function() {
      return Leagues.findOne(this.params._id);
    }
  });
  this.route('/leagues/regions', {
    //path: '/leagues/:_id',
    name: 'tListRegions',
    parent: 'tDetailLeague',
    label: 'regions name',
    data: function() {
      return Regions.find();
    }
  });
  this.route('league/region/season/:_id', {
    // path: 'league/region/season/:_id',
    name: 'tSeasonDetail',
    parent: 'tListRegions',
    label: 'seasons',
    data: function() {
      return Seasons.findOne(this.params._id);
    }
  });


  // this.route('tListSeasons', {
  //   path: '/seasons/',
  //   parent: 'tListRegions',
  //   data: function() {
  //     return Seasons.find();
  //   }
  // });
  // this.route('/leagues/regions', {
  //   // path: '/regions/',

  //   name: 'tListRegions',
  //   parent: 'tListLeagues',
  //   data: function() {
  //     return Regions.find();
  //   }
  // });

});
/*
code after this is dead
        this.route('tCivitas', {
          path: '/civitas'
        });
        this.route('tGameReminder', {
          path: '/game_reminder'
        });
        // this.route('tDetailLeague', {
        //     path: '/leagues/:leagueName',
        //     data: function() {
        //         // return Leagues.findOne(this.params._id);
        //         // return Leagues.findOne({
        //         //     leagueName: this.params.leagueName
        //         // });
        //     }
        // });

        this.route('tDetailRegion', {
          path: '/regions/:_id',
          data: function() {
              return Regions.findOne(this.params._id);
            }
            // data: function() {
            //     var viewData = {
            //         regionName: Regions.findOne({
            //                 regionName: this.params.regionName
            //             })
            //             // leagueName: Leagues.findOne({leagueName: this.params.leagueName})
            //     };
            //     return viewData;
            // }
        });


        this.route('tDetailSeason', {
          path: '/season/:_id',
          data: function() {
            return Seasons.findOne(this.params._id);
          }
        });
        this.route('tListGames', {
          path: '/games',
          parent: 'tListSeasons',
          data: function() {
            return Games.find();
          }
        });
        this.route('tDetailGame', {
          path: '/games/:_id',
          data: function() {
            return Games.findOne(this.params._id);
          }
        });
        this.route('tListTeams', {
          path: '/teams',
          parent: 'tListGames',
          data: function() {
            return Teams.find();
          }
        });
        this.route('tDetailTeam', {
          path: '/team/:_id',
          data: function() {
            return Teams.findOne(this.params._id);
          }
        });
        this.route('tListPlayers', {
          path: '/players',
          parent: 'tListTeams',
          data: function() {
            return Players.find();
          }
        });
        this.route('tDetailPlayer', {
          path: '/player/:_id',
          data: function() {
            return Players.findOne(this.params._id);
          }
        });
      });
      */
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
