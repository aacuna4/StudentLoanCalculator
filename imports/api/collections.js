import { Mongo } from 'meteor/mongo';


export default function initCollections(){
  //Create a client-side Mongo Collection
  //by declaring the connection as null
  Loans = new Mongo.Collection('loans', {connection: null});
  LoanResults = new Mongo.Collection('loanResult', {connection: null});
  LoanPayoff = new Mongo.Collection('loanPayoff', {connection: null});
}
