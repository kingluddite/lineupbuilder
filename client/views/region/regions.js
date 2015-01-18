Template.tListRegions.helpers({
  // are you in edit mode or not?
  sEditMode: function() {
    return Session.get('sEditMode');
  },

  // you need the league id to make sure you are only showing regions inside their respective leagues
  sLeagueId: function() {
    return Session.get('sLeagueId');
  },

  cRegions: function() {
    // only show the regions within their respective leagues
    return Regions.find({
      leagueId: Session.get('sLeagueId')
        // leagueId: this._id
    });
  },
  // in order to show the name of your current league
  // you need to get the session league id
  // and you need to create a collection just for that specific record
  cLeague: function() {
    return Leagues.findOne({
      _id: Session.get('sLeagueId')
    });
  },

  sRegionId: function() {
    return Session.get('sRegionId');
  },

  // highlight currently selected team
  selectedClass: function() {
    var selectedRegion = Session.get('sRegionId');
    var regionId = this._id;
    if (selectedRegion === regionId) {
      return 'selected';
    } else {
      return '';
    }
  }
});

Template.tRegions.events({
  'mouseover li.region': function() {
    var regionId = this._id;
    Session.set('sRegionId', regionId);
  }
});

Template.tAddRegion.helpers({
  cRegions: function() {
    return Regions.find();
  },

  sEditMode: function() {
    return Session.get('sEditMode');
  },

  sLeagueId: function() {
    return Session.get('sLeagueId');
  }
});

Template.tAddRegion.events({
  'click .cancel': function() {
    Session.set('sEditMode', false);
  },

  'click .add': function() {
    Session.set('sEditMode', true);
  },

  'submit form': function(evt) {
    evt.preventDefault();

    var region = {
      regionName: $(evt.target).find('[name=regionName]').val(),
      leagueId: $(evt.target).find('[name=leagueId]').val()
    };

    Meteor.call('addRegion', region, function(error) {
      if (error) {
        // return alert(error.reason);
        return throwError(error.reason);
      }
    });

    Session.set('sEditMode', false);
  }
});

Template.tEditRegion.helpers({
  sRegionId: function() {
    return Session.get('sRegionId');
  }
});

// when someone edits or removes a Region
Template.tEditRegion.events({
  'click .remove': function(evt) {
    evt.preventDefault();

    // make sure you want to delete something
    if (confirm('Delete this Region?')) {

      Meteor.call('deleteRegion', this._id);

      // Session.set('sRegionId', null);
    }
  },
  // when someone edits a Region, open the modal winow, place the cursor in the first box and highlight the current placeholder content
  'click .edit': function() {
    // need access to session
    Session.set('sRegionId', this._id);
    $('#region-modal-id').modal('show');
    setTimeout(function() {
      $('input[name="regionName"]').focus();
    }, 500);
    setTimeout(function() {
      $('input[name="regionName"]').select();
    }, 500);
  }
});
