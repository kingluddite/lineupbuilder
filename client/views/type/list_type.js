Template.tListType.helpers({
  cTypes: function() {
    return Types.find();
  }
});
Template.tListType.helpers({
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tListType.helpers({
  cType: function() {
    return Types.findOne({
      _id: Session.get("sTypeId")
    });
  }
});

Template.tListType.helpers({
    sTypeId: function () {
        return Session.get('sTypeId');
    }
});

Template.tListType.helpers({
  sTypeId: function() {
    return Session.get('sTypeId');
  }
});

// highlight currently selected team
Template.tListType.helpers({
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

Template.tListType.events({
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
