/*
    Algorithms:

    Recursion - a function that calls itself.

    Example:

    write a function that prints the message hello
*/

// function sayHello() {
//     console.log('hello');
//     sayHello();
// }

// sayHello();

/*

    Recursion Tree:


    sayHello()
        - print hello
        - sayHello()
            - print hello
            - sayHello()
                - print hello
                - sayHello()
                    - ...
                    - ...
*/

// function sayHello() {
//     console.log('hello');
//     sayHello();
// }

// sayHello();

// problem: implement a recursive function 
// that prints hello for N times

// function sayHello(times) {
//     if (times == 0) return;
//     console.log('hello');
//     sayHello(times-1);
// }

// sayHello(3);

/*
    sayHello(5)
        - print hello
        - sayHello(4)
            - print hello
            - sayHello(3)
                - print hello
                - sayHello(2)
                    - print hello
                    - sayHello(1)
                        - print hello
                        - sayHello(0)
    
    sayHello(5)

*/

// problem: write a recursive function to print the first N natural numbers
/*
    N = 3
    Output: 
    1 
    2 
    3

    N = 5
    Output:

    1
    2
    3
    4
    5

*/

// function printNaturalNumbers(N) {
//     if (N == 0) return;
//     printNaturalNumbers(N - 1);
//     console.log(N);
// }

// printNaturalNumbers(5);

/*
    printNaturalNumbers(5):
        - N = 5; 5 == 0; false
        - printNaturalNumbers(4)
            - N = 4; 4 == 0; false
            - printNaturalNumbers(3)
                - N = 3; 3 == 0; false
                - printNaturalNumbers(2)    
                    - N = 2; 2 == 0; false
                    - printNaturalNumbers(1)
                        - N = 1; 1 == 0; false
                        - printNaturalNumbers(0)
                            - N = 0; 0 == 0; true; return
                        - console.log(N) x
                    - console.log(N) x
                - console.log(N) x
            - console.log(N) x
        - console.log(N) x

        printNaturalNumbers(5)
*/

// RECURRENCE RELATION

/*
    Problem: Write a recursion function to find the sum of
    the first N natural numbers.

    Input: N = 5
    Output: 15

    Explanation:

    1, 2, 3, 4, 5
    1 + 2 + 3 + 4 + 5 = 15

    Input: N = 10
    Output: 55

    Input: N = 8
    Output: 36
*/

/*
    Recurrence Relation:

    S(N) = ?

    Base Cases:

    For N = 0, S(0) = 0
    For N = 1, S(1) = 1

    For N>1:
    For N = 2, S(2) = 1 + 2 = 3
    For N = 3, S(3) = 1 + 2 + 3 = 6
    For N = 4, S(4) = 1 + 2 + 3 + 4 = 10
    For N = 5, S(5) = 1 + 2 + 3 + 4 + 5 = 15

    Backward Substitution:

    For N = 0, S(0) = 0
    For N = 1, S(1) = 1

    For N>1:
    For N = 2, S(2) = S(1) + 2 = 3
    For N = 3, S(3) = S(2) + 3 = 6
    For N = 4, S(4) = S(3) + 4 = 10
    For N = 5, S(5) = S(4) + 5 = 15

    For N = 0, S(0) = 0
    For N = 1, S(1) = 1
    For N>1, S(N) = S(N-1) + N

*/

function S(N) {
    // For N = 0, S(0) = 0
    if (N == 0) return 0;
    // For N = 1, S(1) = 1
    if (N == 1) return 1;
    // For N>1, S(N) = S(N-1) + N
    return S(N - 1) + N;
}

console.log(S(100));