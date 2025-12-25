//Dates

let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);


let mycreateddate= new Date(2025,0,23); //year, month, date and 0. is taken as january
console.log(mycreateddate.toDateString());
console.log(mycreateddate.toLocaleDateString());
let createddate=new Date("2025-05-01") // in string it is counted as yyyy-mm-dd and mnth is counted from 01
let createddate1=new Date("05-20-2001")
console.log(createddate1.toDateString());
console.log(createddate.toDateString());

//Time stamps
let mytimestamp= Date.now(); //date.now() is predefined and not a constructor function
console.log(mytimestamp); //gives time in milliseconds from 1st jan 1970 to now
console.log(typeof mytimestamp);
console.log(createddate1.getTime()); //gives time in milliseconds from 1st jan 1970 to the given date
console.log(Math.floor(Date.now()/1000/60/60/24/365)); //gives no of years from 1970 to now

let newdate= new Date();
console.log(newdate)
console.log(newdate.getMonth()+1)

// newdate.toLocaleDateString('default',{
//     weekday:
// })