Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        return [
          Meteor.subscribe('leagues'),
          Meteor.subscribe('regions'),
          // Meteor.subscribe('types'),
          // Meteor.subscribe('seasons'), 
          // Meteor.subscribe('divisions'), 
          // Meteor.subscribe('teams'), 
          // Meteor.subscribe('games'), 
          Meteor.subscribe('players')
          ]; 
    }
});

Router.map(function() {
    this.route('tHome', {
        path: '/'
    });
    this.route('tHome2', {
        path: '/home2'
    });
    this.route('playerPage', {
        path: '/players/:_id',
        data: function() {
            return Players.findOne(this.params._id);
        } 
    });
    this.route('tListLeague', {
        path: '/leagues',
        data: function() {
            return Leagues.find();
        }
    });
    this.route('tListRegion', {
        path: '/regions',
        data: function() {
            return Regions.find();
        }
    });
    this.route('tListType', {
        path: '/types/',
        data: function() {
            return Regions.find();
        }
    });
    this.route('tDetailLeague', {
        path: '/leagues/:_id',
        data: function() {
            return Leagues.findOne(this.params._id);
        }
    });
    this.route('tListDivision', {
        path: '/divisions',
        data: function() {
            return Divisions.find();
        }
    });
    this.route('tDetailDivision', {
        path: '/divisions/:_id',
        data: function() {
            return Divisions.findOne(this.params._id);
        }
    });
    this.route('tDetailRegion', {
        path: '/regions/:_id',
        data: function() {
            return Regions.findOne(this.params._id);
        }
    });
});
var requireLogin = function(pause) {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
        pause();
    }
};
//Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {
    only: 'tFormerPlayers'
});
