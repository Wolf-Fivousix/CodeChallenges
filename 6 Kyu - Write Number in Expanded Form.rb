# You will be given a number and you will need to return it as a string in Expanded Form. For example:

# expanded_form(12); # Should return '10 + 2'
# expanded_form(42); # Should return '40 + 2'
# expanded_form(70304); # Should return '70000 + 300 + 4'
# NOTE: All numbers will be whole numbers greater than 0.

def expanded_form(num)
    multiplier = 1;
    numbers = [];
    while num > 0 do
        value = num % 10;
        numbers.unshift(value * multiplier) unless value < 1
        multiplier *= 10
        num /= 10
    end
    
    numbers.join(" + ")
end