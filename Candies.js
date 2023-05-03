/**
 * @param {number} totalCandies
 * @param {number[]} candies
 * @param {number} i
 * @return {boolean}
 */
 // Time Complexity: O(n^2)
var isGreater = function(totalCandies, candies, i){
    // assume that the result is true <- assumption
    let assumption = true;

    // traverse or iterate through the candies array except the index i <- index
    for(let index=0; index<candies.length; index++){
        if(index != i){
            // for every candy from candies array
            // check if the totalCandies is lesser than the candies[index]
            if(totalCandies < candies[index]){
                // if true => update our assumption
                assumption = false;
            }
        }
    }
    // return the assumption
    return assumption;
}

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // 0. create an empty boolean array <- result
    let result = [];

    // check if the extraCandies is greater than or equal to 1 and lesser than or equal to 50
    if(extraCandies>=1 && extraCandies<=50){
        // 1. traverse or iterate through the candies array <- i
        for(let i=0; i<candies.length; i++){
            //     2. for every position, candy
            //         3. find the totalCandies = candies[i] + extraCandies
            let totalCandies = candies[i] + extraCandies;
            //         4. check if the totalCandies is greater than or equal to all the other kid's candies
            //         except the position i
            if(isGreater(totalCandies, candies, i)){
                //             5. if true => push true to the result array
                result.push(true);
            } else{
                //             6. else push false to the result array
                result.push(false);
            }
        }
        
        // 7. return the result array
        return result;
    }
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
