Meteor.publish('leagues', function() {
  return Leagues.find();
});

Meteor.publish('regions', function() {
  return Regions.find();
});

<<<<<<< HEAD
Meteor.publish('type', function() {
=======
Meteor.publish('types', function() {
>>>>>>> 1b49e5fe40cac65601d1bfef515660156f2bc73a
  return Types.find();
});

Meteor.publish('seasons', function(){
  return Seasons.find();
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


// Meteor.publish('states', function(){
//   return States.find();
// });
