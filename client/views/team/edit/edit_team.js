// give the edit player access to the PlayerId session variable
Template.tRemoveEditTeam.sTeamId = function() {
  return Session.get('sTeamId');
};

// when someone edits or removes a player
Template.tRemoveEditTeam.events({
    'click .remove-team': function(evt, tmpl) {
        evt.preventDefault();
        
        // make sure you want to delete something
        if (confirm("Delete this post?")) {
          var selectedTeam = Session.get('sTeamId');  
          Meteor.call('removeTeam', selectedTeam);  
          Session.set('sTeamId', null);  
        }
    }
});