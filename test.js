var findNumsAppearOnce = function (nums) {
  var sum = nums.reduce((a, b) => a ^ b);
  var ans = sum;
  var index = 0;
  while ((sum & 1) != 1) {
    index++;
    sum = sum >> 1;
  }
  var half = nums.filter(val => {
    return ((val >> index) & 1) === 1;
  });
  var res = [];
  res.push(half.reduce((a, b) => a ^ b));
  res.push(res[0] ^ ans);
  return res;
};

var nums = [3, 2, 6, 4, 2, 5, 6, 5, 0, 0, 1, 4];
console.log(findNumsAppearOnce(nums));
