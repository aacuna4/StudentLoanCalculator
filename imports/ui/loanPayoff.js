import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import Chart from 'chart.js';

import '../api/helperFunctions.js';

import './loanPayoff.html'

// let ctx = null;

Template.loanPayoff.onRendered(function(){
  // ctx = document.getElementById('myChart').getContext('2d');
  // this.$('.ui grid').grid();
  $('.ui #loanPayoff').hide()
});

Template.loanPayoff.helpers({
  loans() {
    return Loans.find({}, { sort: { createdAt: 1 } });
  },
  loanPayoff(){
    return LoanPayoff.find({}, { sort: { createdAt: 1 } });
  },
  loanResults(){
    return LoanResults.find({}, { sort: { createdAt: 1 } });
  },
});

calculatePayoff = function(){
  LoanPayoff.remove({});

  //set the balance equal to the sum of all the loans
    let interestPaid = 0;
    let principalPaid = 0;
    let totalPaid = 0;

  let loanNumber = 1;

  Loans.find({}).forEach(function(loan){
    //TODO: figure out days from month to month
    let dailyinterest = (loan.rate/100)/365;
    let balance = loan.balance;

    let date = new Date();
    let paymentDate = new Date(loan.paymentStartDate);
    let payoff = [];


    while(balance > 0){
      let numberOfDays = Helper.dateDifference(date, paymentDate);
      let interest = parseFloat((balance * dailyinterest * numberOfDays));
      let principal = parseFloat((balance < loan.minimum - interest ? balance : loan.minimum - interest));
      balance = parseFloat((balance < principal ? 0 : balance - principal));

      payoff.push({
        datey: date.getMonth() + ' ' + date.getFullYear(),
        principal,
        interest,
        balance
      });

      //adds a month
      date = new Date(paymentDate);
      paymentDate.setMonth(paymentDate.getMonth()+1);
    }

    LoanPayoff.insert({
      'LoanIndex': loanNumber,
      payoff
    })

    loanNumber += 1;
  });

  LoanPayoff.find({}).forEach(function(payoff){
    principalPaid += payoff['payoff'].map(el => el.principal).reduce((sum, curr) => sum + curr);
    interestPaid += payoff['payoff'].map(el => el.interest).reduce((sum, curr) => sum + curr);
  });

  totalPaid = principalPaid + interestPaid
  // console.log(principalPaid);
  // console.log(interestPaid);
  // console.log(totalPaid);

}
