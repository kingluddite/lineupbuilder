// Template.tHome.helpers({
      //   tasks: function() {
      //     if (Session.get('sHideCompleted')) {
      //       // If hide completed is checked, filter tasks 
      //       return Tasks.find({
      //         checked: {
      //           $ne: true
      //         }
      //       }, {
      //         sort: {
      //           createdAt: -1
      //         }
      //       });
      //     } else {
      //       // Otherwise, return all of the tasks
      //       return Tasks.find({}, {
      //         sort: {
      //           createdAt: -1
      //         }
      //       });
      //     }
      //   },
      //   hideCompleted: function() {
      //     return Session.get('sHideCompleted');
      //   },
      //   incompleteCount: function() {
      //     return Tasks.find({
      //       checked: {
      //         $ne: true
      //       }
      //     }).count();
      //   }
      // });


// Template.tHome.events({
      //   'submit .new-task': function(evt) {
      //     // This function is called when the new task form is submitted

      //     var text = evt.target.text.value;

      //     Meteor.call('addTask', text);

      //     // Clear form
      //     evt.target.text.value = '';

      //     // Prev default form submit
      //     return false;
      //   },
      //   'change .hide-completed input': function(evt) {
      //     Session.set('sHideCompleted', evt.target.checked);
      //   }
      // });


// Template.tTask.events({
      //   'click .toggle-checked': function() {
      //     // Set the checked property to the opposite of its current value
      //     Meteor.call('setChecked', this._id, !this.checked);
      //   },
      //   'click .delete': function() {
      //     Meteor.call('deleteTask', this._id);
      //   },
      //   'click .toggle-private': function() {
      //     Meteor.call('setPrivate', this._id, !this.private);
      //   }
      // });

      // Template.tTask.helpers({
      //   isOwner: function() {
      //     return this.owner === Meteor.userId();
      //   }
      // });
