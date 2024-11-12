/*
DNA Sequence: string of ATCG characters
Gene: named region of a DNA sequence: ('cryIA', 7, 16), ('35S', 16, 26)
Protein: composed of one or more consecutive genes: ('cryIA_35S', 7, 26) (end index of gene == start index of next gene)
Example:
genes = [
    ('35S', 0, 7),
    ('cryIA', 7, 16),
    ('brca2', 7, 22),
    ('PEP', 4, 11),
    ('35S', 15, 22),
    ('cry9C', 11, 22),
    ('PS', 22, 28),
]
Example:
ATTGATTACCCATGAATTGATTCTTATC        Sequence
<-35S-><------brca2-->              Genes
       <-cryIA->
    <-PEP->
               <-35S->
           <-cry9C--->
                      <-PS->
Goal: find all proteins our genes code for, and their start/end indices
Expected result: [
    # underscore-joined gene names, protein start, protein end
    ('35S', 0, 7),
    ('cryIA', 7, 16),
    ('PEP', 4, 11),
    ('35S', 15, 22),
    ('brca2', 7, 22),
    ('cry9C', 11, 22),
    ('PS', 22, 28),
    ('35S_cryIA', 0, 16),
    ('PEP_cry9C', 4, 22),
    ('PEP_cry9C_PS', 4, 28),
    ('cry9C_PS', 11, 28),
    ('35S_PS', 15, 28),
    ('35S_brca2', 0, 22),
    ('35S_brca2_PS', 0, 28),
    ('brca2_PS', 7, 28),
]
*/

