//Two types of memory in JavaScript: Stack and Heap

//Stack Memory:  
//It stores primitive data types (like numbers, strings, booleans) and references to objects. 
//It provides a copy of the actual value.
//heap Memory:
//It stores objects, arrays, and functions.
//It provides a reference to the actual value.

let myname='John'; 

let anothername=myname; //copy of the value is stored in anothername
anothername='Doe'; 
console.log(anothername); 
console.log(myname); 

let user={name:'Alice', age:25};
let anotheruser=user;
anotheruser.name="Daksh";
console.log(anotheruser.name); 
console.log(user.name);