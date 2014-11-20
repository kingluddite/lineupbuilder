Teams = new Mongo.Collection('teams');

Meteor.methods({
  addTeam: function(teamAttributes) {
    check(Meteor.userId(), String);
    check(teamAttributes, {
      title: String
      //,url: String
    });

    var user = Meteor.user(), 
        teamWithSameLink = Teams.findOne({teamName: teamAttributes.teamName});

    // ensure the user is logged in
    // if (!user) {
    //   throw new Meteor.Error(401, "You need to login to add new teams");
    // }

    // pick out the whitelisted keys
    // Those on the list will be accepted, approved or recognized
    var team = _.extend(_.pick(teamAttributes, 'teamName', 'leagueId'), {

      createdBy: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    var teamId = Teams.insert(team);

    return {
      _id: teamId
    }
  },
  'removeTeam': function(selectedTeam) {
    Teams.remove(selectedTeam);
  }
});

Teams.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  },
  remove: function(userId, doc) {
    return !!userId;
  }
});
