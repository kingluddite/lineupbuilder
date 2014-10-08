// show/hide session variable
Session.setDefault("sPlayerEdit", false);
// set the id when editing player
Session.setDefault("sPlayerId", null);

// Meteor.subscribe('players');

UI.body.events({
  'click': function (evt, tmpl) {

    // console.log( evt.target.nodeName );
    if (evt.target.nodeName !== "BUTTON") {

      Session.set("sPlayerEdit", false);
    } 
  }
});

UI.registerHelper('moneyOwedStyle', function(evt, tmpl) {
  var totalFeesStillOwed = this.seasonFeeOwed - this.seasonFeePaid;

  if (totalFeesStillOwed > 0) {
    return "danger";
  } else if (totalFeesStillOwed === 0) {
    return "success";
  } else {
    return "caution";
  }
});

UI.registerHelper('moneyOwed', function(evt, tmpl) {
  var totalFeesStillOwed = this.seasonFeeOwed - this.seasonFeePaid;
  if (totalFeesStillOwed > 0) { 
    return totalFeesStillOwed;
  } else if (this.seasonFeePaid === "undefined" || this.seasonFeePaid === null || this.seasonFeePaid === 0 ) {
    return "problem";
  } else {
    return;
  }
});

Handlebars.registerHelper("formatDate", function(datetime) {
  if (moment) {
    return moment(datetime).format("MM/DD/YYYY");
  }
  else {
    return datetime;
  }
});

Handlebars.registerHelper("formatPrice", function(price) {
  if (numeral) {
    return numeral(price).format('$0.00');
  }
  else {
    return price;
  }
});
