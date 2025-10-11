/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    function swap(index1,index2) {
        [nums[index1],nums[index2]] = [nums[index2], nums[index1]];
    }
    let start = 0;
    let end = nums.length -1;
    let i = 0;
    while (i <= end) {
        let n = nums[i];
        if(n == 0) {
            swap(i,start);
            start ++;
            i++
        } else if (n ==2) {
            swap(i,end);
            end--
        } else {
            i++
        }
    }
};