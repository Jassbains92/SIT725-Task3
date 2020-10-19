console.log('ENV loaded');
$(document).ready(function () {
  console.log('Document Ready');
  $('#calculatebtn').click(function () {
    var number1 = $('#Number1').val();
    var number2 = $('#Number2').val();
    var numbers = {num1: Number1, num2: Number2};
    $.get("/adder", numbers, function (data) {
      console.log('Data has returned' + data);
      $('#result').val(data);
    });
  });
});