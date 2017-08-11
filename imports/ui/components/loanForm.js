import '../../api/helperFunctions.js';

Template['loanForm'].onRendered(function(){

});

Template['loanForm'].helpers({
});

Template['loanForm'].events({
  'click #new-loan'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    Loans.remove({});
    LoanPayoff.remove({}); //test

    // Get value from for.amount.value;
    const balance = $('#balance');
    const rate = $('#rate');
    const minimum = $('#minimum');
    const extraPayment = $('#extraPayment');

    Loans.insert({
      id : 1,
      balance : parseFloat(balance.val()),
      rate : parseFloat(rate.val()),
      minimum : parseFloat(minimum.val()),
    });

    Loans.insert( {
      id : 2,
      balance : parseFloat(balance.val()),
      rate : parseFloat(rate.val()),
      minimum : parseFloat(minimum.val()) + parseFloat(extraPayment.val()),
    });


    calculatePayoff();
  }
});
