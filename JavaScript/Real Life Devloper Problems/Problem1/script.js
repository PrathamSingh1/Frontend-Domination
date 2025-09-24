// DEVELOPER PROBLEMS
// -----------------
// Debugging a TypeError: Cannot read property 'X' of undefined:

var obj = {};
obj.name.first;     // this will throw error because there are no such property in obj and you are trying to access it
obj?.name?.first;   // this will not give error 







// blocking scroll untill something happens
// custom tooltip