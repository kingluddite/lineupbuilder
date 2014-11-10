Template.tAddRegion.helpers({
    cRegions: function () {
        return Regions.find();   
    }
});
Template.tAddRegion.helpers({
    sEditMode: function () {
        return Session.get('sEditMode');
    }
});

Template.tAddRegion.helpers({
    sLeagueId: function () {
        return Session.get('sLeagueId');
    }
});

Template.tAddRegion.events({
    'click .add': function(evt, tmpl) {
        // makes focus on first form work as it should
        setTimeout(function() {
            $('input[name="regionName"]').focus();
        }, 500);
        Session.set("sEditMode", true);
    },

    'click .cancel': function(evt, tmpl) {
        Session.set("sEditMode", false);
    },

    'submit form': function(evt) {
        evt.preventDefault();
        
        var region = {
            regionName: $(evt.target).find('[name=regionName]').val(),
            leagueId: $(evt.target).find('[name=leagueId]').val()
        };

        Meteor.call('addRegion', region, function(error, id) {
            if (error) {
                return alert(error.reason);
            }
            Router.go('tDetailRegion', {
                _id: id
            });
        });


        Session.set("sEditMode", false);
      }
});
