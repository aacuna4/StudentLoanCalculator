import '../../api/helperFunctions.js';

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
    LoanPayoff.remove({}); //test

    // Get value from for.amount.value;
    const balance = $('#balance');
    const rate = $('#rate');
    const minimum = $('#minimum');
    const extraPayment = $('#extraPayment');


    // Insert a task into the collection
    Loans.insert({
      balance : parseFloat(balance.val()),
      rate : parseFloat(rate.val()),
      minimum : parseFloat(minimum.val()),
      extraPayment : parseFloat(extraPayment.val()),
    });

    calculatePayoff();
  }
});
