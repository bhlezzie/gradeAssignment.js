// gradeAssignment.js

// Prompt user to input their score
let score = ("Please enter your score:");

// Convert the input to a number
score = Number(score);

// Assign grades based on the score
if (score >= 90) 
    {console.log("Excellent");}
  else if (score >= 80)
    {console.log("Good");}
  else if (score >= 70) 
    {console.log("Fair");}
  else
    {console.log("Needs Improvement");}
