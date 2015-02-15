Template.tGameDayRoster.helpers({
  cRoster: function() {
    'use strict';
    return Players.find({
      gameStatus: {
        $in: ['starting', 'sub']
      }
    }, {
      sort: {
        firstName: 1
      }
    });
  }
});

Template.tGameDayRoster.helpers({
  cStarters: function() {
    'use strict';
    return Players.find({
      gameStatus: {
        $in: ['starting']
      }
    }, {
      sort: {
        firstName: 1
      }
    });
  }
});

Template.tGameDayRoster.sPlayerId = function() {
  'use strict';
  return Session.get('sPlayerId');
};

Template.tGameDayRoster.playersOff = function() {
  'use strict';
  return Players.find({
    gameStatus: 'out'
  }, {
    sort: {
      firstName: 1
    }
  });
};

Template.tGameDayRoster.helpers({
  gameDayRosterCount: function() {
    'use strict';
    return Players.find({
      gameStatus: {
        $in: ['starting', 'sub']
      }
    }).count();
  },
  totalRoster: function() {
    'use strict';
    return Players.find().count();
  }
});

Template.tSubs.helpers({
  cPlayer: function() {
    'use strict';
    return Players.findOne({
      _id: Session.get('sPlayerId')
    });
  }
});

Template.tSubs.helpers({
  sPlayerId: function() {
    'use strict';
    Session.get('sPlayerId');
  }
});

Template.tSubs.helpers({
  cPlayers: function() {
    // var currentUserId = Meteor.userId();
    'use strict';
    return Players.find({
      // createdBy: currentUserId,
      gameStatus: 'sub'
    }, {
      sort: {
        firstName: 1
      }
    });
  }
});

Template.tSubs.helpers({
  haveSubs: function() {
    'use strict';
    if (Players.find({
        gameStatus: 'sub'
      }).count() > 0) {
      return true;
    } else {
      return 'no subs';
    }
  },
  subCount: function() {
    'use strict';
    return Players.find({
      gameStatus: 'sub'
    }).count();
  }
});

Template.tStartingLineup.helpers({
  cStarters: function() {
    'use strict';
    return Players.find({
      gameStatus: 'starting'
    }, {
      sort: {
        firstName: 1
      }
    });
  }
});

Template.tStartingLineup.helpers({
  sPlayerId: function() {
    'use strict';
    return Session.get('sPlayerId');
  }
});

Template.tField.cPlayers = function() {
  'use strict';
  return Players.find({
    gameStatus: 'starting'
  });
};

Template.tWaitingForReply.helpers({
  cWaitingForReply: function() {
    'use strict';
    return Players.find({
      gameStatus: 'noReply'
    }, {
      sort: {
        firstName: 1
      }

    });
  }

});

Template.tFullRoster.helpers({
  cFullRoster: function() {
    'use strict';
    return Players.find({
      teamId: 'bdFEn5jZfHdG4xPKD'
    }, {
      sort: {
        firstName: 1
      }

    });
  }

});
