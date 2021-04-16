# Word Seek

# 6sense
# Given a grid of letters, find the words in the grid. The letters can be in straight sequence in
# any of the 8 directions from the first character of the word. All words might not be in the
# grid. Print the word and the start row and column position for each word that is found. For
# words that are not found, print -1 for both the row and column position. All indices start
# from 0
# The accepted solution should have the lowest complexity ie. You should iterate over
# the grid of characters only once (not once per word). ie. If there are "n" words given,
# don't parse through the grid "n" times.
# The input words are sorted alphabetically. The output words should also be sorted.
# Sample Input - Here is a 4x4 grid of letters as sample input. The grid is followed the by the
# words to find after a blank line. All characters will be in upper case.

# ELEKTRAHTHORGV
# SILVERAORWTNSH
# AUAUAWREHSINUP
# HNERKCTNWHAMRR
# AFTEHSIITMASFA
# ICYMILDRRNCAEA
# IEIMAOIEEAERRL
# WWYTWNDVRMGEIO
# INVIDIBLEGAGRO
# TDHSPAEOHDCNOP
# CIOSKTTZTGEAND
# HFKOKPRNNLKRMA
# EBWOMANPAEUTAE
# UOFALCONPFLSND

# ANTMAN
# DAREDEVIL 
# DEADPOOL
# ELEKTRA
# HAWKEYE
# PUNISHER
# THING
# WITCH

# ANTMAN 2 0
# DAREDEVIL 13 13
# DEADPOOL 13 13
# ELEKTRA 0 0
# HAWKEYE 0 7
# PUNISHER 2 13
# THING 4 8
# WITCH 7 0


# STFHESPENTEOPB
# UULNTLEALNSTWA
# DYOTACNOEETINU
# DSWNSTARELSSUT
# EMEVITANNEDSAK
# NTRCGMIRERRDEE
# LFAINTOAEDEGAV
# YYLOACUPRWSGEP
# URGMLDAORAOEAD
# AMSCRIVBCOHMWE
# DSPADEMEBSGTIC
# RIDEUCEUEAISDI
# CIRYLATORWGATW
# OKEGURPBYROEHT
# ANTIC
# BRAG
# CABBAGE
# DEGREE
# DEUCE
# DIAPER
# DROVE
# EAGER
# ENACT
# FAINT
# FIRE
# FLOWER
# GLARE
# GRID
# HOSE
# LYRIC
# MATINEE
# MOWER
# NATIVE
# NOSE
# OMINOUS
# PADDLE
# PLANET
# POET
# RACE
# RADIO
# RELENT
# SCOUT
# SIGNAL
# SPADE
# SPENT
# STARE
# SUDDENLY
# TANNED
# THEORY
# TIARA
# TUSSLE
# TWICE
# UNITE
# VESSEL
# WIDTH

# ANTIC 1 7
# BRAG 13 7
# CABBAGE 7 5
# DEGREE 8 13
# DEUCE 11 2
# DIAPER 10 4
# DROVE 6 9
# EAGER 9 13
# ENACT 5 8
# FAINT 6 1
# FIRE -1 -1
# FLOWER 0 2
# GLARE 8 2
# GRID 13 3
# HOSE 9 10
# LYRIC 12 4
# MATINEE 8 3
# MOWER 9 11
# NATIVE 4 7
# NOSE 1 3
# OMINOUS 6 6
# PADDLE 7 13
# PLANET 0 6
# POET 0 12
# RACE 13 5
# RADIO 9 4
# RELENT 5 9
# SCOUT 10 9
# SIGNAL 3 4
# SPADE 10 1
# SPENT 0 5
# STARE 3 4
# SUDDENLY 0 0
# TANNED 4 5
# THEORY 13 13
# TIARA 4 5
# TUSSLE 3 13
# TWICE 13 13
# UNITE 2 13
# VESSEL 6 13
# WIDTH 9 12


# Enter your code here. Read input from STDIN. Print output to STDOUT

# Nothing said about repeated words in the grid.
# No constrains about grid size.

