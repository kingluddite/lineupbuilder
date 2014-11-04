// we need to grab the id of the team they are part of
Template.tAddDivision.cDivisions = function() {
    return Divisons.find();
};
// note: session variables are not accessible to the template by default
// you have to explicitly associate them so...
// below is associating our sPlayerEdit session to this template
Template.tAddDivision.sEditMode = function() {
    return Session.get('sEditMode');
};
Template.tAddDivision.sLeagueId = function() {
    return Session.get('sDivisionId');
};

Template.tAddDivision.events({
    // when someone clicks a class of division-add
    // set the session sPlayerEdit to true
    'click .division-add': function(evt, tmpl) {
        // makes focus on first form work as it should
        setTimeout(function() {
            $('input[name="divisionName"]').focus();
        }, 500);
        Session.set("sEditMode", true);
    },

    'click .division-remove': function(evt, tmpl) {
        Session.set("sEditMode", false);
    },

    'submit form': function(evt) {
        evt.preventDefault();

        var division = {
            divisionName: $(evt.target).find('[name=divisionName]').val(),
            divisionId: $(evt.target).find('[name=divisionId]').val(),
            divisionSummary: $(evt.target).find('[name=divisionSummary]').val(),
        };

        Meteor.call('addDivision', division, function(error, id) {
            if (error) {
                return alert(error.reason);
            }
        });


        Session.set("sEditMode", false);
      }
});
