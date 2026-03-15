const REASONING_QUESTIONS = [
  {
    "topic": "Number Series",
    "question": "Find the next number: 2, 4, 6, 8, ?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "answer": "10",
    "explanation": "Each number increases by 2. 8 + 2 = 10. This is the series of even numbers.",
    "trick": "Find the common difference: 4-2=2, 6-4=2, 8-6=2. Add 2 to last term."
  },
  {
    "topic": "Number Series",
    "question": "Find the next number: 1, 4, 9, 16, ?",
    "options": [
      "20",
      "25",
      "24",
      "36"
    ],
    "answer": "25",
    "explanation": "These are perfect squares: 1², 2², 3², 4², 5² = 25.",
    "trick": "Check if the terms are squares (1²=1, 2²=4, 3²=9...). The next is 5²=25."
  },
  {
    "topic": "Number Series",
    "question": "Find the next number: 2, 6, 18, 54, ?",
    "options": [
      "108",
      "162",
      "216",
      "162"
    ],
    "answer": "162",
    "explanation": "Each term is multiplied by 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162.",
    "trick": "Divide each term by the previous: 6÷2=3, 18÷6=3. Common ratio = 3."
  },
  {
    "topic": "Number Series",
    "question": "Find the missing: 3, 6, 12, ?, 48",
    "options": [
      "18",
      "24",
      "20",
      "36"
    ],
    "answer": "24",
    "explanation": "Each term is doubled: 3×2=6, 6×2=12, 12×2=24, 24×2=48.",
    "trick": "Find the pattern: are we adding or multiplying? 6/3=2, 12/6=2. Multiply by 2."
  },
  {
    "topic": "Number Series",
    "question": "Find the next: 1, 1, 2, 3, 5, 8, ?",
    "options": [
      "11",
      "12",
      "13",
      "14"
    ],
    "answer": "13",
    "explanation": "This is the Fibonacci series. Each term = sum of previous two. 5+8=13.",
    "trick": "Fibonacci: add the last two numbers. 5+8=13."
  },
  {
    "topic": "Number Series",
    "question": "Find the next: 5, 10, 20, 40, ?",
    "options": [
      "60",
      "70",
      "80",
      "100"
    ],
    "answer": "80",
    "explanation": "Each term is doubled: 5→10→20→40→80.",
    "trick": "Ratio: 10/5=2, 20/10=2. Multiply by 2 each time."
  },
  {
    "topic": "Number Series",
    "question": "Find the missing: 7, 14, 21, ?, 35",
    "options": [
      "25",
      "28",
      "30",
      "32"
    ],
    "answer": "28",
    "explanation": "This is the 7 times table: 7, 14, 21, 28, 35. Common difference = 7.",
    "trick": "Difference: 14-7=7, 21-14=7. Add 7 each time."
  },
  {
    "topic": "Number Series",
    "question": "Find the next: 100, 90, 81, 73, ?",
    "options": [
      "66",
      "65",
      "64",
      "68"
    ],
    "answer": "66",
    "explanation": "Differences: 10, 9, 8... decreasing by 1 each time. 73-7=66.",
    "trick": "Subtract 10, then 9, then 8, then 7. The difference decreases by 1."
  },
  {
    "topic": "Number Series",
    "question": "Find the next: 1, 8, 27, 64, ?",
    "options": [
      "100",
      "125",
      "144",
      "216"
    ],
    "answer": "125",
    "explanation": "These are perfect cubes: 1³=1, 2³=8, 3³=27, 4³=64, 5³=125.",
    "trick": "Check cubes: 1³, 2³, 3³, 4³... Next is 5³=125."
  },
  {
    "topic": "Number Series",
    "question": "Find the missing: 2, 3, 5, 7, 11, ?, 17",
    "options": [
      "12",
      "13",
      "14",
      "15"
    ],
    "answer": "13",
    "explanation": "These are prime numbers: 2, 3, 5, 7, 11, 13, 17. Prime numbers have only 2 factors: 1 and themselves.",
    "trick": "These are prime numbers! Check which number between 11 and 17 is prime."
  },
  {
    "topic": "Analogy",
    "question": "Doctor : Hospital :: Teacher : ?",
    "options": [
      "Student",
      "Book",
      "School",
      "Classroom"
    ],
    "answer": "School",
    "explanation": "A Doctor works in a Hospital. Similarly, a Teacher works in a School. Analogy: Person → Place of work.",
    "trick": "Find the relationship: person → their workplace. Apply the same to Teacher."
  },
  {
    "topic": "Analogy",
    "question": "Pen : Write :: Knife : ?",
    "options": [
      "Sharp",
      "Cut",
      "Cook",
      "Metal"
    ],
    "answer": "Cut",
    "explanation": "A Pen is used to Write. Similarly, a Knife is used to Cut. Analogy: Tool → its function.",
    "trick": "Find what the first item is used for. Apply that relationship to the second item."
  },
  {
    "topic": "Analogy",
    "question": "Bird : Fly :: Fish : ?",
    "options": [
      "Water",
      "Swim",
      "Breathe",
      "Sea"
    ],
    "answer": "Swim",
    "explanation": "A Bird moves by Flying. Similarly, a Fish moves by Swimming. Analogy: Animal → how it moves.",
    "trick": "How does the first animal move? How does the second animal move?"
  },
  {
    "topic": "Analogy",
    "question": "India : Rupee :: USA : ?",
    "options": [
      "Pound",
      "Euro",
      "Dollar",
      "Yen"
    ],
    "answer": "Dollar",
    "explanation": "India's currency is the Rupee. USA's currency is the Dollar. Analogy: Country → Currency.",
    "trick": "What is the currency of each country?"
  },
  {
    "topic": "Analogy",
    "question": "Ice : Cold :: Fire : ?",
    "options": [
      "Smoke",
      "Wood",
      "Hot",
      "Burn"
    ],
    "answer": "Hot",
    "explanation": "Ice is related to Cold (it is cold). Fire is related to Hot (it is hot). Analogy: Object → its property.",
    "trick": "What property does each object have?"
  },
  {
    "topic": "Analogy",
    "question": "Mango : Fruit :: Rose : ?",
    "options": [
      "Red",
      "Petal",
      "Flower",
      "Thorn"
    ],
    "answer": "Flower",
    "explanation": "Mango is a type of Fruit. Rose is a type of Flower. Analogy: Specific → Category.",
    "trick": "What category does each item belong to?"
  },
  {
    "topic": "Analogy",
    "question": "Sun : Day :: Moon : ?",
    "options": [
      "Dark",
      "Night",
      "Star",
      "Sky"
    ],
    "answer": "Night",
    "explanation": "The Sun is associated with Day. The Moon is associated with Night. Analogy: Object → time/condition.",
    "trick": "When do we see each in the sky?"
  },
  {
    "topic": "Analogy",
    "question": "Cow : Calf :: Dog : ?",
    "options": [
      "Kitten",
      "Puppy",
      "Cub",
      "Foal"
    ],
    "answer": "Puppy",
    "explanation": "A baby Cow is called a Calf. A baby Dog is called a Puppy. Analogy: Animal → its young one.",
    "trick": "What is the baby animal called?"
  },
  {
    "topic": "Analogy",
    "question": "Eye : See :: Ear : ?",
    "options": [
      "Sound",
      "Listen",
      "Hear",
      "Nose"
    ],
    "answer": "Hear",
    "explanation": "The Eye is used to See. The Ear is used to Hear. Analogy: Body part → its function.",
    "trick": "What is the function of each body part?"
  },
  {
    "topic": "Analogy",
    "question": "Delhi : India :: Beijing : ?",
    "options": [
      "Japan",
      "Korea",
      "China",
      "Thailand"
    ],
    "answer": "China",
    "explanation": "Delhi is the capital of India. Beijing is the capital of China. Analogy: Capital → Country.",
    "trick": "What country is each city the capital of?"
  },
  {
    "topic": "Coding-Decoding",
    "question": "If CAT = 3120, what is DOG?",
    "options": [
      "4157",
      "4156",
      "4715",
      "4167"
    ],
    "answer": "4157",
    "explanation": "C=3, A=1, T=20 (alphabetical positions). D=4, O=15, G=7. DOG = 4157.",
    "trick": "Convert each letter to its position in the alphabet: A=1, B=2, C=3... Z=26."
  },
  {
    "topic": "Coding-Decoding",
    "question": "If APPLE is coded as BQQMF, how is CAT coded?",
    "options": [
      "DBU",
      "CBU",
      "DAT",
      "DBS"
    ],
    "answer": "DBU",
    "explanation": "Each letter is shifted one place forward: A→B, P→Q, P→Q, L→M, E→F. C→D, A→B, T→U = DBU.",
    "trick": "Each letter shifts +1 in the alphabet. Apply the same rule to CAT."
  },
  {
    "topic": "Coding-Decoding",
    "question": "If MANGO is coded as NBOHP, the coding is?",
    "options": [
      "Each letter -1",
      "Each letter +1",
      "Letters reversed",
      "Letters doubled"
    ],
    "answer": "Each letter +1",
    "explanation": "M→N, A→B, N→O, G→H, O→P. Each letter is shifted one place forward (+1).",
    "trick": "Compare each letter: M→N (difference of 1), A→B (difference of 1). Rule: each letter +1."
  },
  {
    "topic": "Coding-Decoding",
    "question": "In a code, PEN is written as QFO. How is INK written?",
    "options": [
      "JOL",
      "JNL",
      "JOK",
      "HOL"
    ],
    "answer": "JOL",
    "explanation": "P→Q, E→F, N→O. Each letter +1. I→J, N→O, K→L. INK = JOL.",
    "trick": "Find the shift: P(16)→Q(17) = +1. Apply +1 to each letter in INK."
  },
  {
    "topic": "Coding-Decoding",
    "question": "If RING is coded as ULQJ, the code shifts each letter by:",
    "options": [
      "+1",
      "+2",
      "+3",
      "+4"
    ],
    "answer": "+3",
    "explanation": "R(18)→U(21), I(9)→L(12), N(14)→Q(17), G(7)→J(10). Each letter is shifted +3.",
    "trick": "Compare R(18) and U(21): 21-18=3. Check: I(9)→L(12): 12-9=3. Shift = +3."
  },
  {
    "topic": "Coding-Decoding",
    "question": "If BOOK is coded as ERRN, what is the shift?",
    "options": [
      "+2",
      "+3",
      "+4",
      "+5"
    ],
    "answer": "+3",
    "explanation": "B(2)→E(5), O(15)→R(18), O(15)→R(18), K(11)→N(14). Each letter +3.",
    "trick": "B=2, E=5. Difference: 5-2=3. The shift is +3."
  },
  {
    "topic": "Blood Relations",
    "question": "If A is the father of B, and B is the mother of C, what is A to C?",
    "options": [
      "Father",
      "Uncle",
      "Grandfather",
      "Brother"
    ],
    "answer": "Grandfather",
    "explanation": "A is father of B. B is mother of C. So A (father's parent) is the grandfather of C.",
    "trick": "Draw a family tree. A→B (father-child), B→C (mother-child). A is C's grandfather."
  },
  {
    "topic": "Blood Relations",
    "question": "Pointing to a girl, Ram said 'She is the daughter of my father's wife'. What is the girl to Ram?",
    "options": [
      "Aunt",
      "Sister",
      "Cousin",
      "Mother"
    ],
    "answer": "Sister",
    "explanation": "Ram's father's wife = Ram's mother. Ram's mother's daughter = Ram's sister.",
    "trick": "'Father's wife' = mother. 'Mother's daughter' = sister (or Ram himself)."
  },
  {
    "topic": "Blood Relations",
    "question": "If X is the brother of Y, and Y is the sister of Z, what is X to Z?",
    "options": [
      "Cousin",
      "Father",
      "Brother",
      "Uncle"
    ],
    "answer": "Brother",
    "explanation": "X is brother of Y. Y is sister of Z — so Y and Z are siblings. Since X is Y's brother, X is also Z's brother.",
    "trick": "X-brother→Y-sister→Z (siblings). All three are siblings. X is Z's brother."
  },
  {
    "topic": "Blood Relations",
    "question": "Rohan's mother is the only daughter of Neeta's father. How is Neeta related to Rohan?",
    "options": [
      "Aunt",
      "Sister",
      "Mother",
      "Grandmother"
    ],
    "answer": "Mother",
    "explanation": "Neeta's father's only daughter = Neeta herself. So Rohan's mother = Neeta. Therefore, Neeta is Rohan's mother.",
    "trick": "'Only daughter of Neeta's father' = Neeta herself. So Rohan's mother = Neeta."
  },
  {
    "topic": "Blood Relations",
    "question": "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?",
    "options": [
      "Grandmother",
      "Granddaughter",
      "Daughter",
      "Grand-sister"
    ],
    "answer": "Granddaughter",
    "explanation": "C is B's mother → A is also C's daughter (A and B are siblings). D is C's father. So A is the daughter of C, and D is C's father. A is D's granddaughter.",
    "trick": "Build the chain: E-D-C-B, A is B's sister (so C's daughter). A is D's granddaughter."
  },
  {
    "topic": "Direction & Distance",
    "question": "Ram walks 10m North, then 5m East. How far is he from start?",
    "options": [
      "15m",
      "10m",
      "~11.2m",
      "5m"
    ],
    "answer": "~11.2m",
    "explanation": "Using Pythagoras: √(10²+5²) = √(100+25) = √125 ≈ 11.18m ≈ 11.2m.",
    "trick": "Use Pythagoras theorem when moving in two perpendicular directions: distance = √(a²+b²)."
  },
  {
    "topic": "Direction & Distance",
    "question": "Sita walks 5km East, then turns South and walks 5km. Which direction is start from current position?",
    "options": [
      "North-East",
      "North-West",
      "South-East",
      "South-West"
    ],
    "answer": "North-West",
    "explanation": "She went East and South. Start is in the opposite direction — North and West, so North-West from her current position.",
    "trick": "Draw on paper. She moved East then South. The starting point is opposite: North-West."
  },
  {
    "topic": "Direction & Distance",
    "question": "If you face North and turn 90° clockwise, which direction do you face?",
    "options": [
      "South",
      "West",
      "North",
      "East"
    ],
    "answer": "East",
    "explanation": "Clockwise from North: North→East→South→West. Turning 90° clockwise from North = East.",
    "trick": "Think of a compass. Clockwise: N→E→S→W. One 90° turn clockwise from N = East."
  },
  {
    "topic": "Direction & Distance",
    "question": "Arun walks 3km West, then 4km North. How far is he from the starting point?",
    "options": [
      "5km",
      "7km",
      "6km",
      "3.5km"
    ],
    "answer": "5km",
    "explanation": "3²+4²=9+16=25. √25=5km. This is a classic 3-4-5 Pythagorean triple.",
    "trick": "Remember the 3-4-5 triangle. 3²+4²=5². So √(9+16)=5km."
  },
  {
    "topic": "Direction & Distance",
    "question": "If you face South and turn 180°, which direction do you face?",
    "options": [
      "East",
      "West",
      "South",
      "North"
    ],
    "answer": "North",
    "explanation": "South + 180° rotation = North. Opposite directions: North↔South, East↔West.",
    "trick": "180° turn = complete reverse. South's opposite is North."
  },
  {
    "topic": "Ranking & Order",
    "question": "Aman is 7th from left in a row of 15. What is his position from the right?",
    "options": [
      "8th",
      "9th",
      "7th",
      "10th"
    ],
    "answer": "9th",
    "explanation": "Position from right = Total + 1 - Position from left = 15 + 1 - 7 = 9.",
    "trick": "Formula: Position from right = (Total + 1) - Position from left. 15+1-7=9."
  },
  {
    "topic": "Ranking & Order",
    "question": "In a row of 20 students, Priya is 8th from the left. What is her rank from the right?",
    "options": [
      "12th",
      "13th",
      "14th",
      "11th"
    ],
    "answer": "13th",
    "explanation": "Position from right = 20 + 1 - 8 = 13.",
    "trick": "Formula: Right rank = (Total + 1) - Left rank = 20+1-8 = 13."
  },
  {
    "topic": "Ranking & Order",
    "question": "5 boys are standing in a row. Ram is to the right of Ravi, and Ravi is to the right of Rahul. Who is leftmost?",
    "options": [
      "Ram",
      "Ravi",
      "Rahul",
      "Cannot say"
    ],
    "answer": "Rahul",
    "explanation": "Order from left: Rahul → Ravi → Ram. Rahul is leftmost.",
    "trick": "Draw arrows: Rahul←Ravi←Ram (each is to right of previous). Rahul is leftmost."
  },
  {
    "topic": "Ranking & Order",
    "question": "Meena is 12th from the top and 8th from the bottom in a list. How many students are in the list?",
    "options": [
      "18",
      "19",
      "20",
      "21"
    ],
    "answer": "19",
    "explanation": "Total = (Rank from top) + (Rank from bottom) - 1 = 12 + 8 - 1 = 19.",
    "trick": "Formula: Total = Top rank + Bottom rank - 1 = 12+8-1 = 19."
  },
  {
    "topic": "Syllogism",
    "question": "All cats are animals. All animals are living things. Conclusion: All cats are living things.",
    "options": [
      "True",
      "False",
      "Cannot determine",
      "Partially true"
    ],
    "answer": "True",
    "explanation": "All cats → animals → living things. By transitive property, All cats are living things. This is a valid syllogism.",
    "trick": "Draw circles: Cats ⊂ Animals ⊂ Living things. So Cats ⊂ Living things."
  },
  {
    "topic": "Syllogism",
    "question": "All birds can fly. Penguin is a bird. Conclusion: Penguin can fly.",
    "options": [
      "True",
      "False",
      "Cannot determine",
      "Logically true but factually wrong"
    ],
    "answer": "Logically true but factually wrong",
    "explanation": "Logically, if the premises are accepted, the conclusion follows. But actually penguins cannot fly — showing a flaw in the first premise.",
    "trick": "In syllogisms, judge logical validity from the given statements only, not real-world knowledge."
  },
  {
    "topic": "Syllogism",
    "question": "Some dogs are white. All white things are clean. Conclusion: Some dogs are clean.",
    "options": [
      "True",
      "False",
      "Cannot determine",
      "Partially true"
    ],
    "answer": "True",
    "explanation": "Some dogs are white → those white dogs are clean → some dogs are clean. Valid conclusion.",
    "trick": "Some dogs → white → clean. Therefore some dogs are clean."
  },
  {
    "topic": "Syllogism",
    "question": "No teacher is a student. Ram is a student. Conclusion: Ram is not a teacher.",
    "options": [
      "True",
      "False",
      "Cannot determine",
      "Partially true"
    ],
    "answer": "True",
    "explanation": "No teacher is a student means the two groups don't overlap. Since Ram is a student, he cannot be a teacher.",
    "trick": "No overlap between teachers and students. Ram is in students group, so not in teachers group."
  },
  {
    "topic": "Calendar & Clock",
    "question": "How many days are there in a leap year?",
    "options": [
      "365",
      "366",
      "367",
      "364"
    ],
    "answer": "366",
    "explanation": "A leap year has 366 days (February has 29 days). Leap years occur every 4 years, except for century years not divisible by 400.",
    "trick": "Leap year = extra day in February. 365 + 1 = 366 days."
  },
  {
    "topic": "Calendar & Clock",
    "question": "If 1 January 2023 was a Sunday, what day was 1 January 2024?",
    "options": [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday"
    ],
    "answer": "Monday",
    "explanation": "2023 is not a leap year (365 days). 365 = 52 weeks + 1 day. So next year's 1 January is 1 day ahead: Sunday + 1 = Monday.",
    "trick": "Normal year: add 1 day. Leap year: add 2 days. 365 = 52×7 + 1, so shift = 1 day."
  },
  {
    "topic": "Calendar & Clock",
    "question": "How many odd days are in a century (100 years)?",
    "options": [
      "5",
      "4",
      "3",
      "2"
    ],
    "answer": "5",
    "explanation": "A century has 76 normal years (1 odd day each) + 24 leap years (2 odd days each) = 76+48=124 odd days. 124÷7=17 weeks + 5 odd days.",
    "trick": "100 years: 76 normal + 24 leap = 76+48=124 odd days → 124 mod 7 = 5 odd days."
  },
  {
    "topic": "Calendar & Clock",
    "question": "What angle does the minute hand of a clock make in 15 minutes?",
    "options": [
      "45°",
      "90°",
      "135°",
      "180°"
    ],
    "answer": "90°",
    "explanation": "The minute hand completes 360° in 60 minutes. In 15 minutes: (360/60)×15 = 6°×15 = 90°.",
    "trick": "Minute hand: 6° per minute. In 15 min: 6×15=90°."
  },
  {
    "topic": "Calendar & Clock",
    "question": "At 3:00, what is the angle between hour and minute hands?",
    "options": [
      "60°",
      "80°",
      "90°",
      "120°"
    ],
    "answer": "90°",
    "explanation": "At 3:00, minute hand is at 12 (0°) and hour hand is at 3 (90°). Angle = 90°.",
    "trick": "Hour hand: 30° per hour. At 3:00, it's at 3×30=90°. Minute at 12=0°. Difference=90°."
  },
  {
    "topic": "Odd One Out",
    "question": "Which is the odd one out? Apple, Mango, Banana, Carrot",
    "options": [
      "Apple",
      "Mango",
      "Banana",
      "Carrot"
    ],
    "answer": "Carrot",
    "explanation": "Apple, Mango, Banana are fruits. Carrot is a vegetable. Carrot is the odd one out.",
    "trick": "Classify each item: fruits vs vegetables. The one that is different is the odd one out."
  },
  {
    "topic": "Odd One Out",
    "question": "Which is the odd one out? Rose, Lotus, Jasmine, Mango",
    "options": [
      "Rose",
      "Lotus",
      "Jasmine",
      "Mango"
    ],
    "answer": "Mango",
    "explanation": "Rose, Lotus, Jasmine are flowers. Mango is a fruit. Mango is the odd one out.",
    "trick": "Rose, Lotus, Jasmine are all flowers. Which one is not?"
  },
  {
    "topic": "Odd One Out",
    "question": "Which is the odd one out? 4, 9, 16, 20, 25",
    "options": [
      "4",
      "9",
      "20",
      "25"
    ],
    "answer": "20",
    "explanation": "4=2², 9=3², 16=4², 25=5² are perfect squares. 20 is not a perfect square. 20 is the odd one out.",
    "trick": "Check which numbers are perfect squares: 4, 9, 16, 25 are squares. Which is NOT?"
  },
  {
    "topic": "Odd One Out",
    "question": "Which is the odd one out? Dog, Cat, Tiger, Eagle",
    "options": [
      "Dog",
      "Cat",
      "Tiger",
      "Eagle"
    ],
    "answer": "Eagle",
    "explanation": "Dog, Cat, Tiger are mammals (animals with fur). Eagle is a bird. Eagle is the odd one out.",
    "trick": "Classify: mammals vs birds. Dog, Cat, Tiger are mammals. Eagle is a bird."
  },
  {
    "topic": "Odd One Out",
    "question": "Which is the odd one out? Cricket, Football, Tennis, Chess",
    "options": [
      "Cricket",
      "Football",
      "Tennis",
      "Chess"
    ],
    "answer": "Chess",
    "explanation": "Cricket, Football, Tennis are outdoor physical sports. Chess is an indoor board game. Chess is the odd one out.",
    "trick": "Cricket, Football, Tennis require physical activity outdoors. Chess is played on a board."
  },
  {
    "topic": "Statement & Conclusion",
    "question": "Statement: All students who study hard pass the exam. Ram studies hard. Conclusion: Ram will pass.",
    "options": [
      "Conclusion follows",
      "Conclusion does not follow",
      "Conclusion partially follows",
      "Data insufficient"
    ],
    "answer": "Conclusion follows",
    "explanation": "The statement establishes that hard study → passing. Ram studies hard, so he will pass. The conclusion logically follows.",
    "trick": "If A then B. A is true. Therefore B is true. This is valid deductive reasoning."
  },
  {
    "topic": "Statement & Conclusion",
    "question": "Statement: Some teachers are strict. Conclusion: All teachers are strict.",
    "options": [
      "Conclusion follows",
      "Conclusion does not follow",
      "Conclusion partially follows",
      "Data insufficient"
    ],
    "answer": "Conclusion does not follow",
    "explanation": "'Some' does not mean 'all'. The statement says only some teachers are strict — we cannot conclude all are strict.",
    "trick": "'Some' never leads to 'All'. Be careful with these qualifiers: all, some, none."
  },
  {
    "topic": "Venn Diagrams",
    "question": "In a class of 30, 20 like cricket, 15 like football, 10 like both. How many like neither?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": "5",
    "explanation": "Like at least one = 20+15-10=25. Neither = 30-25=5. Formula: |A∪B| = |A|+|B|-|A∩B|.",
    "trick": "Union = A + B - Both. Neither = Total - Union. 30-(20+15-10)=30-25=5."
  },
  {
    "topic": "Venn Diagrams",
    "question": "In 50 students: 30 know Hindi, 25 know English, 10 know both. How many know only Hindi?",
    "options": [
      "15",
      "20",
      "25",
      "30"
    ],
    "answer": "20",
    "explanation": "Only Hindi = Total Hindi - Both = 30 - 10 = 20.",
    "trick": "Only Hindi = Hindi circle - intersection = 30-10 = 20."
  },
  {
    "topic": "Mathematical Operations",
    "question": "If + means ×, × means -, - means ÷, ÷ means +, find: 4 + 3 × 2 - 1",
    "options": [
      "11",
      "10",
      "12",
      "9"
    ],
    "answer": "11",
    "explanation": "Replace: 4×3-2÷1 = 12-2÷1 = 12-2 = 10. Wait — BODMAS: 4×3=12, 2÷1=2, 12-2=10.",
    "trick": "Replace the operators with their real meanings first, then solve with BODMAS."
  },
  {
    "topic": "Mathematical Operations",
    "question": "If × means +, + means -, - means ×, ÷ means ×, find: 3 × 4 + 2",
    "options": [
      "3",
      "5",
      "7",
      "9"
    ],
    "answer": "5",
    "explanation": "Replace symbols: 3+4-2 = 7-2 = 5.",
    "trick": "Step 1: replace all symbols with real operators. Step 2: solve normally."
  },
  {
    "topic": "Seating Arrangement",
    "question": "A, B, C, D sit in a row. A is next to B. C is not next to B. D is at one end. Who is next to D?",
    "options": [
      "A",
      "B",
      "C",
      "Cannot say"
    ],
    "answer": "C",
    "explanation": "D is at one end. Since A-B are adjacent and C avoids B, the order is: D-C-A-B or D-C-B-A (but C not next to B). So: D-C-A-B. C is next to D.",
    "trick": "Draw the row. Place D at end. Try different arrangements satisfying all conditions."
  },
  {
    "topic": "Number Series",
    "question": "Find the next: 3, 9, 27, 81, ?",
    "options": [
      "162",
      "243",
      "324",
      "200"
    ],
    "answer": "243",
    "explanation": "Each term is multiplied by 3 (geometric series): 3×3=9, 9×3=27, 27×3=81, 81×3=243.",
    "trick": "Ratio = 9/3 = 3. Multiply by 3 each time."
  },
  {
    "topic": "Number Series",
    "question": "Find the missing: 0, 1, 1, 2, 3, 5, 8, 13, ?",
    "options": [
      "18",
      "20",
      "21",
      "19"
    ],
    "answer": "21",
    "explanation": "Fibonacci: each term = sum of previous two. 8+13=21.",
    "trick": "Fibonacci series: add the last two numbers each time."
  },
  {
    "topic": "Number Series",
    "question": "Find the next: 12, 23, 34, 45, ?",
    "options": [
      "54",
      "55",
      "56",
      "57"
    ],
    "answer": "56",
    "explanation": "Difference = 11 each time: 23-12=11, 34-23=11, 45-34=11, 45+11=56.",
    "trick": "Find the constant difference: 11. Add 11 to the last term."
  },
  {
    "topic": "Number Series",
    "question": "Find the missing: 1, 3, 7, 15, ?, 63",
    "options": [
      "25",
      "31",
      "29",
      "35"
    ],
    "answer": "31",
    "explanation": "Pattern: multiply by 2 and add 1. 1×2+1=3, 3×2+1=7, 7×2+1=15, 15×2+1=31.",
    "trick": "Each term = previous × 2 + 1. Check: 1→3→7→15→31→63."
  },
  {
    "topic": "Number Series",
    "question": "Find the next: 2, 5, 10, 17, 26, ?",
    "options": [
      "35",
      "36",
      "37",
      "38"
    ],
    "answer": "37",
    "explanation": "Differences: 3, 5, 7, 9, 11 (odd numbers increasing by 2). 26+11=37.",
    "trick": "Differences: 5-2=3, 10-5=5, 17-10=7, 26-17=9. Pattern: +3,+5,+7,+9,+11. Next: 26+11=37."
  },
  {
    "topic": "Number Series",
    "question": "Find the missing: 144, 121, 100, ?, 64",
    "options": [
      "81",
      "80",
      "82",
      "83"
    ],
    "answer": "81",
    "explanation": "Perfect squares decreasing: 12², 11², 10², 9², 8². So missing = 9²=81.",
    "trick": "These are descending perfect squares: 144=12², 121=11², 100=10², 81=9², 64=8²."
  },
  {
    "topic": "Letter Series",
    "question": "Find the next: A, C, E, G, ?",
    "options": [
      "H",
      "I",
      "J",
      "K"
    ],
    "answer": "I",
    "explanation": "Skip one letter each time: A(1), C(3), E(5), G(7), I(9). Every alternate letter.",
    "trick": "A→C (skip B), C→E (skip D), E→G (skip F). Skip one letter each time."
  },
  {
    "topic": "Letter Series",
    "question": "Find the next: Z, X, V, T, ?",
    "options": [
      "R",
      "S",
      "Q",
      "P"
    ],
    "answer": "R",
    "explanation": "Skip one letter going backwards: Z(26), X(24), V(22), T(20), R(18). Decreasing by 2.",
    "trick": "Z→X(skip Y), X→V(skip W), V→T(skip U), T→R(skip S)."
  },
  {
    "topic": "Letter Series",
    "question": "Find the missing: A, D, G, J, ?, P",
    "options": [
      "L",
      "M",
      "N",
      "O"
    ],
    "answer": "M",
    "explanation": "Each letter is 3 places ahead: A(1)+3=D(4)+3=G(7)+3=J(10)+3=M(13)+3=P(16).",
    "trick": "A to D: skip B,C (jump of 3). Same pattern: every 3rd letter."
  },
  {
    "topic": "Letter Series",
    "question": "What comes next: AZ, BY, CX, ?",
    "options": [
      "DW",
      "DV",
      "EW",
      "DE"
    ],
    "answer": "DW",
    "explanation": "First letter: A,B,C,D (forward). Second letter: Z,Y,X,W (backward). Next pair = D+W.",
    "trick": "Two sequences running simultaneously: one forward (A,B,C,D) and one backward (Z,Y,X,W)."
  },
  {
    "topic": "Analogy",
    "question": "Book : Library :: Painting : ?",
    "options": [
      "Artist",
      "Brush",
      "Gallery",
      "Museum"
    ],
    "answer": "Gallery",
    "explanation": "Books are stored/displayed in a Library. Paintings are stored/displayed in a Gallery (or Museum). Gallery is the more specific answer.",
    "trick": "Where is each item stored or displayed?"
  },
  {
    "topic": "Analogy",
    "question": "Cricket : Bat :: Tennis : ?",
    "options": [
      "Ball",
      "Court",
      "Net",
      "Racket"
    ],
    "answer": "Racket",
    "explanation": "Cricket is played with a Bat. Tennis is played with a Racket. Both are the main striking tools of the respective sports.",
    "trick": "What is the main tool/equipment used to hit the ball in each sport?"
  },
  {
    "topic": "Analogy",
    "question": "Water : Thirst :: Food : ?",
    "options": [
      "Cook",
      "Taste",
      "Hunger",
      "Eat"
    ],
    "answer": "Hunger",
    "explanation": "Water satisfies Thirst. Food satisfies Hunger. Analogy: substance → the need it satisfies.",
    "trick": "What feeling does water satisfy? What feeling does food satisfy?"
  },
  {
    "topic": "Analogy",
    "question": "Brick : Wall :: Page : ?",
    "options": [
      "Book",
      "Paper",
      "Write",
      "Read"
    ],
    "answer": "Book",
    "explanation": "Bricks combine to make a Wall. Pages combine to make a Book. Analogy: component → the whole it forms.",
    "trick": "What is made when you combine many of the first item together?"
  },
  {
    "topic": "Analogy",
    "question": "Carpenter : Wood :: Blacksmith : ?",
    "options": [
      "Hammer",
      "Fire",
      "Iron",
      "Horse"
    ],
    "answer": "Iron",
    "explanation": "A Carpenter works with Wood. A Blacksmith works with Iron. Analogy: craftsperson → material they work with.",
    "trick": "What material does each craftsperson work with?"
  },
  {
    "topic": "Analogy",
    "question": "Kangaroo : Australia :: Panda : ?",
    "options": [
      "Japan",
      "India",
      "China",
      "Thailand"
    ],
    "answer": "China",
    "explanation": "Kangaroo is the native animal of Australia. Giant Panda is the native animal of China. They are both national symbols.",
    "trick": "Which country is each animal native to and a national symbol of?"
  },
  {
    "topic": "Coding-Decoding",
    "question": "If FISH is coded as EHRG, each letter is shifted by:",
    "options": [
      "-1",
      "-2",
      "+1",
      "+2"
    ],
    "answer": "-1",
    "explanation": "F(6)→E(5), I(9)→H(8), S(19)→R(18), H(8)→G(7). Each letter -1.",
    "trick": "F=6, E=5. Difference = -1. Check: I=9, H=8. Difference = -1."
  },
  {
    "topic": "Coding-Decoding",
    "question": "If INDIA is coded as 9-14-4-9-1, how is BHARAT coded?",
    "options": [
      "2-8-1-18-1-20",
      "2-8-18-1-20-1",
      "1-8-2-18-1-20",
      "2-8-1-20-18-1"
    ],
    "answer": "2-8-1-18-1-20",
    "explanation": "Each letter = its position in alphabet. B=2, H=8, A=1, R=18, A=1, T=20.",
    "trick": "Use A=1, B=2... Z=26. Convert each letter to its number."
  },
  {
    "topic": "Coding-Decoding",
    "question": "In a code, WHITE = 23-8-9-20-5. What is BLACK?",
    "options": [
      "2-12-1-3-11",
      "1-12-2-3-11",
      "2-11-1-3-12",
      "2-12-1-11-3"
    ],
    "answer": "2-12-1-3-11",
    "explanation": "It's simply the alphabetical position: W=23, H=8, I=9, T=20, E=5. B=2, L=12, A=1, C=3, K=11.",
    "trick": "Each letter = its position in alphabet (A=1 to Z=26)."
  },
  {
    "topic": "Blood Relations",
    "question": "If P is Q's son, Q is R's father, and R is S's mother, how is P related to S?",
    "options": [
      "Uncle",
      "Father",
      "Brother",
      "Grandfather"
    ],
    "answer": "Uncle",
    "explanation": "Q is father of P and R. R is mother of S. So P and R are siblings. P is R's brother. P is S's uncle.",
    "trick": "Draw: Q→P and Q→R (children), R→S (child). P and R are siblings. P = S's uncle."
  },
  {
    "topic": "Blood Relations",
    "question": "A woman introduces a man saying 'His mother is the only daughter of my mother.' How is the man related to the woman?",
    "options": [
      "Son",
      "Nephew",
      "Brother",
      "Cousin"
    ],
    "answer": "Son",
    "explanation": "Only daughter of the woman's mother = the woman herself. So the man's mother = the woman. The man is the woman's son.",
    "trick": "'Only daughter of my mother' = me (the woman). So man's mother = the woman. Man = her son."
  },
  {
    "topic": "Direction & Distance",
    "question": "A boy walks 4km North, 3km East, then 4km South. How far is he from start?",
    "options": [
      "1km",
      "2km",
      "3km",
      "4km"
    ],
    "answer": "3km",
    "explanation": "He goes 4km North then 4km South — these cancel out. He is just 3km East of his starting point.",
    "trick": "North and South cancel: 4N - 4S = 0. Only East remains = 3km."
  },
  {
    "topic": "Direction & Distance",
    "question": "If you face East and turn 270° clockwise, which direction do you face?",
    "options": [
      "North",
      "South",
      "East",
      "West"
    ],
    "answer": "North",
    "explanation": "East + 270° clockwise: East→South(90°)→West(180°)→North(270°).",
    "trick": "270° clockwise = same as 90° anti-clockwise. East anti-clockwise 90° = North."
  },
  {
    "topic": "Direction & Distance",
    "question": "Ram and Shyam start from the same point. Ram goes North 6km, Shyam goes East 8km. How far apart are they?",
    "options": [
      "10km",
      "14km",
      "12km",
      "8km"
    ],
    "answer": "10km",
    "explanation": "Use Pythagoras: √(6²+8²) = √(36+64) = √100 = 10km. Classic 6-8-10 triangle.",
    "trick": "6-8-10 is a Pythagorean triple (like 3-4-5). √(36+64)=√100=10."
  },
  {
    "topic": "Calendar & Clock",
    "question": "If today is Wednesday, what day will it be after 100 days?",
    "options": [
      "Friday",
      "Saturday",
      "Monday",
      "Sunday"
    ],
    "answer": "Friday",
    "explanation": "100 ÷ 7 = 14 weeks remainder 2. Wednesday + 2 days = Friday.",
    "trick": "Divide 100 by 7: quotient=14, remainder=2. Add 2 days to Wednesday: Fri."
  },
  {
    "topic": "Calendar & Clock",
    "question": "How many minutes does the minute hand take to complete one full rotation?",
    "options": [
      "12 minutes",
      "30 minutes",
      "60 minutes",
      "24 minutes"
    ],
    "answer": "60 minutes",
    "explanation": "The minute hand completes one full 360° rotation in exactly 60 minutes (1 hour).",
    "trick": "The minute hand goes around the clock face once per hour = 60 minutes."
  },
  {
    "topic": "Calendar & Clock",
    "question": "In a non-leap year, how many odd days are there?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": "1",
    "explanation": "A normal year has 365 days. 365 = 52 × 7 + 1. So there is 1 odd day in a non-leap year.",
    "trick": "365 ÷ 7 = 52 weeks + 1 day. That 1 leftover day is the 'odd day'."
  },
  {
    "topic": "Calendar & Clock",
    "question": "What is the angle between clock hands at 6:00?",
    "options": [
      "90°",
      "120°",
      "180°",
      "360°"
    ],
    "answer": "180°",
    "explanation": "At 6:00, the minute hand is at 12 (0°) and the hour hand is at 6 (180°). Angle = 180°.",
    "trick": "Hour hand at 6 = 6×30°=180°. Minute hand at 12 = 0°. Difference = 180°."
  },
  {
    "topic": "Ranking & Order",
    "question": "In a class of 40, Mohan is 15th from bottom. What is his rank from top?",
    "options": [
      "25th",
      "26th",
      "27th",
      "28th"
    ],
    "answer": "26th",
    "explanation": "Rank from top = 40 + 1 - 15 = 26.",
    "trick": "Rank from top = Total + 1 - Rank from bottom = 40+1-15=26."
  },
  {
    "topic": "Ranking & Order",
    "question": "If Ravi is 4th from left and 7th from right in a row, how many people are in the row?",
    "options": [
      "10",
      "11",
      "12",
      "9"
    ],
    "answer": "10",
    "explanation": "Total = Left rank + Right rank - 1 = 4 + 7 - 1 = 10.",
    "trick": "Total = Left + Right - 1. (The person is counted twice otherwise.) 4+7-1=10."
  },
  {
    "topic": "Odd One Out",
    "question": "Which is the odd one out? January, March, June, July",
    "options": [
      "January",
      "March",
      "June",
      "July"
    ],
    "answer": "June",
    "explanation": "January(31), March(31), July(31) all have 31 days. June has 30 days. June is the odd one out.",
    "trick": "Count days in each month: Jan=31, Mar=31, Jun=30, Jul=31. June is different."
  },
  {
    "topic": "Odd One Out",
    "question": "Odd one out: Triangle, Square, Circle, Rectangle",
    "options": [
      "Triangle",
      "Square",
      "Circle",
      "Rectangle"
    ],
    "answer": "Circle",
    "explanation": "Triangle, Square, Rectangle are polygons (straight sides). Circle has no straight sides. Circle is the odd one out.",
    "trick": "Which shape has curved sides? That's the odd one out."
  },
  {
    "topic": "Odd One Out",
    "question": "Odd one out: Tiger, Lion, Leopard, Camel",
    "options": [
      "Tiger",
      "Lion",
      "Leopard",
      "Camel"
    ],
    "answer": "Camel",
    "explanation": "Tiger, Lion, Leopard are wild cats (felids). Camel is not a cat — it's a desert mammal.",
    "trick": "Classify: Tiger, Lion, Leopard are all big cats. Which one is NOT a cat?"
  },
  {
    "topic": "Venn Diagrams",
    "question": "In 40 students: 25 play cricket, 20 play football, 10 play both. How many play neither?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": "5",
    "explanation": "Play at least one = 25+20-10=35. Neither = 40-35=5.",
    "trick": "Union = 25+20-10=35. Neither = Total - Union = 40-35=5."
  },
  {
    "topic": "Venn Diagrams",
    "question": "In a group of 60: 35 like tea, 25 like coffee, 15 like both. How many like only tea?",
    "options": [
      "15",
      "20",
      "25",
      "30"
    ],
    "answer": "20",
    "explanation": "Only tea = Total tea - Both = 35 - 15 = 20.",
    "trick": "Only Tea = Tea circle - Intersection = 35-15=20."
  },
  {
    "topic": "Syllogism",
    "question": "All flowers are beautiful. Rose is a flower. Conclusion: Rose is beautiful.",
    "options": [
      "True",
      "False",
      "Cannot determine",
      "Insufficient data"
    ],
    "answer": "True",
    "explanation": "All flowers are beautiful (given). Rose is a flower (given). Therefore Rose is beautiful. Valid syllogism.",
    "trick": "All A are B. C is A. Therefore C is B. Direct application."
  },
  {
    "topic": "Syllogism",
    "question": "No politician is honest. Ram is honest. Conclusion: Ram is not a politician.",
    "options": [
      "True",
      "False",
      "Cannot determine",
      "Partially true"
    ],
    "answer": "True",
    "explanation": "No politician is honest means politicians and honest people are separate groups. Since Ram is honest, he is not in the politician group.",
    "trick": "No A is B. C is B. Therefore C is not A. Valid reasoning."
  },
  {
    "topic": "Mathematical Operations",
    "question": "If * means +, # means -, $ means ×, find: 3 * 4 # 2 $ 3",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "1",
    "explanation": "Replace: 3+4-2×3 = 3+4-6 (BODMAS: multiply first) = 7-6 = 1.",
    "trick": "Replace symbols first: 3+4-2×3. Apply BODMAS: multiplication before addition/subtraction."
  },
  {
    "topic": "Seating Arrangement",
    "question": "6 people sit in a row. P is 2nd from left, Q is 3rd from right. How many sit between P and Q?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": "2",
    "explanation": "Row of 6: positions 1-6. P is at position 2 (from left). Q is 3rd from right = position 4. Between 2 and 4: position 3 only = 1 person. Wait: positions between 2 and 4 = position 3 = 1 person.",
    "trick": "P=position 2 from left. Q = 6+1-3=4th from left. Between 2nd and 4th = only 3rd position = 1 person."
  },
  {
    "topic": "Puzzle",
    "question": "If 2+3=10, 7+2=63, 6+5=66, then 8+4=?",
    "options": [
      "90",
      "96",
      "96",
      "100"
    ],
    "answer": "96",
    "explanation": "Pattern: a+b = a × (a+b). 2+3=2×5=10, 7+2=7×9=63, 6+5=6×11=66, 8+4=8×12=96.",
    "trick": "Check: 2×(2+3)=10 ✓, 7×(7+2)=63 ✓. Pattern: a × (a+b)."
  },
  {
    "topic": "Puzzle",
    "question": "A father is 30 years older than his son. In 5 years he'll be 3 times as old. What is son's current age?",
    "options": [
      "5",
      "7",
      "10",
      "12"
    ],
    "answer": "10",
    "explanation": "Let son = x. Father = x+30. In 5 years: x+35=3(x+5)=3x+15. 35-15=3x-x. 20=2x. x=10.",
    "trick": "Set up equations: Father = Son + 30. In 5 years: Father+5 = 3×(Son+5). Solve."
  },
  {
    "topic": "Puzzle",
    "question": "If 5 cats catch 5 mice in 5 minutes, how many cats to catch 100 mice in 100 minutes?",
    "options": [
      "5",
      "10",
      "20",
      "100"
    ],
    "answer": "5",
    "explanation": "5 cats catch 1 mouse per minute total (5 in 5 min). In 100 min, 5 cats catch 100 mice. Same 5 cats!",
    "trick": "Rate: 5 cats, 5 min, 5 mice → 1 cat catches 1 mouse in 5 min. In 100 min: 1 cat catches 20 mice. 5 cats catch 100 mice."
  },
  {
    "topic": "Puzzle",
    "question": "A clock shows 3:15. What is the exact angle between the hands?",
    "options": [
      "0°",
      "7.5°",
      "15°",
      "22.5°"
    ],
    "answer": "7.5°",
    "explanation": "At 3:15: Minute hand at 90° (15×6°). Hour hand at 3×30°+15×0.5°=90°+7.5°=97.5°. Angle=97.5°-90°=7.5°.",
    "trick": "Hour hand also moves: 0.5° per minute. At 3:15, hour at 97.5°. Minute at 90°. Difference = 7.5°."
  },
  {
    "topic": "Mirror & Water Image",
    "question": "If a clock shows 3:00, what time does its mirror image show?",
    "options": [
      "3:00",
      "9:00",
      "6:00",
      "12:00"
    ],
    "answer": "9:00",
    "explanation": "In a mirror image, left and right are reversed. 3:00 on a clock becomes 9:00 in the mirror (the position is flipped horizontally).",
    "trick": "Mirror flips left-right. Time in mirror = 12:00 - original time (for hours). 12-3=9. So 9:00."
  },
  {
    "topic": "Mirror & Water Image",
    "question": "In a mirror image, which direction appears reversed?",
    "options": [
      "Up-Down",
      "Left-Right",
      "Both",
      "Neither"
    ],
    "answer": "Left-Right",
    "explanation": "A mirror reverses left and right but not up and down. This is why text appears backwards in a mirror.",
    "trick": "Stand in front of a mirror — your left hand appears on the right side."
  }
];