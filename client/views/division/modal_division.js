Template.tModalDivision.helpers({
  cDivision: function () {
    return Divisions.findOne({
      /*
      sort: Sort specifier,
      skip: Number,
      fields: Field specifier,
      reactive: Boolean,
      transform: Function
      */
      _id: Session.get("sDivisionId")
    });
  }
});

Template.tModalDivision.helpers({
  sDivisionId: function () {
    return Session.get("sDivisionId");
  }
});

Template.tModalDivision.helpers({
  sEditMode: function () {
    return Session.get('sEditMode');
  }
});

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