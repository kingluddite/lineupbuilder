Meteor.startup(function() {
// //   // bootstrap the admin user if they exist -- You'll be replacing the id later
// //   // if (Meteor.users.findOne('zR8QvtCrDhPSi9DSp')) {
// //   //   Roles.addUsersToRoles('zR8QvtCrDhPSi9DSp', ['league-admin']);
// //   // }

// //   // // create a couple of roles if they don't already exist (THESE ARE NOT NEEDED -- just for the demo)
// //   // if (!Meteor.roles.findOne({
// //   //     name: 'team-admin'
// //   //   })) {
// //   //   Roles.createRole('team-admin');
// //   // }

// //   // if (!Meteor.roles.findOne({
// //   //     name: 'double-secret'
// //   //   })) {
// //   //   Roles.createRole('double-secret');
// //   // }

//   var users = [{
//     name: 'Player',
//     email: 'player@example.com',
//     username: 'player',
//     roles: []
//   }, {
//     name: 'Coach',
//     email: 'coach@example.com',
//     username: 'coach',
//     roles: ['team']
//   }, {
//     name: 'League',
//     email: 'league@example.com',
//     username: 'league',
//     roles: ['league']
//   }, {
//     name: 'Admin',
//     email: 'admin@example.com',
//     username: 'league',
//     roles: ['admin']
//   }];

//   _.each(users, function(user) {
//     var id;

//     id = Accounts.createUser({
//       email: user.email,
//       password: '123',
//       username: user.username,
//       profile: {
//         name: user.name
//       }
//     });

//     if (user.roles.length > 0) {
//       // Need _id of existing user record so this call must come 
//       // after `Accounts.createUser` or `Accounts.onCreate`
//       Roles.addUsersToRoles(id, user.roles);
//     }

//   });



// });
