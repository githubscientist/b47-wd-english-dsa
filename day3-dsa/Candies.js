/**
 * @param {number} totalCandies
 * @param {number[]} candies
 * @param {number} i
 * @return {boolean}
 */
 // Time Complexity: O(n^2)
// var isGreater = function(totalCandies, candies, i){
//     // assume that the result is true <- assumption
//     let assumption = true;

//     // traverse or iterate through the candies array except the index i <- index
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             // for every candy from candies array
//             // check if the totalCandies is lesser than the candies[index]
//             if(totalCandies < candies[index]){
//                 // if true => update our assumption
//                 assumption = false;
//             }
//         }
//     }
//     // return the assumption
//     return assumption;
// }

// Time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){

//     // traverse or iterate through the candies array except the index i <- index
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             // for every candy from candies array
//             // check if the totalCandies is lesser than the candies[index]
//             if(totalCandies < candies[index]){
//                 // if true => update our assumption
//                 return false;
//             }
//         }
//     }
//     // return the assumption
//     return true;
// }

// var isGreater = function(totalCandies, candies){
//     for(let index=0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             return false;
//         }
//     }
//     return true;
// }

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// var kidsWithCandies = function(candies, extraCandies) {
//     // 0. create an empty boolean array <- result
//     let result = [];

//     // check if the extraCandies is greater than or equal to 1 and lesser than or equal to 50
//     if(extraCandies>=1 && extraCandies<=50){
//         // 1. traverse or iterate through the candies array <- i
//         for(let i=0; i<candies.length; i++){
//             //     2. for every position, candy
//             //         3. find the totalCandies = candies[i] + extraCandies
//             let totalCandies = candies[i] + extraCandies;
//             //         4. check if the totalCandies is greater than or equal to all the other kid's candies
//             //         except the position i
//             if(isGreater(totalCandies, candies)){
//                 //             5. if true => push true to the result array
//                 result.push(true);
//             } else{
//                 //             6. else push false to the result array
//                 result.push(false);
//             }
//         }
        
//         // 7. return the result array
//         return result;
//     }
// };

// time complexity: O(N)
// given the candies array, find and return the greatest value from the candies array
// var findGreatestCandy = function(candies){
//     // assume that the first candy from candies array is the greatest candy
//     let greatestCandy = candies[0];

//     // traverse through the candies array and check if the assumption still holds true
//     // if not, we need to update the greatestCandy assumption
//     for(let index=1; index<candies.length; index++){
//         if(candies[index] > greatestCandy){
//             greatestCandy = candies[index];
//         }
//     }
//     return greatestCandy;
// }

/*
    Time Complexity, T(N) = 1 + N + N = 1 + 2N = 2N = O(N)
*/
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = findGreatestCandy(candies); // O(N)

//     // O(N)
//     if(extraCandies>=1 && extraCandies<=50){
//         for(let i=0; i<candies.length; i++){
//             let totalCandies = candies[i] + extraCandies;
//             if(totalCandies >= greatestCandy){
//                 result.push(true);
//             } else{
//                 result.push(false);
//             }
//         }
//         return result;
//     }
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);

//     if(extraCandies>=1 && extraCandies<=50){
//         for(let i=0; i<candies.length; i++){
//             let totalCandies = candies[i] + extraCandies;
//             if(totalCandies >= greatestCandy){
//                 result.push(true);
//             } else{
//                 result.push(false);
//             }
//         }
//         return result;
//     }
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);

//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else{
//             result.push(false);
//         }
//     }

//     return result;
// };

// O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);

//     for(let i=0; i<candies.length; i++){
//         result.push(candies[i] + extraCandies >= greatestCandy);
//     }
    
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     candies.forEach(candy => result.push(candy + extraCandies >= greatestCandy));
//     return result;
// };

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     // candies.forEach(candy => result.push(candy + extraCandies >= greatestCandy));
//     result = candies.map((candy) => candy + extraCandies >= greatestCandy);
//     return result;
// };

// O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map((candy) => candy + extraCandies >= greatestCandy);
// };

// O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map((candy) => candy + extraCandies >= Math.max(...candies));
};

/*
    candies -> [2, 3, 5, 1, 3]
               [0][1][2][3][4]
    
    extraCandies = 3

    result - length of n
    [true, true, true, false, true]

    i = 0
        candies[0] + extraCandies
    =   2 + 3
    =   5 > [3, 5, 1, 3]
    5 >= 3 true
    5 >= 5 true
    5 >= 1 true
    5 >= 3 true

    i = 1
    totalCandies = 3 + 3 = 6
    6 >= [2, 5, 1, 3]

    i = 2
    totalCandies = 5 + 3 = 8
    8 >= [2, 3, 1, 3]

    i = 3
    totalCandies = 1 + 3 = 4
    4 >= [2, 3, 5, 3]

    i = 4
    totalCandies = 3 + 3 = 6
    6 >= [2, 3, 5, 1]

    greatestValue = 5
    totalCandies = 6

    greatestValue is greater than all the other kids candies
    if totalCandies is greater than greatestValue
*/

/*
    Algorithm:

    0. create an empty boolean array <- result
    1. traverse or iterate through the candies array <- i
        2. for every position, candy
            3. find the totalCandies = candies[i] + extraCandies
            4. check if the totalCandies is greater than or equal to all the other kid's candies
            except the position i
                5. if true => push true to the result array
                6. else push false to the result array
    7. return the result array
*/
