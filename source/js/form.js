$(function() {
  document.querySelector(`.send__form`).addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open("POST", "contact.php", true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
        if (http.responseText.indexOf(f.form-name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
          th.trigger("reset");
        }
      }
    }
    http.onerror = function() {
      alert('Ошибка, попробуйте еще раз');
    }
    http.send(new FormData(f));
  }, false);
});

var inputs = document.querySelectorAll('.send__form-button--add');
Array.prototype.forEach.call(inputs, function(input){
  var label	 = input.nextElementSibling;
    var  labelVal = label.innerHTML;
  input.addEventListener('change', function(e){
    var fileName = '';
    if( this.files && this.files.length > 1 )
      fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
    else
      fileName = e.target.value.split( '\\' ).pop();
		if( fileName )
      label.innerHTML = fileName;
    else
      label.innerHTML = labelVal;
	});
});
