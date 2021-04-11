var days = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleAkan = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleAkan = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
var CC, YY, MM, DD, d, day;

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
switch(gender){
    case "male":
      if (day == 1){
        alert("You were born on " +days[0] + " and Your akan name is " +maleAkan[0]);
      }
      else if(dayValue == 2){
        alert("You were born on "+days[1] + " and Your akan name is " +maleAkan[1]);
      }
      else if(dayValue == 3){
        alert("You were born on " +days[2]+ " and Your akan name is " +maleAkan[2]);
      }
      else if(dayValue == 4){
        alert("You were born on "+days[3] +  " and Your akan name is " +maleAkan[3]);
      }
      else if(dayValue == 5){
        alert("You were born on "+days[4] +  " and Your akan name is " +maleAkan[4]);
      }
      else if(dayValue == 6){
        alert("You were born on "+days[5] +  " and Your akan name is " +maleAkan[5]);
      }
      else if(dayValue == 7){
        alert("You were born on "+days[6] + " and Your akan name is " +maleNames[6]);
      }
    break;
    case "female":
        if (day == 1){
            alert("You were born on " +days[0] + " and Your akan name is " +femaleAkan[0]);
          }
          else if(dayValue == 2){
            alert("You were born on "+days[1] + " and Your akan name is " +femaleAkan[1]);
          }
          else if(dayValue == 3){
            alert("You were born on " +days[2]+ " and Your akan name is " +femaleAkan[2]);
          }
          else if(dayValue == 4){
            alert("You were born on "+days[3] +  " and Your akan name is " +femaleAkan[3]);
          }
          else if(dayValue == 5){
            alert("You were born on "+days[4] +  " and Your akan name is " +femaleAkan[4]);
          }
          else if(dayValue == 6){
            alert("You were born on "+days[5] +  " and Your akan name is " +femaleAkan[5]);
          }
          else if(dayValue == 7){
            alert("You were born on "+days[6] + " and Your akan name is " +femaleNames[6]);
          }
          break
      default:
            
    }
  }