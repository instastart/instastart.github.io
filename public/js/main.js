'use strict';

// Call this function when the page loads (the "ready" event)
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

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}