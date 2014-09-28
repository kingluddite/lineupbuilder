Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('players'); }
});

Router.map(function() {
  this.route('tHome', {path: '/'});
  this.route('tFormerPlayers', {path: '/former_players'});
  this.route('playerPage', {
    path: '/players/:_id',
    data: function() { return Players.findOne(this.params._id); }
  });
});

Router.onBeforeAction('loading');