/*check checked checkbox*/

if(!document.form_part_1_form.newuse.checked 
			&& !document.form_part_1_form.process.checked 
			&& !document.form_part_1_form.product.checked  
			&& !document.form_part_1_form.other.checked)
	{
		alert("Please Check at least one !");
		return false;
	}
/*number only*/

function validate(evt) {
	  var theEvent = evt || window.event;
	  var key = theEvent.keyCode || theEvent.which;
	  key = String.fromCharCode( key );
	  	//var regex = /[0-9]|\./;
		var regex = /[0-9]|\./;
	  if( !regex.test(key) ) {
	    theEvent.returnValue = false;
	    if(theEvent.preventDefault) theEvent.preventDefault();
	  }
}

/* example : - 
*	<input name="contribution" id="contribution" type="text" size="30" onkeypress='validate(event)' />
*/