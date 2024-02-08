let testScores = function(listOfTestScores){
    let newArray = []
    listOfTestScores.filter((numbers)=>{
        if(numbers >= 70){
        newArray.push(numbers);
        }
        

    });
    return newArray;
}

let tomAddScores = function(beforeAdd){
    let newArray = []
    beforeAdd.map((numbers) =>{
       newArray.push(numbers + 5 )
    
    })

return newArray;
}

let jackSquare= function(theList){
    let newArray = []
     theList.map((numbers) =>{
        newArray.push(numbers * numbers);
     })
     return newArray;
}

let array1 = [20,78,89,65,99,65];
let testScore = testScores(array1);
console.log(testScore);

let array2 = [85,92,78,88,95];
let tomAdd = tomAddScores(array2);
console.log(tomAdd)

let array3 = [2, 4 ,6, 8, 10];
let jack = jackSquare(array3);
console.log(jack)

let sarahBookClub = function(){
    let listOfFriends = [
        {name:"Emily",
        book:""},

        {name:"Jack",
        book:""},

        {name:"Sophia",
        book:""},

        {name:"Daniel",
        book:""}
    ]
    let listOfBooks = ["Niv Bible","King james Bible","Nlt Bible","Good news Bible"]
    let count = 0;
    for( friends of listOfFriends){
        listOfFriends[count].book = listOfBooks[count]
        count++
    }
    return listOfFriends;
}

let array4 =  sarahBookClub();
console.log(array4);

let jakeSchedule = function(){
    let listOfClassTiming = ["9:00 Am","11:00 Am","1:00 Am","3:00 Pm","5:00 Pm"]
    listOfClassTiming.filter((number)=> {
        
    })
    
}

let daveExpenseTracker = function(){
    let count = 0;
    let expenses = [
        {category:"grocery",
        Amount: 150},

        {category:"dining",
        Amount: 100},

        {category:"transportation",
        Amount: 50},

        {category:"entertainment",
        Amount: 80}       
    ]
    let totalExpense =0
    for(items in expenses){
            totalExpense += expenses[count].Amount
            count++
    }
    return totalExpense;
}

let daveExpenses = daveExpenseTracker();
console.log(daveExpenses);

module.exports = {testScores,tomAddScores,sarahBookClub,daveExpenseTracker,jackSquare}