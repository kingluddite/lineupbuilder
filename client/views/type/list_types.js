Template.tListTypes.helpers({
  cTypes: function() {
    return Types.find();
  }
});
Template.tListTypes.helpers({
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tListTypes.helpers({
  cType: function() {
    return Types.findOne({
      _id: Session.get("sTypeId")
    });
  }
});

Template.tListTypes.helpers({
    sTypeId: function () {
        return Session.get('sTypeId');
    }
});

Template.tListTypes.helpers({
  sTypeId: function() {
    return Session.get('sTypeId');
  }
});

// highlight currently selected team
Template.tListTypes.helpers({
  selectedClass: function() {
    var selectedType = Session.get('sTypeId');
    var TypeId = this._id;
    if (selectedType === TypeId) {
      return 'selected';
    } else {
      return '';
    }
  }
});

Template.tListTypes.events({
  'click .add': function(evt, tmpl) {
    Session.set("sEditMode", true);
  },
  'click .remove': function(evt, tmpl) {
    Session.set("sEditMode", false);
  },
  'mouseover li.Type': function() {
    var TypeId = this._id;
    Session.set('sTypeId', TypeId);
    var selectedType = Session.get('sTypeId');
  },
  'mouseout li.Type': function() {
    var TypeId = this._id;
    Session.set('sTypeId', null);
    var selectedType = Session.get('sTypeId');
  }
});
