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
    // when someone edits a team, open the modal winow, place the cursor in the first box and highlight the current placeholder content
    // 'click .edit-team': function(evt, tmpl) {
    //     // need access to session
    //     Session.set('sTeamId', this._id);
    //     $("#modal-id").modal("show");
    //     setTimeout(function() { $('input[name="teamName"]').focus(); }, 500);
    //     setTimeout(function() { $('input[name="firstName"]').select(); }, 500);
    //     // grab the team id being edited by grabbing the current team id
    //     var team = Teams.findOne(Session.get("sTeamId"));
    //     // make dropdown equal to the current value in the collection record
    //     $(".game-status").val(team.gameStatus);
    //     $(".field-position").val(team.fieldPosition);
    // }
});