interface NamedRegion {
    name: string;
    startIndex: number;
    endIndex: number;
  }
  
  type Gene = NamedRegion;
  type Protein = NamedRegion;
  
  const exampleGenes: Array<Gene> = [
    {
      name: "cryIA",
      startIndex: 7,
      endIndex: 16,
    },
    {
      name: "PEP",
      startIndex: 4,
      endIndex: 11,
    },
    {
      name: "cry9C",
      startIndex: 11,
      endIndex: 22,
    },
    {
      name: "PS",
      startIndex: 22,
      endIndex: 28,
    },
    {
      name: "35S",
      startIndex: 15,
      endIndex: 22,
    },
    {
      name: "35S",
      startIndex: 0,
      endIndex: 7,
    },
    {
      name: "brca2",
      startIndex: 7,
      endIndex: 22,
    },
  ];
  
  function findProteins(genes: Array<Gene>): Array<Protein> {
    // Transcribe genes input into hashtable
    // traverse the hashtable and combine the genes into proteins.
  
    const geneTable = createGeneTable(genes)
    const startIndexesArray = Object.keys(geneTable)
    const resultProteins = []
    for (let i = 0; i < startIndexesArray.length; ++i) {
      const stack = []
      geneTable[i].forEach(gene => {
        resultProteins.push(gene)
        stack.push(gene.endIndex)
      })
  
      while (stack.length) {
        const currentIndex = stack.pop()
        geneTable[currentIndex].forEach(gene => {
          // resultProteins.push(gene)
          stack.push(gene.endIndex)
          /*
          Right now, we are only saving the endIndex, and that makes us loose the information about the genes between 1st gene and last gene.
          In order to avoid that, we could save the Gene itself in the stack, instead.
          But to make that work, we need to combine multiple genes into a protein, before saving it to the stack.
  
          Next steps:
            - Combining 2+ genes into a protein
            - Fix the iterative loop.
            - We are doing repetitive work, which can be optmized later.
          */
        })
      }
    }
  
    return resultProteins;
  }
  
  function createGeneTable(genes: Array<Gene>) {
    const geneTable = {}
  
    genes.forEach(element => {
      if (geneTable[element.startIndex]) {
        geneTable[element.startIndex].push(element)
      }
      else {
        geneTable[element.startIndex] = [element]
      }
    })
  
    return geneTable
  }
  
  const expectedResult: Array<Protein> = [
    { name: "35S", startIndex: 0, endIndex: 7 },
    { name: "cryIA", startIndex: 7, endIndex: 16 },
    { name: "PEP", startIndex: 4, endIndex: 11 },
    { name: "35S", startIndex: 15, endIndex: 22 },
    { name: "brca2", startIndex: 7, endIndex: 22 },
    { name: "cry9C", startIndex: 11, endIndex: 22 },
    { name: "PS", startIndex: 22, endIndex: 28 },
    { name: "35S_cryIA", startIndex: 0, endIndex: 16 },
    { name: "PEP_cry9C", startIndex: 4, endIndex: 22 },
    { name: "PEP_cry9C_PS", startIndex: 4, endIndex: 28 },
    { name: "cry9C_PS", startIndex: 11, endIndex: 28 },
    { name: "35S_PS", startIndex: 15, endIndex: 28 },
    { name: "35S_brca2", startIndex: 0, endIndex: 22 },
    { name: "35S_brca2_PS", startIndex: 0, endIndex: 28 },
    { name: "brca2_PS", startIndex: 7, endIndex: 28 },
  ];
  
  const result = findProteins(exampleGenes);
  
  if (!areProteinArraysEqual(result, expectedResult)) {
    throw new Error("Test case failed");
  } else {
    console.log("Passed!");
  }
  
  
  // Convenience function to compare proteins
  
  function areProteinArraysEqual(
    proteinsA: Array<Protein>,
    proteinsB: Array<Protein>
  ): boolean {
    const compareProteins = (proteinA: Protein, proteinB: Protein): number => {
      return (
        proteinA.name.localeCompare(proteinB.name) ||
        proteinA.startIndex - proteinB.startIndex ||
        proteinA.endIndex - proteinB.endIndex
      );
    };
    const proteinsAsorted = proteinsA.sort(compareProteins);
    const proteinsBsorted = proteinsB.sort(compareProteins);
    return proteinsAsorted.length === proteinsBsorted.length &&
      proteinsAsorted.reduce((passed: boolean, proteinA: Protein, index: number) => {
          const proteinB = proteinsB[index];
          return passed && proteinA.name === proteinB.name &&
              proteinA.startIndex === proteinB.startIndex &&
              proteinA.endIndex === proteinB.endIndex;
      }, true);
  }
  
  // Your previous Plain Text content is preserved below:
  
  // DNA Sequence: string of ATCG characters
  // Gene: named region of a DNA sequence: ('cryIA', 7, 16), ('35S', 16, 26)
  // Protein: composed of one or more consecutive genes: ('cryIA_35S', 7, 26) (end index of gene == start index of next gene)
  
  // genes = [
  //    ('35S', 0, 7),
  //    ('cryIA', 7, 16),
  //    ('brca2', 7, 22),
  //    ('PEP', 4, 11),
  //    ('35S', 15, 22),
  //    ('cry9C', 11, 22),
  //    ('PS', 22, 28),
  // ]
  
  // Example:
  // ATTGATTACCCATGAATTGATTCTTATC        Sequence
  // <-35S-><------brca2-->              Genes
  //        <-cryIA->
  //    <-PEP->
  //               <-35S->
  //           <-cry9C--->
  //                      <-PS->
  
  // Goal: find all proteins our genes code for, and their start/end indices
  
  // Expected result: [
  //    # underscore-joined gene names, protein start, protein end
  //    ('35S', 0, 7),
  //    ('cryIA', 7, 16),
  //    ('PEP', 4, 11),
  //    ('35S', 15, 22),
  //    ('brca2', 7, 22),
  //    ('cry9C', 11, 22),
  //    ('PS', 22, 28),
  //    ('35S_cryIA', 0, 16),
  //    ('PEP_cry9C', 4, 22),
  //    ('PEP_cry9C_PS', 4, 28),
  //    ('cry9C_PS', 11, 28),
  //    ('35S_PS', 15, 28),
  //    ('35S_brca2', 0, 22),
  //    ('35S_brca2_PS', 0, 28),
  //    ('brca2_PS', 7, 28),
  // ]
  
  
  // // Idea 1
  //    ('35S', 0, 7),
  //    ('cryIA', 7, 16),
  //    ('brca2', 7, 22),
  
  // [ 1, _, _, _, _, _, 3, _, _, _,_, _, _, _, _, ..., 1,_, _, ..., 1,]
  
  // // Idea 2
  // genes = [
  //    ('35S', 0, 7),
  //    ('cryIA', 7, 16),
  //    ('brca2', 7, 22),
  //    ('PEP', 4, 11),
  //    ('35S', 15, 22),
  //    ('cry9C', 11, 22),
  //    ('PS', 22, 28),
  // ]
  
  
  // {
  //   0: [('35S', 0, 7)]
  //   7: [('cryIA', 7, 16), ('brca2', 7, 22)]
  //   ...
  // }
  
  // [0, 7]
  // 7 -> 
  
  // [
  //   ('35S', 0, 7),
  //   ('35S', 0, 7) + ('cryIA', 7, 16), ('35S', 0, 7) + ('brca2', 7, 22),
  //   ('cryIA', 7, 16),
  //   ('brca2', 7, 22)
  //   ..
  //   ...
  // ]