var days = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleAkan = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleAkan = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
var CC, YY, MM, DD, d, dayresult;

function calculations(){
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0,2));
  YY = parseInt(year.substring(2,4));
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
  console.log(d);
  return (Math.floor(d));
}

function getGender(){
    var g = document.getElementsByName("gender");
    if(g[0].checked == true){
      var gender = "male";
    }
    else if(g[1].checked == true){
        var gender = "female";
      }
      else{
        return false;
      }
}  