Template.tAddGame.helpers({
  cTeams: function() {
    return Teams.find();
  },
  sEditMode: function() {
    return Session.get('sEditMode');
  }
});
