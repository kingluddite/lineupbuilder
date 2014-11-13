Template.tEditType.helpers({
    sRegionId: function () {
        return Session.get('sRegionId');
    },
    sLeagueId: function() {
        return Session.get('sLeagueId');
    }
});

// when someone edits or removes a Region
Template.tEditType.events({
    'click .remove': function(evt, tmpl) {
        evt.preventDefault();
        
        // make sure you want to delete something
        if (confirm("Delete this Type?")) {
          Session.set('sTypeId', this._id);
          removeType();
          Session.set('sTypeId', null);  
        }
    },
    // when someone edits a Region, open the modal winow, place the cursor in the first box and highlight the current placeholder content
    'click .edit': function(evt, tmpl) {
        // need access to session
        Session.set('sTypeId', this._id);
        $("#type-modal-id").modal("show");
        setTimeout(function() { $('input[name="typeName"]').focus(); }, 500);
        setTimeout(function() { $('input[name="typeName"]').select(); }, 500);
        // grab the Region id being edited by grabbing the current Region id
        var type = Type.findOne(Session.get("sTypeId"));
        // make dropdown equal to the current value in the collection record
        // $(".game-status").val(Region.gameStatus);
        // $(".field-position").val(Region.fieldPosition);
        // $(".team-id").val(Region.teamId);
    }
});

// when the trashcan icon is clicked, the Region is deleted
var removeType = function() {
    Types.remove({
        _id: Session.get('sTypeId')
    });
};