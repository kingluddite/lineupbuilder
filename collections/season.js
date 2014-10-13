// Seasons = new Meteor.Collection('seasons');

// Meteor.methods({
//   season: function(postAttributes) {
//     var user = Meteor.user();

//     if(!user) {
//       throw new Meteor.Error(401, "You need to login to add new seasons");
//     }

//     if(!postAttributes.teamName) {
//       throw new Meteor.Error(422, "Please provide a season name");
//     }
//     var team = _.extend(_.pick(postAttributes, 'team'), 
//       {

//         userId: user._id,
//         author: user.username,
//         submitted: new Date().getTime()
//       });

//       var seasonId = Seasons.insert(season);
      

//       return seasonId;
//   }
// });
// Seasons.allow({
//   insert: function(userId, doc) {
//     // only allow posting if you are logged in
//     return !! userId;
//   },
//   update: function(userId, doc) {
//     return !! userId;
//   },
//   remove: function(userId, doc) {
//     return !! userId;
//   }
// });