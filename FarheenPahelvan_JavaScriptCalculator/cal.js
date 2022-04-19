function myclick(a)
{
		form.display.value+=a;
}
function equal()
{
		form.display.value=eval(form.display.value);
}
function c()
{
		form.display.value="0";
}
function backspace()
{
		var prevalue=form.display.value;
		form.display.value=prevalue.substr(0,prevalue.length-1);
}
function square(form) 
{
		form.display.value = eval(form.display.value) * eval(form.display.value)
}
function exp(form) 
{
		form.display.value = Math.exp(form.display.value);
}
function cos(form) 
{
		form.display.value = Math.cos(form.display.value);
}	
function tan(form) 
{
		form.display.value = Math.tan(form.display.value);
}
function sin(form) 
{
		form.display.value = Math.sin(form.display.value);
}
function ln(form) 
{
		form.display.value = Math.log(form.display.value);
}
function percent(input) 
{
		val = input.value;
		input.value = input.value + "%";
}
function sqrt(form) 
{
		form.display.value = Math.sqrt(form.display.value);
}
	