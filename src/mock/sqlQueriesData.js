export const queriesToCandidateIdMap = {
  "SELECT * FROM CandidatesTable": [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  "SELECT * FROM CandidatesTable WHERE first_name LIKE 'J%'": [1, 5, 20],
  "SELECT * FROM CandidatesTable WHERE gender = 'Male'": [
    2, 3, 4, 5, 6, 7, 8, 10, 12, 13, 17, 19, 20,
  ],
  "SELECT * FROM CandidatesTable WHERE company_name LIKE 'K%'": [2, 10],
  "SELECT * FROM CandidatesTable WHERE gender = 'Female'": [
    1, 9, 11, 14, 15, 16, 18,
  ],
  "SELECT * FROM CandidatesTable WHERE company_name LIKE 'T%'": [5, 7, 15, 17],
  "SELECT * FROM CandidatesTable WHERE last_name LIKE 'C%'": [1, 19],
  "SELECT * FROM CandidatesTable WHERE first_name LIKE 'H%'": [8],
  "SELECT * FROM CandidatesTable WHERE first_name and company_name LIKE 'T%'": [7],
};

export const queriesList = Object.keys(queriesToCandidateIdMap);
