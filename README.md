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

In-place merge sort does not use extra space.
When merging the elements of the right subarray, the elements of the left subarray must be moved to the right.
In the worst case, each time an element is inserted from the right subarray, multiple elements of the left subarray may be moved to the right.
Therefore, the time complexity of each merge becomes $O(n^2)$.
So the worst case time complexity is $O(n^2 log(n))$

###\
https://stackoverflow.com/questions/1557894/non-recursive-merge-sort
https://stackoverflow.com/questions/7801861/why-is-merge-sort-worst-case-run-time-o-n-log-n
https://www.geeksforgeeks.org/merge-sort/
\
Sources: chatgept provide me with ideas for proof methods. And complete the assignment through the examples and theorems on the above website.

Plagiarism Statement: “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
