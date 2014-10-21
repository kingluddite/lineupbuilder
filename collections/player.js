Players = new Meteor.Collection('players');

Meteor.methods({
    addPlayer: function(postAttributes) {
        var user = Meteor.user();
        //, postWithSameLink = Players.findOne({firstName: postAttributes.firstName});

        // ensure the user is logged in
        if (!user) {
            throw new Meteor.Error(401, "You need to login to add new players");
        }

        // ensure the post has a title
        if (!postAttributes.jerseyNumber) {
            throw new Meteor.Error(422, "Please provide a jersey number");
        }

        // pick out the whitelisted keys
        // Those on the list will be accepted, approved or recognized
        var player = _.extend(_.pick(postAttributes, 'firstName', 'lastNameInitial', 'teamId', 'fieldPosition', 'teamId', 'gameStatus', 'jerseyNumber', 'seasonFeeOwed', 'seasonFeePaid', 'playerNotes'), {

            createdBy: user._id,
            author: user.username,
            submitted: new Date().getTime()
        });

        var playerId = Players.insert(player);

        return playerId;
    },
    updatePlayer: function(postAttributes) {
        var user = Meteor.user();
        //, postWithSameLink = Players.findOne({firstName: postAttributes.firstName});

        // ensure the user is logged in
        if (!user) {
            throw new Meteor.Error(401, "You need to login to add new players");
        }

        // ensure the post has a title
        if (!postAttributes.jerseyNumber) {
            throw new Meteor.Error(422, "Please provide a jersey number");
        }

        // pick out the whitelisted keys
        // Those on the list will be accepted, approved or recognized
        var player = _.extend(_.pick(postAttributes, 'firstName', 'lastNameInitial', 'teamId', 'fieldPosition', 'teamId', 'gameStatus', 'jerseyNumber', 'seasonFeeOwed', 'seasonFeePaid', 'playerNotes'), {

            lastModifiedBy: user._id,
            lastModified: new Date().getTime()
        });

        Players.update(Session.get("sPlayerId"), {
            $set: player
        });
    }
});



Players.allow({
    insert: function(userId, doc) {
        // only allow posting if you are logged in
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    },
    remove: function(userId, doc) {
        return !!userId;
    }
});
