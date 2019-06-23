
    document.getElementById("MONEY").innerHTML=50000;
    document.getElementById("AREA").innerHTML=0;
    var time;
    var timer = 0;
    var timer1 = 0;
    var timer2 = 0;
    var timer3 = 0;
    function setd(){
        time = new Date();
    }
    function start(){
        setd();
    }
    start();
    function setcur(){
        var Intervalnalog = 6000;
        var Interval = 300;
        var chbox1 = document.getElementById("chbox1");
        var chbox2 = document.getElementById("chbox2");
        var chbox3 = document.getElementById("chbox3");
        {
            time.setSeconds(time.getSeconds()+1);
            timer ++;
            timer1 ++;
            timer2 ++;
            timer3 ++;
        }
        if(chbox2.checked){
            time.setMinutes(time.getMinutes()+1);
            timer += 60;
            timer1 += 60;
            timer2 += 60;
            timer3 += 60;
        }
        if(chbox3.checked){
            time.setHours(time.getHours()+1);
            timer += 3600;
            timer1 += 3600;
            timer2 += 3600;
            timer3 += 3600;
        }
        var y = time.getFullYear();
        var mn = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var m = time.getMinutes();
        var s = time.getSeconds();
        var year = document.getElementById("year");
        var month = document.getElementById("month");
        var day = document.getElementById("day");
        var hours = document.getElementById("hours");
        var minutes = document.getElementById("min");
        var seconds = document.getElementById("sec");
        if(mn<10){
            month.innerHTML = "0"+ mn.toString() + ".";
        }
        else month.innerHTML = mn.toString() + ".";
        if(d<10){
            day.innerHTML ="0"+ d.toString() + ".";
        }
        else day.innerHTML = d.toString() + ".";
        if(h<10){
            hours.innerHTML = "0" + h.toString() + " : ";
        }
        else hours.innerHTML = h.toString() + " : ";
        if(m<10){
            minutes.innerHTML = "0" + m.toString() + " : ";
        }
        else minutes.innerHTML = m.toString() + " : ";
        if(s<10){
            seconds.innerHTML = "0" + s.toString();
        }
        else seconds.innerHTML = s.toString();
        year.innerHTML = y.toString();
        if(timer1 > 10*(2*Interval - Math.random()*Interval)){
            Burn();
            timer1 = 0;
        }
        if(timer2 > 7*(2*Interval - Math.random()*Interval)){
            Robbery();
            timer2 = 0;
        }
        if(timer3 > 15*(2*Interval - Math.random()*Interval)){
            Disease()
            timer3 = 0;
        }
        if(timer > Intervalnalog){
            taxtick(timer);
            timer = 0;
        }
        return timer;
    }
    var timeid1 = setInterval(setcur,1000);
    function tick(){
        clearInterval(timeid1);
        var ch = +document.getElementById("speed").value;
        timeid1 = setInterval(setcur,1000-ch*90); 
    }
    function taxtick(tm){
        tax(tm);
    }

    

    
  
    