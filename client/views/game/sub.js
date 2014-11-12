Template.tSubs.cPlayer = function() {
  return Players.findOne({_id:Session.get("sPlayerId")});
};

Template.tSubs.sPlayerId = function() {
  Session.get("sPlayerId");
};

Template.tSubs.cPlayers = function() {
  var currentUserId = Meteor.userId();
  return Players.find(
    {createdBy: currentUserId
  }, {
    sort: {
      firstName: 1
    }
  });
};

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
    return Players.find({gameStatus: "sub"}).count();
  }
});
