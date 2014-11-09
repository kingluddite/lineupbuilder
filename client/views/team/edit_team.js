// get the team id
Template.tEditTeam.helpers({
  sTeamId: function () {
    return Session.get('sTeamId');
  }
});

Template.tEditTeam.events({
    // remove a team
    'click .remove': function(evt, tmpl) {
        evt.preventDefault();
        
        // make sure you want to delete something
        if (confirm("Sure you want to delete this?")) {
          var selectedTeam = Session.get('sTeamId');  
          Meteor.call('removeTeam', selectedTeam);  
          Session.set('sTeamId', null);  
        }
    }
});