# Format input (matrix for letters and array for words)
# Create a letter hash.
# Create an answer array (same size of words input) which will store the Word's first letter position (if found).
    # Whatever word was not found, we can fill with [-1, -1]
# Since we'll be iterating forward only once, we don't need to check 4 of the directions.
# We'll check "right", "down", "left down" and "right down".


# HELPERS
# Given a letter and a word, find the distance between that letter and the first letter of the word.
# Check the grid from position A to position B.
    # If there's a match, check all letters of the word.
    

    
    
    
    
# Even simpler:
# Create a hash with all the first letters. (values will be arrays)
# Scan grid for the first letter of the words. Whenever one is found, add it's X,Y position to the hash.
# Iterate through the words array.
    # For every word, iterate through the hash for positions.
        # For every position
            # Cascade the 8 directions lookup.
            # Assumption: 1 might return true, if it does, add current [X, Y] and break the loop for next word.
    # If no match is found, add [-1, -1].
# Print answer in the correct format.

# Read input
grid = Array.new
words = Array.new
pointer = grid
ARGF.each do |line|
    input = line.chomp.strip.chars
    if input.length == 0
        pointer = words 
        next
    end
    
    pointer.push(input)
end

# Creat a hash with all the words first letters.
letter_hash = {}
words.each { |word| letter_hash[word[0]] = Array.new }

# Scan the grid and save the position of each letter.
grid.each_with_index do |row, x|
    row.each_with_index do |letter, y|
        letter_hash[letter].push([x, y]) if letter_hash.include?(letter)
    end
end

#####################################
# HELPERS: Direction scanners
def left_up_scan(grid, position, word)
    row, column = position
    return false if (row - word.length < -1 || column - word.length < -1)
    
    word.each_with_index do |char, i|
        return false if char != grid[row - i][column - i]
    end
    
    true
end

def up_scan(grid, position, word)
    row, column = position
    return false if (row - word.length < -1)
    
    word.each_with_index do |char, i|
        return false if char != grid[row - i][column]
    end
    
    true
end

def right_up_scan(grid, position, word)
    row, column = position
    return false if (row - word.length < -1 || column + word.length > grid[row].length)

    word.each_with_index do |char, i|
        return false if char != grid[row - i][column + i]
    end
    
    true
end

def right_scan(grid, position, word)
    row, column = position
    return false if (column + word.length > grid[row].length)
    
    word.each_with_index do |char, i|
        return false if char != grid[row][column + i]
    end
    
    true
end

def right_down_scan(grid, position, word)
    row, column = position
    return false if (row + word.length > grid.length || column + word.length > grid[row].length)
    
    word.each_with_index do |char, i|
        return false if char != grid[row + i][column + i]
    end
    
    true
end

def down_scan(grid, position, word)
    row, column = position
    return false if (row + word.length > grid.length)
    
    word.each_with_index do |char, i|
        return false if char != grid[row + i][column]
    end
    
    true
end

def left_down_scan(grid, position, word)
    row, column = position
    return false if (row + word.length > grid.length || column - word.length < -1)
    
    word.each_with_index do |char, i|
        return false if char != grid[row + i][column - i]
    end
    
    true
end

def left_scan(grid, position, word)
    row, column = position
    return false if (column - word.length < -1)
    
    word.each_with_index do |char, i|
        return false if char != grid[row][column - i]
    end
    
    true
end
# END OF HELPERS
#####################################

# Iterate through all words and positions and try to find a match.
answer = Array.new
words.each do |word|
    positions = letter_hash[word[0]]
    no_match = true
    
    positions.each do |position|
        # Cascade in all directions
        if (
            left_up_scan(grid, position, word) ||
            up_scan(grid, position, word) ||
            right_up_scan(grid, position, word) ||
            right_scan(grid, position, word) ||
            right_down_scan(grid, position, word) ||
            down_scan(grid, position, word) ||
            left_down_scan(grid, position, word) ||
            left_scan(grid, position, word)
        )
            answer.push(position)
            no_match = false
            break
        end
    end
    answer.push([-1, -1]) if no_match
end

# Print the answer
words.each_with_index do |_x, i|
    puts "#{words[i].join} #{answer[i][0]} #{answer[i][1]}"
end