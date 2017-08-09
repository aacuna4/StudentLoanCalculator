import { Template } from 'meteor/templating';
import './payoffResult.html'

Template.payoffResult.onRendered(function(){
  // ctx = document.getElementById('myChart').getContext('2d');
  // this.$('.ui grid').grid();
});

Template.payoffResult.helpers({
  TotalPrincipalPaid() {
    return TotalPrincipalPaid.get();
  },
  TotalInterestPaid() {
    return TotalInterestPaid.get();
  },
  TotalPaid() {
    return TotalPaid.get();
  },
});
