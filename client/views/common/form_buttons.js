Template.tAddCancelBtns.helpers({
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tAddCancelBtns.events({
  'click .cancel': function() {
    Session.set('sEditMode', false);
  }
});
