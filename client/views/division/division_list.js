Template.tDivisionList.helpers({
  cDivisions: function() {
    return Divisions.find();
  }
});

Template.tDivisionList.helpers({
  sDivisionId: function() {
    return Session.get('sDivisionId');
  }
});

// highlight currently selected team
Template.tDivisionList.helpers({
  selectedClass: function() {
    var selectedDivision = Session.get('sDivisionId');
    var DivisionId = this._id;
    if (selectedDivision === DivisionId) {
      return 'selected';
    } else {
      return '';
    }
  }
});

Template.tDivisionList.events({
  'click .remove': function(evt, tmpl) {
    Session.set("sEditMode", false);
  },
  'mouseover li.Division': function() {
    var DivisionId = this._id;
    Session.set('sDivisionId', DivisionId);
    var selectedDivision = Session.get('sDivisionId');
  },
  'mouseout li.Division': function() {
    var DivisionId = this._id;
    Session.set('sDivisionId', null);
    var selectedDivision = Session.get('sDivisionId');
  }
});
