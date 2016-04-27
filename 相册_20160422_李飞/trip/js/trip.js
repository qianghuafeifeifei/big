/**
 * Created by Administrator on 2016/4/20 0020.
 */
    function one(){
        document.getElementById("mainrighta").style.display="block";
        document.getElementById("mainrightb").style.display="none";
        document.getElementById("mainrightc").style.display="none";
    }
    function two(){
        document.getElementById("mainrighta").style.display="none";
        document.getElementById("mainrightb").style.display="block";
        document.getElementById("mainrightc").style.display="none";
    }
    function three(){
        document.getElementById("mainrighta").style.display="none";
        document.getElementById("mainrightb").style.display="none";
        document.getElementById("mainrightc").style.display="block";
    }
function marquee(){
    if(ulturna.offsetWidth-mainturn.scrollLeft<=0)
        mainturn.scrollLeft-=ulturn.offsetWidth;
    else{
        mainturn.scrollLeft++;
    }
}
window.onload=function(){
    var div13=document.getElementById("div13");
    var div14=document.getElementById("div14");
    var ul12=document.getElementById("ul12");
    var li12=ul12.getElementsByTagName("li");
    var div5left=document.getElementById("div5left");
    var div5right=document.getElementById("div5right");
    var div10left=document.getElementById("div10left");
    var div10right=document.getElementById("div10right");
    var ul1=document.getElementById("ul1");
    var li1=ul1.getElementsByTagName("li");
    var ul2=document.getElementById("ul2");
    var ul3=document.getElementById("ul3");
    var ul4=document.getElementById("ul4");
    var ul5=document.getElementById("ul5");
    var ul6=document.getElementById("ul6");
    var li6=ul6.getElementsByTagName("li");
    var ul7=document.getElementById("ul7");
    var ul8=document.getElementById("ul8");
    var ul9=document.getElementById("ul9");
    var ul10=document.getElementById("ul10");
    var mainturn=document.getElementById("mainturn");
    var ulturn=document.getElementById("ulturn");
    var ulturna=document.getElementById("ulturna");
    ulturna.innerHTML=ulturn.innerHTML;
    var nuber=1;
    var tim=30;

    function everypicturea(ul1,obj){
        window.clearTimeout(ul1.timer);
        for(weare in obj ){
            var lefta=weare;
            var leftb="offset"+lefta.substring(0,1).toUpperCase()+lefta.substring(1).toLowerCase();
            var vidio=(obj[weare]-ul1[leftb])/10;
            vidio=vidio>=0?Math.ceil(vidio):Math.floor(vidio);
            ul1.style.left=ul1[leftb]+vidio+"px";
        }
        ul1.timer=window.setTimeout(function() {everypicturea(ul1,obj)},30);
    }
    function everypictureb(ul2,obj){
        window.clearTimeout(ul2.timer);
        for(weare in obj ){
            var lefta=weare;
            var leftb="offset"+lefta.substring(0,1).toUpperCase()+lefta.substring(1).toLowerCase();
            var vidio=(obj[weare]-ul2[leftb])/10;
            vidio=vidio>=0?Math.ceil(vidio):Math.floor(vidio);
            ul2.style.left=ul2[leftb]+vidio+"px";
        }
        ul2.timer=window.setTimeout(function() {everypictureb(ul2,obj)},30);
    }
    function everypicturec(ul3,obj){
        window.clearTimeout(ul3.timer);
        for(weare in obj ){
            var lefta=weare;
            var leftb="offset"+lefta.substring(0,1).toUpperCase()+lefta.substring(1).toLowerCase();
            var vidio=(obj[weare]-ul3[leftb])/10;
            vidio=vidio>=0?Math.ceil(vidio):Math.floor(vidio);
            ul3.style.left=ul3[leftb]+vidio+"px";
        }
        ul3.timer=window.setTimeout(function() {everypicturec(ul3,obj)},30);
    }
    function everypictured(ul4,obj){
        window.clearTimeout(ul4.timer);
        for(weare in obj ){
            var lefta=weare;
            var leftb="offset"+lefta.substring(0,1).toUpperCase()+lefta.substring(1).toLowerCase();
            var vidio=(obj[weare]-ul4[leftb])/10;
            vidio=vidio>=0?Math.ceil(vidio):Math.floor(vidio);
            ul4.style.left=ul4[leftb]+vidio+"px";
        }
        ul4.timer=window.setTimeout(function() {everypicturec(ul4,obj)},30);
    }
    function everypicturee(ul5,obj){
        window.clearTimeout(ul5.timer);
        for(weare in obj ){
            var lefta=weare;
            var leftb="offset"+lefta.substring(0,1).toUpperCase()+lefta.substring(1).toLowerCase();
            var vidio=(obj[weare]-ul5[leftb])/10;
            vidio=vidio>=0?Math.ceil(vidio):Math.floor(vidio);
            ul5.style.left=ul5[leftb]+vidio+"px";
        }
        ul5.timer=window.setTimeout(function() {everypicturec(ul5,obj)},30);
    }
   div5right.onclick=function(){
        nuber++;
        if(nuber==li1.length){
            ul1.style.left=0;ul2.style.left=0;ul3.style.left=0;
            ul4.style.left=0;ul5.style.left=0;
            nuber=1;
        }
        everypicturea(ul1,{left:-530*nuber});
        everypictureb(ul2,{left:-300*nuber});
       everypictureb(ul3,{left:-400*nuber});
       everypictureb(ul4,{left:-170*nuber});
       everypictureb(ul5,{left:-530*nuber});
    }
    div5left.onclick=function(){
        nuber--;
        if(nuber==0){
            ul1.style.left=0;
            nuber=li1.length-1;
        }
        everypicturea(ul1,{left:-530*nuber});
        everypictureb(ul2,{left:-300*nuber});
        everypicturec(ul3,{left:-400*nuber});
        everypictured(ul4,{left:-170*nuber});
        everypicturee(ul5,{left:-530*nuber});
    }
    function everypicturef(ul6,objs){
        window.clearTimeout(ul6.timer);
        for(weare in objs ){
            var lefta=weare;
            var leftb="offset"+lefta.substring(0,1).toUpperCase()+lefta.substring(1).toLowerCase();
            var vidio=(objs[weare]-ul6[leftb])/10;
            vidio=vidio>=0?Math.ceil(vidio):Math.floor(vidio);
            ul6.style.left=ul6[leftb]+vidio+"px";
        }
        ul6.timer=window.setTimeout(function() {everypicturef(ul6,objs)},30);
    }
    div10right.onclick=function(){
        nuber++;
        if(nuber==li1.length){
            ul6.style.left=0;ul7.style.left=0;ul8.style.left=0;
            ul9.style.left=0;ul10.style.left=0;
            nuber=1;
        }
        everypicturef(ul6,{left:-500*nuber});
        everypicturef(ul7,{left:-300*nuber});
        everypicturef(ul8,{left:-400*nuber});
        everypicturef(ul9,{left:-430*nuber});
        everypicturef(ul10,{left:-330*nuber});
    }
    div10left.onclick=function(){
        nuber--;
        if(nuber==0){
            ul1.style.left=0;
            nuber=li1.length-1;
        }
        everypicturef(ul6,{left:-500*nuber});
        everypicturef(ul7,{left:-300*nuber});
        everypicturef(ul8,{left:-400*nuber});
        everypicturef(ul9,{left:-430*nuber});
        everypicturef(ul10,{left:-330*nuber});
    }
    function everypicture(ul12,obj){
        window.clearTimeout(ul12.timer);
        for(weare in obj ){
            var lefta=weare;
            var leftb="offset"+lefta.substring(0,1).toUpperCase()+lefta.substring(1).toLowerCase();
            var vidio=(obj[weare]-ul12[leftb])/10;
            vidio=vidio>=0?Math.ceil(vidio):Math.floor(vidio);
            ul12.style.left=ul12[leftb]+vidio+"px";
        }
        ul12.timer=window.setTimeout(function() {everypicture(ul12,obj)},30);
    }
    div14.onclick=function(){
        nuber++;
        if(nuber==li12.length){
            ul12.style.left=0;
            nuber=1;
        }
        everypicture(ul12,{left:-1100*nuber});
    }
    div13.onclick=function(){
        nuber--;
        if(nuber==0){
            ul12.style.left=0;
            nuber=li12.length-1;
        }
        everypicture(ul12,{left:-1100*nuber});
    }
    mainturn.onmouseover=function(){
        clearInterval(my);
    }
    mainturn.onmouseout=function(){
        my=setInterval(marquee,tim);
    }
    var my=window.setInterval(marquee,tim);
}
