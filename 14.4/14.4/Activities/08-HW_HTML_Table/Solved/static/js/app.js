// Use D3 to select the table body
var tbody = d3.select("#student-tbody");

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// Use a forEach function to loop through the array of objects (from your data)
grades.forEach((studentgrade) => {

  // Assign values to the `student` name variable and the `grade` variable
  student = studentgrade.name;
  grade = studentgrade.grade;

  // Append one table row per student/grade
  var row = tbody.append("tr");

  // append one cell for the student and one cell for the grade
  row.append("td").text(student);
  row.append("td").text(grade);
});
