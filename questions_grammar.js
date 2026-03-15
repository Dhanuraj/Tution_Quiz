const GRAMMAR_QUESTIONS = [
  {
    "topic": "Parts of Speech",
    "question": "Identify the noun in: 'The dog ran quickly.'",
    "options": [
      "The",
      "dog",
      "ran",
      "quickly"
    ],
    "answer": "dog",
    "explanation": "'Dog' is a noun — it is the name of an animal. Nouns are names of people, places, animals or things.",
    "hint": "What is the name of something in the sentence?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Identify the verb in: 'She sings beautifully.'",
    "options": [
      "She",
      "sings",
      "beautifully",
      "None"
    ],
    "answer": "sings",
    "explanation": "'Sings' is a verb — it shows the action being performed. Verbs describe what the subject does.",
    "hint": "What action is being done?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Identify the adjective in: 'The tall boy won the race.'",
    "options": [
      "The",
      "tall",
      "boy",
      "won"
    ],
    "answer": "tall",
    "explanation": "'Tall' is an adjective — it describes the noun 'boy'. Adjectives modify nouns or pronouns.",
    "hint": "Which word describes the boy?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Identify the adverb in: 'He spoke loudly.'",
    "options": [
      "He",
      "spoke",
      "loudly",
      "None"
    ],
    "answer": "loudly",
    "explanation": "'Loudly' is an adverb — it describes how he spoke. Adverbs modify verbs, adjectives or other adverbs.",
    "hint": "How did he speak?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Which word is a pronoun in: 'She gave him the book.'",
    "options": [
      "gave",
      "book",
      "She",
      "the"
    ],
    "answer": "She",
    "explanation": "'She' is a pronoun — it replaces a noun (a person's name). Other pronouns in the sentence include 'him'.",
    "hint": "Which word replaces a person's name?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Identify the preposition in: 'The cat sat on the mat.'",
    "options": [
      "cat",
      "sat",
      "on",
      "mat"
    ],
    "answer": "on",
    "explanation": "'On' is a preposition — it shows the relationship between 'cat' and 'mat'. Prepositions show position, direction or time.",
    "hint": "Which word shows where the cat is?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Identify the conjunction in: 'I like tea and coffee.'",
    "options": [
      "I",
      "like",
      "and",
      "coffee"
    ],
    "answer": "and",
    "explanation": "'And' is a conjunction — it joins two words or clauses. Common conjunctions: and, but, or, so, because, although.",
    "hint": "Which word joins the two things?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "What part of speech is 'Ouch!' in: 'Ouch! That hurt.'",
    "options": [
      "Noun",
      "Verb",
      "Adjective",
      "Interjection"
    ],
    "answer": "Interjection",
    "explanation": "'Ouch' is an interjection — a word that expresses sudden emotion or exclamation. Other interjections: wow, oh, ah, hurray.",
    "hint": "It expresses a sudden feeling.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "What type of noun is 'Mumbai'?",
    "options": [
      "Common noun",
      "Proper noun",
      "Abstract noun",
      "Collective noun"
    ],
    "answer": "Proper noun",
    "explanation": "'Mumbai' is a proper noun — the specific name of a place. Proper nouns always start with a capital letter.",
    "hint": "Is it a specific name or a general name?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "What type of noun is 'honesty'?",
    "options": [
      "Common noun",
      "Proper noun",
      "Abstract noun",
      "Collective noun"
    ],
    "answer": "Abstract noun",
    "explanation": "'Honesty' is an abstract noun — it names a quality that cannot be seen or touched. Other abstract nouns: love, joy, freedom, courage.",
    "hint": "Can you see or touch this thing?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "What is the plural of 'child'?",
    "options": [
      "childs",
      "childes",
      "children",
      "child's"
    ],
    "answer": "children",
    "explanation": "The plural of 'child' is 'children' — an irregular plural. English has many irregular plurals: man→men, woman→women, tooth→teeth.",
    "hint": "This is an irregular plural.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "What is the plural of 'mouse'?",
    "options": [
      "mouses",
      "mices",
      "mouse",
      "mice"
    ],
    "answer": "mice",
    "explanation": "The plural of 'mouse' is 'mice' — an irregular plural. Similarly: louse→lice, house→houses (regular), grouse→grouse (unchanged).",
    "hint": "This is an irregular plural like man→men.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Identify the type of adjective in 'This book is mine.'",
    "options": [
      "Demonstrative",
      "Possessive",
      "Numeral",
      "Descriptive"
    ],
    "answer": "Demonstrative",
    "explanation": "'This' is a demonstrative adjective — it points to a specific thing. Demonstrative adjectives: this, that, these, those.",
    "hint": "It points to something specific.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Which sentence uses the correct article?",
    "options": [
      "She is an honest person.",
      "She is a honest person.",
      "She is the honest person.",
      "She is honest person."
    ],
    "answer": "She is an honest person.",
    "explanation": "Use 'an' before words that begin with a vowel sound. 'Honest' starts with a silent H, so it begins with an 'O' sound — use 'an'.",
    "hint": "The H in honest is silent — what sound does it start with?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Which is a collective noun?",
    "options": [
      "dog",
      "run",
      "beautiful",
      "flock"
    ],
    "answer": "flock",
    "explanation": "'Flock' is a collective noun — it names a group. 'A flock of birds'. Other collective nouns: herd, pack, bunch, team, fleet.",
    "hint": "It names a group of things.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'knife'?",
    "options": [
      "n",
      "i",
      "f",
      "k"
    ],
    "answer": "k",
    "explanation": "The K in 'knife' is silent. In Old English, 'kn-' was pronounced. Over time, the K sound was dropped but the spelling remained.",
    "hint": "The word starts with this silent letter.",
    "silentLetterInfo": "The K in 'knife' is silent because in Old English, kn- was pronounced as a two-sound cluster. Over centuries, English speakers stopped pronouncing the K."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'write'?",
    "options": [
      "r",
      "i",
      "t",
      "w"
    ],
    "answer": "w",
    "explanation": "The W in 'write' is silent. This happens with 'wr-' words: write, wrong, wrap, wrist, wreck. The W was pronounced in Old English.",
    "hint": "The first letter is silent.",
    "silentLetterInfo": "The W in 'write' is silent. In Old English, 'wr' was pronounced as a blend. Over time, only the R sound survived."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'thumb'?",
    "options": [
      "t",
      "h",
      "u",
      "b"
    ],
    "answer": "b",
    "explanation": "The B in 'thumb' is silent. Final B after M is usually silent: thumb, lamb, comb, bomb, climb, dumb.",
    "hint": "The last letter is silent.",
    "silentLetterInfo": "The B in 'thumb' is silent. The rule: B is silent after M at the end of a word (lamb, bomb, comb, climb)."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'knight'?",
    "options": [
      "k",
      "n",
      "g",
      "t"
    ],
    "answer": "k",
    "explanation": "The K in 'knight' is silent. All 'kn' words have a silent K: knight, know, knock, knee, kneel, knife, knot.",
    "hint": "The first letter is silent.",
    "silentLetterInfo": "The K is silent in 'knight'. The kn- combination comes from Old English where both letters were pronounced. Today only the N sound remains."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'island'?",
    "options": [
      "i",
      "s",
      "l",
      "d"
    ],
    "answer": "s",
    "explanation": "The S in 'island' is silent. The word comes from Old English 'iland'. The S was incorrectly added later by confusion with French 'isle'.",
    "hint": "It is not the first letter or last letter.",
    "silentLetterInfo": "The S in 'island' is silent and historically incorrect — it was added by scribes who confused it with the French word 'isle'."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'hour'?",
    "options": [
      "o",
      "u",
      "r",
      "h"
    ],
    "answer": "h",
    "explanation": "The H in 'hour' is silent, so we say 'an hour' not 'a hour'. Other silent H words: honest, honour, heir, herb (in American English).",
    "hint": "This is why we say 'an hour' not 'a hour'.",
    "silentLetterInfo": "The H in 'hour' is silent because the word comes from Old French 'heure'. The H was never really pronounced in this word in English."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'know'?",
    "options": [
      "k",
      "n",
      "o",
      "w"
    ],
    "answer": "k",
    "explanation": "The K in 'know' is silent. All kn- words have a silent K: know, knew, knife, knight, knock, kneel, knit, knob.",
    "hint": "The first letter is silent.",
    "silentLetterInfo": "The K in 'know' is silent. In Old and Middle English, the K in kn- words was fully pronounced. As English evolved, the K sound was dropped."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'psychology'?",
    "options": [
      "s",
      "y",
      "c",
      "p"
    ],
    "answer": "p",
    "explanation": "The P in 'psychology' is silent. This happens with 'ps-' words of Greek origin: psychology, psalm, pseudonym, psychiatry.",
    "hint": "The first letter is silent.",
    "silentLetterInfo": "The P in 'psychology' is silent. In Greek, 'ps' was pronounced as two sounds. English borrowed these words but simplified the pronunciation, dropping the P."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'lamb'?",
    "options": [
      "l",
      "a",
      "m",
      "b"
    ],
    "answer": "b",
    "explanation": "The B in 'lamb' is silent. The rule: final B is silent after M. Examples: lamb, comb, bomb, thumb, climb, dumb, limb, numb.",
    "hint": "The last letter is silent.",
    "silentLetterInfo": "The B in 'lamb' is silent. In Old English 'lamb' was spelled 'lamb' and the B was pronounced. Over time English speakers stopped pronouncing the final B after M."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'castle'?",
    "options": [
      "c",
      "a",
      "t",
      "l"
    ],
    "answer": "t",
    "explanation": "The T in 'castle' is silent. Silent T in words: castle, listen, fasten, soften, often, whistle, bustle, nestle, wrestle.",
    "hint": "A middle letter is silent.",
    "silentLetterInfo": "The T in 'castle' is silent. Many words with '-stle' or '-sten' have a silent T. This comes from French influence on English after the Norman Conquest."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'gnome'?",
    "options": [
      "g",
      "n",
      "o",
      "m"
    ],
    "answer": "g",
    "explanation": "The G in 'gnome' is silent. Silent G appears in gn- words: gnome, gnat, gnaw, gnu, sign, foreign, champagne.",
    "hint": "The first letter is silent.",
    "silentLetterInfo": "The G in 'gnome' is silent. In Greek and Latin origins, 'gn' was a blend. English simplified this by dropping the G sound in speech while keeping it in spelling."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'autumn'?",
    "options": [
      "a",
      "u",
      "t",
      "n"
    ],
    "answer": "n",
    "explanation": "The N at the end of 'autumn' is silent. The N is also silent in: column, solemn, hymn, condemn, damn.",
    "hint": "The last letter is silent.",
    "silentLetterInfo": "The N in 'autumn' is silent. These words came from Latin where the N was pronounced (autumnus). In English, the final N sound was dropped over time."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'sword'?",
    "options": [
      "s",
      "w",
      "o",
      "r"
    ],
    "answer": "w",
    "explanation": "The W in 'sword' is silent. Other silent W words: write, wrap, wrong, wreck, wrist, wrestle, wrinkle, two, answer, who.",
    "hint": "A middle letter is silent.",
    "silentLetterInfo": "The W in 'sword' is silent. The silent W in 'sw' combinations in certain words developed as English pronunciation changed over centuries."
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'मैं स्कूल जाता हूँ।' translates to:",
    "options": [
      "I go to school.",
      "I went to school.",
      "I am going to school.",
      "I will go to school."
    ],
    "answer": "I go to school.",
    "explanation": "'जाता हूँ' is present simple tense. In Hindi, simple present uses जाता/जाती + हूँ/हैं. English: 'I go to school' (habitual action).",
    "hint": "यह present simple tense है।",
    "silentLetterInfo": ""
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'वह कल आएगा।' translates to:",
    "options": [
      "He came yesterday.",
      "He comes tomorrow.",
      "He will come tomorrow.",
      "He is coming tomorrow."
    ],
    "answer": "He will come tomorrow.",
    "explanation": "'आएगा' is future tense in Hindi. 'कल' means tomorrow. Future tense in English uses 'will + verb'.",
    "hint": "'आएगा' = will come, 'कल' = tomorrow.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'वे खाना खा रहे हैं।' translates to:",
    "options": [
      "They eat food.",
      "They ate food.",
      "They are eating food.",
      "They will eat food."
    ],
    "answer": "They are eating food.",
    "explanation": "'खा रहे हैं' shows present continuous tense (ongoing action). English: 'are eating'. Hindi continuous tense uses रहा/रही/रहे + हूँ/है/हैं.",
    "hint": "'रहे हैं' shows ongoing action.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'उसने किताब पढ़ी।' translates to:",
    "options": [
      "She reads a book.",
      "She read a book.",
      "She is reading a book.",
      "She will read a book."
    ],
    "answer": "She read a book.",
    "explanation": "'पढ़ी' is past tense (feminine). Hindi past tense: verb agrees with gender. 'उसने' (she/he) + पढ़ी (read, feminine) = She read.",
    "hint": "'पढ़ी' is past tense.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Hindi to English Translation",
    "question": "What is 'apple' in Hindi?",
    "options": [
      "आम",
      "सेब",
      "केला",
      "अंगूर"
    ],
    "answer": "सेब",
    "explanation": "'Apple' = सेब (seb) in Hindi. Common fruits: आम (mango), केला (banana), अंगूर (grapes), संतरा (orange), अमरूद (guava).",
    "hint": "Think of the fruit that is red or green.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'बच्चे खेल रहे हैं।' translates to:",
    "options": [
      "Children played.",
      "Children will play.",
      "Children are playing.",
      "Children play."
    ],
    "answer": "Children are playing.",
    "explanation": "'खेल रहे हैं' = present continuous tense. 'बच्चे' = children. The structure 'रहे हैं' indicates an ongoing action.",
    "hint": "'रहे हैं' means the action is happening right now.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Hindi to English Translation",
    "question": "Which English sentence correctly uses past perfect tense?",
    "options": [
      "I eat food.",
      "I had eaten food before she arrived.",
      "I am eating food.",
      "I will eat food."
    ],
    "answer": "I had eaten food before she arrived.",
    "explanation": "Past perfect (had + past participle) is used for an action completed before another past action. 'I had eaten' happened before 'she arrived'.",
    "hint": "Past perfect = had + verb (past participle).",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "Which sentence is correct?",
    "options": [
      "She don't like milk.",
      "She doesn't like milk.",
      "She not like milk.",
      "She no like milk."
    ],
    "answer": "She doesn't like milk.",
    "explanation": "Use 'doesn't' (does not) with third person singular (he, she, it) in negative sentences. 'Don't' is used with I, you, we, they.",
    "hint": "Third person singular (she) uses does/doesn't.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "Fill in the blank: 'There ___ many students in the class.'",
    "options": [
      "is",
      "was",
      "are",
      "has"
    ],
    "answer": "are",
    "explanation": "Use 'are' with plural subjects. 'Students' is plural, so we use 'are'. Rule: singular → is/was, plural → are/were.",
    "hint": "'Students' is plural.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "Which article is correct? '___ elephant is a large animal.'",
    "options": [
      "A",
      "An",
      "The",
      "No article"
    ],
    "answer": "An",
    "explanation": "Use 'an' before words starting with a vowel sound. 'Elephant' starts with the vowel 'E', so use 'an'. 'A' is used before consonant sounds.",
    "hint": "'Elephant' starts with a vowel.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "Choose the correct form: 'He ___ to school every day.'",
    "options": [
      "go",
      "goes",
      "going",
      "gone"
    ],
    "answer": "goes",
    "explanation": "With third person singular (he, she, it) in present simple, add 's' or 'es' to the verb. 'Go' → 'goes'. I/you/we/they go.",
    "hint": "He, she, it always gets 's' or 'es'.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "What is the past tense of 'go'?",
    "options": [
      "goed",
      "goes",
      "gone",
      "went"
    ],
    "answer": "went",
    "explanation": "'Went' is the irregular past tense of 'go'. Irregular verbs don't follow the regular '-ed' pattern: go→went, come→came, see→saw, eat→ate.",
    "hint": "This is an irregular verb.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "Which sentence is in passive voice?",
    "options": [
      "Ram ate the apple.",
      "The apple was eaten by Ram.",
      "Ram will eat the apple.",
      "Ram has eaten the apple."
    ],
    "answer": "The apple was eaten by Ram.",
    "explanation": "Passive voice: Object + was/were + past participle + by + subject. The focus shifts to the action, not who did it.",
    "hint": "In passive voice, the object comes first.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "'Neither he nor his friends ___ coming.' Choose the correct verb.",
    "options": [
      "is",
      "are",
      "was",
      "am"
    ],
    "answer": "are",
    "explanation": "With 'neither...nor', the verb agrees with the noun closer to it. 'Friends' (plural) is closer, so use 'are'.",
    "hint": "The verb agrees with the word nearest to it.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "What is the comparative form of 'good'?",
    "options": [
      "gooder",
      "more good",
      "better",
      "best"
    ],
    "answer": "better",
    "explanation": "'Good' has irregular forms: good → better → best. These are irregular comparatives. Other irregular: bad→worse→worst, little→less→least.",
    "hint": "This is an irregular comparative.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "Which sentence has the correct punctuation?",
    "options": [
      "Lets go to the park.",
      "Let's go to the park.",
      "Lets' go to the park.",
      "Let's, go to the park."
    ],
    "answer": "Let's go to the park.",
    "explanation": "'Let's' = 'Let us'. The apostrophe replaces the 'u'. 'Lets' (without apostrophe) means 'allows' — e.g., 'He lets them play'.",
    "hint": "'Let's' is a contraction of 'Let us'.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "What is the opposite (antonym) of 'brave'?",
    "options": [
      "bold",
      "fearless",
      "cowardly",
      "strong"
    ],
    "answer": "cowardly",
    "explanation": "The antonym of 'brave' is 'cowardly'. Learning antonyms helps build vocabulary. Other pairs: hot/cold, big/small, happy/sad, love/hate.",
    "hint": "The opposite of brave is this.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "What part of speech is 'run' in 'He went for a run'?",
    "options": [
      "Verb",
      "Adverb",
      "Noun",
      "Adjective"
    ],
    "answer": "Noun",
    "explanation": "Here 'run' is a noun (a thing — the run). The same word can be a verb in 'He can run fast'. Context determines the part of speech.",
    "hint": "Is 'run' doing an action here, or is it a thing?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "'She is very beautiful.' What is 'very'?",
    "options": [
      "Adjective",
      "Verb",
      "Adverb",
      "Noun"
    ],
    "answer": "Adverb",
    "explanation": "'Very' is an adverb — it modifies the adjective 'beautiful'. Adverbs can modify verbs, adjectives, or other adverbs.",
    "hint": "It modifies an adjective, not a verb.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Which is a proper adjective?",
    "options": [
      "beautiful",
      "tall",
      "Indian",
      "red"
    ],
    "answer": "Indian",
    "explanation": "'Indian' is a proper adjective — derived from a proper noun (India). Other proper adjectives: Chinese, French, American, Shakespearean.",
    "hint": "It is derived from a proper noun (a specific name).",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "What type of pronoun is 'myself'?",
    "options": [
      "Personal",
      "Reflexive",
      "Demonstrative",
      "Relative"
    ],
    "answer": "Reflexive",
    "explanation": "'Myself', 'yourself', 'himself', 'herself', 'itself', 'ourselves', 'themselves' are reflexive pronouns — they refer back to the subject.",
    "hint": "It refers back to the subject.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Parts of Speech",
    "question": "Which word is an abstract noun?",
    "options": [
      "table",
      "dog",
      "anger",
      "river"
    ],
    "answer": "anger",
    "explanation": "'Anger' is an abstract noun — it's an emotion that cannot be seen or touched. Abstract nouns include emotions, qualities, and ideas.",
    "hint": "Can you see, touch, or hold this thing?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'Wednesday'?",
    "options": [
      "W",
      "d",
      "n",
      "e"
    ],
    "answer": "d",
    "explanation": "The first 'd' in 'Wednesday' is silent. It's pronounced 'WENZday'. The word comes from 'Woden's Day' (the Norse god Woden/Odin).",
    "hint": "It's a middle letter you skip when saying the day.",
    "silentLetterInfo": "The D in 'Wednesday' (the middle one) is silent. The day is named after Woden (Odin). Over time, the pronunciation simplified to 'WENZday'."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'receipt'?",
    "options": [
      "r",
      "e",
      "p",
      "t"
    ],
    "answer": "p",
    "explanation": "The P in 'receipt' is silent. It comes from Latin 'recepta'. The P was added by scribes to show the Latin origin but was never pronounced.",
    "hint": "A middle consonant is silent.",
    "silentLetterInfo": "The P in 'receipt' is silent. It was added by medieval scribes to reflect the Latin origin (recepta) but the P was never actually pronounced in English speech."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'debt'?",
    "options": [
      "d",
      "e",
      "b",
      "t"
    ],
    "answer": "b",
    "explanation": "The B in 'debt' is silent. It was added by scholars to reflect the Latin origin 'debitum' but was never pronounced in English.",
    "hint": "Latin-origin word where a letter was added for show.",
    "silentLetterInfo": "The B in 'debt' is silent. Medieval scholars added it to show the Latin root (debitum) but it was never pronounced. Same for 'doubt' — silent B."
  },
  {
    "topic": "Silent Letters",
    "question": "Which letter is silent in 'muscle'?",
    "options": [
      "m",
      "u",
      "c",
      "l"
    ],
    "answer": "c",
    "explanation": "The C in 'muscle' is silent. It is pronounced 'MUSSle'. Other words with silent C: scissors, scene, scent, science.",
    "hint": "A middle letter is silent in this body-related word.",
    "silentLetterInfo": "The C in 'muscle' is silent. Words with 'sc' often have a silent C: science, scene, scent, scissors. The C was present in Latin (musculus) but dropped in pronunciation."
  },
  {
    "topic": "Grammar Rules",
    "question": "Choose the correct sentence:",
    "options": [
      "Neither the boys nor the girl are happy.",
      "Neither the boys nor the girl is happy.",
      "Neither the boys nor the girl was happy.",
      "Neither the boys nor the girl were happy."
    ],
    "answer": "Neither the boys nor the girl is happy.",
    "explanation": "With 'neither...nor', the verb agrees with the noun closest to it. 'Girl' is singular and nearest to the verb, so use 'is'.",
    "hint": "The verb agrees with the nearest subject.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "The synonym of 'happy' is:",
    "options": [
      "sad",
      "angry",
      "joyful",
      "tired"
    ],
    "answer": "joyful",
    "explanation": "A synonym has the same or similar meaning. Happy = joyful, glad, cheerful, content. Antonym (opposite) of happy = sad, unhappy, miserable.",
    "hint": "Which word means the same as happy?",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "What is the superlative form of 'bad'?",
    "options": [
      "badder",
      "baddest",
      "worse",
      "worst"
    ],
    "answer": "worst",
    "explanation": "Bad has irregular forms: bad → worse → worst. Other irregular superlatives: good→best, little→least, many→most, far→farthest/furthest.",
    "hint": "This is an irregular superlative.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "Fill in the blank: 'I have been studying ___ three hours.'",
    "options": [
      "since",
      "for",
      "from",
      "during"
    ],
    "answer": "for",
    "explanation": "Use 'for' with a period/duration of time (for 3 hours, for 2 days). Use 'since' with a point in time (since morning, since 2020).",
    "hint": "'For' = duration. 'Since' = starting point.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Grammar Rules",
    "question": "Which sentence uses the correct tense?",
    "options": [
      "I am living here since 2010.",
      "I have been living here since 2010.",
      "I lived here since 2010.",
      "I was living here since 2010."
    ],
    "answer": "I have been living here since 2010.",
    "explanation": "When an action started in the past and continues to the present, use present perfect continuous: 'have/has been + verb-ing'. Use 'since' for point in time.",
    "hint": "The action started in 2010 and still continues.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Hindi to English Translation",
    "question": "What does 'नमस्ते' mean in English?",
    "options": [
      "Goodbye",
      "Hello/Greetings",
      "Thank you",
      "Sorry"
    ],
    "answer": "Hello/Greetings",
    "explanation": "'Namaste' (नमस्ते) is a respectful Indian greeting meaning 'I bow to the divine in you'. It is used for both hello and goodbye.",
    "hint": "It is an Indian greeting.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'मुझे भूख लगी है।' translates to:",
    "options": [
      "I am tired.",
      "I am happy.",
      "I am hungry.",
      "I am thirsty."
    ],
    "answer": "I am hungry.",
    "explanation": "'भूख' = hunger. 'लगी है' = feeling/experiencing. 'मुझे भूख लगी है' literally 'hunger is felt by me' = I am hungry.",
    "hint": "'भूख' is related to eating.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Hindi to English Translation",
    "question": "What is 'school' in Hindi?",
    "options": [
      "घर",
      "विद्यालय",
      "दुकान",
      "बाज़ार"
    ],
    "answer": "विद्यालय",
    "explanation": "School = विद्यालय (vidyalay) in Hindi. It means 'place of knowledge' (विद्या = knowledge, आलय = place). Also commonly called 'स्कूल' (borrowed from English).",
    "hint": "'विद्या' means knowledge.",
    "silentLetterInfo": ""
  },
  {
    "topic": "Hindi to English Translation",
    "question": "'वह बहुत अच्छा गाता है।' translates to:",
    "options": [
      "He sings very well.",
      "She sings very well.",
      "He is singing very well.",
      "He sang very well."
    ],
    "answer": "He sings very well.",
    "explanation": "'वह' can mean he/she. 'गाता है' (masculine form) tells us the subject is male. 'बहुत अच्छा' = very well. Present simple.",
    "hint": "'गाता है' is masculine present simple form.",
    "silentLetterInfo": ""
  }
];