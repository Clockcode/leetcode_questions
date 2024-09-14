// Correct Approach: In-Place Modification with O(1) Extra Space
// To comply with the problem constraints, you need to:

// Modify nums Directly: Rearrange elements within nums to place unique elements at the start.
// Use Minimal Extra Variables: Only use a few variables that do not depend on the size of nums.

//---//---// Correct Solution //---//---//

let nums = [0,0,1,1,1,2,2,3,3,4];

const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0; // Handle empty array

    let k = 0; // Index of the last unique element

    for(let i=1; i < nums.length; i++ ){
        // i = 1: nums[1] = 0 (duplicate), do nothing.
        if(nums[i] !== nums[k]){ // i = 2: nums[2] = 1 (new unique element):
            // assign a new unique value
            nums[i] = nums[k];
            // increment k
            k++;
       }
    }   
    // After completion, the first k + 1 elements in nums are the unique elements.
    return k + 1;
}

// Two-Pointer Technique:

// This technique uses two pointers (or indices) to traverse and modify the array efficiently.

    // Initialize Pointers:

    // k (slow-runner): Points to the position where the next unique element should be placed.
    // i (fast-runner): Iterates through the array to find unique elements.

    // Algorithm Steps:

    // Start with k = 0.
    // Loop i from 1 to nums.length - 1:
    // If nums[i] is not equal to nums[k]:
    // Increment k.
    // Set nums[k] = nums[i].

    // Explanation:

    // Since the array is sorted, duplicates are adjacent.
    // When a new unique element is found (nums[i] != nums[k]), it is placed at the position after the last unique element found.

// Space Complexity Analysis:

    // Extra Variables:
    // k and i are integers used for indexing.

    // Space Used:
    // The number of extra variables is constant and does not depend on the input size.

    // Conclusion:
    // The space complexity is O(1).