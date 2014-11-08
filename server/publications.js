Meteor.publish('leagues', function() {
  return Leagues.find();
});

Meteor.publish('divisions', function(){
  return Divisions.find();
});

Meteor.publish('teams', function(){
  return Teams.find();
});

Meteor.publish('games', function() {
  return Games.find();
});

Meteor.publish('players', function(){
  return Players.find();
});

Meteor.publish('seasons', function(){
  return Players.find();
});

// Meteor.publish('states', function(){
//   return States.find();
// });
