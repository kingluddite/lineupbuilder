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
  this.route('tHome', {
    path: '/',
    template: 'tHome'
  });
  this.route('tCivitas', {
    path: '/civitas'
  });
  this.route('tGameReminder', {
    path: '/game_reminder'
  });
  this.route('tListLeagues', {
    path: '/leagues',
    data: function() {
      return Leagues.find();
    }
  });
  this.route('tDetailLeague', {
    path: '/leagues/:leagueName',
    data: function() {
      // return Leagues.findOne(this.params._id);
      return Leagues.findOne({
        leagueName: this.params.leagueName
      });
    }
  });
  this.route('tListRegions', {
    path: '/regions/',
    data: function() {
      return Regions.find();
    }
  });
  // this.route('tDetailRegion', {
  //   path: '/regions/:regionName',
  //   data: function() {
  //     viewData = {
  //       regionName: Regions.findOne({
  //           regionName: this.params.regionName
  //         })
  //         // leagueName: Leagues.findOne({leagueName: this.params.leagueName})
  //     };
  //     return viewData;
  //   }
  // });

  this.route('tListSeasons', {
    path: '/seasons/',
    data: function() {
      return Seasons.find();
    }
  });
  this.route('tDetailSeason', {
    path: '/season/:_id',
    data: function() {
      return Seasons.findOne(this.params._id);
    }
  });
  this.route('tListGames', {
    path: '/games',
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
    path: '/players/:_id',
    data: function() {
      return Players.findOne(this.params._id);
    }
  });
  this.route('tDetailPlayer', {
    path: '/player/:_id',
    data: function() {
      return Players.findOne(this.params._id);
    }
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
