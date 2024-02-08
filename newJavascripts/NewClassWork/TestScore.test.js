const{testScores,tomAddScores,sarahBookClub,daveExpenseTracker,jackSquare} = require("./TestScores");
test("Return test scores greater than 70",()=>{
    let array1 = [20,78,89,65,99,65];
    let result = testScores(array1)
    let answer = [78,89,99]
    expect(result).toEqual(answer)
});

test("Tom adds 5 to all students scores ",()=>{
    let array2 = [85,92,78,88,95];
let tomAdd = tomAddScores(array2);
let answer = [90,97,83,93,100]
expect(tomAdd).toEqual(answer)
});




