Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {
        return [Meteor.subscribe('divisions'), Meteor.subscribe('teams'), Meteor.subscribe('games'), Meteor.subscribe('players'), Meteor.subscribe('leagues')];
    }
});

Router.map(function() {
    this.route('tHome', {
        path: '/'
    });
    this.route('tHome2', {
        path: '/home2'
    });
    this.route('tFormerPlayers', {
        path: '/former_players'
    });
    this.route('playerPage', {
        path: '/players/:_id',
        data: function() {
            return Players.findOne(this.params._id);
        }
    });
    this.route('tAddPlayer', {
        path: '/add/player'
    });
    this.route('tAddLeague', {
        path: '/add/league'
    });
    this.route('tAddDivision', {
        path: '/add/division'
    });
    this.route('tGame', {
        path: '/game'
    });
    this.route('tAddTeam', {
        path: '/add/team'
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
