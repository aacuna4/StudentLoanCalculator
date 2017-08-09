import { Template } from 'meteor/templating';
import Chart from 'chart.js';
import '../api/helperFunctions.js';

// let ctx = null;

Template['loanForm'].onRendered(function(){

});

Template['loanForm'].helpers({
  loans() {
    return Loans.find({}, { sort: { createdAt: 1 } });
  },
  loanPayoff(){
    return LoanPayoff.find({}, { sort: { createdAt: 1 } });
  }
});

Template['loanForm'].events({
  'click #new-loan'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    Loans.remove({});
    LoanPayoff.remove({});

    // Get value from for.amount.value;
    const balance = $('#balance');
    const rate = $('#rate');
    const minimum = $('#minimum');

    // Insert a task into the collection
    Loans.insert({
      balance : parseFloat(balance.val()),
      rate : parseFloat(rate.val()),
      minimum : parseFloat(minimum.val()),
      // paymentStartDate : new Date(paymentStartDate.val())
    });

    calculatePayoff();
  }
});
