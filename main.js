$(document).ready(function(){
  var count = 5;
  add_task(); 
  delete_task(); 
  function add_task() {

  $('.add-new-task').submit(function(){
    var new_task = $('.add-new-task input[name=new-task]').val();
    count = count + 1;
    var print = '<li><span>' + new_task + '</span><img id="' + count + '" class="delete-button" width="10px" src="http://bit.ly/1JKyhh5" /></li>';
    if(new_task !== ''){
      $('.add-new-task input[name=new-task]').val('');
      $(print).appendTo('.task-list ul').hide().fadeIn();
      delete_task();
    }
    return false;
    });
  }

  function delete_task() {
    $('.delete-button').click(function(){
      var current_element = $(this);
      var id = $(this).attr('id');
      current_element.parent().fadeOut("fast", function() { $(this).remove(); });
    });
  }
});
