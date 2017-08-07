
export default Helper = function(){

  function dateDifference(d1, d2) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

   // Convert both dates to milliseconds
   var date1_ms = d1.getTime();
   var date2_ms = d2.getTime();

   // Calculate the difference in milliseconds
   var difference_ms = date2_ms - date1_ms;

   // Convert back to days and return
   return Math.round(difference_ms/one_day);
  }

  return {
    dateDifference
  }
}();
