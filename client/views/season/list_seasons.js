Template.tListSeasons.helpers({
    sRegionId: function() {
        return Session.get('sRegionId');
    },
    cSeasons: function() {
        //return Seasons.find();
        return Seasons.find({
            regionId: Session.get('sRegionId')
        });
    },
    sEditMode: function() {
        return Session.get('sEditMode');
    },
    cSeason: function() {
        return Seasons.findOne({
            _id: Session.get('sSeasonId')
        });
    },
    // sLeagueId: function() {
    //     return Session.get('sLeagueId');
    // },

    // sSeasonId: function() {
    //     return Session.get('sSeasonId');
    // },
    // highlight currently selected item
    selectedClass: function() {
        var selectedSeason = Session.get('sSeasonId');
        var seasonId = this._id;
        if (selectedSeason === seasonId) {
            return 'selected';
        } else {
            return '';
        }
    }
});

Template.tListSeasons.events({
    'click .add': function() {
        Session.set('sEditMode', true);
    },
    'mouseover li.season': function() {
        var seasonId = this._id;
        Session.set('sSeasonId', seasonId);
    }
});
