$(function() {

  var $send = $('#form'),
    $message = $('.form-control'),
    $list = $('.list.list-unstyled'),
    $chkBox = $(".itemToDo"),
    $todoCount = $(".uncomplete").size();


  function todoCnt() {
    $todoCount = $(".uncomplete").size();
    $(".todo-count").text($todoCount + "  дел осталось выполнить");

  };


  $send.on("submit", $send, function(e) {
    e.preventDefault();
    console.log('Was clicked');

    var mes = $message.val();
    $message.val('');

    $list.append('<li><label><input class="itemToDo uncomplete" type="checkbox"> ' + mes + '</label></li>');
    todoCnt();


  });

  $(".main").on("click", ".itemToDo", function() {
    if ($(this).is(":checked")) {
      $(this).addClass('completed').removeClass('uncomplete');
      $(this).parent("label").css({
        "text-decoration": "line-through",
        color: "gray"
      });
    } else {
      $(this).removeClass('completed').addClass('uncomplete');
      $(this).parent("label").css({
        "text-decoration": "",
        color: "#000"
      });
    }
    todoCnt();
  });

  $('#allComplete').on('change', function() {
    if ($(this).is(':checked')) {
      $('.itemToDo').prop('checked', $(this).is(':checked')).addClass('completed').removeClass('uncomplete').parent().css({
        "text-decoration": "line-through",
        color: "gray"
      });
    } else {
      $('.itemToDo').removeAttr('checked').removeClass('completed').addClass('uncomplete').parent().css({
        "text-decoration": "",
        color: "#000"
      });
    }
    todoCnt();
  });


  $(".selected").click(function() {
    $('.itemToDo').parent().parent().toggle();
  });

  $("a[href='#/complited']").click(function() {
    $('.uncomplete').parent().parent().toggle();
  });

  $("a[href='#/active']").click(function() {
    $('.completed').parent().parent().toggle();
  });

  $(".clear-complited").click(function() {
    $('.completed').parent().parent().remove();
    todoCnt();
  });

  $(".todo-count").text($todoCount + "  дел осталось выполнить");

});