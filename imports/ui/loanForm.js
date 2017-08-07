import { Template } from 'meteor/templating';

import Chart from 'chart.js';

import '../api/helperFunctions.js';

import './loanForm.html'

// let ctx = null;

Template.loanForm.onRendered(function(){
  // ctx = document.getElementById('myChart').getContext('2d');
  // this.$('.ui grid').grid();
});


Template.loanForm.helpers({
  loans() {
    return Loans.find({}, { sort: { createdAt: 1 } });
  },
  loanPayoff(){
    return LoanPayoff.find({}, { sort: { createdAt: 1 } });
  }
});

Template.loanForm.events({
  'click #new-loan'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from for.amount.value;
    const balance = $('#balance');
    const rate = $('#rate');
    const minimum = $('#minimum');
    const paymentStartDate = $('#paymentStartDate');


    // Insert a task into the collection
    Loans.insert({
      balance : parseFloat(balance.val()),
      rate : parseFloat(rate.val()),
      minimum : parseFloat(minimum.val()),
      paymentStartDate : new Date(paymentStartDate.val())
    });

    // Clear form
    balance.val('');
    rate.val('');
    minimum.val('');
    paymentStartDate.val('');

    calculatePayoff();
    // console.log(loansArray);
  }
});
