Template.tEditLeague.helpers({
    sLeagueId: function () {
        return Session.get('sLeagueId');
    }
});

// when someone edits or removes a league
Template.tEditLeague.events({
    'click .remove': function(evt, tmpl) {
        evt.preventDefault();
        
        // make sure you want to delete something
        if (confirm("Delete this League?")) {
          Session.set('sLeagueId', this._id);
          removeLeague();
          Session.set('sLeagueId', null);  
        }
    },
    // when someone edits a league, open the modal winow, place the cursor in the first box and highlight the current placeholder content
    'click .edit': function(evt, tmpl) {
        // need access to session
        Session.set('sLeagueId', this._id);
        $("#league-modal-id").modal("show");
        setTimeout(function() { $('input[name="leagueName"]').focus(); }, 500);
        setTimeout(function() { $('input[name="leagueName"]').select(); }, 500);
        // grab the league id being edited by grabbing the current league id
        var league = Leagues.findOne(Session.get("sLeagueId"));
        // make dropdown equal to the current value in the collection record
        // $(".game-status").val(league.gameStatus);
        // $(".field-position").val(league.fieldPosition);
        // $(".team-id").val(league.teamId);
    }
});

// when the trashcan icon is clicked, the league is deleted
var removeLeague = function() {
    Leagues.remove({
        _id: Session.get('sLeagueId')
    });
};
