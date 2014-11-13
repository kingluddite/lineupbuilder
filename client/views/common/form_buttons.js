Template.tAddCancelBtns.helpers({
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tAddCancelBtns.events({
  'click .cancel': function(evt, tmpl) {
    console.log( 'test' );
    Session.set("sEditMode", false);
  }
});