

function reloj(){

var HoraActual = new Date();
      
      //SEGUNDOS
      let Seconds = HoraActual.getSeconds();
      let grados = 360 * Seconds / 60;
      var Seg = document.getElementById('agujaS').style.transform = "translateX(-50%) rotate(" +grados+ "deg)";  

      //minutos
      let Minutes = HoraActual.getMinutes();
      let grado = 360 * Minutes / 60;
      var Min = document.getElementById('agujaM').style.transform = 'translateX(-50%) rotate('+ grado +'deg)';  
      
      //Horas
      let Hours = HoraActual.getHours();
      if (Hours > 12){
        Hours = Hours - 12;
      }
      let grad = 360 * Hours / 12;
      var Hora = document.getElementById('agujaH').style.transform = 'translate(-50%) rotate('+ grad +'deg)';  

      //Reloj digital
      //HORA
      var DigitalHora = document.getElementById('hora');
      if(Hours > 12){
          DigitalHora.innerHTML = Hours;
      }else{
        DigitalHora.innerHTML = "0" + Hours;
      }
    
      //Minutos
      var DigitalMinutos = document.getElementById('minutos');
      if(Minutes > 9){
          DigitalMinutos.innerHTML = Minutes        
      }else{
        DigitalMinutos.innerHTML = "0" + Minutes   
      }
            
      //Minutos
      var Digitalsegundos = document.getElementById('segundos');
      if(Seconds > 9){
      Digitalsegundos.innerHTML = Seconds;
       }else{
        Digitalsegundos.innerHTML = "0" + Seconds;  
    } 

}

setInterval(reloj,1000);