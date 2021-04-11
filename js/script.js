var days = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleAkan = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleAkan = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
var CC, YY, MM, DD, day, dayresult;

function calculations(){
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0,2));
  YY = parseInt(year.substring(2,4));
}
 