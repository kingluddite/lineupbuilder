Template.tDidNotReply.cDidNotReply = function() {
  return Players.find({
     gameStatus: "noReply"
  }, {
    sort: {
      firstName: 1
    }
  });
};
Template.tDidNotReply.helpers({
  formerCount: function () {
    return Players.find({gameStatus: "noReply"}).count();
  }
});

Template.tDidNotReply.sPlayerId = function() {
    Session.get("sPlayerId");
};

