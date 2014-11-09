Teams = new Meteor.Collection('teams');

Meteor.methods({
  addTeam: function(postAttributes) {
    var user = Meteor.user();
      //, postWithSameLink = Players.findOne({firstName: postAttributes.firstName});

      // ensure the user is logged in
      if (!user) {
        throw new Meteor.Error(401, "You need to login to add new teams");
      }

      // pick out the whitelisted keys
      // Those on the list will be accepted, approved or recognized
      var team = _.extend(_.pick(postAttributes, 'teamName', 'leagueId'),
      {

        createdBy: user._id,
        author: user.username,
        submitted: new Date().getTime()
      });

      var teamId = Teams.insert(team);

      return teamId;
  },
  'removeTeam': function(selectedTeam) {
      Teams.remove(selectedTeam);
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