/**
 * 848. Shifting letters
 * 
 * Task:
 * We have a string S of lowercase letters, and an integer array shifts.
 * 
 * Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a'). 
 * 
 * For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
 * 
 * Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.
 * 
 * Return the final string after all such shifts to S are applied.
 * 
 * Example 1:
 * 
 * Input: S = "abc", shifts = [3,5,9]
 * Output: "rpl"
 * Explanation: 
 * We start with "abc".
 * After shifting the first 1 letters of S by 3, we have "dbc".
 * After shifting the first 2 letters of S by 5, we have "igc".
 * After shifting the first 3 letters of S by 9, we have "rpl", the answer.
 * Note:
 * 
 * 1 <= S.length = shifts.length <= 20000
 * 0 <= shifts[i] <= 10 ^ 9
 * 
 * Complexity:
 * Time: O(N + K)
 * Space: O(N)
 * Where N is length of the S
 * K is length of the shifts
 */

/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
    const res = [];
    let sum = shifts.reduce((a, v) => a + v);
    for (let i = 0; i < S.length && shifts.length; i++) {
        res.push(sh(S[i], sum % 26));
        sum -= shifts[i];
    }
    return res.join('');
};

function sh(ch, n) {
    let charCode = ch.charCodeAt(0) + n;
    return String.fromCharCode(charCode > 122 ? charCode - 26 : charCode);
}
