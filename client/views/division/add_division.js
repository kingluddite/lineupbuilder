Template.tAddDivision.helpers({
    cDivisions: function () {
        return Divisions.find();
    }
});

Template.tAddDivision.helpers({
    sEditMode: function () {
        return Session.get('sEditMode');
    }
});

Template.tAddDivision.helpers({
    sLeagueId: function () {
        return Session.get('sDivisionId');
    }
});

Template.tAddDivision.events({
    'click .add': function(evt, tmpl) {
        // makes focus on first form work as it should
        setTimeout(function() {
            $('input[name="divisionName"]').focus();
        }, 500);
        Session.set("sEditMode", true);
    },

    'click .remove': function(evt, tmpl) {
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
