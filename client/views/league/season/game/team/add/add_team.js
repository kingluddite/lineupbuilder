Template.tAddTeam.cTeams = function() {
  return Teams.find();
};



Template.tAddTeam.sTeamId = function() {
  return Session.get('sTeamId');
};

Template.tAddTeam.sTeamEdit = function() {
  return Session.get('sTeamEdit');
};

// adding events to our templates (duh!)
Template.tAddTeam.events({
  // when someone clicks a class of player-add
  // set the session sPlayerEdit to true
  'click .team-add': function(evt, tmpl) {
    // makes focus on first form work as it should
  setTimeout(function() { $('input[name="teamName"]').focus(); }, 500);
    Session.set("sTeamEdit", true);
  },

  'click .close':function(evt, tmpl) {
    Session.set("sTeamEdit", false);
  },

  'submit form': function(evt) {
    evt.preventDefault();

    var team = {
      teamName: $(evt.target).find('[name=teamName]').val()
    };
    console.log(team.teamName);
    Meteor.call('team', team, function(error, id) {
      if (error) {
        return alert(error.reason);
      }
      // Router.go('playerPage', {_id: id});
    });


    Session.set("sTeamEdit", false);

    // team._id = Teams.insert(team); // we use a meteor call method instead of inserting directly into the Player's collection
  }
});
