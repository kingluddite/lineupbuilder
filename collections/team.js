Teams = new Meteor.Collection('teams');

Meteor.methods({
  team: function(postAttributes) {
    var user = Meteor.user();

    if(!user) {
      throw new Meteor.Error(401, "You need to login to add new teams");
    }

    if(!postAttributes.teamName) {
      throw new Meteor.Error(422, "Please provide a team name");
    }
    
    var team = _.extend(_.pick(postAttributes, 'teamName'), 
      {

        userId: user._id,
        author: user.username,
        submitted: new Date().getTime()
      });
      var teamId = Teams.insert(team);
      

      return teamId;
  }
});
Teams.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  update: function(userId, doc) {
    return !! userId;
  },
  remove: function(userId, doc) {
    return !! userId;
  }
});