/*
Given: N = [(0,1),(1,1),(2,2),...]
   Int K < len(N)
   Point P (x,y)
   
func dist(P1,P2) -> Float   

Return: The set of K elements in N closest to P

EX:
N = [(0,1),(1,1),(2,2)]
K = 2
P = (0,0)
Return: [(0,1),(1,1)]

No empty input
And no K = 0
Input is an array of arrays with 2 elements.

N = [(1,1), (-1,-1), (2,2)]
K = 1
P = (0,0)
Return: [(1,1)]
If the distance between 2 points is the same, any point works.

N = [(10,10), (1,1), (-1,-1), (2,2)]
K = 2
P = (0,0)
Return: [(1,1), (-1,-1)]

Define a hash table of distances (keys). Starts empty.
Iterate through input.
    For each element, we calculate the distance of element and origin (P)
        Add the element to the key of distance.
        (if it does not exist, create it)
        (if it does exist, add to it)
Define result array as empty.
Iterate through the hash table (in order)
    iterate through value array (1 or more elements)
        add each element to result array.
        if we reach K size, return result array.
return result array
*/