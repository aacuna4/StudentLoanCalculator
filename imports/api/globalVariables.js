export default function initGlobalVariables(){
  //set the balance equal to the sum of all the loans
  TotalInterestPaid = new ReactiveVar(0);
  TotalPrincipalPaid = new ReactiveVar(0);
  TotalPaid = new ReactiveVar(0);
  TotalInterestPaidWithExtra = new ReactiveVar(0);
  TotalPaidWithExtra = new ReactiveVar(0);


}
