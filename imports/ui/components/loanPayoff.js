import { Mongo } from 'meteor/mongo';
import '../../api/helperFunctions.js';

Template['loanPayoff'].onRendered(function(){
  $('.ui #loanPayoff').hide()
});

Template['loanPayoff'].helpers({
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

  let totalPrincipalPaid = 0;
  let totalInterestPaid = 0;
  let totalPaid = 0;

  let loanNumber = 1;

  Loans.find({}).forEach(function(loan){
    //TODO: figure out days from month to month
    let dailyinterest = (loan.rate/100)/365;
    let balance = loan.balance;

    let date = new Date();
    let paymentDate = new Date();
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
    totalPrincipalPaid += payoff['payoff'].map(el => el.principal).reduce((sum, curr) => sum + curr);
    totalInterestPaid += payoff['payoff'].map(el => el.interest).reduce((sum, curr) => sum + curr);
  });

  totalPaid = totalPrincipalPaid + totalInterestPaid

  TotalPrincipalPaid.set(Math.trunc(totalPrincipalPaid));
  TotalInterestPaid.set(Math.trunc(totalInterestPaid));
  TotalPaid.set(Math.trunc(totalPaid));
}
