Leagues = new Mongo.Collection('leagues');

validateLeague = function(league) {
  var errors = {};
  if (!league.leagueName) {
    errors.leagueName = "Please provide a league name.";
  }
  if (!league.leagueAdminFirstName) {
    errors.url = "Please provide a league admin first name.";
  }
  return errors; 
};

Meteor.methods({
  addLeague: function(leagueAttributes) {
    var user = Meteor.user();

    // ensure the user is logged in
    // if (!user) {
    //   throw new Meteor.Error(401, "You need to login to add new Leagues");
    // }

    // ensure the post has a title
    // if (!postAttributes.leagueName) {
    //   throw new Meteor.Error(422, "Please provide a league name");
    // }

    var errors = validatePost(leagueAttributes);
    if (errors.leagueName || errors.leagueAdminFirstName) {
      throw new Meteor.Error('invalid-post', "You must set a league name and league admin first name for your post");
    }
   // make sure the same league name has not already been entered 
    var leagueWithSameName = Leagues.findOne({leagueName: leagueAttributes.leagueName});
    if (leagueWithSameName) {
      return {
        leagueExists: true,
        _id: leagueWithSameName._id
      }
    } 
    // pick out the whitelisted keys
    // Those on the list will be accepted, approved or recognized
    var league = _.extend(_.pick(postAttributes, 'leagueName', 'leagueAdminFirstName', 'leagueAdminLastName', 'leagueAdminEmail', 'leagueAdminPhone'), {

      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var leagueId = Leagues.insert(league);

    return {
      _id: leagueId
    }
  }
});

Leagues.allow({
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
