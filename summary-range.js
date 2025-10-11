/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
     let resArray = [];
     for(let i=0; i<nums.length; i++) {
        let start = nums[i];
        while (nums[i] + 1 === nums[i+1]) {
            i++
        }
       let end = nums[i];
        if(start === end) {
            resArray.push(start.toString());
        } else {
            resArray.push(+start + "->" + end);
        }
     }
     return resArray;
};