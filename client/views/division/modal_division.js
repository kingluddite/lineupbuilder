// find the player primary key to populate the modal
Template.tModalDivision.cdivision = function() {
  return Divisions.findOne({
    _id: Session.get("sDivisionId")
  });
};

// give the template access to the primary key
Template.tModalDivision.sDivisionId = function() {
  Session.get("sDivisionId");
};

// good session to have to show or hide the modal
Template.tModalDivision.sEditMode = function() {
  return Session.get('sEditMode');
};

Template.tModalDivision.events({
  'submit form.updateDivision': function(evt) {
      evt.preventDefault();

      var currentDivisionId = this._id;

      var divisionProperties = {
          divisionName: $(evt.target).find('[name=divisionName]').val(),
          leagueId: $(evt.target).find('[name=leagueId]').val(),
          divisionSummary: $(evt.target).find('[name=divisionSummary]').val(),
      };

      divisions.update(currentdivisionId, {$set: divisionProperties}, function(error) {
        if (error) {
          alert(error.reason);
        } 
      });
      $("#division-modal-id").modal("hide");
      Session.set('sdivisionId', null);
      Session.set('sdivisionEdit', false);
    }
});