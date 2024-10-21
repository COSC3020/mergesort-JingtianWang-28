# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

///\
The mergeInPlace function merges two subarrays in place, without using an additional array\
mergesort merges larger and larger subarrays in an iterative manner, eventually sorting the entire array, with each element being compared and moved at most once\
In each round of merging, merging all subarrays takes a total of O(n) time\
When the subarray size is 1, we need to merge n/2 pairs, each pair requires 2 elements to be compared, and a total of O(n) comparisons are required\
When the subarray size is 2, we need to merge n/4 pairs, each pair requires 4 elements to be compared, and a total of O(n) comparisons are required, and so on\

Assume an input containing N elements, and assume N is a power of 2.\
At each level, the subproblem is twice as large as half the elements of the previous input.\
This means that at j = 0, 1, 2, ..., logN there will be 2^j subproblems with an input length of N / 2^j.\
Because the size of the subarray doubles each time, a total of O(logn) rounds are required\
The total time complexity is O(n logn)
