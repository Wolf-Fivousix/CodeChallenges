def pascal_row(row_index)
    return [1] if row_index == 0
    return [1, 1] if row_index == 1
    triangle = [[1], [1,1]]
    while triangle.length <= row_index do
        previous_level = triangle[triangle.length-1]
        array = [1]
        (1...triangle.length).each do |index|
            array.push(previous_level[index-1] + previous_level[index])
        end
        array.push(1)
        triangle.push(array)
    end
    triangle[row_index]
end