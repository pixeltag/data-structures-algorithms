function processData(input) {
  //Enter your code here
  let data = input.split("\n");
  let phoneBook = new Map();
  // set the phonebook data
  for (let i = 1; i <= data[0]; i++) {
    let dataItem = data[i].split(" ");
    phoneBook.set(dataItem[0], dataItem[1]);
  }
  // get the search data
  let searchArr = data.splice(parseInt(data[0]) + 1, data.length - 1);
  for (const person of searchArr) {
    if (phoneBook.get(person)) {
      console.log(person + "=" + phoneBook.get(person));
    } else {
      console.log("Not found");
    }
  }
}

let input = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`;

processData(input);