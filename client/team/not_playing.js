Template.tNotPlaying.cPlayer = function() {
  return Players.findOne({_id:Session.get("sPlayerId")});
};

Template.tNotPlaying.sPlayerId = function() {
  Session.get("sPlayerId");
};



Template.tNotPlaying.cPlayersOut = function() {
  return Players.find({
    gameStatus: "out"
  }, {
    sort: {
      firstName: 1
    }
  });
};

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