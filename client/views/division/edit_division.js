// give the edit player access to the PlayerId session variable
Template.tEditDivision.sDivisionId = function() {
  return Session.get('sDivisionId');
};

// when someone edits or removes adivision 
Template.tEditDivision.events({
    'click .remove': function(evt, tmpl) {
        evt.preventDefault();
        
        // make sure you want to delete something
        if (confirm("Delete this Division?")) {
          Session.set('sDivisionId', this._id);
          removeDivision();
          Session.set('sDivisionId', null);  
        }
    },
    // when someone edits a division, open the modal winow, place the cursor in the first box and highlight the current placeholder content
    'click .edit': function(evt, tmpl) {
        // need access to session
        Session.set('sDivisionId', this._id);
        $("#division-modal-id").modal("show");
        setTimeout(function() { $('input[name="divisionName"]').focus(); }, 500);
        setTimeout(function() { $('input[name="divisionName"]').select(); }, 500);
        // grab the division id being edited by grabbing the current division id
        var division = Divisions.findOne(Session.get("sDivisionId"));
        // make dropdown equal to the current value in the collection record
        // $(".game-status").val(division.gameStatus);
        // $(".field-position").val(division.fieldPosition);
        // $(".team-id").val(division.teamId);
    }
});

// when the trashcan icon is clicked, the division is deleted
var removeDivision = function() {
    Divisions.remove({
        _id: Session.get('sDivisionId')
    });
};
