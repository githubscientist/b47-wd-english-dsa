/**
 * TimeComplexity
 */

/*
    amount of time taken by an algorithm to run.!

    Measure the performance of an algorithm:

    1. Time Complexity
    2. Space Complexity

    Mathematical Notations: Asymptotic Notations

    1. Big - 'O' - Upper Bound
    2. Big - 'Ω' - Lower Bound
    3. Big - 'θ' - Tight Bound

    Situtations/Cases: (Inputs)

    1. Worst Case
    2. Best Case
    3. Average Case

    Example: 
    Algorithm: Linear Search

    Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    Case: If the Key = 1, Comparisons = 1 => Best Case => O(1)

    Case: If the Key = 5, Comparisons = 5 => Average Case => O(N/2) => O(N)

    Case: If the Key = 10 (last element) => 10 Comparisons - N Comparisons => Length of the input => Worst Case
          If the Key = 11 (element not present) => 10 Comparisons - N Comparisons => Worst Case
    => O(N)


    
*/

/*
    Example 1:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Options:

    O(1)
    O(logN)
    O(N)
    O(N logN)
    O(N^2)
    O(N^2 logN)
    O(N^3) 
    O(N^3 logN)
    O(2^N)
    O(N!)

    Solution: O(N+M)

    let a = 0, b = 0; // declarations, conditionals
    => O(1) , Constant Time


    for (i = 0; i < N; i++) {
        a = a + rand();
    }

    Total Executions = Values of i
    i = 0, 1, 2, 3, 4, .... N-1 => N


    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Total Executions = Values of j
    i = 0, 1, 2, 3, 4, .... M-1 => M

    Total Time Complexity, T(N, M) = 1 + N + M
                                   = N + M
                                   = O(N+M)



    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }

    Time Complexity: 
    
    T(N) = 1 + N + N
         = 1 + 2N
         = 2N
         = O(N)
    
    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }

    Time Complexity:

    T(N) = 1 + N * N
         = 1 + N^2
         = N^2
         = O(N^2)
    
    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }

    Example:

    N = 5
        i = 0; j = 0, 1, 2, 3, 4 => 5 times
        i = 1; j = 0, 1, 2, 3, 4 => 5 times
        i = 2; j = 0, 1, 2, 3, 4 => 5 times
        i = 3; j = 0, 1, 2, 3, 4 => 5 times
        i = 4; j = 0, 1, 2, 3, 4 => 5 times

        Total Executions = 5 + 5 + 5 + 5 + 5
                         = 25
    
    For N = 5, executions = 25
    For N = 4, executions = 16
    For N = 6, executions = 36

    N^2
*/

/*
    Example:

    let a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    Time Complexity: ?

    T(N) = O(N^2)

    Assume N = 5

    i = 0; j = 5, 4, 3, 2, 1 => 1 x 5 => 5 times
    i = 1; j = 5, 4, 3, 2 => 4 times
    i = 2; j = 5, 4, 3 => 3
    i = 3; j = 5, 4 => 2
    i = 4; j = 5 => 1

    Executions = 5 + 4 + 3 + 2 + 1
               = 15

    For N = 5, executions = 15
    For N = 6, executions = 21
    For N = 10, executions = 55
    For N = 4, executions = 10

    Executions = Sum of the first N natural numbers
               = (N * (N+1))/2
    
    T(N) = 1 + (N * (N+1))/2
         = 1 + 1/2(N^2 + N)
         = 1/2 * (N^2 + N)
         = N^2 + N
         = O(N^2)
*/

/*
    Example:

    let i, j, k = 0;
    for (i = n / 2; i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    }

    Time Complexity: ?

    N = 6, i = 3, 4, 5, 6
    N = 5, i = 2, 3, 4, 5, 6

    Outer loop: N/2 + 1

    Inner loop:
    j = 2, 4, 8, 16, 32, 64, 128, ....N

    N = 10; j = 2, 4, 8; executions = 3
    N = 40; j = 2, 4, 8, 16, 32; executions = 5
    N = 30; j = 2, 4, 8, 16; executions = 4
    N = 31; j = 2, 4, 8, 16; executions = 4
    N = 29; j = 2, 4, 8, 16; executions = 4

    => log N

    2^X = N, X is unknown, Solve for X?

    Apply log2 on both the sides,

    log2(2^X) = log2(N)

    X log2(2) = log2(N)    [Since, loga(b^x) = x loga(b)]
    X(1) = log2(N)        [Since, loga(a) = 1]
    X = log2(N)


    T(N) = 1 + (N/2 + 1) * logN
         = N/2 logN + logN
         = 1/2 * N logN
         = O(N logN)
*/

/*
    O(2^N)

    Problem: Given an array of values, find how many ways we can select the values from the array.

    Input: [1, 2, 3]
    Output: 8

    Select:
    0 values => ()
    1 values => (1), (2), (3)
    2 values => (1, 2), (2, 3), (1, 3)
    3 values => (1, 2, 3)

    Input: [1, 2, 3, 4]
    Output: 16

    Select:
    0 values => ()
    1 values => (1), (2), (3), (4)
    2 values => (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)
    3 values => (1, 2, 3), (1, 2, 4), (1, 3, 4), (2, 3, 4)
    4 values => (1, 2, 3, 4)

    N = 3, number of ways = 8
    N = 4, number of ways = 16

    2^N
*/

/*
    N!

    Problem: Given a string, S, find how many ways we can re-arrange the characters to form a new string.

    Input: 'abc'
    Output: 6

    abc
    acb
    bac
    bca
    cab
    cba

    Input: ab
    Output: 2

    ab
    ba

    Input: abcd
    Output: 24

    abdc
    acbd
    acdb
    adbc
    abdc
    badc
    bdca
    ...

    N = 3, number of ways = 6
    N = 2, number of ways = 2
    N = 4, number of ways = 24

    N! = N * N-1 * N-2 * .... * 1

    5! = 5 x 4 x 3 x 2 x 1 = 120

*/

