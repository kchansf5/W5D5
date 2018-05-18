class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date ();
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.  
    setInterval(this._tick.bind(this),1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds += 1;
    this.printTime();
  }
}

// const clock = new Clock();


const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


function addNumbers () {
  let sum = 0;
  Array.from(arguments).forEach ((el) => {
    sum += el;
    console.log(sum);
  });
  return sum;
}

// addNumbers(1,2,3,4,5)

function addNumbers (sum, numsLeft, callback) {
  if (numsLeft === 0){
    callback(sum);
    reader.close();
  }  
  else if (numsLeft > 0) {
    reader.question("Give me a number yo ", function (res) {
      let ans = parseInt(res);
      sum += ans;
      console.log(`partial sum = ${sum}`);
      addNumbers(sum, numsLeft - 1, callback);
    });      
  }
}




// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function askIfGreaterThan(el1,el2,callback){
  reader.question(`Is ${el1} > ${el2}?`, function(res){
      if (res === "yes") {
        callback(true);
      }else if (res === "no"){
        callback(false);
      }
  });
}

// askIfGreaterThan(2,1, function(answer){
//   console.log(`${answer}`);
//   reader.close();
// });

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }else {
    askIfGreaterThan(arr[i],arr[i+1], function(answer){
      if (answer === true){
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr,i+1,madeAnySwaps,outerBubbleSortLoop);
    });
  }
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) { 
      innerBubbleSortLoop(arr,0,false, outerBubbleSortLoop);
    }else{
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}
// 
// absurdBubbleSort([3, 2, 1,5,6,0], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

reader.close();

Function.prototype.myBind = function(context) {
  
  
  return () => {
    this.apply(context);
  };
};


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
