Template.tModalRegion.helpers({
  cRegion: function() {
    return Regions.findOne({
      _id: Session.get('sRegionId')
    });
  },
  sRegionId: function() {
    Session.get('sRegionId');
  },
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tModalRegion.events({
  'submit form.updateRegion': function(evt) {
    evt.preventDefault();

    var currentRegionId = Session.get('sRegionId');


    var regionProperties = {
      regionName: $(evt.target).find('[name=regionName]').val(),
      regionSummary: $(evt.target).find('[name=regionSummary]').val()
    };
    console.log(currentRegionId);

    Regions.update(currentRegionId, {
      $set: regionProperties
    }, function(error) {
      if (error) {
        // return alert(error.reason);
        return throwError(error.reason);
      }
    });

    $('#region-modal-id').modal('hide');
    Session.set('sRegionId', null);
    Session.set('sEditMode', false);
  }
});
