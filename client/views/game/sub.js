// Template.tSubs.cPlayer = function() {
// return Players.findOne({_id:Session.get("sPlayerId")});
// };

Template.tSubs.helpers({
  cPlayer: function() {
    return Players.findOne({
      _id: Session.get("sPlayerId")
    });
  }
});

// Template.tSubs.sPlayerId = function() {
//   Session.get("sPlayerId");
// };

Template.tSubs.helpers({
  sPlayerId: function() {
    Session.get("sPlayerId");
  }
});

// Template.tSubs.cPlayers = function() {
//   var currentUserId = Meteor.userId();
//   return Players.find({
//     createdBy: currentUserId,
//     gameStatus: "sub"
//   }, {
//     sort: {
//       firstName: 1
//     }
//   });
// };

Template.tSubs.helpers({
  cPlayers: function() {
    var currentUserId = Meteor.userId();
    return Players.find({
      createdBy: currentUserId,
      gameStatus: "sub"
    }, {
      sort: {
        firstName: 1
      }
    });
  }
});

Template.tSubs.helpers({
  haveSubs: function() {
    if (Players.find({
        gameStatus: "sub"
      }).count() > 0) {
      return true;
    } else {
      return "no subs";
    }
  },
  subCount: function() {
    return Players.find({
      gameStatus: "sub"
    }).count();
  }
});

// Template.tSubs.events({
//   'click .remove-player': function(evt, tmpl) {
//     Session.set('sPlayerId', this._id);
//     removePlayer();
//     Session.set('sPlayerId', null);
//   },
//   'click .edit-player': function(evt, tmpl) {
//     // need access to session
//     Session.set('sPlayerId', this._id);
//     $("#modal-id").modal("show");
//     var player = Players.findOne(Session.get("sPlayerId"));
//     $(".game-status").val(player.gameStatus);
//   }
// });

// var removePlayer = function() {
//   Players.remove({
//     _id: Session.get('sPlayerId')
//   });
// };
