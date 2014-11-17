Template.tAddCancelBtns.helpers({
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tAddCancelBtns.events({
  'click .cancel': function(evt, tmpl) {
    Session.set("sEditMode", false);
  }
});