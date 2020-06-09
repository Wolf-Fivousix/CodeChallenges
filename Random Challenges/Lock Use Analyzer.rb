# Suppose we want to monitor how locks are used in our
# system. As the first step, we log moments of acquire and
# release for each lock in the following format:
# ACQUIRE X
# RELEASE X
# where X is some integer ID (1<=X<=1,000,000) of the
# lock.
# All locks must be released in the reverse order of
# acquiring them; for example, this is a correct event
# sequence:
# 1. ACQUIRE 364
# 2. ACQUIRE 84
# 3. RELEASE 84
# 4. ACQUIRE 1337
# 5. RELEASE 1337
# 6. RELEASE 364
# However, the following sequence violates this rule,
# because lock 84 is still acquired while releasing lock 364:
# 1. ACQUIRE 364
# 2. ACQUIRE 84
# 3. RELEASE 364
# 4. RELEASE 84
# It's also dangerous to leave locks acquired after
# application termination, as other processes in the system
# may be blocked while waiting on them, so such sequence
# is incorrect, too:
# 1. ACQUIRE 364
# 2. ACQUIRE 84
# 3. RELEASE 84
# Third type of problem is lock misuse: it's never good to
# release a lock that has never been acquired, e.g.:
# 1. ACQUIRE 364
# 2. RELEASE 84
# 3. RELEASE 364
# and it is as bad to acquire an already acquired lock
# (usually resulting in a deadlock):
# 1. ACQUIRE 364
# 2. ACQUIRE 84
# 3. ACQUIRE 364
# 4. RELEASE 364
# Write a program that, given a list of N
# (0<=N<=1,000,000) lock acquire and release events
# (counting from 1), checks if there were any problems
# (acquire-release order violation, dangling acquired lock,
# acquiring a lock twice or releasing a free lock), and if so,
# tells the earliest time that could be detected. Note that
# there's no limit on how many nested locks may be
# acquired at any given moment.
# More formally, you are given an array of strings where
# each string is either "ACQUIRE X" or "RELEASE X", where
# all Xs are integers in the range [1..1000000].
# Return:
# 0, if there were no lock-related problems even after
# program termination
# N+1, if the only issue after program termination were
# dangling acquired locks
# K, in case event number K violated any of the principles
# (release a lock not acquired previously, acquire an
# already held lock OR violate lock acquire-release
# ordering).
# Examples:
# Input:
# 1. ACQUIRE 364
# 2. ACQUIRE 84
# 3. RELEASE 84
# 4. RELEASE 364
# 2. ACQUIRE 84
# 3. RELEASE 364
# 4. RELEASE 84
# Output: 3 (lock 84 should have been released before
# releasing 364)
# Input:
# 1. ACQUIRE 123
# 2. ACQUIRE 364
# 3. ACQUIRE 84
# 4. RELEASE 84
# 5. RELEASE 364
# 6. ACQUIRE 456
# Output: 7 (upon terminating, not all locks were released,
# namely 123 and 456, but we can't know that until actually
# exiting)
# Input:
# 1. ACQUIRE 123
# 2. ACQUIRE 364
# 3. ACQUIRE 84
# 4. RELEASE 84
# 5. RELEASE 364
# 6. ACQUIRE 789
# 7. RELEASE 456
# 8. RELEASE 123
# Output: 7 (releasing a lock not acquired before)
# Input:
# 1. ACQUIRE 364
# 2. ACQUIRE 84
# 3. ACQUIRE 364
# 4. RELEASE 364
# Output: 3 (acquiring an already held lock)

# Ran out of time to implement this solution, but it is not too hard:
# We need to keep track of the current step for early returns.
# We will keep track of the current lock by using a stack. Whenever we encounter a "release" instruction, we pop out and compare.
# If they are different, we return.
# We also need to keep track of what locks are currently in place. When we acquire a new lock we do not want to traverse a whole stack,
# looking for the lock. We can use a simple hash to keep track of active locks.
# Anytime a "acquire" instruction is received, we check to see if the same lock is in place.
# If it is, return.
# otherwise, add to the stack and move on.

# That's the basic idea for the solution.