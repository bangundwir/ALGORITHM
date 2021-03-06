def larger_pow(x):
    t = 1
    while t < x:
        t <<= 1
    return t

def range_sum(l, r):
    return (l + r) * (r - l + 1) // 2

def elder_age(m,n,l,t):
    if m == 0 or n == 0:
        return 0
    if m > n:
        m, n = n, m
    lm, ln = larger_pow(m), larger_pow(n)
    if l > ln:
        return 0

    if lm == ln:
        return (range_sum(1, ln - l - 1) * (m + n - ln) + elder_age(ln - n, lm - m, l, t)) % t
    
    if lm < ln:
        lm = ln // 2
        tmp = range_sum(1, ln - l - 1) * m - (ln - n) * range_sum(max(0, lm - l), ln - l - 1)
        if l <= lm:
            tmp += (lm - l) * (lm - m) * (ln - n) + elder_age(lm - m, ln - n, 0, t)
        else:
            tmp += elder_age(lm - m, ln - n, l - lm, t)
        return tmp % t

print(elder_age(8,5,1,100), 5)
print(elder_age(8,8,0,100007), 224)
print(elder_age(25,31,0,100007), 11925)
print(elder_age(5,45,3,1000007), 4323)
print(elder_age(31,39,7,2345), 1586)
print(elder_age(545,435,342,1000007), 808451)