Template['payoffResult'].onRendered(function(){

});

Template['payoffResult'].helpers({
  TotalPrincipalPaid() {
    return TotalPrincipalPaid.get();
  },
  TotalInterestPaid() {
    return TotalInterestPaid.get();
  },
  TotalPaid() {
    return TotalPaid.get();
  },
  TotalInterestPaidWithExtra() {
    return TotalInterestPaidWithExtra.get();
  },
  TotalPaidWithExtra() {
    return TotalPaidWithExtra.get();
  },
});
