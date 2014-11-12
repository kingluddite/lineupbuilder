Template.tEditRegion.helpers({
    sRegionId: function () {
        return Session.get('sRegionId');
    }
});

// when someone edits or removes a Region
Template.tEditRegion.events({
    'click .remove': function(evt, tmpl) {
        evt.preventDefault();
        
        // make sure you want to delete something
        if (confirm("Delete this Region?")) {
          Session.set('sRegionId', this._id);
          removeRegion();
          Session.set('sRegionId', null);  
        }
    },
    // when someone edits a Region, open the modal winow, place the cursor in the first box and highlight the current placeholder content
    'click .edit': function(evt, tmpl) {
        // need access to session
        Session.set('sRegionId', this._id);
        $("#region-modal-id").modal("show");
        setTimeout(function() { $('input[name="regionName"]').focus(); }, 500);
        setTimeout(function() { $('input[name="regionName"]').select(); }, 500);
        // grab the Region id being edited by grabbing the current Region id
        var region = Regions.findOne(Session.get("sRegionId"));
        // make dropdown equal to the current value in the collection record
        // $(".game-status").val(Region.gameStatus);
        // $(".field-position").val(Region.fieldPosition);
        // $(".team-id").val(Region.teamId);
    }
});

// when the trashcan icon is clicked, the Region is deleted
var removeRegion = function() {
    Regions.remove({
        _id: Session.get('sRegionId')
    });
};