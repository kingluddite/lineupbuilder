// Only publish tasks that are public or belong to the current user
Meteor.publish('tasks', function() {
  return Tasks.find({
    $or: [{
      private: {
        $ne: true
      }
    }, {
      owner: this.userId
    }]
  });
});

/*

roles - https://www.youtube.com/watch?v=ooBEJIirNEo
example: http://roles.meteor.com/
roles api - http://alanning.github.io/meteor-roles/classes/Roles.html
Meteor.publish('secrets", function() {
 var loggedInUser = Meteor.users.findOne({_id:this.userId});

 if (Roles.userIsInRole(loggedInUser ["manage-secrets", "view-secrets"])) {
  return Meteor.secrets.find();
 } 

 this.stop();
});

*/

Meteor.publish('leagues', function() {
  return Leagues.find();
});

Meteor.publish('regions', function() {
  return Regions.find();
});

Meteor.publish('seasons', function() {
  return Seasons.find();
});

Meteor.publish('games', function() {
  return Games.find();
});

Meteor.publish('teams', function() {
  return Teams.find();
});


Meteor.publish('players', function() {
  return Players.find();
});

// Meteor.publish('states', function(){
//   return States.find();
// });

Meteor.publish(null, function() {
  return Meteor.roles.find({});
});
