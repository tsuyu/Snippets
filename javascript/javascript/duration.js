function y2k(number) { return (number < 1000) ? number + 1900 : number; }
function padout(number) { return (number < 10) ? '0' + number : number; }

function showDates(startYear,startMonth,startDay,endYear,en dMonth,endDay) {
startDate = new Date(startYear,startMonth - 1,startDay);
endDate = new Date(endYear,endMonth - 1,endDay);

for (;;) {
// infinite loop
if (startDate > endDate) {
// break out of infinte loop and function
return;
}
document.write(y2k(startDate.getYear()) + '-' + padout(startDate.getMonth() + 1) + '-' + padout(startDate.getDate()));
// add a day to the date:
startDate = new Date(startDate.getTime() + 1*24*60*60*1000);
}
}

showDates(1999,12,1,2000,12,25);


   var valid = 0;
   var valid_past = 0;
   var from_date = form1.date_from.value; 
 
   
   var YYYY = from_date.substring(6, 10);
   var MM = from_date.substring(3, 5);
   var DD = from_date.substring(0,2);
   
   var eventDate1 =new Date(parseInt(YYYY, 10), parseInt(MM, 10) - 1, parseInt(DD, 10));
   var eventDate = new Date(parseInt(YYYY, 10), parseInt(MM, 10) - 1, parseInt(DD, 10));
   var today = new Date().getTime();
   eventDate.setDate(eventDate.getDate()-14);
   
   if( eventDate.getTime() < today && eventDate1.getTime() > today){
	     valid = 1;
   }else{
	     valid = 0;
   }
   
   var to_date = form1.date_to.value;
   
   var YYYY2 = to_date.substring(6, 10);
   var MM2 = to_date.substring(3, 5);
   var DD2 = to_date.substring(0,2);
   
   var tod = new Date(parseInt(YYYY2, 10), parseInt(MM2, 10) - 1, parseInt(DD2, 10));
   
   if(eventDate1.getTime()<=tod.getTime()){
	   valid_past = 1;
   }else{
	   valid_past = 0;
   }
