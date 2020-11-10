//change content of pre-content class and sidebar-3
//alert(1);
//S=a*b*sin(a)
function mouseOver() {
  document.getElementById("main-title").style.color = "red";
}
function mouseOut() {
  document.getElementById("main-title").style.color = "#001d52";
}
document.getElementById("main-title").onmouseover = function() {mouseOver()};
document.getElementById("main-title").onmouseout = function() {mouseOut()};
function writeCookie(name, value, days) {
    // По умолчанию куки являются временными, не имея срока хранения
    var expires = "";
    
    // Указав число дней, вы сделаете куки постоянными
    if(days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    
    // Присвоим куки имя, значение и срок хранения
    document.cookie = name + "=" + value + expires + "; path=file:///C:/Users/daryn/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%9E%D0%9A%D0%A0%D0%9B%D0%B0%D0%B1%D1%8B/Lab2_2/index.html";
}

function readCookie(name) {
    // Найдем конкретный куки и вернем его значение
    var searchName = name + "=";
    var cookies = document.cookie.split(';');

    for(var i = 0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
         if(c.indexOf(searchName) == 0)
       
             return "number:"+c.substring(searchName.length, c.length);          
    }
    return null;
}
function deleteCookies() { 
    var allCookies = document.cookie.split(';');   
    // The "expire" attribute of every cookie is  
    // Set to "Thu, 01 Jan 1970 00:00:00 GMT" 
    for (var i = 0; i < allCookies.length; i++) 
        document.cookie = allCookies[i] + "=;expires=" 
        + new Date(0).toUTCString(); 
} 
function eraseCookie(name){
    // Удалим выбранный куки
    writeCookie(name, "", -1);
}

var mainRef=document.getElementsByClassName("pre-content")[0].querySelectorAll('a')[0];
var imgRef=document.getElementsByClassName("pre-content")[0].querySelectorAll('a')[1];
var olRef=document.getElementsByClassName("pre-content")[0].querySelectorAll('a')[2];
var ulRef=document.getElementsByClassName("pre-content")[0].querySelectorAll('a')[3];
var arrayOfObj=[mainRef,imgRef,olRef,ulRef]
var h2=document.getElementsByClassName("sidebar-3")[0].querySelector('h2');
var aContentRef=document.getElementsByClassName("sidebar-3")[0].querySelector('a');
function f1(){
    
      var tag = document.createElement("a");
      var mainMenu = document.getElementById("main-menu");
      var content=document.getElementsByClassName("pre-content")[0];
      content.insertBefore(document.createElement("a").appendChild(h2),mainMenu);
     mainMenu.appendChild(tag.appendChild(aContentRef))
   
var footMenu=document.getElementById("foot-menu");
for(var i = 0; i < arrayOfObj.length; ++i){
footMenu.appendChild(arrayOfObj[i]);
}


}
f1();
var a;
var b;
var sina;
var S;

function disp_prompt(){	 
  a=Number(prompt("Please enter a",""));		

     b=Number(prompt("Please enter b",""))	;
    sina =Number(prompt("Please enter sina","")	)		
    if (a!=0 || a!="" || a!=NaN && b!=0 || b!="" || b!=NaN && sina !=0 || sina!=""|| sina!=NaN)				
    {		
        S=a*b*sina;
        let mainContent=document.getElementsByClassName("content")[0];
        let tag=document.createElement("div");
        var result = document.createTextNode(`a:${a}
                                                   b:${b}
                                                   sina:${sina}
                                                   S:${S}`);
                                                 
        mainContent.appendChild(tag.appendChild(result));
      
    }		
}
//disp_prompt();
function validateForm() {
    var x = document.forms["myForm"]["num"].value;

    if (x == 0) {
      alert("Name must be filled out");
      return false;
    }
   x= maxDitig(x);  
 //alert(x);
 eraseCookie("bar");
  writeCookie("bar",x,30);

 alert(readCookie("bar"));
 var toDelete=alert("PRESS OK if you want to delete it");


 deleteCookies("bar");
 alert("cookie has been deleted");

 if(true){
  document.location.reload();
 }
 
    return x;
  }
  function maxDitig(number) {
    if (number < 0) throw new RangeError("Positive number is expected");
    if (number < 10) return number;
    return Math.max(number % 10, maxDitig(parseInt(number / 10)));
  }
 
  const btn = document.querySelector('#btn');
  // handle click button

  // var keys=['2','4','5'];
  btn.onclick = function () {
      const rbs = document.querySelectorAll('input[name="choice"]');
      let selectedValue;
      for (const rb of rbs) {
          if (rb.checked) {
              selectedValue = rb.value;
              switch (selectedValue) {
                case '2':
                  alert(2);
                  document.getElementsByClassName('sidebar-1')[0].style.textAlign="right";
                
                  localStorage.setItem(selectedValue, 'sidebar-1');
               
             
                  break;
                case '4':
                  alert(4);
                  document.getElementsByClassName('sidebar-2')[0].style.textAlign="right";
                  localStorage.setItem(selectedValue, 'sidebar-2');
                
                  break;
                case '5':
                  alert(5);
                  document.getElementsByClassName('content')[0].style.textAlign="right";
                  localStorage.setItem(selectedValue, "content");
               
                  break;
                default:
                  alert( "Нет таких значений" );
              }
          }
      }
     
  };
  function allStorage(){
    var values=[],
    keys=Object.keys(localStorage),
    i=keys.length;
    while(i--){
      values.push(localStorage.getItem(keys[i]));
    }
    return values;
  }

  function updateHTML() {
    var values=allStorage();
 
 for(var i = 0; i < values.length; i++){

    let className = values[i];
  

    document.getElementsByClassName(className)[0].style.textAlign="right" ;
 }
  
  }
  updateHTML();

 



function saveEdits(area,storageId){
  var editElem=document.getElementById(area);

  var userVersion=editElem.value;

  localStorage.setItem(storageId,userVersion);
 
}
function loadEdits(storageId,text){
  
  var myContent = localStorage.getItem(storageId);
  //validation?!
  if (isHTML(myContent) )
          document.getElementById(text).innerHTML = myContent;
  
  else{
    document.getElementById(text).textContent = myContent;
      }
}
function isHTML(str) {
  return /<(br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|!DOCTYPE).*?>|<(a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video).*?<\/\2>/.test(
    str
  );
}
// function checkHTML(str) {
//   var doc = new DOMParser().parseFromString(str, "text/html");
//   return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);

// }




      
       
    
