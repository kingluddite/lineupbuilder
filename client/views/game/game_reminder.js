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

Template.tNotPlaying.helpers({
  cPlayer: function () {
    return Players.findOne({_id:Session.get("sPlayerId")});
  }
});

Template.tNotPlaying.helpers({
  sPlayerId: function () {
    Session.get("sPlayerId");
  }
});


Template.tNotPlaying.helpers({
  cPlayersOut: function () {
    return Players.find({
      gameStatus: "out"
    }, {
      sort: {
        firstName: 1
      }
    });
  }
});

Template.tNotPlaying.helpers({
  playersOut: function() {
    if (Players.find({
      gameStatus: "out"
    }).count() > 0) {
      return true;
    } else {
      return "no players are out";
    }
  },

  outCount: function() {
    return Players.find({gameStatus: "out"}).count();
  },

});