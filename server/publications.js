Meteor.publish('states', function(){
  return States.find();
});

Meteor.publish('teams', function(){
  return Teams.find();
});

Meteor.publish('players', function(){
  return Players.find();
});

Meteor.publish('games', function() {
  return Games.find();
});

Meteor.publish('leagues', function() {
  return Leagues.find();
});