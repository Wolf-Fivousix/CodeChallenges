# You have developed a scoring system for positive
# integers that works as follows:
# +5 points for every 7 found in the number. For
# example, 7571 would score 10 points.
# +6 points for each pair of consecutive 2s.  If
# there are more than two 2s in a row, add +6 for
# each additional 2, since it makes an additional
# pair (for example, four consecutive 2s gives
# +18).
# +N 2 points for a sequence of length N (N >= 1)
# where each digit is 1 less than the previous
# digit. For example, 9765320 (9-765-32-0) would
# be 1 + 3 2 + 2 2 + 1 = 15 points.
# +4 if the entire number is a multiple of 3
# +3 for each even digit (note that 0 is even)
# Each component of the score is evaluated
# separately, so a given digit may contribute to
# more than one component. For example, the
# number 765 would score 9 for the sequence of
# length 3, 3 for one even digit (6), 5 for the 7 digit,
# and 4 because 765 is a multiple of 3, for a total of
# 9 + 3 +5 + 4 = 21.
# Write a function compute_number_score that
# computes (and returns) a score for an integer
# passed to it. The number will be in the range
# 0<=number<1000000000.

# Complete the compute_number_score function below.
def compute_number_score(number)
    total_score = 0

    total_score += count_sevens(number)
    total_score += consecutive_twos(number)
    total_score += decreasing_digits(number)
    total_score += multiple_three(number)
    total_score += even_digits(number)

    total_score
end

def count_sevens(number)
    7 * number.to_s.chars.count{ |digit| digit.to_i == 7 }
end

def consecutive_twos(number)
    twos = []
    sequence = ""

    number.to_s.chars do |digit|
        if digit == "2"
            sequence.concat(digit)
        else
            twos.push(sequence) if sequence.length > 1
            sequence = ""
        end
    end

    twos.push(sequence) if sequence.length > 1
    score = 0
    twos.each do |consecutive|
        score += 6 * (consecutive.length - 1)
    end

    score
end

def decreasing_digits(number)
    sequences = []
    current = ""
    last_digit = 10

    number.to_s.chars do |digit|
        if current.length < 1
            current.concat(digit)
        else
            if digit.to_i == last_digit - 1
                current.concat(digit)
            else
                sequences.push(current)
                current = digit
            end
        end
        
        last_digit = digit.to_i
    end

    sequences.push(current)
    score = 0
    sequences.each do |string|
        score += string.length ** 2
    end

    score
end

def even_digits(number)
    score = 0

    number.to_s.chars{ |digit| score += 3 if digit.to_i.even? }

    score
end

def multiple_three(number)
    number % 3 == 0 ? 4 : 0
end


# 5/9 Test Cases
# Ran out of time to debug what was going on with the 4 missing cases.

# 1075456
# Your Output (stdout)
# 27
# Expected Output
# Download
# 25
# Input (stdin)
# Run as Custom Input
# |
# Download
# 321222158
# Your Output (stdout)
# 44
# Expected Output
# Download
# 44
# 22222
# Your Output (stdout)
# 44
# Expected Output
# Download
# 44