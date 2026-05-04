// Make all project page images clickable to zoom
$(document).ready(function() {
  $('.project-content img').each(function() {
    var src = $(this).attr('src');
    $(this).wrap('<a href="' + src + '" data-fancybox="gallery"></a>');
  });
});