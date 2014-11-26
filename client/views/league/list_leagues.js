Template.tListLeagues.helpers({
    tasks: function() {
        return Tasks.find({});
    },
    cLeagues: function() {
        return Leagues.find();
    },

    sEditMode: function() {
        return Session.get('sEditMode');
    },

    sLeagueId: function() {
        return Session.get('sLeagueId');
    },
    tasks: function() {
        if (Session.get("hideCompleted")) {
            // if hide completed is checked, filter tasks
            return Tasks.find({
                checked: {
                    $ne: true
                }
            }, {
                sort: {
                    createdAt: -1
                }
            });
        } else {
            // Otherwise, return all of the tasks
            return Tasks.find({}, {
                sort: {
                    createdAt: -1
                }
            });
        }
    },
    // highlight currently selected team
    selectedClass: function() {
        var selectedLeague = Session.get('sLeagueId');
        var leagueId = this._id;
        if (selectedLeague === leagueId) {
            return 'selected';
        } else {
            return '';
        }
    }
});

Template.tListLeagues.events({
    'click .add': function(evt, tmpl) {
        Session.set("sEditMode", true);
    },
    'mouseover li.league': function(evt, tmpl) {
        var leagueId = this._id;
        Session.set('sLeagueId', leagueId);
        var selectedLeague = Session.get('sLeagueId');
    },
    "change .hide-completed input": function(event) {
        Session.set("hideCompleted", event.target.checked);
    },
    "click .toggle-checked": function() {
        // Set the checked property to the opposite of its current value
        Tasks.update(this._id, {
            $set: {
                checked: !this.checked
            }
        });
    },
    "click .delete": function() {
        Tasks.remove(this._id);
    },
    "submit .new-task": function(event) {
        // this function is called when the new task form is submitted
        var text = event.target.text.value;

        Tasks.insert({
            text: text,
            createdAt: new Date() // current time
        });

        // Clear form
        event.target.text.value = "";

        // Prevent default form submit
        return false;
    }
});
