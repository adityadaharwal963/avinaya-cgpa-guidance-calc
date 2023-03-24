function calculate() {
    // Get input values
    var credit1 = parseFloat(document.getElementById("credit1").value);
    var credit2 = parseFloat(document.getElementById("credit2").value);
    var credit3 = parseFloat(document.getElementById("credit3").value);
    var credit4 = parseFloat(document.getElementById("credit4").value);
    var credit5 = parseFloat(document.getElementById("credit5").value);

    var grade1 = document.getElementById("grade1").value.toUpperCase();
    var grade2 = document.getElementById("grade2").value.toUpperCase();
    var grade3 = document.getElementById("grade3").value.toUpperCase();
    var grade4 = document.getElementById("grade4").value.toUpperCase();
    var grade5 = document.getElementById("grade5").value.toUpperCase();

    // Check for valid inputs
    var isValid = true;
    if (isNaN(credit1) || credit1 <= 0) {
        document.getElementById("credit1").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("credit1").classList.remove("error");
    }
    if (isNaN(credit2) || credit2 <= 0) {
        document.getElementById("credit2").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("credit2").classList.remove("error");
    }
    if (isNaN(credit3) || credit3 <= 0) {
        document.getElementById("credit3").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("credit3").classList.remove("error");
    }
    if (isNaN(credit4) || credit4 <= 0) {
        document.getElementById("credit4").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("credit4").classList.remove("error");
    }
    if (isNaN(credit5) || credit5 <= 0) {
        document.getElementById("credit5").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("credit5").classList.remove("error");
    }
    if (grade1 === "" || !/^[A-D][+-]?$/.test(grade1)) {
        document.getElementById("grade1").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("grade1").classList.remove("error");
    }
    if (grade2 === "" || !/^[A-D][+-]?$/.test(grade2)) {
        document.getElementById("grade2").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("grade2").classList.remove("error");
    }
    if (grade3 === "" || !/^[A-D][+-]?$/.test(grade3)) {
        document.getElementById("grade3").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("grade3").classList.remove("error");
    }
    if (grade4 === "" || !/^[A-D][+-]?$/.test(grade4)) {
        document.getElementById("grade4").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("grade4").classList.remove("error");
    }
    if (grade5 === "" || !/^[A-D][+-]?$/.test(grade5)) {
        document.getElementById("grade5").classList.add("error");
        isValid = false;
    } else {
        document.getElementById("grade5").classList.remove("error");
    }

    if (!isValid) {
        document.getElementById("result").innerHTML = "";
        return;
    }

    // Calculate CGPA
    var gradePoints = {
        "A+": 10.0,
        "A": 9.0,
        "A-": 8.0,
        "B+": 7.0,
        "B": 6.0,
        "B-": 5.0,
        "C+": 4.0,
        "C": 3.0,
        "C-": 2.0,
        "D+": 1.0,
        "D": 0.7,
        "D-": 0.3,
        "F": 0.0
    };

    var totalCredit = credit1 + credit2 + credit3 + credit4 + credit5;
    var totalGradePoint = gradePoints[grade1] * credit1 +
        gradePoints[grade2] * credit2 +
        gradePoints[grade3] * credit3 +
        gradePoints[grade4] * credit4+
        gradePoints[grade5] * credit5;

    var cgpa = totalGradePoint / totalCredit;
    document.getElementById("result").innerHTML = "CGPA: " + cgpa.toFixed(2);

    document.getElementById("result").classList.add("success");

    
var targetcgpa = document.getElementById("traget").value
if (targetcgpa >= 1 && targetcgpa <= 10) {
  var totalMarks = (targetcgpa * 10 + 5) * 6  ; // Assuming passing marks is 50 out of 100 and there are 6 subjects
  var marksPerSubject = (targetcgpa > 9.5 ? 100 : totalMarks / 6).toFixed(2); // Round off to 2 decimal places
  
  document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + '<p>To achieve a CGPA of '+ targetcgpa +' , you need to target a total of '+ totalMarks +' marks in 6 subjects.</p> <p>To achieve this, you need to target '+ marksPerSubject +  '  marks per subject.</p>';
  if (cgpa >= 1 && cgpa < 4) {
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML +"<p> Your CGPA is less than 4, don't worry, you still have time to improve your grades. Here are a few suggestions that might help you:</p><ul><li>Here are some courses you can consider for the coming semesters:<ul><li>Basic Mathematics</li><li>Programming Fundamentals</li><li>Engineering Mechanic</li></ul></li><li>Improve your exam-taking skills: Learn how to manage your time effectively during exams, and practice solving previous year question papers or sample papers. This will help you improve your exam-taking skills.</li><li>Analyze your performance: First, analyze your performance to understand why your grades are low. Identify the subjects or topics where you are struggling and try to focus more on them.</li><li>Remember, improving your grades takes time and effort. Be patient, work hard, and stay committed to your goals. Good luck!</li>";
  } else if (cgpa >=4 && cgpa < 6.5) {
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML +"<p>Your CGPA is less than 6.5, here are some additional suggestions that might help you:</p><ul><li>Here are some courses you can consider for the coming semesters:<ul><li>Data Structures and Algorithms</li><li>Programming Fundamentals</li><li>Engineering Mechanic</li></ul></li><li>Set achievable goals: Set achievable goals for each semester and break them down into smaller tasks. This will help you stay focused and motivated throughout the semester</li><li>Remember, improving your CGPA takes time, effort, and commitment. Be patient, work hard, and stay focused on your goals. With persistence and dedication, you can achieve academic success. Good luck!</li></ul>";
  } else if (cgpa >= 6.5 && cgpa < 8.5) {
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML +"<p>Congratulations on achieving a CGPA  above 6.5. Here are some courses that you can consider taking to improve your academic performance and enhance your career prospects:</p><ul><li>Data Structures and Algorithms</li> <li>Computer Networks</li> <li>Operating Systems</li><li>Artificial Intelligence</li><li>Advanced Mathematics</li></ul>"; 
  } 
  if (cgpa > 8.5) {
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "<p> congratulations on your excellent academic performance!. Set higher goals and Build your network.<br>Here are some courses you can consider for the coming semesters:</p>    <br><ul>  <li>Data Structures and Algorithms</li> <li>Computer Networks</li> <li>Operating Systems</li><li>Artificial Intelligence</li><li>Advanced Mathematics</li> </ul>";

  }
 
}


// Reset button
document.getElementById("reset").addEventListener("click", function (){
    document.getElementById("credit1").value = "";
    document.getElementById("credit2").value = "";
    document.getElementById("credit3").value = "";
    document.getElementById("credit4").value = "";
    document.getElementById("credit5").value = "";
    document.getElementById("grade1").value = "";
    document.getElementById("grade2").value = "";
    document.getElementById("grade3").value = "";
    document.getElementById("grade4").value = "";
    document.getElementById("grade5").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").classList.remove("success");
    document.getElementById("credit1").classList.remove("error");
    document.getElementById("credit2").classList.remove("error");
    document.getElementById("credit3").classList.remove("error");
    document.getElementById("credit4").classList.remove("error");
    document.getElementById("credit5").classList.remove("error");
    document.getElementById("grade1").classList.remove("error");
    document.getElementById("grade2").classList.remove("error");
    document.getElementById("grade3").classList.remove("error");
    document.getElementById("grade4").classList.remove("error");
    document.getElementById("grade5").classList.remove("error");
});

// suggest course cards for intentcive
// Assuming cpga is the variable containing the CGPA value



    
}