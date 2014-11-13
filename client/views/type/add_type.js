Template.tAddType.helpers({
    cRegions: function () {
        return Regions.find();   
    }
});
Template.tAddType.helpers({
    sEditMode: function () {
        return Session.get('sEditMode');
    }
});

Template.tAddType.helpers({
    sLeagueId: function () {
        return Session.get('sLeagueId');
    }
});

Template.tAddType.events({
    'click .add': function(evt, tmpl) {
        // makes focus on first form work as it should
        setTimeout(function() {
            $('input[name="typeName"]').focus();
        }, 500);
        Session.set("sEditMode", true);
    },

    'click .cancel': function(evt, tmpl) {
        Session.set("sEditMode", false);
    },

    'submit form': function(evt) {
        evt.preventDefault();
        
        var type = {
            typeName: $(evt.target).find('[name=typeName]').val(),
            leagueId: $(evt.target).find('[name=leagueId]').val(),
            regionId: $(evt.target).find('[name=regionId]').val(),
            typeSummary: $(evt.target).find('[name=typeSummary]').val(),
        };

        Meteor.call('addType', type, function(error, id) {
            if (error) {
                return alert(error.reason);
            }
            Router.go('tDetailType', {
                _id: id
            });
        });


        Session.set("sEditMode", false);
      }
});
