Meteor.publish('leagues', function() {
  return Leagues.find();
});

Meteor.publish('regions', function() {
  return Regions.find();
});

// Meteor.publish('types', function() {
//   return Types.find();
// });

Meteor.publish('seasons', function(){
  return Seasons.find();
});

// Meteor.publish('divisions', function(){
//   return Divisions.find();
// });
Meteor.publish('games', function() {
  return Games.find();
});

Meteor.publish('teams', function(){
  return Teams.find();
});


Meteor.publish('players', function(){
  return Players.find();
});

// Meteor.publish('states', function(){
//   return States.find();
// });
