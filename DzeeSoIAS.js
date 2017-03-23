
/*_______________UploadEmp______________________________________*/
function check() {
  var str = document.getElementById('fileinput').value;
  if(str=="")
	  {
	  alert('Please select a file');
	  location.reload();
	  return false;
	  }
  var arr=str.split('.'); 
  
  var ext = arr[1];
  ext = ext.toLowerCase();
  
  
  if(!(ext == 'xlsx'|| ext == 'csv')) {
    alert('You selected a .'+ ext +
          ' file; please select a .xls or .csv file instead!');
    location.reload();
    return false;
    
	  }
  else
	  

	  alert('Your File Uploaded successfully'); 
	 
    return true;
  
  }
function move() {
	  var elem = document.getElementById("myBar");   
	  var width = 1;
	  var id = setInterval(frame, 10);
	  function frame() {
	    if (width >= 100) {
	      clearInterval(id);
	    } else {
	      width++; 
	      elem.style.width = width + '%'; 
	    }
	    
	  }
	  alert('Your File Uploaded successfully');
	  
	}
function Back()
{
	var myBtn = document.getElementById('Back');

	  //add event listener
	  
		  var win = window.open("file:///C:/Tools/eclipse/workspace/DzeeSolution/DzeeIASBroker.html", '_self');
		  win.focus();

	  
}
function cancel(){
	location.reload();
}
function openExcel1(){ 
    
	newwindow=window.open("C:/Users/natasha/Desktop/DzeeSolutions/downloads/sample.xlsx",'_self');	
	
}
/*_______________brokerpage______________________________________*/


function EmpData(){
   
	  var win = window.open("file:///C:/Tools/eclipse/workspace/DzeeSolution/UploadEmpCensus.html", '_self');
	  win.focus();
 
}
/*______________________allpage___________________*/
function startTime()
{
var today=new Date();
var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
var month=months[today.getMonth()];
var days = ["Sun","Mon","Tue","Wed","Thu","Friday","Sat"];
var day = days[today.getDay()];
var year=today.getFullYear();


var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('inputDate').innerHTML=day+"  "+month+"  "+today.getDate()+"  "+year+"      "+h+":"+m+":"+s;

t=setTimeout('startTime()',500);
}
function checkTime(i)
{
	if (i<10)
		{
			i="0" + i;
		}
return i;
}
/*___________________________________homepage______________________________________________________*/
function createBroker()
{
	var win=window.open("http://96.88.82.250/employeePlanSelection/#!/newBrokerAccount","_self");
	win.focus;
}
function changePassword()
{
	var win=window.open("http://96.88.82.250/employeePlanSelection/#!/changePassword","_self");
	
	
	win.focus;
}
function uploadEmployee(){
	var win=window.open("file:///C:/Tools/eclipse/workspace/DzeeSolution/DzeeIASBroker.html",'_self');
	win.focus;
}
