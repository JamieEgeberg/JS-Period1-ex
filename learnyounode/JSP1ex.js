var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];
// console.log(arr.filter(function a(name){return name.length <= 3 }));
// console.log(arr.map(function b(name){return name.toUpperCase() }));

function filtercb(name){
    return name.length <= 3 ;
}
function myFilter(array, callback){
    return array.filter(callback);
}
console.log(myFilter(names,filtercb));

function mapcb(name){
    return name.toUpperCase();
}
function myMap(array, callback){
    return array.map(callback);
}
console.log(myMap(names,mapcb));

