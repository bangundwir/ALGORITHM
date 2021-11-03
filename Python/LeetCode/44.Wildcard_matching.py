# Wildcard matching
class Solution:
    def isMatch(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: bool
        """
        if not p:
            return not s
        if len(p) == 1:
            return s == p or p == '?'
        if p[1] != '*':
            return (s and (s[0] == p[0] or p[0] == '?') and self.isMatch(s[1:], p[1:]))
        else:
            return self.isMatch(s, p[2:]) or (s and (s[0] == p[0] or p[0] == '?') and self.isMatch(s[1:], p))   

print(Solution().isMatch("aa", "a"))