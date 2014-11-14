Template.tAddSeason.helpers({
    cSeason: function () {
        return Seasons.find();
    }
});

Template.tAddSeason.helpers({
    sEditMode: function () {
        return Session.get('sEditMode');
    }
});

Template.tAddSeason.helpers({
    sLeagueId: function () {
        return Session.get('sSeasonId');
    }
});

Template.tAddSeason.events({
    'click .add': function(evt, tmpl) {
        // makes focus on first form work as it should
        setTimeout(function() {
            $('input[name="seasonName"]').focus();
        }, 500);
        Session.set("sEditMode", true);
    },

    'click .remove': function(evt, tmpl) {
        Session.set("sEditMode", false);
    },

    'submit form': function(evt) {
        evt.preventDefault();
        // validation rule
        // if season status is complete no games can be added
        // not started, started, playoffs, completed
        var season= {
            leagueId: $(evt.target).find('[name=leagueId]').val(),
            regionId: $(evt.target).find('[name=regionId]').val(),
            seasonName: $(evt.target).find('[name=seasonName]').val(),
            seasonDivision: $(evt.target).find('[name=seasonDivision]').val(),
            seasonStartDate: $(evt.target).find('[name=seasonStartDate]').val(),
            seasonStatus: $(evt.target).find('[name=seasonStatus]').val(),
            seasonSummary: $(evt.target).find('[name=seasonSummary]').val(),
        };

        Meteor.call('addSeason', season, function(error, id) {
            if (error) {
                return alert(error.reason);
            }
        });

        Session.set("sEditMode", false);
      }
});
