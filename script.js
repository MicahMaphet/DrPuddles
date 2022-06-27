var input;
var output;
var time;
var hello;
var favcolor;
var nameq;



function Output() {

  input = document.getElementById("TextBar").value;

  user.style.width = input.length * 9 + "px";



  time = 0;
  hello = 1;
  favcolor = 0;
  nameq = 0;
  ipaddress = 0;

      output = "sorry i have no idea what that means";

  
  if (Search("hello") > 0) {
    hello = hello + 300;
    hello = hello / 4;
      }
  if (Search("hi") > 0) {
    hello = hello + 300;
    hello = hello / 4;
    if (input.length > 3){
      var mwath34 = input.length / 4;
      mwath34++;
    hello = hello / mwath34;
    }
      }
  
  if (Search("who is this") > 0) {
    nameq = nameq + 900;
    nameq = nameq / 10;
  }
    if (Search("ip address")||
              Search("IP address") > 0) {
    ipaddress = ipaddress + 900;
    ipaddress = ipaddress / 10;
  }
  if (Search("IP") > 0) {
    ipaddress = ipaddress + 100;
    ipaddress = ipaddress / 2;
  }
  if (Search("what") > 0) {
    time = time * 2 + 100;
    time = time / 3;
    favcolor = favcolor * 2 + 100;
    favcolor = favcolor / 3;
    nameq = nameq * 2 + 100;
    nameq = nameq / 3;    
    hello = hello * 0.8;
      if (Search("time") > 0||
       Search("day") > 0||
       Search("month") > 0||
       Search("fourth dimension") > 0||
       Search("year") > 0) {
      time = time + 200;
      time = time / 3;
      hello = hello * 0.5;
      favcolor = favcolor * 0.6;
        if (Search("is") > 0) {
          time = time * 2 + 100;
          time = time / 3;
        } else {
          time = time * 0.7;
        }

       }
    if (Search("favorite") > 0||
       Search("best") > 0) {
      time = time * 0.75;
      hello = hello * 0.5;
      favcolor = favcolor * 4 + 100;
      favcolor = favcolor / 5;
          if (Search("color") > 0) {
      favcolor = favcolor + 300;
        favcolor = favcolor / 4;
            hello = hello * 0.5;
          }
       }
    if (Search("name") > 0) {
      nameq = nameq * 3 + 100;
      nameq = nameq / 4;
      time = time * 0.8;

      if (Search("your") > 0) {
        nameq = nameq + 300;
        nameq = nameq /4
        time = time * 0.6;
      }
    }
    }

    if (Search("time") > 0||
       Search("day") > 0||
       Search("month") > 0||
       Search("fourth dimension") > 0||
       Search("year") > 0) {
      time = time * 2 + 100;
        time = time / 3;
            hello = hello * 0.5;
            nameq = nameq * 0.6;

       }

    if (Search("favorite") > 0||
       Search("best") > 0) {
      time = time * 0.75;
      hello = hello * 0.5;
      favcolor = favcolor * 4 + 100;
      favcolor = favcolor / 5;
      nameq = nameq * 0.9;
          if (Search("color") > 0) {
      favcolor = favcolor * 4 + 100;
        favcolor = favcolor / 5;
            hello = hello * 0.8;
            nameq = nameq * 0.5;

          }
       }
            if (Search("color") > 0) {
            favcolor = favcolor * 3 + 100;
            favcolor = favcolor / 4;
            hello = hello * 0.5;
            time = time * 0.8;
            nameq = nameq * 0.6;
            if (Search("your") > 0) {
            favcolor = favcolor * 3 + 100;
            favcolor = favcolor / 4;
            }

          }
  if (Search("name") > 0) {
            nameq = nameq * 2 + 100;
            nameq = nameq / 3;
            hello = hello * 0.6;
            time = time * 0.8;
            favcolor = favcolor * 0.9;
    if (Search("who")) {
            nameq = nameq * 2 + 100;
            nameq = nameq / 3;
    }
    if(Search("your") > 0) {
            nameq = nameq * 2 + 100;
            nameq = nameq / 3;
    } 
  }

   
      console.log("time confidence " + time)
      console.log("hello confidence " + hello)
      console.log("favcolor confidence " + favcolor)
      console.log("nameq confidence " + nameq)
      console.log("ipaddress confidence " + ipaddress)

/*this organises it, whichever ansewer has the 
same value as the winner outputs itself, if two
are the same, so what, it goes in chronilogical order */
  winner = Math.max(favcolor, time, hello, nameq, ipaddress);
  console.log(winner);
  if (favcolor == winner) {
      if (favcolor > 80) {
        output = "orange";
      } else {
        output = "my favorite color is orange"
      }

  }
    if (time == winner) {
    output = Date();

  }
    if (nameq == winner) {
      if (nameq > 80) {
        output = "dr puddles";
      } else {
        output = "my name is dr puddles"
      }

  }
  if (hello == winner) {
    output = "hello";
  }

  if (winner < 50) {
    output = "uuhh... " + output + "?";
  }
  if (winner < 20) {
    output = "uuuuu" + output + " you are confusing me";
  }
  if (winner < 10) {
    output = "sorry i have no idea what that means";
  }
  if (output.length * 8 < 500) {
  DrPuddles.style.width = output.length * 8 + "px";
} else {
    DrPuddles.style.width = 500 + "px";

}

  document.getElementById("user").innerHTML = input;
  document.getElementById("TextBar").value = "";
  
  if (winner == ipaddress) {
     $.getJSON("https://api.ipify.org?format=json", function (data) {
         
        // Setting text of element P with id gfg
        $("#DrPuddles").html(data.ip + " (:");
    })
    DrPuddles.style.width = 120 + "px";

  } else {
      document.getElementById("DrPuddles").innerHTML = output;
  }
}

//finds is the given word is in the input at all
function Search(s) {
  var score = 0;
  var fullscore = 0;
  for (i = 0; i < input.length; i++) {
    if (s.charAt(0) == input.charAt(i)) {
      for (t = 0; t < s.length; t++) {
        if (s.charAt(t) == input.charAt(i + t)) {
          score++;
        }
      }
      if (score == s.length) {
        fullscore++;
      }
      score = 0;
    }
  }
  return fullscore;
  
}
