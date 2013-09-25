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