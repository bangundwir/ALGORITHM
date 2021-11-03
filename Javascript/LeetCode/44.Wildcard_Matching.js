// Wildcard Matching
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let dp = new Array(s.length + 1);
    for (let i = 0; i <= s.length; i++) {
        dp[i] = new Array(p.length + 1);
        for (let j = 0; j <= p.length; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = true;
            } else if (i === 0) {
                dp[i][j] = p[j - 1] === '*' ? dp[i][j - 1] : false;
            } else if (j === 0) {
                dp[i][j] = false;
            } else {
                if (p[j - 1] === '*') {
                    dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
                } else if (p[j - 1] === '?') {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = s[i - 1] === p[j - 1] && dp[i - 1][j - 1];
                }
            }
        }
    }
    return dp[s.length][p.length];  
};

console.log(isMatch('aa', 'a'));