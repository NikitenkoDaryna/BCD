const output = document.getElementById('output');
const button = document.getElementById('button');
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
function writeCookie(name, value, days) {

  var expires = "";
  
  if(days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
  }
  document.cookie = name + "=" + value + expires + "; path=file:///C:/Users/daryn/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%9E%D0%9A%D0%A0%D0%9B%D0%B0%D0%B1%D1%8B/Lab2_2/index.html";
}

function readCookie(name) {
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
  writeCookie(name, "", -1);
}


function maxDitig(number) {
  if (number < 0) throw new RangeError("Positive number is expected");
  if (number < 10) return number;
  return Math.max(number % 10, maxDitig(parseInt(number / 10)));
}
function taskFourLabThree(){
  
    var x = document.forms["myForm"]["num"].value;

    if (x == 0) {
      x=getRandomIntInclusive(10,99999);
      alert(x);
      
    }
   x= maxDitig(x);  
 
 eraseCookie("bar");
  writeCookie("bar",x,30);

 alert(readCookie("bar"));
 var toDelete=alert("PRESS OK if you want to delete it");


 deleteCookies("bar");
 alert("cookie has been deleted");

//  if(true){
//   document.location.reload();
//  }
 
    return x;
}

    var txt1=$('#txt1');
    var txt2=$('#txt2');
    var txt3=$('#txt3');
    var txt4=$('#txt4');
    var txt5=$('#txt5');
    var txt6=$('#txt6');
    var txt7=$('#txt7');
   blocks = [txt1, txt2, txt3,txt4,txt5, txt6,txt7];
    
  

  function taskOne(){
    let delay =5000,
    swapContent=(index)=>{
      
       swappedEl= blocks[index].html();
      blocks[index].html(blocks[(index+1)%7].html());
      blocks[(index+1)%7].html(swappedEl);
      if(index<5){
        
        setTimeout(swapContent,delay,++index);
      }
       
      
      
    };
    setTimeout(swapContent,delay,0);
  }
 //taskOne();
 
 var doOnce = (function() {
  var executed = false;
  return function() {
      if (!executed) {
          executed = true;
          taskFourLabThree();
      }
  };
})();

  function taskTwo(){
    
   

   doOnce();
    $(document).ready(function() {
      
      setTimeout(function() {
        blocks[0].css("font-weight","Bold");
        blocks[6].css("font-weight","Bold");
     
      }, 5000);
      
    });
    setInterval(()=>{
      let fontWeight5=blocks[4].css("font-weight");
      if(fontWeight5=='700'){
        blocks[4].css("font-weight","normal")

      }else{
        blocks[4].css("font-weight","Bold");
      }
    },5000);
   
  }
  //taskTwo();

    function loadCommits() {
      $("#commits").empty();
      let url = "https://api.github.com/repos/" +
          $("#username").val() + "/" +
          $("#repo").val() + "/commits";
   
      $.get(url)
          .then(displayCommits)
          .catch(displayError);
   
      function displayCommits(commits) {
          for (let commit of commits) {
              $("#commits").append($("<li>").text(
                  commit.commit.author.name + ": " +
                  commit.commit.message
              ));
          }
      }
   
      function displayError(err) {
        let appendVal='<div style="border : solid 4px #00397a;border-radius: 8px;padding:15px; float:left;background-color:#ec524b;color:#e8e8e8;margin:8px;" >'
          $("#commits").append($(appendVal).text(
              "Error: " +
              err.status + " (" + err.statusText + ")"));
      }
  }
  
   

    function callback1(){
      setTimeout(function() {
        console.log('Hello from callback1!');
      }, Math.random()*1000);
     
    }
    function callback2(){
      setTimeout(function() {
        console.log('Hello from callback2!');
      }, Math.random()*5000);
      
    }

    function taskFour(a, b) {
      Promise.resolve(a()).then(b())
    }
    taskFour(
      callback1,callback2);
//selection Sort for task five
function selectionSort(arr) {
let tempArr=arr;
let length=arr.length;
  for (var i = 0; i < length; i++) {

      let min = i; //  storing the index of minimum element

      for (var j = i + 1; j < length; j++) {
          if (tempArr[min] > tempArr[j]) {
              min = j; // updating the index of minimum element
          }
      }

      if (i !== min) {
          [tempArr[ i ],tempArr[min]]= [tempArr[min],tempArr[ i ]];        }
  }
  return tempArr
}
function isNull(input){
  if(input==null||input==""){
   
    return true;
  }
}
  //taskOne();
  function toNumbers(arr){
  
return arr.map(Number);
  }
  
  function taskFive() {
    var input = document.getElementsByName('array[]'); 
    
    let str="";
            for (var i = 0; i < input.length; i++) { 
                var a = input[i]; 
               str+=a.value;
            } 
    let matches = str.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g); 
    let nullVal=isNull(matches);
    if(nullVal)return;
      numbersBefore=toNumbers(matches);
    
     // console.log(numbersBefore);
     let appendStr='<div style="border : solid 3px #00397a;border-radius: 8px;padding:20px; " >';
    let numbersAfter=selectionSort(numbersBefore);
    var stringFromArr = numbersAfter
    .join(', ');
    let empty=$('#numbers').html();
    if(!(empty==null||empty=="")){
      $("#numbers").empty();
    }
  
   let getNums=function(){ $("#numbers").append($(appendStr).text(
   stringFromArr
   ));
}
getNums();
    console.log(numbersAfter);
  }
  

taskFive()