// this allows you to not use email to login but just user a username
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

// color code using css classes the player's current money sitation with the team
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



// global way to highlight if a player owes money
UI.registerHelper('Owed', function(evt, tmpl) {
  var totalFeesStillOwed = this.seasonFeeOwed - this.seasonFeePaid;
  if (totalFeesStillOwed > 0) { 
    return totalFeesStillOwed;
  } else if (totalFeesStillOwed === 0) {
    return "PAID";
  }else if (this.seasonFeePaid === "undefined" || this.seasonFeePaid === null || this.seasonFeePaid === 0 ) {
    return "problem";
  } else {
    return;
  }
});

// allows you to easily format JavaScript dates
UI.registerHelper("formatDate", function(datetime) {
  if (moment) {
    return moment(datetime).format("MM/DD/YYYY");
  }
  else {
    return datetime;
  }
});

// show money in the form of $0.00
UI.registerHelper("formatPrice", function(price) {
  if (numeral) {
    return numeral(price).format('$0.00');
  }
  else {
    return price;
  }
});