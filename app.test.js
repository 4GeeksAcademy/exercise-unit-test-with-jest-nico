// Import the function sum from the app.js file
const { sum }  = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {

    const { fromEuroToDollar } = require('./app.js');


    const dollars = fromEuroToDollar(3.5);

 
    const expected = 3.5 * 1.07; 
    
    
     expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One hundred dollars should be 14626.168224299065 yen", function() {
    
    const { fromDollarToYen } = require('./app.js');

   
    const yen = fromDollarToYen(3.5);

    
    const expected = (3.5 / 1.07) * 156.5; 
    

     expect(yen).toBe(expected); 
})

test("One hundred yen should be 0.5559105431309904", function() {
   
    const { fromYenToPound } = require('./app.js');
 
    const pound = fromYenToPound(3.5);

    const expected = (3.5 / 0.87) * 156.5 ; 
    
 
     expect(pound).toBe(expected); 
})


