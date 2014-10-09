Players = new Meteor.Collection('players');
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
    console.log(user);
    var team = _.extend(_.pick(postAttributes, 'teamName'), 
      {

        userId: user._id,
        author: user.username,
        submitted: new Date().getTime()
      });
      var teamId = Teams.insert(team);
      

      return teamId;
  },
  player: function(postAttributes) {
    var user = Meteor.user();
      //, postWithSameLink = Players.findOne({firstName: postAttributes.firstName});

      // ensure the user is logged in
      if (!user) {
        throw new Meteor.Error(401, "You need to login to add new players");
      }

      // ensure the post has a title
      if (!postAttributes.jerseyNumber) {
        throw new Meteor.Error(422, "Please provide a jersey number");
      }

      // check that there are no previous posts with the same link
      // if (postAttributes.url && postWithSameLink) {
        // throw new Meteor.Error(302, 'This link has already been posted', postWithSameLink.id);
      //}

      // pick out the whitelisted keys
      // Those on the list will be accepted, approved or recognized
      var player = _.extend(_.pick(postAttributes, 'firstName', 'fieldPosition', 'gameStatus', 'jerseyNumber', 'seasonFeeOwed', 'seasonFeePaid', 'playerNotes'), 
      {

        userId: user._id,
        author: user.username,
        submitted: new Date().getTime()
      });

      var playerId = Players.insert(player);

      return playerId;
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


Players.allow({
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