"use strict()";

// select the student html container, count them, use that to determine number of pages
var studentItem = $('.student-item');
var numberOfStudents = studentItem.length;
var pages = numberOfStudents / 10;
var pageNumber = 1;
var index = pageNumber * 10 - 1

//initial view is the first 10 students
$('.student-item:gt(' + index + ')').hide();

//build the pagination navigation code block
var pagination = $('.pagination');
var paginationContent = '<ul>';

//create number of list items === number of pages
for (var p = 1; p<=pages; ++p) {
  paginationContent += '<li><a class=';
  if (p === 1){ paginationContent += '"active"';}
  paginationContent += ' href="#">' + p + '</a></li>';
}

// finish the pagination code block and fill the .pagination div with it
paginationContent += '</ul>';
pagination.html(paginationContent);