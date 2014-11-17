Leagues = new Mongo.Collection('leagues');

validatePost = function(post) {
  var errors = {};
  if (!post.title) {
    errors.title = "Please fill in a headline";
  }
  if (!post.url) {
    errors.url = "Please fill in a URL";
  }
  return errors; 
};

Meteor.methods({
  addLeague: function(postAttributes) {
    var user = Meteor.user();

    // ensure the user is logged in
    if (!user) {
      throw new Meteor.Error(401, "You need to login to add new Leagues");
    }

    // ensure the post has a title
    if (!postAttributes.leagueName) {
      throw new Meteor.Error(422, "Please provide a league name");
    }

    var errors = validatePost(postAttributes);
    if (errors.leagueName || errors.leagueAdminFirstName) {
      throw new Meteor.Error('invalid-post', "You must set a league name and league admin first name for your post");
    }
   // make sure the same league name has not already been entered 
    var leagueWithSameName = Leagues.findOne({leagueName: postAttributes.leagueName});
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
      submitted: new Date().getTime()
    });

    var leagueId = Leagues.insert(league);

    return leagueId;
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
