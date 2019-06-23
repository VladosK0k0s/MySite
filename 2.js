const Z = 0;
var Builds = {};
    Builds.name = "Builds";
    Builds.arr_s = []; 
    Builds.arr_m = [];
    Builds.arr_l = [];
var Police = {};
    Police.arr_s = [];
    Police.arr_m = [];
    Police.arr_l = [];
    Police.name = "Police";
var Medics = {};
    Medics.arr_s = [];
    Medics.arr_l = [];
    Medics.name = "Medics";
var Fire = {};
    Fire.arr_s = [];
    Fire.arr_m = [];
    Fire.name = "Fire";   
function set(){
    document.getElementById("Builds_s").innerHTML = "0";
    document.getElementById("Builds_m").innerHTML = "0";
    document.getElementById("Builds_l").innerHTML = "0";
}

/*console.log("S".charCodeAt(0));
function show_s(){
  console.log("------START------");
  for(var i=0; i<arr_s.length; i++){
    console.log(arr_s[i].Show());
  }
}*/
function show_s(){
  console.log("------START------");
  for(var i=0; i<idt.arr_s.length; i++){
    console.log(idt.arr_s[i].Show());
  }
}
function show_l(){
  console.log("------START------");
  for(var i=0; i<arr_l.length; i++){
    console.log(arr_l[i].Show());
  }
}
addEventListener("keydown", function(event) {
    if ((event.keyCode == 82) && (event.ctrlKey) && (event.shiftKey)) /// R
      set();
      setd();
  });
