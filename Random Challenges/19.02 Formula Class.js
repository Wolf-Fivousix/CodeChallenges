/**
Pinterest
Write a class, which can be initialized with a formula as input.
Formula is a string, contains
Variable names -  eg. a, b, bc
Scalar - integers eg. 12, 1,
Basic operator only include (, ), + , -, *, /

Example: 
a + b - 12
a - c * b
(a - c) / b

Once an instance is initialized, it has a `calculate` method which expect a map/json object as input and return evaluated result 

Sample usage:

FormulaCalculator fc = new FormulaCalculator(“a + c * ”);

Map<String, Integer> input1 = new HashMap<>();
input1.put("a”, 1);
input1.put("b”, 2);
input1.put("c”, 3);

{
   a: 1,
   b: 2,
   c: 3
}

  3 * 2 = 6
  1 + 6 = 7
Map<String, Integer> input2 = new HashMap<>();
input2.put("a”, 2);
input2.put("b”, 3);
input2.put("c”, 4);

System.out.println(fc.calculate(input1)) // expect output : 7
System.out.println(fc.calculate(input2)) // expect output : 14


forumlaA = new FormulaCalculator("a + b");
formulaB = new FormulaCalculator("a * b");

* and / before + and -
so if a variable is missing, throw an exception.

analysing the formula given
using input to correctly process the output.
if a invalid formula is passed, throw an error.
  "a *"
  
  {
   a: 1,
   b: 2,
   c: 3
}
  "A - (B * C)" "(a - b) * c"
  ["A", "-", "(", "2", "*", "c", ")"]
  ["A", "-", "(", 6, ")"]
  ["1", "-", 6]
  [7]
  find the last opening parenthises
  
  "-", "+"
  "-", "("
  
  "a + (b - c" => error
  "a + b * c" => error
    "A - A"
    1 - 1
    a: 1
    b: 1
  

*/


class FormulaCalculator {
    constructor(formula) {
      this.formula = formula.split("").filter(char => char !== " ");
      if (validFormula()) throw "Formula creation error";
      
      this.variables = getVariables();    
    }
    
    
    calculate(input) {
      // assumption that input is valid intergers.
      for (let char in input) {
        if (this.variables[char]) this.variables[char] = input[char];
      }
      
      for (let key in this.variables) {
        if (this.variables[key] === undefined) throw "Invalid Input";
      }
      
      // Calculate the result
      
    }
    
    private
    
    analyseInput() {
      // To be implemented
      // Parenthesis check
      // signs check
    }
    
    getVariables() {
      const characters = this.formula.filter(char => 
                                               (char !== "+" &&
                                               char !== "-" &&
                                               char !== "*" &&
                                               char !== "/" &&
                                               char !== "(" &&
                                               char !== ")"
                                              ));
      const hash = {};
      characters.forEach(char => {
       if (!hash[char]) hash[char] = undefined;
      });
       
      return hash;
    }
    
  }
  
  
  
  
  
  
  
  
  
  
  