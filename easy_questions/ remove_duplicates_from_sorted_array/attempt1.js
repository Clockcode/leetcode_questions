// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. 
// Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements 
// in the order they were present in nums initially. 
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Custom Judge:
// The judge will test your solution with the following code:
// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length
// int k = removeDuplicates(nums); // Calls your implementation
// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 

// Constraints:
// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

//---//---// Solution 1 //---//---//
let nums = [0,0,1,1,1,2,2,3,3,4];

const removeDuplicates = (nums) => {
    let unique_nums = [];
    let k = 0;
    for(let i=0; i < nums.length; i++ ){
        if(!unique_nums.includes(nums[i])){
            // in the order they were present in nums initially. 
            unique_nums.push(nums[i]);
            k++;
        }
    }
    const result = {unique_nums, k}
    return result;
}


//---//---// Review of the Solution //---//---//

// Used Extra Space by using an extra array called unique_nums.
// The problem expects an in-place solution with O(1) extra space complexity.

// I was required to modify the input array nums in-place without using extra space for another array.
// Solution creates a new array unique_nums to store unique elements, which uses O(n) extra space.

// How does Big O Complexity causes a problem in this question?

// Creating a new array (unique_nums) to store unique elements from nums 
// can potentially lead to n numbers of elements taking up extra space in unique_nums array.

// Problem wants the solution to be O(1) space allocation. 
// Meaning the solution can only have fixed amount of extra variables. 
// And They can not grow based on the input (n).

// What is Big O Complexity?
// Big O notation is a mathematical concept used to describe the performance or complexity of an algorithm. It characterizes functions according to their growth rates: how the time or space requirements grow as the input size grows.

// Time Complexity: How the computation time increases with input size.
// Space Complexity: How the memory usage increases with input size.

// Common Big O Notations:

// O(1) - Constant Time/Space:

// The algorithm's performance or space requirement does not change with the input size.
// Example: Accessing a specific element in an array.

// O(n) - Linear Time/Space:

// The algorithm's performance or space requirement grows linearly with the input size.
// Example: Looping through an array of size n.