//console.log("S".charCodeAt(0));
addEventListener("keydown", function(event) {
    if (event.keyCode == 83)
      document.body.style.background = "#00ffd3";
  });
  addEventListener("keydown", function(event) {
    if (event.keyCode == 86)
      document.body.style.background = "red";
  });
  addEventListener("keyup", function(event) {
    if (event.keyCode == 86)
      document.body.style.background = "";
  });
  class Small_Builds{
    constructor(){
      this.covering = [[]];
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.PPRICE_MAX = 100;
      this.price = this.PPRICE_MAX - Math.floor( Math.random()*100)%100;
      this.name = "";
      for(var i = 0; i < 5; i++){
        this.name += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      this.area = 40 + Math.floor( Math.random()*100)%20;
    }
    GetPrice(){
      return this.price;
    }
    GetName(){
      return this.name;
    } 
    GetArea(){
      return this.area;
    }
    Show(){
      var output ="<span class id =\"ddd\">Name: <\/span>" +this.name+", Price: "+Math.floor(this.price)+"$, Area: " + Math.floor(this.area) + "m^2" ;
      return output;
    }
  }
  class Medium_Builds extends Small_Builds{
    constructor(){
      super();
      this.PPRICE_MAX = 500;
      this.price = this.PPRICE_MAX - Math.floor(Math.random()*10000)%200;
      this.height = Math.floor(Math.random()*100)%10+5;
      this.eco =  Math.floor(Math.random()*100)%100;
    }
    GetHeight(){
      return this.height;
    }
    GetEco(){
      return this.eco;
    }
    Show(){
      var output = super.Show() + ", Height: " + Math.floor(this.height) + "m, Eco: " + this.eco + "%";
      return output;
    }
  }
  class Large_Builds extends Medium_Builds{
    constructor(){
      super();
      this.PPRICE_MAX = 5000;
      this.price = this.PPRICE_MAX - Math.floor(Math.random()*1000+1)%500;
      this.height = Math.floor(Math.random()*1000+1)%50+10;
      this.region = Math.floor(Math.random()*100)%3+1;
      if(this.region == 1) this.price += 5000 + Math.floor(Math.random()*100000)%1000;
      if(this.region == 2) this.price += 10000 + Math.floor(Math.random()*100000)%2000;;
      if(this.region == 3) this.price += 20000 + Math.floor(Math.random()*100000)%5000;;
    }
    GetReg(){
      if(this.region == 1) return "Bad";
      if(this.region == 2) return "Good"
      if(this.region == 3) return "Zaebis777";;
    }
    Show(){
      var output = super.Show() + ", Region: " + this.GetReg();
      return output;
    }
  }
  class Small_Police{
    constructor(){
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.PPRICE_MAX = 200;
      this.price = this.PPRICE_MAX - Math.floor( Math.random()*1000)%200;
      this.name = "";
      this.cover = [-1,-1,-1,-1,-1];
      for(var i = 0; i < 5; i++){
        this.name += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      this.area = 20 + Math.floor( Math.random()*100)%10;
      this.speed = 1;
      this.risk = 100;
    }
    GetPrice(){
      return this.price;
    }
    GetName(){
      return this.name;
    } 
    GetArea(){
      return this.area;
    }
    GetSpeed(){
      return this.speed;
    }
    GetRisk(){
      return this.risk;
    }
    Show(){
      var output = "Name: " +this.name+", Price: "+this.price+"$, Area: " + this.area + "m^2" + ", Speed: " + this.speed + "x, Risk: " + this.risk + "%";
      return output;
    }
  }
  class Medium_Police extends Small_Police{
    constructor(){
      super();
      this.PPRICE_MAX = 1000;
      this.cover = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
      this.price = this.PPRICE_MAX - Math.floor(Math.random()*10000)%400;
      this.speed = 5;
      this.risk = 100;
    }
    Show(){
      var output = super.Show();
      return output;
    }
  } 
  class Large_Police extends Medium_Police{
    constructor(){
      super();
      this.PPRICE_MAX = 10000;
      this.price = this.PPRICE_MAX - Math.floor(Math.random()*10000)%1000;
      this.speed = 10;
      this.risk = 80;
    }
    Show(){
      var output = super.Show();
      return output;
    }
  }
  class Small_Medics{
    constructor(){
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.PPRICE_MAX = 200;
      this.cover = [-1,-1,-1,-1,-1];
      this.price = this.PPRICE_MAX - Math.floor( Math.random()*1000)%200;
      this.name = "";
      for(var i = 0; i < 5; i++){
        this.name += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      this.area = 50 + Math.floor( Math.random()*100)%10;
      this.speed = 1;
      this.risk = 100;
    }
    GetPrice(){
      return this.price;
    }
    GetName(){
      return this.name;
    } 
    GetArea(){
      return this.area;
    }
    GetSpeed(){
      return this.speed;
    }
    GetRisk(){
      return this.risk;
    }
    Show(){
      var output = "Name: " +this.name+", Price: "+this.price+"$, Area: " + this.area + "m^2" + ", Speed: " + this.speed + "x, Risk: " + this.risk + "%";
      return output;
    }
  }
  class Large_Medics extends Small_Medics{
    constructor(){
      super();
      this.PPRICE_MAX = 10000;
      this.cover = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
      this.area = 150 + Math.floor( Math.random()*100)%10;
      this.price = this.PPRICE_MAX - Math.floor(Math.random()*10000)%1000;
      this.speed = 10;
      this.risk = 80;
    }
    Show(){
      var output = super.Show();
      return output;
    }
  }
  class Small_Fire{
    constructor(){
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.PPRICE_MAX = 200;
      this.cover = [-1,-1,-1,-1,-1];
      this.price = this.PPRICE_MAX - Math.floor( Math.random()*1000)%200;
      this.name = "";
      for(var i = 0; i < 5; i++){
        this.name += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      this.area = 50 + Math.floor( Math.random()*100)%10;
      this.speed = 1;
      this.risk = 100;
    }
    GetPrice(){
      return this.price;
    }
    GetName(){
      return this.name;
    } 
    GetArea(){
      return this.area;
    }
    GetSpeed(){
      return this.speed;
    }
    GetRisk(){
      return this.risk;
    }
    Show(){
      var output = "Name: " +this.name+", Price: "+this.price+"$, Area: " + this.area + "m^2" + ", Speed: " + this.speed + "x, Risk: " + this.risk + "%";
      return output;
    }
  }
  class Medium_Fire extends Small_Fire{
    constructor(){
      super();
      this.cover = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
      this.PPRICE_MAX = 10000;
      this.area = 150 + Math.floor( Math.random()*100)%10;
      this.price = this.PPRICE_MAX - Math.floor(Math.random()*10000)%1000;
      this.speed = 5;
      this.risk = 80;
    }
    Show(){
      var output = super.Show();
      return output;
    }
  }
function small_add(idt){
    var temp1 = +document.getElementById(idt + "_s").innerHTML;
    var obj = eval("("+idt+")");
    obj.arr_s[temp1] = eval("new " + "Small_" + idt + "()");
    temp1 += 1;
    document.getElementById(idt + "_s").innerHTML = temp1;
    document.getElementById("MONEY"). innerHTML -= +obj.arr_s[temp1-1].GetPrice();
    document.getElementById("AREA"). innerHTML -= -+obj.arr_s[temp1-1].GetArea();
    if(idt == 'Builds'){
      obj.arr_s[temp1-1].covering = Poslugi_search(obj.arr_s[temp1-1]);
    }
    else{
      PoliceSearch(obj, obj.arr_s[temp1-1], 0, temp1-1);
    }
    sm_select(obj); 
}
function med_add(idt){
  var temp1 = +document.getElementById(idt + "_m").innerHTML;
  var obj = eval("("+idt+")");
  obj.arr_m[temp1] = eval("new " + "Medium_" + idt + "()");
  temp1 += 1;
  document.getElementById(idt + "_m").innerHTML = temp1;
  document.getElementById("MONEY").innerHTML -= +obj.arr_m[temp1-1].GetPrice();
  document.getElementById("AREA").innerHTML -= -+obj.arr_m[temp1-1].GetArea();
  if(idt == 'Builds'){
      obj.arr_m[temp1-1].covering = Poslugi_search(obj.arr_m[temp1-1]);
  }
  else{
      PoliceSearch(obj, obj.arr_m[temp1-1], 1, temp1-1);
  }
  med_select(obj);
}
function large_add(idt){
  var temp1 = +document.getElementById(idt + "_l").innerHTML;
  var obj = eval("("+idt+")");
  obj.arr_l[temp1] = eval("new " + "Large_" + idt + "()");
  temp1 += 1;
  document.getElementById(idt + "_l").innerHTML = temp1;
  document.getElementById("MONEY"). innerHTML -= +obj.arr_l[temp1-1].GetPrice();
  document.getElementById("AREA"). innerHTML -= -+obj.arr_l[temp1-1].GetArea();
  if(idt == 'Builds'){
      obj.arr_l[temp1-1].covering = Poslugi_search(obj.arr_l[temp1-1]);
  }
  else{
      PoliceSearch(obj, obj.arr_l[temp1-1], 2, temp1-1);
  }
  lar_select(obj);
}                 
function sm_select(obj){
  var s= '<select class = "opa" id="sm_'+obj.name+'_selector">';
  s += '<option>' + 'Choose elem' +'<\/option>';
    for(var i = 0; i <obj.arr_s.length; i++){
      s+= '<option>' + (i+1)+" " + obj.arr_s[i].Show() +'<\/option>';
    }
  s+='<\/select>';
  //if(obj.name == 'Builds'){
    ShowSmallTable(Builds);
    ShowMediumTable(Builds);
    ShowLargeTable(Builds);
  //}
  document.getElementById('sm_'+obj.name+'_sel').innerHTML = s;
}  
function med_select(obj){
  var s= '<select class = "opa" id="med_'+obj.name+'_selector">';
  s += '<option>' + 'Choose elem' +'<\/option>';
    for(var i = 0; i <obj.arr_m.length; i++){
      s+='<option>' + (i+1)+" " + obj.arr_m[i].Show() +'<\/option>';
    }
  s+='<\/select>';
  //if(obj.name == 'Builds'){
    ShowSmallTable(Builds);
    ShowMediumTable(Builds);
    ShowLargeTable(Builds);
  //}
  document.getElementById('med_'+obj.name+'_sel').innerHTML = s;
}
function lar_select(obj){
  var s= '<select class = "opa" id="lar_'+obj.name+'_selector">';
  s += '<option>' + 'Choose elem' +'<\/option>';
    for(var i = 0; i <obj.arr_l.length; i++){
      s+='<option >' + (i+1)+" " + obj.arr_l[i].Show() +'<\/option>';
    }
  s+='<\/select>';
  //if(obj.name == 'Builds'){
    ShowSmallTable(Builds);
    ShowMediumTable(Builds);
    ShowLargeTable(Builds);
  //}
  document.getElementById('lar_'+obj.name+'_sel').innerHTML = s;
}
function sm_delete(idt){
  var obj = eval("("+idt+")");
  if(obj.arr_s.length == 0) return -1;
  var с = document.getElementById('sm_'+idt+'_selector');
  var v = с.options[с.selectedIndex].text;
  if(v[0] == "C") return -1;
  document.getElementById("AREA").innerHTML -= +obj.arr_s[v[0]-1].GetArea();
  if(idt == 'Builds') Poslugi_delete(obj.arr_s[v[0]-1]);
  else Perestroika(idt, obj.arr_s[v[0]-1], 0, v[0]-1);
  obj.arr_s.splice(v[0]-1,1);
  document.getElementById(idt + "_s").innerHTML--;
  var s= '<select class = "opa" id="sm_'+obj.name+'_selector">';
  s += '<option>' + 'Choose elem' +'<\/option>';
    for(var i = 0; i <obj.arr_s.length; i++){
      s+='<option>'+ (i+1)+" " + obj.arr_s[i].Show() +'<\/option>';
    }
  s+='<\/select>';

  document.getElementById('sm_'+obj.name+'_sel').innerHTML = s;
  ShowSmallTable(Builds);
  ShowMediumTable(Builds);
  ShowLargeTable(Builds);
} 
function med_delete(idt){
  var obj = eval("("+idt+")");
  if(obj.arr_m.length == 0) return -1;
  var с = document.getElementById('med_'+idt+'_selector');
  var v = с.options[с.selectedIndex].text; 
  if(v[0] == "C") return -1;
  document.getElementById("AREA").innerHTML -= +obj.arr_m[v[0]-1].GetArea();
  if(idt == 'Builds') Poslugi_delete(obj.arr_m[v[0]-1]);
  else Perestroika(idt, obj.arr_m[v[0]-1], 1, v[0]-1);
  obj.arr_m.splice(v[0]-1,1);
  document.getElementById(idt + "_m").innerHTML--;
  var s= '<select class = "opa" id="med_'+idt+'_selector">';
  s += '<option>' + 'Choose elem' +'<\/option>';
    for(var i = 0; i <obj.arr_m.length; i++){
      s+='<option>'+ (i+1)+" " + obj.arr_m[i].Show() +'<\/option>';
    }
  s+='<\/select>';
  document.getElementById('med_'+idt+'_sel').innerHTML = s;
  ShowSmallTable(Builds);
  ShowMediumTable(Builds);
  ShowLargeTable(Builds);
} 
function lar_delete(idt){
  var obj = eval("("+idt+")");
  if(obj.arr_l.length == 0) return -1;
  var с = document.getElementById('lar_'+idt+'_selector');
  var v = с.options[с.selectedIndex].text;
  var obj = eval("("+idt+")");
  if(v[0] == "C") return -1;
  document.getElementById("AREA").innerHTML -= +obj.arr_l[v[0]-1].GetArea();
  if(idt == 'Builds') Poslugi_delete(obj.arr_l[v[0]-1]);
  else Perestroika(idt, obj.arr_l[v[0]-1], 2, v[0]-1);
  obj.arr_l.splice(v[0]-1,1);
  document.getElementById(idt + "_l").innerHTML--;
  var s= '<select class = "opa" id="lar_'+idt+'_selector">';
  s += '<option>' + 'Choose elem' +'<\/option>';
    for(var i = 0; i <obj.arr_l.length; i++){
      s+='<option>'+ (i+1)+" " + obj.arr_l[i].Show() +'<\/option>';
    }
  s+='<\/select>';
  document.getElementById('lar_'+idt+'_sel').innerHTML = s;
  ShowSmallTable(Builds);
  ShowMediumTable(Builds);
  ShowLargeTable(Builds);
}
function tax (int) {
  var sum = 0;
  var nalog = 0.0001;
  for (var i = 0; i < Builds.arr_s.length; i++) {
      sum += Builds.arr_s[i].GetArea()*nalog  + Builds.arr_s[i].GetPrice()*nalog/2;
  }
  for (var i = 0; i < Builds.arr_m.length; i++) {
      sum += Builds.arr_m[i].GetArea()*Builds.arr_m[i].GetHeight()*nalog  + Builds.arr_m[i].GetPrice()*nalog/2 ;
  }
  for (var i = 0; i < Builds.arr_l.length; i++) {
      sum += Builds.arr_l[i].GetArea()*Builds.arr_l[i].GetHeight()*nalog + Builds.arr_l[i].GetPrice()*nalog/2 ;
  }
  document.getElementById('MONEY').innerHTML -= -Math.floor(sum*int);
  var audio = new Audio('Songs/nalog.mp3'); // Создаём новый элемент Audio звуку "клика"
  audio.play();  
}


/// WHEN BUILDING CREATING FOUNDING POLICE MED FIRE



function Poslugi_search(item){
  var info = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
  var exit = 0;
  for(var i=0; i<Police.arr_s.length; i++){
    if(exit) continue;
    for(var j=0; j<Police.arr_s[i].cover.length; j++){
      if(exit) continue;
      if(Police.arr_s[i].cover[j] == -1){
        info[0][0] = i;
        Police.arr_s[i].cover[j] = item;
        exit = 1;
      }
    }
  }
  if(info[0][0] == -1) exit = 0;
  for(var i=0; i<Police.arr_m.length; i++){
    if(exit) continue;
    for(var j=0; j<Police.arr_m[i].cover.length; j++){
      if(exit) continue;
      if(Police.arr_m[i].cover[j] == -1){
        info[0][1] = i;
        Police.arr_m[i].cover[j] = item;
        exit = 1;
      }
    }
  }
  if((info[0][1] == -1)&&(info[0][0] == -1)) exit = 0;
  for(var i=0; i<Police.arr_l.length; i++){
    if(exit) continue;
    for(var j=0; j<Police.arr_l[i].cover.length; j++){
      if(exit) continue;
      if(Police.arr_l[i].cover[j] == -1){
        info[0][2] = i;
        Police.arr_l[i].cover[j] = item;
        exit = 1;
      }
    }
  }
  exit = 0;
  for(var i=0; i<Medics.arr_s.length; i++){
    if(exit) continue;
    for(var j=0; j<Medics.arr_s[i].cover.length; j++){
      if(exit) continue;
      if(Medics.arr_s[i].cover[j] == -1){
        info[1][0] = i;
        Medics.arr_s[i].cover[j] = item;
        exit = 1;
      }
    }
  }
  if(info[1][0] == -1) exit = 0;
  for(var i=0; i<Medics.arr_l.length; i++){
    if(exit) continue;
    for(var j=0; j<Medics.arr_l[i].cover.length; j++){
      if(exit) continue;
      if(Medics.arr_l[i].cover[j] == -1){
        info[1][2] = i;
        Medics.arr_l[i].cover[j] = item;
        exit = 1;
      }
    }
  }
  exit = 0;
  for(var i=0; i<Fire.arr_s.length; i++){
    if(exit) continue;
    for(var j=0; j<Fire.arr_s[i].cover.length; j++){
      if(exit) continue;
      if(Fire.arr_s[i].cover[j] == -1){
        info[2][0] = i;
        Fire.arr_s[i].cover[j] = item;
        exit = 1;
      }
    }
  }
  if(info[2][0] == -1) exit = 0;
  for(var i=0; i<Fire.arr_m.length; i++){
    if(exit) continue;
    for(var j=0; j<Fire.arr_m[i].cover.length; j++){
      if(exit) continue;
      if(Fire.arr_m[i].cover[j] == -1){
        info[2][1] = i;
        Fire.arr_m[i].cover[j] = item;
        exit = 1;
      }
    }
  }
  return info;
}



/// WHEN BUILDING DELETING POLICE MED FIRE CHANGING



function Poslugi_delete(obj){
  var index;
  for(var i = 0; i<obj.covering[0].length; i++){
    if(obj.covering[0][i] == -1) continue;
    else{
      if(i==0){
        index = ObjectIndexFind(Police.arr_s[obj.covering[0][i]].cover,obj);
        Police.arr_s[obj.covering[0][i]].cover[index] = -1;
      }
      if(i==1){
        index = ObjectIndexFind(Police.arr_m[obj.covering[0][i]].cover,obj);
        Police.arr_m[obj.covering[0][i]].cover[index] = -1;
      }
      if(i==2){ 
        index = ObjectIndexFind(Police.arr_l[obj.covering[0][i]].cover,obj);
        Police.arr_l[obj.covering[0][i]].cover[index] = -1;
      }
    }
  }
  for(var i = 0; i<obj.covering[1].length; i++){
    if(obj.covering[1][i] == -1) continue;
    else{
      if(i==0){
        index = ObjectIndexFind(Medics.arr_s[obj.covering[1][i]].cover,obj);
        Medics.arr_s[obj.covering[1][i]].cover[index] = -1;
      }
      /*if(i==1){
        index = ObjectIndexFind(Medics.arr_m[obj.covering[1][i]].cover,obj);
        Medics.arr_m[obj.covering[1][i]].cover[index] = -1;
      }*/
      if(i==2){ 
        index = ObjectIndexFind(Medics.arr_l[obj.covering[1][i]].cover,obj);
        Medics.arr_l[obj.covering[1][i]].cover[index] = -1;
      }
    }
  }
  for(var i = 0; i<obj.covering[2].length; i++){
    if(obj.covering[2][i] == -1) continue;
    else{
      if(i==0){
        index = ObjectIndexFind(Fire.arr_s[obj.covering[2][i]].cover,obj);
        Fire.arr_s[obj.covering[2][i]].cover[index] = -1;
      }
      if(i==1){
        index = ObjectIndexFind(Fire.arr_m[obj.covering[2][i]].cover,obj);
        Fire.arr_m[obj.covering[2][i]].cover[index] = -1;
      }
      /*if(i==2){ 
        index = ObjectIndexFind(Fire.arr_l[obj.covering[2][i]].cover,obj);
        Fire.arr_l[obj.covering[2][i]].cover[index] = -1;
      }*/
    }
  }
}


/// WHEN BUILDING CREATING TABBLE CREATING



function ShowSmallTable(item){
  if(item.arr_s.length==0){
    $("#smallinfo").fadeOut();
    return 0;
  }
  $("#smallinfo").fadeIn();
  document.getElementById('smallinfo').innerHTML = '';
  var myTableDiv = document.getElementById('smallinfo');
  var table = document.createElement('TABLE');
  var tableBody = document.createElement('TBODY');
  tableBody.className = ('tableview');
  var th = document.createElement('TR');
  var td = document.createElement('TD');
  text = document.createTextNode(" Object ");
  td.appendChild(text);
  th.appendChild(td);
  th.className = ('tabletext');
  td = document.createElement('TD');
  text = document.createTextNode(" Police ");
  td.className = ('pink');
  td.appendChild(text);
  th.appendChild(td);
  td = document.createElement('TD');
  text = document.createTextNode(" Medics ");
  td.className = ('blue');
  td.appendChild(text);
  th.appendChild(td);
  td = document.createElement('TD');
  text = document.createTextNode(" Fire ");
  td.className = ('red');
  td.appendChild(text);
  th.appendChild(td);
  tableBody.appendChild(th);
  var exit = 0;
  for(var i = 0; i < item.arr_s.length; i++){
    var tr = document.createElement('TR');
    var td = document.createElement('TD');
    text = item.arr_s[i].GetName();
    text = document.createTextNode(text);
    td.appendChild(text);
    tr.appendChild(td);
    td = document.createElement('TD');
    exit = 0;
    for(var j = 0; j<item.arr_s[i].covering[0].length; j++){
    if(exit) break;
    if(item.arr_s[i].covering == undefined) continue;
    if(item.arr_s[i].covering[0][j] == -1) continue;
    else{
      if(j==0) text = Police.arr_s[item.arr_s[i].covering[0][j]].GetName();
      if(j==1) text = Police.arr_m[item.arr_s[i].covering[0][j]].GetName();
      if(j==2) text = Police.arr_l[item.arr_s[i].covering[0][j]].GetName();
      text = document.createTextNode(text);
      td.appendChild(text);
      td.className = ('pink');
      exit = 1;
    }
    }
    if(!exit){
      td.className = ('pinkback');
    }
    tr.appendChild(td);
    td = document.createElement('TD');
    exit = 0;
    for(var j = 0; j<item.arr_s[i].covering[1].length; j++){
    if(exit) break;
    if(item.arr_s[i].covering == undefined) continue;
    if(item.arr_s[i].covering[1][j] == -1) continue;
    else{
      if(j==0) text = Medics.arr_s[item.arr_s[i].covering[1][j]].GetName();
      //if(j==1) text = Medics.arr_m[item.arr_s[i].covering[0][j]].GetName();
      if(j==2) text = Medics.arr_l[item.arr_s[i].covering[1][j]].GetName();
      text = document.createTextNode(text);
      td.appendChild(text);
      td.className = ('blue');
      exit = 1;
    }
    }
    if(!exit){
      td.className = ('blueback');
    }
    tr.appendChild(td);
    td = document.createElement('TD');
    exit = 0;
    for(var j = 0; j<item.arr_s[i].covering[2].length; j++){
    if(exit) break;
    if(item.arr_s[i].covering == undefined) continue;
    if(item.arr_s[i].covering[2][j] == -1) continue;
    else{
      if(j==0) text = Fire.arr_s[item.arr_s[i].covering[2][j]].GetName();
      if(j==1) text = Fire.arr_m[item.arr_s[i].covering[2][j]].GetName();
      //if(j==2) text = Fire.arr_l[item.arr_s[i].covering[0][j]].GetName();
      text = document.createTextNode(text);
      td.appendChild(text);
      td.className = ('red');
      exit = 1;
    }
    }
    if(!exit){
      td.className = ('redback');
    }
    tr.appendChild(td);
    tableBody.appendChild(tr);
  }
  table.appendChild(tableBody);
  myTableDiv.appendChild(table);
}
function ShowMediumTable(item){
  if(item.arr_m.length==0){
    $("#mediuminfo").fadeOut();
    return 0;
  }
  $("#mediuminfo").fadeIn();
  document.getElementById('mediuminfo').innerHTML = '';
  var myTableDiv = document.getElementById('mediuminfo');
  var table = document.createElement('TABLE');
  var tableBody = document.createElement('TBODY');
  tableBody.className = ('tableview');
  var th = document.createElement('TR');
  var td = document.createElement('TD');
  text = document.createTextNode(" Object ");
  td.appendChild(text);
  th.appendChild(td);
  th.className = ('tabletext');
  td = document.createElement('TD');
  text = document.createTextNode(" Police ");
  td.className = ('pink');
  td.appendChild(text);
  th.appendChild(td);
  td = document.createElement('TD');
  text = document.createTextNode(" Medics ");
  td.className = ('blue');
  td.appendChild(text);
  th.appendChild(td);
  td = document.createElement('TD');
  text = document.createTextNode(" Fire ");
  td.className = ('red');
  td.appendChild(text);
  th.appendChild(td);
  tableBody.appendChild(th);
  var exit = 0;
  for(var i = 0; i < item.arr_m.length; i++){
    var tr = document.createElement('TR');
    var td = document.createElement('TD');
    text = item.arr_m[i].GetName();
    text = document.createTextNode(text);
    td.appendChild(text);
    tr.appendChild(td);
    td = document.createElement('TD');
    exit = 0;
    for(var j = 0; j<item.arr_m[i].covering[0].length; j++){
    if(exit) break;
    if(item.arr_m[i].covering == undefined) continue;
    if(item.arr_m[i].covering[0][j] == -1) continue;
    else{
      if(j==0) text = Police.arr_s[item.arr_m[i].covering[0][j]].GetName();
      if(j==1) text = Police.arr_m[item.arr_m[i].covering[0][j]].GetName();
      if(j==2) text = Police.arr_l[item.arr_m[i].covering[0][j]].GetName();
      text = document.createTextNode(text);
      td.appendChild(text);
      td.className = ('pink');
      exit = 1;
    }
    }
    if(!exit){
      td.className = ('pinkback');
    }
    tr.appendChild(td);
    td = document.createElement('TD');
    exit = 0;
    for(var j = 0; j<item.arr_m[i].covering[1].length; j++){
    if(exit) break;
    if(item.arr_m[i].covering == undefined) continue;
    if(item.arr_m[i].covering[1][j] == -1) continue;
    else{
      if(j==0) text = Medics.arr_s[item.arr_m[i].covering[1][j]].GetName();
      //if(j==1) text = Medics.arr_m[item.arr_m[i].covering[0][j]].GetName();
      if(j==2) text = Medics.arr_l[item.arr_m[i].covering[1][j]].GetName();
      text = document.createTextNode(text);
      td.appendChild(text);
      td.className = ('blue');
      exit = 1;
    }
    }
    if(!exit){
      td.className = ('blueback');
    }
    tr.appendChild(td);
    td = document.createElement('TD');
    exit = 0;
    for(var j = 0; j<item.arr_m[i].covering[2].length; j++){
    if(exit) break;
    if(item.arr_m[i].covering == undefined) continue;
    if(item.arr_m[i].covering[2][j] == -1) continue;
    else{
      if(j==0) text = Fire.arr_s[item.arr_m[i].covering[2][j]].GetName();
      if(j==1) text = Fire.arr_m[item.arr_m[i].covering[2][j]].GetName();
      //if(j==2) text = Fire.arr_l[item.arr_m[i].covering[0][j]].GetName();
      text = document.createTextNode(text);
      td.appendChild(text);
      td.className = ('red');
      exit = 1;
    }
    }
    if(!exit){
      td.className = ('redback');
    }
    tr.appendChild(td);
    tableBody.appendChild(tr);
  }
  table.appendChild(tableBody);
  myTableDiv.appendChild(table);
}
function ShowLargeTable(item){
  if(item.arr_l.length==0){
    $("#largeinfo").fadeOut();
    return 0;
  }
  $("#largeinfo").fadeIn();
  document.getElementById('largeinfo').innerHTML = '';
  var myTableDiv = document.getElementById('largeinfo');
  var table = document.createElement('TABLE');
  var tableBody = document.createElement('TBODY');
  tableBody.className = ('tableview');
  var th = document.createElement('TR');
  var td = document.createElement('TD');
  text = document.createTextNode(" Object ");
  td.appendChild(text);
  th.appendChild(td);
  th.className = ('tabletext');
  td = document.createElement('TD');
  text = document.createTextNode(" Police ");
  td.className = ('pink');
  td.appendChild(text);
  th.appendChild(td);
  td = document.createElement('TD');
  text = document.createTextNode(" Medics ");
  td.className = ('blue');
  td.appendChild(text);
  th.appendChild(td);
  td = document.createElement('TD');
  text = document.createTextNode(" Fire ");
  td.className = ('red');
  td.appendChild(text);
  th.appendChild(td);
  tableBody.appendChild(th);
  var exit = 0;
  for(var i = 0; i < item.arr_l.length; i++){
    var tr = document.createElement('TR');
    var td = document.createElement('TD');
    text = item.arr_l[i].GetName();
    text = document.createTextNode(text);
    td.appendChild(text);
    tr.appendChild(td);
    td = document.createElement('TD');
    exit = 0;
    for(var j = 0; j<item.arr_l[i].covering[0].length; j++){
    if(exit) break;
    if(item.arr_l[i].covering == undefined) continue;
    if(item.arr_l[i].covering[0][j] == -1) continue;
    else{
      if(j==0) text = Police.arr_s[item.arr_l[i].covering[0][j]].GetName();
      if(j==1) text = Police.arr_m[item.arr_l[i].covering[0][j]].GetName();
      if(j==2) text = Police.arr_l[item.arr_l[i].covering[0][j]].GetName();
      text = document.createTextNode(text);
      td.appendChild(text);
      td.className = ('pink');
      exit = 1;
    }
    }
    if(!exit){
      td.className = ('pinkback');
    }
    tr.appendChild(td);
    td = document.createElement('TD');
    exit = 0;
    for(var j = 0; j<item.arr_l[i].covering[1].length; j++){
    if(exit) break;
    if(item.arr_l[i].covering == undefined) continue;
    if(item.arr_l[i].covering[1][j] == -1) continue;
    else{
      if(j==0) text = Medics.arr_s[item.arr_l[i].covering[1][j]].GetName();
      //if(j==1) text = Medics.arr_m[item.arr_l[i].covering[0][j]].GetName();
      if(j==2) text = Medics.arr_l[item.arr_l[i].covering[1][j]].GetName();
      text = document.createTextNode(text);
      td.appendChild(text);
      td.className = ('blue');
      exit = 1;
    }
    }
    if(!exit){
      td.className = ('blueback');
    }
    tr.appendChild(td);
    td = document.createElement('TD');
    exit = 0;
    for(var j = 0; j<item.arr_l[i].covering[2].length; j++){
    if(exit) break;
    if(item.arr_l[i].covering == undefined) continue;
    if(item.arr_l[i].covering[2][j] == -1) continue;
    else{
      if(j==0) text = Fire.arr_s[item.arr_l[i].covering[2][j]].GetName();
      if(j==1) text = Fire.arr_m[item.arr_l[i].covering[2][j]].GetName();
      //if(j==2) text = Fire.arr_l[item.arr_l[i].covering[0][j]].GetName();
      text = document.createTextNode(text);
      td.appendChild(text);
      td.className = ('red');
      exit = 1;
    }
    }
    if(!exit){
      td.className = ('redback');
    }
    tr.appendChild(td);
    tableBody.appendChild(tr);
  }
  table.appendChild(tableBody);
  myTableDiv.appendChild(table);
}
function ObjectIndexFind(arr, obj){
  for(var i = 0; i<arr.length; i++){
    if(arr[i] == obj) return i;
  }
}


/// WHEN POLICE OR MED OR FIRE CREATING


function PoliceSearch(item, obj, index1, index2){
  var exit = 0;
  if(item.name == 'Police'){
    for(var i = 0; i<obj.cover.length; i++){
      exit = 0;
      for(var j = 0; j<Builds.arr_s.length; j++){
        if(exit) break;
        if((Builds.arr_s[j].covering[0][0] == -1)&&(Builds.arr_s[j].covering[0][1] == -1)&&(Builds.arr_s[j].covering[0][2] == -1)){
          if(index1 == 0){
            Builds.arr_s[j].covering[0][0] = index2;
            obj.cover[i] = Builds.arr_s[j];
            exit = 1;
            break;
          }
          if(index1 == 1){
            Builds.arr_s[j].covering[0][1] = index2;
            obj.cover[i] = Builds.arr_s[j];
            exit = 1;
            break;
          }
          if(index1 == 2){
            Builds.arr_s[j].covering[0][2] = index2;
            obj.cover[i] = Builds.arr_s[j];
            exit = 1;
            break;
          }
        }
      }
      for(var j = 0; j<Builds.arr_m.length; j++){
        if(exit) break;
        if((Builds.arr_m[j].covering[0][0] == -1)&&(Builds.arr_m[j].covering[0][1] == -1)&&(Builds.arr_m[j].covering[0][2] == -1)){
          if(index1 == 0){
            Builds.arr_m[j].covering[0][0] = index2;
            obj.cover[i] = Builds.arr_m[j];
            exit = 1;
            break;
          }
          if(index1 == 1){
            Builds.arr_m[j].covering[0][1] = index2;
            obj.cover[i] = Builds.arr_m[j];
            exit = 1;
            break;
          }
          if(index1 == 2){
            Builds.arr_m[j].covering[0][2] = index2;
            obj.cover[i] = Builds.arr_m[j];
            exit = 1;
            break;
          }
        }
      }
      for(var j = 0; j<Builds.arr_l.length; j++){
        if(exit) break;
        if((Builds.arr_l[j].covering[0][0] == -1)&&(Builds.arr_l[j].covering[0][1] == -1)&&(Builds.arr_l[j].covering[0][2] == -1)){
          if(index1 == 0){
            Builds.arr_l[j].covering[0][0] = index2;
            obj.cover[i] = Builds.arr_l[j];
            exit = 1;
            break;
          }
          if(index1 == 1){
            Builds.arr_l[j].covering[0][1] = index2;
            obj.cover[i] = Builds.arr_l[j];
            exit = 1;
            break;
          }
          if(index1 == 2){
            Builds.arr_l[j].covering[0][2] = index2;
            obj.cover[i] = Builds.arr_l[j];
            exit = 1;
            break;
          }
        }
      }
    }
  }
  if(item.name == 'Medics'){
    for(var i = 0; i<obj.cover.length; i++){
      exit = 0;
      for(var j = 0; j<Builds.arr_s.length; j++){
        if(exit) break;
        if((Builds.arr_s[j].covering[1][0] == -1)&&(Builds.arr_s[j].covering[1][1] == -1)&&(Builds.arr_s[j].covering[1][2] == -1)){
          if(index1 == 0){
            Builds.arr_s[j].covering[1][0] = index2;
            obj.cover[i] = Builds.arr_s[j];
            exit = 1;
            break;
          }
          if(index1 == 1){
            Builds.arr_s[j].covering[1][1] = index2;
            obj.cover[i] = Builds.arr_s[j];
            exit = 1;
            break;
          }
          if(index1 == 2){
            Builds.arr_s[j].covering[1][2] = index2;
            obj.cover[i] = Builds.arr_s[j];
            exit = 1;
            break;
          }
        }
      }
      for(var j = 0; j<Builds.arr_m.length; j++){
        if(exit) break;
        if((Builds.arr_m[j].covering[1][0] == -1)&&(Builds.arr_m[j].covering[1][1] == -1)&&(Builds.arr_m[j].covering[1][2] == -1)){
          if(index1 == 0){
            Builds.arr_m[j].covering[1][0] = index2;
            obj.cover[i] = Builds.arr_m[j];
            exit = 1;
            break;
          }
          if(index1 == 1){
            Builds.arr_m[j].covering[1][1] = index2;
            obj.cover[i] = Builds.arr_m[j];
            exit = 1;
            break;
          }
          if(index1 == 2){
            Builds.arr_m[j].covering[1][2] = index2;
            obj.cover[i] = Builds.arr_m[j];
            exit = 1;
            break;
          }
        }
      }
      for(var j = 0; j<Builds.arr_l.length; j++){
        if(exit) break;
        if((Builds.arr_l[j].covering[1][0] == -1)&&(Builds.arr_l[j].covering[1][1] == -1)&&(Builds.arr_l[j].covering[1][2] == -1)){
          if(index1 == 0){
            Builds.arr_l[j].covering[1][0] = index2;
            obj.cover[i] = Builds.arr_l[j];
            exit = 1;
            break;
          }
          if(index1 == 1){
            Builds.arr_l[j].covering[1][1] = index2;
            obj.cover[i] = Builds.arr_l[j];
            exit = 1;
            break;
          }
          if(index1 == 2){
            Builds.arr_l[j].covering[1][2] = index2;
            obj.cover[i] = Builds.arr_l[j];
            exit = 1;
            break;
          }
        }
      }
    }
  }
  if(item.name == 'Fire'){
    for(var i = 0; i<obj.cover.length; i++){
      exit = 0;
      for(var j = 0; j<Builds.arr_s.length; j++){
        if(exit) break;
        if((Builds.arr_s[j].covering[2][0] == -1)&&(Builds.arr_s[j].covering[2][1] == -1)&&(Builds.arr_s[j].covering[2][2] == -1)){
          if(index1 == 0){
            Builds.arr_s[j].covering[2][0] = index2;
            obj.cover[i] = Builds.arr_s[j];
            exit = 1;
            break;
          }
          if(index1 == 1){
            Builds.arr_s[j].covering[2][1] = index2;
            obj.cover[i] = Builds.arr_s[j];
            exit = 1;
            break;
          }
          if(index1 == 2){
            Builds.arr_s[j].covering[2][2] = index2;
            obj.cover[i] = Builds.arr_s[j];
            exit = 1;
            break;
          }
        }
      }
      for(var j = 0; j<Builds.arr_m.length; j++){
        if(exit) break;
        if((Builds.arr_m[j].covering[2][0] == -1)&&(Builds.arr_m[j].covering[2][1] == -1)&&(Builds.arr_m[j].covering[2][2] == -1)){
          if(index1 == 0){
            Builds.arr_m[j].covering[2][0] = index2;
            obj.cover[i] = Builds.arr_m[j];
            exit = 1;
            break;
          }
          if(index1 == 1){
            Builds.arr_m[j].covering[2][1] = index2;
            obj.cover[i] = Builds.arr_m[j];
            exit = 1;
            break;
          }
          if(index1 == 2){
            Builds.arr_m[j].covering[2][2] = index2;
            obj.cover[i] = Builds.arr_m[j];
            exit = 1;
            break;
          }
        }
      }
      for(var j = 0; j<Builds.arr_l.length; j++){
        if(exit) break;
        if((Builds.arr_l[j].covering[2][0] == -1)&&(Builds.arr_l[j].covering[2][1] == -1)&&(Builds.arr_l[j].covering[2][2] == -1)){
          if(index1 == 0){
            Builds.arr_l[j].covering[2][0] = index2;
            obj.cover[i] = Builds.arr_l[j];
            exit = 1;
            break;
          }
          if(index1 == 1){
            Builds.arr_l[j].covering[2][1] = index2;
            obj.cover[i] = Builds.arr_l[j];
            exit = 1;
            break;
          }
          if(index1 == 2){
            Builds.arr_l[j].covering[2][2] = index2;
            obj.cover[i] = Builds.arr_l[j];
            exit = 1;
            break;
          }
        }
      }
    }
  }
}



/// WHEN POLICE MED FIRE DELETING BUILDING CHANGING


function Perestroika(item, obj, index1, index2){
  if(item == 'Police'){
    if(index1 == 0){
      for(var i = 0; i<Builds.arr_s.length; i++){
        if(Builds.arr_s[i].covering[0][index1] == index2){
          Builds.arr_s[i].covering[0][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_m.length; i++){
        if(Builds.arr_m[i].covering[0][index1] == index2){
          Builds.arr_m[i].covering[0][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_l.length; i++){
        if(Builds.arr_l[i].covering[0][index1] == index2){
          Builds.arr_l[i].covering[0][index1] = -1;
        }
      }
    }
    if(index1 == 1){
      for(var i = 0; i<Builds.arr_s.length; i++){
        if(Builds.arr_s[i].covering[0][index1] == index2){
          Builds.arr_s[i].covering[0][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_m.length; i++){
        if(Builds.arr_m[i].covering[0][index1] == index2){
          Builds.arr_m[i].covering[0][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_l.length; i++){
        if(Builds.arr_l[i].covering[0][index1] == index2){
          Builds.arr_l[i].covering[0][index1] = -1;
        }
      }
    }
    if(index1 == 2){
      for(var i = 0; i<Builds.arr_s.length; i++){
        if(Builds.arr_s[i].covering[0][index1] == index2){
          Builds.arr_s[i].covering[0][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_m.length; i++){
        if(Builds.arr_m[i].covering[0][index1] == index2){
          Builds.arr_m[i].covering[0][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_l.length; i++){
        if(Builds.arr_l[i].covering[0][index1] == index2){
          Builds.arr_l[i].covering[0][index1] = -1;
        }
      }
    }
  }
  if(item == 'Medics'){
    if(index1 == 0){
      for(var i = 0; i<Builds.arr_s.length; i++){
        if(Builds.arr_s[i].covering[1][index1] == index2){
          Builds.arr_s[i].covering[1][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_m.length; i++){
        if(Builds.arr_m[i].covering[1][index1] == index2){
          Builds.arr_m[i].covering[1][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_l.length; i++){
        if(Builds.arr_l[i].covering[1][index1] == index2){
          Builds.arr_l[i].covering[1][index1] = -1;
        }
      }
    }
    if(index1 == 1){
      for(var i = 0; i<Builds.arr_s.length; i++){
        if(Builds.arr_s[i].covering[1][index1] == index2){
          Builds.arr_s[i].covering[1][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_m.length; i++){
        if(Builds.arr_m[i].covering[1][index1] == index2){
          Builds.arr_m[i].covering[1][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_l.length; i++){
        if(Builds.arr_l[i].covering[1][index1] == index2){
          Builds.arr_l[i].covering[1][index1] = -1;
        }
      }
    }
    if(index1 == 2){
      for(var i = 0; i<Builds.arr_s.length; i++){
        if(Builds.arr_s[i].covering[1][index1] == index2){
          Builds.arr_s[i].covering[1][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_m.length; i++){
        if(Builds.arr_m[i].covering[1][index1] == index2){
          Builds.arr_m[i].covering[1][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_l.length; i++){
        if(Builds.arr_l[i].covering[1][index1] == index2){
          Builds.arr_l[i].covering[1][index1] = -1;
        }
      }
    }
  }
  if(item == 'Fire'){
    if(index1 == 0){
      for(var i = 0; i<Builds.arr_s.length; i++){
        if(Builds.arr_s[i].covering[2][index1] == index2){
          Builds.arr_s[i].covering[2][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_m.length; i++){
        if(Builds.arr_m[i].covering[2][index1] == index2){
          Builds.arr_m[i].covering[2][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_l.length; i++){
        if(Builds.arr_l[i].covering[2][index1] == index2){
          Builds.arr_l[i].covering[2][index1] = -1;
        }
      }
    }
    if(index1 == 1){
      for(var i = 0; i<Builds.arr_s.length; i++){
        if(Builds.arr_s[i].covering[2][index1] == index2){
          Builds.arr_s[i].covering[2][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_m.length; i++){
        if(Builds.arr_m[i].covering[2][index1] == index2){
          Builds.arr_m[i].covering[2][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_l.length; i++){
        if(Builds.arr_l[i].covering[2][index1] == index2){
          Builds.arr_l[i].covering[2][index1] = -1;
        }
      }
    }
    if(index1 == 2){
      for(var i = 0; i<Builds.arr_s.length; i++){
        if(Builds.arr_s[i].covering[2][index1] == index2){
          Builds.arr_s[i].covering[2][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_m.length; i++){
        if(Builds.arr_m[i].covering[2][index1] == index2){
          Builds.arr_m[i].covering[2][index1] = -1;
        }
      }
      for(var i = 0; i<Builds.arr_l.length; i++){
        if(Builds.arr_l[i].covering[2][index1] == index2){
          Builds.arr_l[i].covering[2][index1] = -1;
        }
      }
    }
  }
}
function Burn(){
  var choice = -1;
  var rand = Math.floor(Math.random()*3);
  if(Builds.arr_s.length){
    if(rand==0){
      choice = rand;
    }
  }
  if(Builds.arr_m.length){
    if(rand ==1){
      choice = rand;
    }
  }
  if(Builds.arr_l.length){
    if(rand == 2){
      choice = rand;
    }
  }
  //console.log(choice);
  if(choice == -1){
    return -1;
  } 
  if(choice == 0){
    var timerident;
    rand = Math.floor(Math.random()*Builds.arr_s.length);
    if((Builds.arr_s[rand].covering[2][0]==-1)&&(Builds.arr_s[rand].covering[2][1]==-1)){
      Put(Builds.arr_s[rand].name + " burned");
      document.getElementById("AREA").innerHTML -= +Builds.arr_s[rand].GetArea();
      Builds.arr_s.splice(rand,1);
      document.getElementById("Builds_s").innerHTML--;
      var s= '<select class = "opa" id="sm_'+Builds.name+'_selector">';
      s += '<option>' + 'Choose elem' +'<\/option>';
      for(var i = 0; i <Builds.arr_s.length; i++){
        s+='<option>'+ (i+1)+" " + Builds.arr_s[i].Show() +'<\/option>';
      }
      s+='<\/select>';
      document.getElementById('sm_'+Builds.name+'_sel').innerHTML = s;
      ShowSmallTable(Builds);
      var audio = new Audio('Songs/burning.mp3');
      audio.play();
    }
    else{
      var firstrand = Math.floor(Math.random()*100+1);
      if(firstrand > poshuk(2,Builds.arr_s[rand]).risk){
        return -1;
      }
      var randofburn = Math.floor(Math.random()*(poshuk(2,Builds.arr_s[rand]).speed+1));
      if(randofburn<poshuk(2,Builds.arr_s[rand]).speed){
        Put("Try to burn "+Builds.arr_s[rand].name + ", but no...");
        return -1;
      }
      else{
        var audio = new Audio('Songs/burning.mp3'); 
        audio.play(); 
        Put(Builds.arr_s[rand].name + " burned");
        Poslugi_delete(Builds.arr_s[rand]);
        document.getElementById("AREA").innerHTML -= +Builds.arr_s[rand].GetArea();
        Builds.arr_s.splice(rand,1);
        document.getElementById("Builds_s").innerHTML--;
        var s= '<select class = "opa" id="sm_'+Builds.name+'_selector">';
        s += '<option>' + 'Choose elem' +'<\/option>';
        for(var i = 0; i <Builds.arr_s.length; i++){
          s+='<option>'+ (i+1)+" " + Builds.arr_s[i].Show() +'<\/option>';
        }
        s+='<\/select>';
        document.getElementById('sm_'+Builds.name+'_sel').innerHTML = s;
        ShowSmallTable(Builds);
      }
    }
  }
  if(choice == 1){
    rand = Math.floor(Math.random()*Builds.arr_m.length);
    if((Builds.arr_m[rand].covering[2][0]==-1)&&(Builds.arr_m[rand].covering[2][1]==-1)){
      Put(Builds.arr_m[rand].name + " burned");
      document.getElementById("AREA").innerHTML -= +Builds.arr_m[rand].GetArea();
      Builds.arr_m.splice(rand,1);
      document.getElementById("Builds_m").innerHTML--;
      var s= '<select class = "opa" id="med_'+Builds.name+'_selector">';
      s += '<option>' + 'Choose elem' +'<\/option>';
      for(var i = 0; i <Builds.arr_m.length; i++){
        s+='<option>'+ (i+1)+" " + Builds.arr_m[i].Show() +'<\/option>';
      }
      s+='<\/select>';
      document.getElementById('med_'+Builds.name+'_sel').innerHTML = s;
      ShowMediumTable(Builds);
      var audio = new Audio('Songs/burning.mp3'); 
      audio.play();
    }
    else{
      var firstrand = Math.floor(Math.random()*100+1);
      if(firstrand > poshuk(2,Builds.arr_m[rand]).risk){
        return -1;
      }
      var randofburn = Math.floor(Math.random()*(poshuk(2,Builds.arr_m[rand]).speed+1));
      if(randofburn<poshuk(2,Builds.arr_m[rand]).speed){
        Put("Try to burn "+Builds.arr_m[rand].name + ", but no...");
        return -1;
      }
      else{
        var audio = new Audio('Songs/burning.mp3'); 
        audio.play(); 
        Put(Builds.arr_m[rand].name + " burned");
        Poslugi_delete(Builds.arr_m[rand]);
        document.getElementById("AREA").innerHTML -= +Builds.arr_m[rand].GetArea();
        Builds.arr_m.splice(rand,1);
        document.getElementById("Builds_m").innerHTML--;
        var s = '<select class = "opa" id="med_'+Builds.name+'_selector">';
        s += '<option>' + 'Choose elem' +'<\/option>';
        for(var i = 0; i <Builds.arr_m.length; i++){
          s+='<option>'+ (i+1)+" " + Builds.arr_m[i].Show() +'<\/option>';
        }
        s+='<\/select>';
        document.getElementById('med_'+Builds.name+'_sel').innerHTML = s;
        ShowMediumTable(Builds);
      }
    }
  }
  if(choice == 2){
    rand = Math.floor(Math.random()*Builds.arr_l.length);
    if((Builds.arr_l[rand].covering[2][0]==-1)&&(Builds.arr_l[rand].covering[2][1]==-1)){
      Put(Builds.arr_l[rand].name + " burned");
      document.getElementById("AREA").innerHTML -= +Builds.arr_l[rand].GetArea();
      Builds.arr_l.splice(rand,1);
      document.getElementById("Builds_l").innerHTML--;
      var s= '<select class = "opa" id="lar_'+Builds.name+'_selector">';
      s += '<option>' + 'Choose elem' +'<\/option>';
      for(var i = 0; i <Builds.arr_l.length; i++){
        s+='<option>'+ (i+1)+" " + Builds.arr_l[i].Show() +'<\/option>';
      }
      s+='<\/select>';
      document.getElementById('lar_'+Builds.name+'_sel').innerHTML = s;
      ShowLargeTable(Builds);
      var audio = new Audio('Songs/burning.mp3'); 
      audio.play();
    }
    else{
      var firstrand = Math.floor(Math.random()*100+1);
      if(firstrand > poshuk(2,Builds.arr_l[rand]).risk){
        return -1;
      } 
      var randofburn = Math.floor(Math.random()*(poshuk(2,Builds.arr_l[rand]).speed+1));
      if(randofburn<poshuk(2,Builds.arr_l[rand]).speed){
        Put("Try to burn "+Builds.arr_l[rand].name + ", but no...");
        return -1;
      }
      else{
        var audio = new Audio('Songs/burning.mp3'); 
        audio.play();
        Put(Builds.arr_l[rand].name + " burned");
        Poslugi_delete(Builds.arr_l[rand]);
        document.getElementById("AREA").innerHTML -= +Builds.arr_l[rand].GetArea();
        Builds.arr_l.splice(rand,1);
        document.getElementById("Builds_l").innerHTML--;
        var s= '<select class = "opa" id="lar_'+Builds.name+'_selector">';
        s += '<option>' + 'Choose elem' +'<\/option>';
        for(var i = 0; i <Builds.arr_l.length; i++){
          s+='<option>'+ (i+1)+" " + Builds.arr_l[i].Show() +'<\/option>';
        }
        s+='<\/select>';
        document.getElementById('lar_'+Builds.name+'_sel').innerHTML = s;
        ShowLargeTable(Builds);
      }
    }
  }
}
function Robbery(){
  var choice = -1;
  var rand = Math.floor(Math.random()*3);
  if(Builds.arr_s.length){
    if(rand==0){
      choice = rand;
    }
  }
  if(Builds.arr_m.length){
    if(rand ==1){
      choice = rand;
    }
  }
  if(Builds.arr_l.length){
    if(rand == 2){
      choice = rand;
    }
  }
  //console.log(choice);
  if(choice == -1){
    return -1;
  } 
  if(choice == 0){
    rand = Math.floor(Math.random()*Builds.arr_s.length);
    if((Builds.arr_s[rand].covering[0][0]==-1)&&(Builds.arr_s[rand].covering[0][1]==-1)&&(Builds.arr_s[rand].covering[0][2]==-1)){
      Put(Builds.arr_s[rand].name + " robbered");
      document.getElementById("MONEY").innerHTML -= 7*Builds.arr_s[rand].GetArea();
      var audio = new Audio('Songs/robbering.mp3'); 
      audio.play();
    }
    else{
      var firstrand = Math.floor(Math.random()*100+1);
      if(firstrand > poshuk(0,Builds.arr_s[rand]).risk){
        return -1;
      }
      var randofburn = Math.floor(Math.random()*(poshuk(0,Builds.arr_s[rand]).speed+1));
      if(randofburn<poshuk(0,Builds.arr_s[rand]).speed){
        Put("Try to robber "+Builds.arr_s[rand].name + ", but no...");
        return -1;
      }
      else{
        var audio = new Audio('Songs/robbering.mp3'); 
        audio.play();
        Put(Builds.arr_s[rand].name + " robbered");
        document.getElementById("MONEY").innerHTML -= 7*Builds.arr_s[rand].GetArea();
      }
    }
  }
  if(choice == 1){
    rand = Math.floor(Math.random()*Builds.arr_m.length);
    if((Builds.arr_s[rand].covering[0][0]==-1)&&(Builds.arr_s[rand].covering[0][1]==-1)&&(Builds.arr_s[rand].covering[0][2]==-1)){
      Put(Builds.arr_m[rand].name + " robbered");
      document.getElementById("MONEY").innerHTML -= 7*Builds.arr_m[rand].GetArea();
      var audio = new Audio('Songs/robbering.mp3'); 
      audio.play();
    }
    else{
      var firstrand = Math.floor(Math.random()*100+1);
      if(firstrand > poshuk(0,Builds.arr_m[rand]).risk){
        return -1;
      }
      var randofburn = Math.floor(Math.random()*(poshuk(0,Builds.arr_m[rand]).speed+1));
      if(randofburn<poshuk(0,Builds.arr_m[rand]).speed){
        Put("Try to robber " + Builds.arr_m[rand].name + ", but no...");
        return -1;
      }
      else{
        var audio = new Audio('Songs/robbering.mp3'); 
        audio.play();
        Put(Builds.arr_m[rand].name + " robbered");
        document.getElementById("MONEY").innerHTML -= 7*Builds.arr_m[rand].GetArea();
      }
    }
  }
  if(choice == 2){
    rand = Math.floor(Math.random()*Builds.arr_l.length);
    var secondrand = Math.floor(Math.random()*3+1);
      if(secondrand < Builds.arr_l[rand].region){
        console.log(Builds.arr_l[rand].name + " region protected");
        return -1;
      }
    if((Builds.arr_l[rand].covering[0][0]==-1)&&(Builds.arr_l[rand].covering[0][1]==-1)&&(Builds.arr_l[rand].covering[0][2]==-1)){
      Put(Builds.arr_l[rand].name + " robbered");
      document.getElementById("MONEY").innerHTML -= 7*Builds.arr_l[rand].GetArea();
      var audio = new Audio('Songs/robbering.mp3'); 
      audio.play();
    }
    else{
      var firstrand = Math.floor(Math.random()*100+1);
      if(firstrand > poshuk(0,Builds.arr_l[rand]).risk){
        return -1;
      }
      var randofburn = Math.floor(Math.random()*(poshuk(0,Builds.arr_l[rand]).speed+1));
      if(randofburn<poshuk(0,Builds.arr_l[rand]).speed){
        Put("Try to robber "+Builds.arr_l[rand].name + ", but no...");
        return -1;
      }
      else{
        var audio = new Audio('Songs/robbering.mp3'); 
        audio.play();
        Put(Builds.arr_l[rand].name + " robbered");
        document.getElementById("MONEY").innerHTML -= 7*Builds.arr_l[rand].GetArea();
      }
    }
  }
}
function Disease(){
  var choice = -1;
  var rand = Math.floor(Math.random()*3);
  if(Builds.arr_s.length){
    if(rand==0){
      choice = rand;
    }
  }
  if(Builds.arr_m.length){
    if(rand ==1){
      choice = rand;
    }
  }
  if(Builds.arr_l.length){
    if(rand == 2){
      choice = rand;
    }
  }
  //console.log(choice);
  if(choice == -1){
    return -1;
  } 
  if(choice == 0){
    rand = Math.floor(Math.random()*Builds.arr_s.length);
    if((Builds.arr_s[rand].covering[1][0]==-1)&&(Builds.arr_s[rand].covering[1][1]==-1)&&(Builds.arr_s[rand].covering[1][2]==-1)){
      Put(Builds.arr_s[rand].name + " got sick");
      Builds.arr_s[rand].price*=0.8;
      var s= '<select class = "opa" id="sm_'+Builds.name+'_selector">';
      s += '<option>' + 'Choose elem' +'<\/option>';
      for(var i = 0; i <Builds.arr_s.length; i++){
        s+='<option>'+ (i+1)+" " + Builds.arr_s[i].Show() +'<\/option>';
      }
      s+='<\/select>';
      document.getElementById('sm_'+Builds.name+'_sel').innerHTML = s;
      var audio = new Audio('Songs/healing.mp3'); 
      audio.play();
    }
    else{
      var firstrand = Math.floor(Math.random()*100+1);
      if(firstrand > poshuk(1,Builds.arr_s[rand]).risk){
        return -1;
      }
      var randofburn = Math.floor(Math.random()*(poshuk(1,Builds.arr_s[rand]).speed+1));
      if(randofburn<poshuk(1,Builds.arr_s[rand]).speed){
        Put("Try to get sick "+Builds.arr_s[rand].name + ", but no...");
        return -1;
      }
      else{
        var audio = new Audio('Songs/healing.mp3'); 
        audio.play();
        Put(Builds.arr_s[rand].name + " got sick");
        Builds.arr_s[rand].price*=0.8;
        var s= '<select class = "opa" id="sm_'+Builds.name+'_selector">';
        s += '<option>' + 'Choose elem' +'<\/option>';
        for(var i = 0; i <Builds.arr_s.length; i++){
          s+='<option>'+ (i+1)+" " + Builds.arr_s[i].Show() +'<\/option>';
        }
        s+='<\/select>';
        document.getElementById('sm_'+Builds.name+'_sel').innerHTML = s;
      }
    }
  }
  if(choice == 1){
    rand = Math.floor(Math.random()*Builds.arr_m.length);
    var secondrand = Math.floor(Math.random()*100+1);
    if(secondrand < Builds.arr_m[rand].eco){
      console.log(Builds.arr_m[rand].name + " eco protected");
      return -1;
    }
    if((Builds.arr_m[rand].covering[1][0]==-1)&&(Builds.arr_m[rand].covering[1][1]==-1)&&(Builds.arr_m[rand].covering[1][2]==-1)){
      Put(Builds.arr_m[rand].name + " got sick");
      Builds.arr_m[rand].price*=0.8;
      Builds.arr_m[rand].height*=0.8;
      var s = '<select class = "opa" id="med_'+Builds.name+'_selector">';
      s += '<option>' + 'Choose elem' +'<\/option>';
      for(var i = 0; i <Builds.arr_m.length; i++){
        s+='<option>'+ (i+1)+" " + Builds.arr_m[i].Show() +'<\/option>';
      }
      s+='<\/select>';
      document.getElementById('med_'+Builds.name+'_sel').innerHTML = s;
      var audio = new Audio('Songs/healing.mp3'); 
      audio.play();
    }
    else{
      var firstrand = Math.floor(Math.random()*100+1);
      if(firstrand > poshuk(1,Builds.arr_m[rand]).risk){
        return -1;
      }
      var randofburn = Math.floor(Math.random()*(poshuk(1,Builds.arr_m[rand]).speed+1));
      if(randofburn<poshuk(1,Builds.arr_m[rand]).speed){
        Put("Try to get sick " + Builds.arr_m[rand].name + ", but no...");
        return -1;
      }
      else{
        var audio = new Audio('Songs/healing.mp3'); 
        audio.play();
        Put(Builds.arr_m[rand].name + " got sick");
        Builds.arr_m[rand].price*=0.8;
        Builds.arr_m[rand].height*=0.8;
        var s = '<select class = "opa" id="med_'+Builds.name+'_selector">';
        s += '<option>' + 'Choose elem' +'<\/option>';
        for(var i = 0; i <Builds.arr_m.length; i++){
          s+='<option>'+ (i+1)+" " + Builds.arr_m[i].Show() +'<\/option>';
        }
        s+='<\/select>';
        document.getElementById('med_'+Builds.name+'_sel').innerHTML = s;
      }
    }
  }
  if(choice == 2){
    rand = Math.floor(Math.random()*Builds.arr_l.length);
    var secondrand = Math.floor(Math.random()*100+1);
    if(secondrand < Builds.arr_l[rand].eco){
      console.log(Builds.arr_l[rand].name + " eco protected");
      return -1;
    }
    if((Builds.arr_l[rand].covering[1][0]==-1)&&(Builds.arr_l[rand].covering[1][1]==-1)&&(Builds.arr_l[rand].covering[1][2]==-1)){
      Put(Builds.arr_l[rand].name + " got sick");
      Builds.arr_l[rand].price*=0.8;
      Builds.arr_l[rand].height*=0.8;
      var s= '<select class = "opa" id="lar_'+Builds.name+'_selector">';
      s += '<option>' + 'Choose elem' +'<\/option>';
      for(var i = 0; i <Builds.arr_l.length; i++){
        s+='<option>'+ (i+1)+" " + Builds.arr_l[i].Show() +'<\/option>';
      }
      s+='<\/select>';
      document.getElementById('lar_'+Builds.name+'_sel').innerHTML = s;
      var audio = new Audio('Songs/healing.mp3'); 
      audio.play();
    }
    else{
      var firstrand = Math.floor(Math.random()*100+1);
      if(firstrand > poshuk(1,Builds.arr_l[rand]).risk){
        return -1;
      }
      var randofburn = Math.floor(Math.random()*(poshuk(1,Builds.arr_l[rand]).speed+1));
      if(randofburn<poshuk(1,Builds.arr_l[rand]).speed){
        Put("Try to get sick "+Builds.arr_l[rand].name + ", but no...");
        return -1;
      }
      else{
        var audio = new Audio('Songs/healing.mp3');
        audio.play();
        Put(Builds.arr_l[rand].name + " got sick");
        Builds.arr_l[rand].price*=0.8;
        Builds.arr_l[rand].height*=0.8;
        var s= '<select class = "opa" id="lar_'+Builds.name+'_selector">';
        s += '<option>' + 'Choose elem' +'<\/option>';
        for(var i = 0; i <Builds.arr_l.length; i++){
          s+='<option>'+ (i+1)+" " + Builds.arr_l[i].Show() +'<\/option>';
        }
        s+='<\/select>';
        document.getElementById('lar_'+Builds.name+'_sel').innerHTML = s;
      }
    }
  }
}
function poshuk(index, obj){
  if(index == 0){
    for(var i=0; i<3; i++){
      if(obj.covering[index][i]!=-1){
        if(i==0) return Police.arr_s[obj.covering[index][i]];
        if(i==1) return Police.arr_m[obj.covering[index][i]];
        if(i==2) return Police.arr_l[obj.covering[index][i]];
      }
    }
  }
  if(index == 1){
    for(var i=0; i<3; i++){
      if(obj.covering[index][i]!=-1){
        if(i==0) return Medics.arr_s[obj.covering[index][i]];
        //if(i==1) return Medics.arr_m[obj.covering[index][i]];
        if(i==2) return Medics.arr_l[obj.covering[index][i]];
      }
    }
  }
  if(index == 2){
    for(var i=0; i<3; i++){
      if(obj.covering[index][i]!=-1){
        if(i==0) return Fire.arr_s[obj.covering[index][i]];
        if(i==1) return Fire.arr_m[obj.covering[index][i]];
        //if(i==2) return Medics.arr_l[obj.covering[index][i]];
      }
    }
  }
return -1;
}
function Put(text){
  var elem = document.getElementById("textpoyava");
  var bl = document.createElement("span");
  bl.classList.add("poyava");
  bl.innerHTML = text;
  elem.appendChild(bl);
  var elementChildrens = elem.children;
  for (var i=0, child; child=elementChildrens[i]; i++){
    $(child).animate({ bottom: "+=50px" }, 1000)
  }
  $(bl).animate({ right: "5%", opacity: "1" }, 1000);
  setTimeout(function(){
    $(bl).animate({ right: "50%", opacity: "0" }, 1000);
    setTimeout(function(){elem.removeChild(elem.firstElementChild)},1000);
  }, 5000);
}