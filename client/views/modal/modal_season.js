Template.tModalSeason.helpers({
    // which season are we dealing with?
    cSeason: function() {
        return Seasons.findOne({
            _id: Session.get('sSeasonId')

        });
    },
    sSeasonId: function() {
        Session.get('sSeasonId');
    },
    sEditMode: function() {
        return Session.get('sEditMode');
    }
});

Template.tModalSeason.events({
    'submit form.updateSeason': function(evt) {
        evt.preventDefault();

        var currentSeasonId = Session.get('sSeasonId');

        var seasonProperties = {
            seasonName: $(evt.target).find('[name=seasonName]').val(),
            seasonStartDate: $(evt.target).find('[name=seasonStartDate]').val(),
            seasonStatus: $(evt.target).find('[name=seasonStatus]').val(),
            seasonSeasonFee: $(evt.target).find('[name=seasonSeasonFee]').val(),
            seasonSummary: $(evt.target).find('[name=seasonSummary]').val()
        };

        Seasons.update(currentSeasonId, {
            $set: seasonProperties
        }, function(error) {
            if (error) {
                // return alert(error.reason);
                return throwError(error.reason);
            }
        });
        $('#season-modal-id').modal('hide');
        Session.set('sSeasonId', null);
        Session.set('sEditMode', false);
    }
});
