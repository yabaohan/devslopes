// Part 2: Sorting From Scratch
// Create a function that takes an array of numbers.
// Without using built-in functionality sort the array.

const sortIt = (nums) => {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < nums.length; i += 1) {
        if (nums[i - 1] > nums[i]) {
          done = false;
          [nums[i - 1], nums[i]] = [nums[i], nums[i - 1]];
        }
      }
    }
    return nums;
  }
  console.log(sortIt(holla));