/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums = nums.sort((a, b) => (a - b));
    let sumArray = []
    for (let i = 0; i < nums.length; i += 2) {
        let minValue = Math.min(nums[i], nums[i + 1]);
        sumArray.push(minValue);
    }
    return sumArray.reduce((a, b) => (a + b));
};