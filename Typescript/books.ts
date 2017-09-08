import * as http from 'http';


interface IBook {
    title: string,
    readonly author: string,
    published?: Date,
    pages?: number

}


function speak(book: IBook): void{
    console.log(book.title+" by "+book.author+" was published "+book.published.toDateString()+" and has "+book.pages+" pages.");
  }
  
  // We define an object that has all of the properties the Food interface expects."
  // Notice that types will be inferred automatically.
  var book1 = {
    title: "TS: a book about it",
    author: "Script Typeson",
    published: new Date,
    pages: 200
  }
  
  class Book implements IBook{
    title: string;
    author: string;
    published: Date;
    pages: number;
  }

  speak(book1);

interface IMyFunc{
    (str1: string,str2: string,str3: string ): Array<string>;
}

  let myFunc :IMyFunc= function(str1: string,str2: string,str3: string ): Array<string> {
    return [str1, str2, str3];
  }

  let myFunc2 :IMyFunc= function(str1: string,str2: string,str3: string ): Array<string> {
    return [str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase()];
  }

  let f2 = function logger(f1: IMyFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["Abe", "Banan", "Cykel"];
    console.log(f1(a,b,c));
}

f2(myFunc);
f2(myFunc2);



class Startup {
    public static main(): number {
        var a = 42;
        console.log('Hello World');
        return 0;
    }
}

Startup.main();