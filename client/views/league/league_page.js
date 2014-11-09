Template.tLeaguePage.helpers({
    cLeagues: function () {
        return Leagues.find();   
    }
});

Template.tLeaguePage.helpers({
    sLeagueId: function () {
        return Session.get('sLeagueId');
    }
});

Template.tLeaguePage.events({
    'click .remove': function(evt, tmpl) {
        Session.set("sEditMode", false);
    }
});