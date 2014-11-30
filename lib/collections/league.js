/*jshint -W020 */
/* note: above stops read only jslint error - https://jslinterrors.com/read-only */
Leagues = new Mongo.Collection('leagues');

validateLeague = function(league) {
  var errors = {};
  if (!league.leagueName) {
    errors.leagueName = 'Please provide a league name.';

  }
  return errors;
};

Meteor.methods({
  addLeague: function(leagueAttributes) {
    // check(Meteor.userId(), String);
    // check(leagueAttributes, {
    //   leagueName: String
    // });
    var user = Meteor.user();

    var errors = validateLeague(leagueAttributes);
    if (errors.leagueName) {
      throw new Meteor.Error('invalid-post', 'You must set a league name');
    }
    // make sure the same league name has not already been entered 
    var leagueWithSameName = Leagues.findOne({
      leagueName: leagueAttributes.leagueName
    });
    if (leagueWithSameName) {
      return {
        leagueExists: true,
        _id: leagueWithSameName._id
      };
    }
    // pick out the whitelisted keys
    // Those on the list will be accepted, approved or recognized
    var league = _.extend(_.pick(leagueAttributes, 'leagueName', 'leagueAdminFirstName', 'leagueAdminLastName', 'leagueSummary'), {

      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var leagueId = Leagues.insert(league);

    return {
      _id: leagueId
    };
  },

  deleteLeague: function(leagueId) {
    var loggedInUser = Meteor.user();
    if (!Roles.userIsInRole(loggedInUser, 'league')) {
      throw new Meteor.Error('not-authorized to delete this league');
    }

    Leagues.remove(leagueId);
  }
});

Leagues.allow({
  insert: function(userId) {
    // only allow posting if you are logged in
    return !!userId;
  },
  update: function(userId) {
    return !!userId;
  },
  remove: function(userId, doc) {
    console.log(doc);
    return !!userId;
  }
});
