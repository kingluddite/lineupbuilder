Template.tStartingLineupRoster.rendered = function() {
  $('.draggable').draggable();
  $('.droppable').droppable({
    drop: function(event, ui) {
      $(this)
        .addClass('ui-state-highlight')
        .find('p')
        .html('dropped');
      console.log(ui);
    }
  });
};
Template.tStartingLineupRoster.helpers({
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

Template.tStartingLineupRoster.helpers({
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

Template.tSubstitutes.helpers({
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

Template.tSubstitutes.helpers({
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

Template.tStartingLineupRoster.events({
  'click li': function(evt, template) {
    console.log(this._id);
  }
});
