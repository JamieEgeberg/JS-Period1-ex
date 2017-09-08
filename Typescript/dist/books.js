"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function speak(book) {
    console.log(book.title + " by " + book.author + " was published " + book.published.toDateString() + " and has " + book.pages + " pages.");
}
// We define an object that has all of the properties the Food interface expects."
// Notice that types will be inferred automatically.
var book1 = {
    title: "TS: a book about it",
    author: "Script Typeson",
    published: new Date,
    pages: 200
};
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
speak(book1);
var myFunc = function (str1, str2, str3) {
    return [str1, str2, str3];
};
var myFunc2 = function (str1, str2, str3) {
    return [str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase()];
};
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["Abe", "Banan", "Cykel"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
f2(myFunc);
f2(myFunc2);
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var a = 42;
        console.log('Hello World');
        return 0;
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=books.js.map