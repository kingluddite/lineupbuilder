// function compare(value1, value2) {
    //   if (value1 < value2) {
    //     return -1;
    //   } else if (value1 > value2) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // }

    // var values = [0, 1, 5, 10, 15];
    // values.sort(compare);
    // console.log(values);

// problem with sort()
// var values = [0, 1, 5, 10, 15];
// values.sort();
// console.log(values); // 0,1,10,15,5
// turns them to strings with toString() method - not what we want
// sort() and reverse()
// var values = [1, 2, 3, 4, 5];
// values.reverse();
// console.log(values); //5, 4, 3, 2, 1

// unshift()
// var colors = new Array(); // create a new array
// var count = colors.unshif('red', 'green'); // push 2 items
// count = colors.unshift('black'); // push another item on
// console.log(count); // 3
// var item = colors.pop(); // get the first item
// console.log(item); // 'green'
// console.log(colors.length); // 2


// FIFO structure
// a queue adds items to the end of a list and retrieves items from the front of the list
// var colors = new Array(); // creates an array
// var count = colors.push('red', 'green'); // push two items
// console.log(count); // outputs 2
// count = colors.push('black'); // push another item on
// console.log(count); // 3
// var item = colors.shift(); // get the first item
// console.log(item); // 'red'
// console.log(colors.length); // 2
// console.log(colors[0]); //'green'
// console.log(colors[colors.length - 1]); // 'black'


// var colors = ['red', 'blue'];
// colors.push('brown');
// colors[3] = 'black';
// console.log(colors.length);

// var item = colors.pop();
// // get the last item
// console.log(item);

// stack LIFO - Last In First Out
// var colors = new Array();
// var count = colors.push('red', 'green');
// console.log(count);
// count = colors.push('black');
// console.log(count);
// var item = colors.pop();
// console.log(item);
// console.log(colors.length);
// var item2 = colors.pop();
// console.log(item2);
// console.log(colors.length);
// var colors = ['red', 'blue', 'green'];
// console.log(colors.join('*'));
// console.log(colors.join('||'));
// console.log(colors.join(undefined));
// console.log(colors.join());

// var person1 = {
//   toLocaleString: function() {
//     return 'phil';
//   },

//   toString: function() {
//     return 'Philip';
//   }
// };

// var person2 = {
//   toLocaleString: function() {
//     return 'Howley';
//   },

//   toString: function() {
//     return 'Phil';
//   }
// };

// var people = [person1, person2];
// console.log(people);
// console.log(people.toString());
// console.log(people.toLocaleString());
// var colors = ['red', 'blue', 'green'];
// console.log(colors.toString());
// console.log(colors.valueOf());
// console.log(colors);
