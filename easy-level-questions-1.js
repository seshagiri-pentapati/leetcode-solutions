
// ====================

// https://leetcode.com/problems/minimum-deletions-for-at-most-k-distinct-characters/

var minDeletion = function (s, k) {
	let o = {};
	for (let ch of s) {
		o[ch] = (o[ch] || 0) + 1;
	}

	let vas = [...Object.values(o)].sort((a, b) => b - a);
	let newVas = vas.slice(k);
	return newVas.reduce((s, x) => s + x, 0);
};

// ====================

// https://leetcode.com/problems/equal-score-substrings/

const charCode = ch => ch.charCodeAt(0);
const position = ch => charCode(ch) - charCode('a') + 1;

var scoreBalance = function (s) {
	let cummulativeScores = [];
	let totalScore = 0;

	for (let ch of s) {
		let pos = position(ch);
		totalScore += pos;
		cummulativeScores.push(totalScore);
	}

	return cummulativeScores.includes(totalScore / 2);
};

// ====================

// https://leetcode.com/problems/compute-alternating-sum/

var alternatingSum = function (nums) {
	let sumEven = 0;
	let sumOdd = 0;
	nums.forEach((x, i) => {
		if (i % 2 === 0) {
			// even
			sumEven += x;
		} else {
			sumOdd += x;
		}
	});
	let alternatingSum = sumEven - sumOdd;
	return alternatingSum;
};

// ====================

// https://leetcode.com/problems/sum-of-elements-with-frequency-divisible-by-k/

var sumDivisibleByK = function (a, k) {
	let o = {};
	for (let x of a) {
		o[x] = o[x] || 0;
		o[x]++;
	}

	let sumOfEles = 0;
	let keyVals = [...Object.entries(o)];
	for (let [x, count] of keyVals) {
		if (count % k === 0) {
			sumOfEles += x * count;
		}
	}
	return sumOfEles;
};

// ====================

// https://leetcode.com/problems/compute-decimal-representation/

var decimalRepresentation = function (n) {
	let r = []; // result
	let multipleFactor = 1;
	while (n > 0) {
		let reminderLastDigit = n % 10;
		n = Math.trunc(n / 10);
		if (reminderLastDigit > 0) {
			r.push(reminderLastDigit * multipleFactor);
		}
		multipleFactor *= 10;
	}
	return r.reverse();
};

// ====================
