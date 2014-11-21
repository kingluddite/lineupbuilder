Template.tAddGame.helpers({
  cTeams: function() {
    return Teams.find();
  },
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});

Template.tAddGame.events({
  
  'focus #datepicker': function() {
    $("#datepicker").datepicker();
  }//,
  // 'focus #timepicker':function() {
  //   $("#timepicker").timepicker();
  // }
});