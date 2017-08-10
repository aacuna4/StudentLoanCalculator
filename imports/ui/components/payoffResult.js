Template['payoffResult'].onRendered(function(){

});

Template['payoffResult'].helpers({
  TotalPrincipalPaid() {
    return TotalPrincipalPaid ? TotalPrincipalPaid.get() : 0;
  },
  TotalInterestPaid() {
    return TotalInterestPaid ? TotalInterestPaid.get() : 0;
  },
  TotalPaid() {
    return TotalPaid ? TotalPaid.get() : 0;
  },
});
