"use strict()";

// select the student html container, count them, use that to determine number of pages
var studentItem = $('.student-item');
var numberOfStudents = studentItem.length;
var pages = Math.ceil(numberOfStudents / 10);

// display the correct students when page numbers are clicked (or on page load)
// also sets active class on correct page number link
function paginate(pageNumber) {
  var endIndex = pageNumber * 10 - 1;
  var startIndex = endIndex - 9;
  $('.student-item:gt(' + endIndex + ')').hide();
  if (pageNumber > 1) {
    $('.student-item:lt(' + startIndex + ')').hide();
  }
  active(pageNumber);
}

//build the pagination navigation code block
var pagination = $('.pagination');
var paginationContent = '<ul>';

//create number of list items === number of pages
for (var p = 1; p <= pages; ++p) {
  paginationContent += '<li><a class="pagelink"';
  // if (p === 1){ paginationContent += ' active';}
  paginationContent += ' href="#">' + p + '</a></li>';
}

// finish the pagination code block and fill the .pagination div with it
paginationContent += '</ul>';
pagination.html(paginationContent);

// select page number links and add event handler
// show all students then call pagination function on click
var pageLinks = $('.pagelink');

pageLinks.click(function(){
  var pageNumber = $(this).text();
  studentItem.show();
  paginate(pageNumber);
});

// set active class on current page
function active(pageNumber) {
  var page = pageNumber
  pageLinks.each(function() {
    $(this).removeClass('active');
    if ($(this).text() === page) {
      $(this).addClass('active');
    }
  });
}

// set initial view to the first 10 students (initial view is page 1)
$(document).ready(function(){
  paginate('1');
});