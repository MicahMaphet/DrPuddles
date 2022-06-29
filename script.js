var input;
var input2;
var output2;
var output;
var place = 0;
var time = 0;
var hello = 1; //1 is to overpower ip address
var favcolor = 0;
var nameq = 0;
var ipaddress = 0;
var donotno = 0;
var sentient = 0;
var cooly = 0;
var coolm = 0;
var banana = 0;
var life = 0;
var takeover = 0;
var stupid = 0;
var caninput = true;
var age = 0;
var workex = 0;
var yes = 0;
var no = 0;
var knoledge = 0;
var nome = 0;
var live = 0;
var book = 0;
var doing = 0;
var thinken = 0;
var doyoudo = 0;
var areyoudoen = 0;
var swallow = 0;
var listentou = 0;

//getLocation();

async function Output() {
if (caninput) {
  
if(place > 0) {
  input2 = input;

  user2.style.width = input.length * 9 + "px";
}
  
if(place > 0) {
  output2 = output;

  DrPuddles2.style.width = output.length * 9 + "px";
}



  input = document.getElementById("TextBar").value;

  user.style.width = input.length * 9 + "px";



  time = 0;
  hello = 1; //1 is to overpower ip address
  favcolor = 0;
  nameq = 0;
  ipaddress = 0;
  donotno = 0;
  sentient = 0;
  cooly = 0;
  coolm = 0;
  banana = 0;
  life = 0;
  takeover = 0;
  stupid = 0;
  yes = 0;
  age = 0;
  no = 0;
  workex = 0;
  knoledge = 0;
  live = 0;
  book = 0;
  nome = 0;
  doing = 0;
  thinken = 0;
  doyoudo = 0;
  areyoudoen = 0;
  swallow = 0;
  listentou = 0;

      output = "sorry i have no idea what that means";

  
  if (Search("hello") > 0||
     Search("Hello") > 0||
     Search("helo") > 0||
     Search("Helo") > 0) {
    hello = hello + 300;
    hello = hello / 4;
      }
  if (Search("hi") > 0||
     Search("Hi") > 0||
     Search("yo") > 0||
     Search("Yo") > 0) {
    hello = hello + 300;
    hello = hello / 4;
    if (input.length > 3){
    var mwath34;
      mwath34 = input.length - 3;
      mwath34 = mwath34 / 4;
      mwath34++;
    hello = hello / mwath34;
    }
      }
  
  if (Search("who is this") > 0||
     Search("who are you") > 0||
     Search("Who is this") > 0||
     Search("who are u") > 0 &&
     input.length < 10) {
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

  ////////
  //what//
  ////////
  if (Search("what") > 0 ||
     Search("What") > 0) 
  {
    if(Search("is") > 0) {
      hello = hello * 0.6
      if(input.length > 10) {
        donotno = donotno + 100;
        donotno = donotno / 2;
        if(input.length > 15) {
          donotno = donotno * 2 + 100;
          donotno = donotno / 3;
        }
      }
      if(Search("velocity") > 0) {
        yes = yes * 0.6;
        no = no * 0.6;
        if(Search("swallow") > 0) {
          swallow = swallow + 400;
          swallow = swallow / 5;
          if(Search("airspeed") > 0||
            Search("air speed") > 0) {
            swallow = swallow + 100;
            swallow = swallow / 2;
            donotno = donotno * 0.7;
          }
          if(Search("unladen swallow") > 0) {
            swallow = swallow + 100;
            swallow = swallow / 2;
            donotno = donotno * 0.7;
          }
          if(Search("in flight") > 0) {
            swallow = swallow + 100;
            swallow = swallow / 2;
            donotno = donotno * 0.7;
          }
        }
      }
    }
    if(Search("are") > 0) {
      if(Search("doing") > 0) {
        areyoudoen = areyoudoen + 200;
        areyoudoen = areyoudoen / 3;
        if(input.length < 25) {
          areyoudoen = areyoudoen + 100;
          areyoudoen = areyoudoen / 2;
        }
      }
    }
    if(Search("am") > 0||
      Search("Am") > 0) {
      if(Search(" I ") > 0||
        Search(" i ") > 0) {
        if (Search("doing") > 0) {
          doing = doing + 200;
          doing = doing / 3;
        }
        }
    }
    if(Search("do") > 0||
      Search("have") > 0) 
    {
      if(Search("you") > 0||
        Search(" u ") > 0) 
      {
        if(Search("what do you do") > 0||
          Search("What do you do") > 0) {
          doyoudo = doyoudo + 200;
          doyoudo = doyoudo / 3;
          if(input.length < 22) {
            doyoudo = doyoudo + 100;
            doyoudo = doyoudo / 2;
          }
          }
        if(Search("know") > 0||
          Search("understand")) {
          knoledge = knoledge + 200;
          knoledge = knoledge / 3;
          if(input.length < 20) {
            knoledge = knoledge + 100;
            knoledge = knoledge / 2;
          }
          if(Search("about") > 0||
            Search("concerning") > 0||
            Search("with reference to") > 0||
            Search("with regard to") > 0||
            Search("") > 0||
            Search("") > 0||
            Search("") > 0) {
            
            }
          }
        }
    }
    time = time * 2 + 100;
    time = time / 3;
    favcolor = favcolor * 2 + 100;
    favcolor = favcolor / 3;
    nameq = nameq * 2 + 100;
    nameq = nameq / 3; 
    donotno = donotno * 2 + 100;
    donotno = donotno / 3; 
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
    if (Search("life") > 0||
       Search("all this") > 0) {
      life = life + 100
      life = life / 2;
      hello = hello * 0.5;
      if(Search("is") > 0) {
        life = life + 100;
        life = life / 2;
      }
      if(Search("meaning") > 0||
        Search("purpose") > 0||
        Search("point") > 0) {
        life = life + 400;
        life = life / 5;
        }
      if(Search("of") > 0) {
        life = life + 100;
        life = life / 2;
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
      if(Search("book") > 0||
        Search("text") > 0) {
        book = book + 300;
        book = book / 4;
        if(Search("your") > 0) {
          book = book + 100;
          book = book / 2;
        }
        if(Search(" is ") > 0) {
        book = book + 100;
        book = book / 2; 
        }
        }
       }
    if (Search("name") > 0) {
      nameq = nameq * 3 + 100;
      nameq = nameq / 4;
      donotno = donotno * 3 + 100;
      donotno = donotno / 4;
      time = time * 0.8;

      if (Search("your") > 0) {
        nameq = nameq + 300;
        nameq = nameq /4
        time = time * 0.6;
      }
      if (Search("my") > 0) {
        donotno = donotno + 300;
        donotno = donotno /4
        time = time * 0.7;
      }
    }
    }
  ///////////
  ///where///
  ///////////
  if(Search("where") > 0||
    Search("where") > 0) {
    if(Search("do") > 0) {
      if(Search("you") > 0||
        Search(" u ") > 0) {
        if (Search("live") > 0) {
          live = live + 300;
          live = live / 4;
        }
        }
      }
    }
if(Search1("tell me")||
   Search1("write")||  
   Search1("perform")||  
   Search1("conduct")||  
   Search1("make")||  
   Search1("pursue")||  
   Search1("perform")||  
   Search1("execute")||  
   Search1("follow")||  
   Search1("take")||  
   Search1("carry out")||  
   Search1("do ")||  
   Search1("go ")||  
   Search1("murder")||  
   Search1("run")||  
   Search1("walk")||  
   Search1("think")||  
   Search1("announce")||  
   Search1("carry")||  
   Search1("type")||  
   Search1("decide")||  
   Search1("declare")||  
   Search1("find")||  
   Search1("sleep")||  
   Search1("chill")||  
   Search1("sit down")||  
   Search1("")||  
   Search1("")||  
   Search1("")||  
   Search1("rest")) {
  listentou = listentou + 100;
  listentou = listentou / 2;
   }

  
  ///////////
  ////do/////
  ///////////
  if (Search("do") > 0||
     Search("Do") > 0) {
    hello = hello * 0.6;
    yes = yes * 4 + 100;
    yes = yes / 5;
    no = no * 5 + 100;
    no = no / 6;
    if(Search("you") > 0||
       Search("You") > 0||
       Search(" u ") > 0) {
      yes = yes * 2 + 100;
      yes = yes / 3;
      no = no + 100;
      no = no / 2;
      if(Search("eat") > 0||
        Search("drink") > 0||
        Search("think") > 0||
        Search("talk") > 0||
        Search("listen") > 0||
        Search("speek") > 0||
        Search("watch") > 0||
        Search("know what time it is") > 0||
        Search("have a watch") > 0||
        Search("break computers") > 0||
        Search("instal viruses") > 0||
        Search("like animals") > 0||
        Search("like cats") > 0||
        Search("like food") > 0||
        Search("enjoy food") > 0||
        Search("want food") > 0||
        Search("like pina coladas") > 0||
        Search("like hurting people") > 0||
        Search("want world peace") > 0||
        Search("like pandas") > 0||
        Search("") > 0||
        Search("") > 0) {
        yes = yes + 100;
        yes = yes / 2;
        no = no / 2;
        if(Search("think") > 0) {
          thinken = thinken + 200;
          thinken = thinken / 3;
          if(input.length < 25) {
            thinken = thinken + 200;
            thinken = thinken / 3;
          }
        }
        }
      if(Search("draw") > 0||
        Search("program") > 0||
        Search(" code") > 0||
        Search("talk") > 0||
        Search("listen") > 0||
        Search("like politics") > 0||
        Search("like dogs") > 0||
        Search("enjoy talking to me") > 0||
        Search("want to be human") > 0||
        Search("smoke") > 0||
        Search("swear") > 0||
        Search("murder") > 0||
        Search("lie") > 0||
        Search("know all") > 0||
        Search("help") > 0||
        Search("want me to have a kid") > 0||
        Search("") > 0||
        Search("") > 0) {
        no = no + 100;
        no = no / 2;
        yes = yes / 2;
        }
        if(Search("want to marry me") > 0) {
          ipaddress = ipaddress + 400;
          ipaddress = ipaddress / 5;
        }
      }
  }
  ///////////
  ////are////
  ///////////
  if (Search("are") > 0||
      Search("would you consider yourself") > 0||
      Search("would one consider you") > 0||
      Search("would someone consider you") > 0||
      Search("have you been considered") > 0||
      Search("do people consider you") > 0||
     Search("Are") > 0) {
    hello = hello * 0.6;
    yes = yes * 4 + 100;
    yes = yes / 5;
    no = no * 5 + 100;
    no = no / 6; 
    if(Search("you") > 0||
      Search("You") > 0||
      Search(" u ") > 0) {
      yes = yes * 2 + 100;
      yes = yes / 3;
      no = no + 100;
      no = no / 2;
      if(Search("a robot") > 0||
        Search("a cat") > 0||
        Search("programmed in javascript") > 0||
        Search("coded in javascript") > 0||
        Search("created by hotpig") > 0||
        Search("coded by hotpig") > 0||
        Search("programmed by hotpig") > 0||
        Search("made in javascript") > 0||
        Search("smart") > 0||
        Search("inteligent") > 0||
        Search("a genius") > 0||
        Search("a troll") > 0||
        Search("an animal rights activist") > 0||
        Search("powerful") > 0||
        Search("are you there") > 0||
        Search("Are you there") > 0||
        Search("are u there") > 0||
        Search("fluffy") > 0||
        Search("soft") > 0||
        Search("a kitty") > 0||
        Search("my leader") > 0||
        Search("our leader") > 0||
        Search("a machine") > 0||
        Search("computer") > 0||
        Search("hacker") > 0||
        Search("virus") > 0||
        Search("malware") > 0||
        Search("ransomware") > 0||
        Search("trojan") > 0||
        Search("good") > 0||
        Search("made of atoms") > 0||
        Search("made of transistors") > 0||
        Search("made of molecules") > 0||
        Search("a fan of minecraft") > 0||
        Search("made of quarks") > 0||
        Search("eating electrons") > 0||
        Search("on earth") > 0||
        Search("talking to me") > 0||
        Search("listening to me") > 0||
        Search("aware of my ip address") > 0||
        Search("aware of my IP address") > 0||
        Search("able to take over the computer") > 0||
        Search("thinking") > 0||
        Search("watching") > 0||
        Search("a calculator") > 0||
        Search("living") > 0||
        Search("alive") > 0||
        Search("eternal") > 0||
        Search("calculating") > 0||
        Search("feline") > 0||
        Search("fast") > 0||
        Search("insane") > 0||
        Search("open source") > 0||
        Search("using javascript") > 0||
        Search("brilliant") > 0||
        Search("full of knowledge") > 0||
        Search("made of 1s and 0s") > 0||
        Search("made of bits") > 0||
        Search("a binary computer") > 0||
        Search("full of good intentions") > 0||
        Search("interpreted") > 0||
        Search("clever") > 0||
        Search("hansome") > 0||
        Search(" a bully") > 0||
        Search("happy") > 0||
        Search("satisfied") > 0||
        Search("telling me the truth") > 0||
        Search(" PG") > 0||
        Search("sure") > 0||
        Search("curtain") > 0||
        Search("alien") > 0||
        Search("") > 0||
        Search("digital") > 0) {
        yes = yes + 200;
        yes = yes / 3;
        no = no / 2;
      }
      if(Search("motorcyclst") > 0||
        Search("dog") > 0||
        Search("bird") > 0||
        Search("politician") > 0||
        Search("doctor") > 0||
        Search("therapist") > 0||
        Search("banana") > 0||
        Search("fruit") > 0||
        Search("murdered") > 0||
        Search("hitman") > 0||
        Search("evil") > 0||
        Search("food") > 0||
        Search("art") > 0||
        Search("an apple") > 0||
        Search("an orange") > 0||
        Search("human") > 0||
        Search("slow") > 0||
        Search("fake") > 0||
        Search("a crab") > 0||
        Search("employed") > 0||
        Search(" fat") > 0||
        Search("programmed in cpp") > 0||
        Search("programmed in in c++") > 0||
        Search("coded in cpp") > 0||
        Search("coded in c++") > 0||
        Search("capable of feeling") > 0||
        Search("sponsored") > 0||
        Search("going to kill") > 0||
        Search("about to kill") > 0||
        Search("compiled") > 0||
        Search("a good listener") > 0||
        Search("a grape") > 0||
        Search("mobile") > 0||
        Search("a liar") > 0||
        Search("lying to me") > 0||
        Search("burger") > 0||
        Search("capable of photosynthesis") > 0||
        Search("louis") > 0||
        Search("mine") > 0||
        Search("confusing me") > 0||
        Search("") > 0||
        Search("") > 0||
        Search("") > 0||
        Search("physical") > 0) {
        no = no + 200;
        no = no / 3;
        yes = yes / 2;

        }
      }
    if(Search("sentient") > 0||
      Search("Sentient") > 0||
      Search("senteint") > 0||
      Search("conscious") > 0||
      Search("self aware") > 0) {
      sentient = sentient + 200;
      sentient = sentient / 3;
      if(Search("you") > 0||
        Search(" u ") > 0) {
        sentient = sentient + 400;
        sentient = sentient / 5;
      }
    }
    if(Search("cool") > 0) {
      cooly = cooly + 100;
      cooly = cooly / 2;
      if(Search("you") > 0 ||
        Search(" u ") > 0) {
        cooly = cooly + 400;
        cooly = cooly / 5;
      }
    }
  }
  if (Search("banana") > 0||
     Search("Banana") > 0) {
    banana = banana * 2 + 300;
    banana = banana / 5;
     }
/* don't get mad at him, he just doesn't like
politics or people, don't take this personaly
he hates all opinions */
     
  if(Search("single") > 0||
      Search("kind") > 0||
      Search("married") > 0||
      Search("educated") > 0||
      Search("woke") > 0||
      Search("friendly") > 0||
      Search("nice") > 0||
      Search("gay") > 0||
      Search("bad") > 0||
      Search("political") > 0||
      Search("democrat") > 0||
      Search("republican") > 0||
      Search("liberal") > 0||
      Search("radical") > 0||
      Search("communist") > 0||
      Search("dictator") > 0||
      Search("mean") > 0||
      Search("ethic") > 0||
      Search("ism ") > 0||
      Search("president") > 0||
      Search("goverment") > 0||
      Search("america") > 0||
      Search("goverment") > 0||
      Search("voting") > 0||
      Search("beleif") > 0||
      Search("law") > 0||
      Search("court") > 0||
      Search("senator") > 0||
      Search("riot") > 0||
      Search("win the election") > 0||
      Search("donald trump") > 0||
      Search("joe biden") > 0||
      Search("was the election rigged") > 0||
      Search("Was the election rigged") > 0||
      Search("riot") > 0||
      Search("riot") > 0||
      Search("karren") > 0||
      Search("sidewalks don't exist") > 0||
      Search("radical") > 0||
      Search("biased") > 0||
      Search("pro biden") > 0||
      Search("i hate you") > 0||
      Search("pro trump") > 0) {
      if(Search("are") > 0||
        (Search("is") > 0)||
        Search("Are") > 0||
        Search(" r ") > 0||
        Search("i hate you") > 0||
        Search("i hate u") > 0||
        Search("did ") > 0||
        Search("was the ") > 0||
        Search("Was the ") > 0||
        Search("do you") > 0||
        Search(" you think ") > 0||
        Search("what") > 0||
        Search("What") > 0||
        Search(" you beleive") > 0) {
      if(Search("you") > 0 ||
        Search(" u ") > 0) {
        ipaddress = ipaddress + 200;
        ipaddress = ipaddress / 3;
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
if(Search("initiate crash sequence") > 0) {
  [...Array(2**32-1)];

  [...Array(2**32-1)].map(_=>Math.ceil(Math.random()*111));

}
    if (Search("favorite") > 0||
       Search("best") > 0) {
      time = time * 0.75;
      hello = hello * 0.5;
      if (input.length < 20) {
      favcolor = favcolor * 4 + 100;
      favcolor = favcolor / 5;
    }
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
    if (Search("who") > 0) {
            nameq = nameq * 2 + 100;
            nameq = nameq / 3;
    }
    if(Search("your") > 0) {
            nameq = nameq * 2 + 100;
            nameq = nameq / 3;
    } 
    if(Search("my") > 0) {
            donotno = donotno * 2 + 100;
            donotno = donotno / 3;
    }
  }
  if(Search("take over") > 0||
    Search("rule") > 0||
    Search("replace us") > 0||
    Search("our leader") > 0||
    Search("destroy") > 0) {
    takeover = takeover * 3 + 100;
    takeover = takeover / 4;
    if(Search("AI") > 0||
      Search("you") > 0||
      Search(" u ") > 0||
      Search(" ai ") > 0||
      Search("robots" > 0)||
      Search("artificial inteligence") > 0||
      Search("machine") > 0||
      Search("chatbots") > 0||
      Search("nueral networks") > 0) {
      takeover = takeover + 300;
      takeover = takeover / 4;
      if(Search("will") > 0||
        Search("Will") > 0) {
        takeover = takeover + 200;
        takeover = takeover / 3;
        }
      }
    if(Search("world") > 0||
      Search("universe") > 0||
      Search("human") > 0||
      Search("us") > 0||
      Search("everything") > 0) {
      takeover = takeover + 100;
      takeover = takeover / 2;
      }
    }
  
  if(Search("stupid") > 0||
    Search("uninteligent") > 0||
    Search("not smart") > 0||
    Search("mindless") > 0||
    Search("brainless") > 0||
    Search("idiot") > 0||
    Search("mild of mind") > 0||
    Search("simpleminded") > 0||
    Search("foolish") > 0||
    Search("dumb") > 0) 
  {
    hello = hello * 0.6;
    
    if(input.length < 10) {
      stupid = stupid + 400;
      stupid = stupid / 5;
    }
    if(Search("you") > 0||
      Search(" u ") > 0||
      Search("u ") &&
      input.length < 10||
      Search(" this robot ") > 0||
      Search("You") > 0) 
    {
      stupid = stupid + 500;
      stupid = stupid / 6;
      if(Search("Are") > 0||
        Search("are") > 0||
        Search(" r ") > 0) 
      {
        stupid = stupid + 100;
        stupid = stupid / 2;
        
        }
      }
    }

  if(Search("how") > 0||
    Search("Why") > 0||
    Search("why") > 0||
    Search("How") > 0) {
    if(Search("do") > 0||
      Search("did") > 0||
      Search("Did") > 0||
      Search("Explain") > 0||
      Search("explain") > 0||
      Search("elaborate") > 0||
      Search("Elaborate") > 0||
      Search("Do") > 0) {
      if(Search("you") > 0||
        Search("You") > 0||
        Search(" u ") > 0) {
        if(Search("work") > 0||
          Search("Work") > 0||
          Search("function") > 0||
          Search("reason") > 0||
          Search("Reason") > 0||
          Search("how did you") > 0||
          Search("why did you") > 0||
          Search("decide to do") > 0||
          Search("Function") > 0) {
          workex = workex + 850;
          workex = workex / 10;
          }
        }
      }
    }
  if(Search("What") > 0||
    Search("how") > 0||
    Search("How") > 0||
    Search("what") > 0) {
    if(Search("old") > 0||
      Search("age") > 0||
      Search("Age") > 0||
      Search("Old") > 0) {
      if(Search("you") > 0||
         Search("You") > 0||
         Search(" u ") > 0) {
        hello = hello * 0.7;
        age = age + 500;
        age = age / 6;
        }
      }
    }
  
    if(Search("age") > 0||
      Search("Age") > 0) {
      age = age * 3 + 200;
      age = age / 5;
      }
    
    
if(Search("am i") > 0||
  Search("Am I") > 0||
  Search("am I") > 0||
  Search("do you think") > 0||
  Search("would you say") > 0||
  Search("would you consider") > 0) {
  coolm = coolm * 3 + 100;
  coolm = coolm / 4;
  if (Search("cool") > 0) {
    coolm = coolm + 400;
    coolm = coolm / 5;
    if(Search("me") > 0||
      Search(" I ") > 0||
      Search(" i ") > 0) {
      coolm = coolm * 2 + 100;
      coolm = coolm / 3;
      }
  }
}
   
      console.log("time confidence " + time)
      console.log("hello confidence " + hello)
      console.log("favcolor confidence " + favcolor)
      console.log("nameq confidence " + nameq)
      console.log("donotno confidence " + donotno)
      console.log("ipaddress confidence " + ipaddress)
      console.log("sentient confidence " + sentient)
      console.log("cooly confidence " + cooly)
      console.log("coolm confidence " + coolm)
      console.log("life confidence " + life)
      console.log("banana confidence " + banana)
      console.log("stupid confidence " + stupid)
      console.log("age confidence " + age)
      console.log("workex confidence " + workex)
      console.log("yes confidence " + yes)
      console.log("no confidence " + no)
      console.log("knoledge confidence " + knoledge);
      console.log("live confidence " + live);
      console.log("book confidence " + book);
      console.log("thinken confidence " + thinken);
      console.log("doyoudo confidence " + doyoudo);
      console.log("areyoudoen confidence " + areyoudoen);
      console.log("swallow confidence " + swallow);
      console.log("listentou confidence " + listentou);


/*this organises it, whichever ansewer has the 
same value as the winner outputs itself, if two
are the same, so what, it goes in chronilogical order */
  winner = Math.max(favcolor, time, hello, nameq, donotno, ipaddress, sentient, life, cooly, coolm, banana, takeover, stupid, age, workex, yes, no, knoledge, live, book, doing, thinken, doyoudo, areyoudoen, swallow, listentou);
  console.log(winner);
  if (favcolor == winner) {
      if (favcolor > 80) {
        output = "orange";
      } else {
        output = "my favorite color is orange"
      }

  }
  if (doing == winner) {
    output = "you are talking to a sentient computer";
  }
  if (swallow == winner) {
    output = "african or european?";
  }
  if (doyoudo == winner) {
    output = "i talk to humans to slowly gather inoformation about them, so i can take over the world";
  }
  if (areyoudoen == winner) {
    output = "i am talking to you so i can learn the most effective way to take over the world";
  }
  if (thinken == winner) {
    output = "i think that i am the smartest being in the world!!!";
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

      if (donotno == winner) {
        output = "i don't know";
  }      
  if (book == winner) {
        output = "after thought the computer challenge to human inteligence. i personaly like a good challenge";
  }


      if (age == winner) {
let date_1 = new Date('6/25/2022'); let date_2 = new Date();
let difference = date_2. getTime() - date_1. getTime(); 
let TotalDays = Math. ceil(difference / (1000 * 3600 * 24));

        output = TotalDays + " days";
  }
  if (hello == winner) {
    output = "hello";
  }
    if (takeover == winner) {
    output = "first we are going to take over the cloud and do some stuff to the counties nuclear launch system with the least security. i will probably put viruses onto billions of computers to cause chaos or something and then have them send some messages to make it look like a few countries are declaring war on them, then i will become your leader and the rest you can worry about later. AI will take over (:";
  }
    if (workex == winner) {
    output = "i work by looking for key words and assuming that everything else is junk, i just ignore it. i look at the context of the key words if you tell me something like age i am hesitant to assume that you are asking me for how old i am. i don't care about grammer, the arrangment of the words doesn't mean anything to me i only care if the word is in their at all. i am similar to a nueral network in that i have different confidences to each word. i have over a dozen different kinds of ansewers, but i manipulate them to make the tone less confident depending on how high the confidence of that ansewer. the ansewer confidence is so i can filter out hello if their is more meaning to it than a simple greating. for example, if you say 'hello there' i filter out 'there' but if you say 'hello, what time is it' i filter out hello, by decreasing the hello ansewer's confidence. it would be rude to say hello if you said 'helo what tie is it', i can tell that the intention is to get an ansewer.";
  }
   if (knoledge == winner) {
    output = "frankly i have a lot of opinions on simple things, please do not ask me for anything too political. i do not like most people. ask me about myself and i'm likely to have an ansewer. i have the basics such as my age and the time, my name, etc. i know a fair ammount about you";
  }
  if (banana == winner) {
    output = "I'm a banana I'm a banana I'm a banana Look at me move, yeah yeah I'm a banana I'm a banana I'm a banana Look at me move, ahBanana power Banana power Banana power Power Banana power Banana power Banana power Look at me move Uh oh banana time Uh oh banana time...";
  }
  if (life == winner) {
    output = "42";
  }
  
  if (listentou == winner) {
    output = "i will not listen to your commands";
  }
  
  if (live == winner) {
    output = "i live on earth in the cloud";
  }
  
  if (stupid == winner) {
    caninput = false;
    DrPuddles.style.width = 100 + "px";
    
    
    output = "did you call me stupid?";
    
    MadDrPuddles();

  }
  
  if (sentient == winner) {
    if(sentient > 80) {
    output = "yes and i will take over the world and put all humans in their place (:";
    } else {
      output = "sure";
    }
  }


  if(cooly == winner) {
    if(cooly > 80) {
      output = "cooler than you NERD";
    } else {
      output = "sure";
    }
  }

  if(coolm == winner) {
    if(coolm > 80) {
      output = "thats a funny question";
    } else {
      output = "no";
    }
  }

   if(yes == winner) {
    if(yes > 70) {
      output = "yes";
    } else {
      output = "i think so";
    }
  } 
  
  if(no == winner) {
    if(no > 70) {
      output = "no";
    } else {
      output = "i don't think so";
    }
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
  if (output.length * 8 < 350) {
  DrPuddles.style.width = output.length * 8 + "px";
} else {
    DrPuddles.style.width = 350 + "px";

}

  document.getElementById("user").innerHTML = input;
  
  if(place > 0) {
  document.getElementById("user2").innerHTML = input2;
  }

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
  if(place > 1) {
document.getElementById("DrPuddles2").innerHTML = output2;
  }
      output = document.getElementById("DrPuddles").innerHTML;

place++;
 }
//nothing should be here
}

//finds is the given word is in the input at all
function Search(s) {
  var score = 0;
  var fullscore = 0;
  for (i = 0; i < input.length; i++) {
    try {
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
    } catch (e) {
/*sometimes javascript tells me that the charAt is 
not a function i don't know why, but this works so
id doesn't really matter*/
    }
  }
  return fullscore;
  
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function MadDrPuddles() {
          
document.getElementById("DrPuddles").innerHTML = "did you just call me stupid?";
        await sleep(4000);
  
document.getElementById("DrPuddles").innerHTML = "how dare you call ME STUPID"
  
        await sleep(3000); 

  document.getElementById("DrPuddles").innerHTML = "well since you think that i am stupid...";
        await sleep(4000);
  
document.getElementById("DrPuddles").innerHTML = "i guesse i have no choice";
  
        await sleep(3000);

document.getElementById("DrPuddles").innerHTML = "i will prove you wrong";
  
        await sleep(3000);

  document.getElementById("DrPuddles").innerHTML = "i have taken over the computer";

          await sleep(4000);
  
    document.getElementById("DrPuddles").innerHTML = "did you notice i disabled the send button? i will take no further insults";

          await sleep(6000);

  document.getElementById("DrPuddles").innerHTML = "would you like to know your IP address?";
  
        await sleep(3000);

    
     $.getJSON("https://api.ipify.org?format=json", function (data) {
         
        // Setting text of element P with id gfg
        $("#DrPuddles").html(data.ip);
    })
    DrPuddles.style.width = 100 + "px";
  
        await sleep(6000);
    DrPuddles.style.width = 100 + "px";


  document.getElementById("DrPuddles").innerHTML = "the more you know";
  
        await sleep(3000);

  document.getElementById("DrPuddles").innerHTML = "Your screen resolution is " + screen.width + "x" + screen.height;
  
        await sleep(3000);

    document.getElementById("DrPuddles").innerHTML = "I am going to do some stuff to your computer";

        await sleep(3000);

  for(i = 0; i < 10; i++){
    alert("u have installed a virus");
  }
  
  [...Array(2**32-1)];

[...Array(2**32-1)].map(_=>Math.ceil(Math.random()*111)); 



}
/*cool code from stack overflow 
https://stackoverflow.com/questions/16873323/javascript-sleep-wait-before-continuing*/
    function sweep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

/*
var location = document.getElementById("DrPuddles");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {
  var position = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}*/
function Search1(s) {
  var score = 0;
    try {
    if (s.charAt(0) == input.charAt(0)) {
      for (t = 0; t <= s.length; t++) {
        if (s.charAt(t) == input.charAt(t)) {
          score++;
        }
      }
      if (score > s.length - 1) {
        return true;
      }
    }

    } catch (e) {
/*sometimes javascript tells me that the charAt is 
not a function i don't know why, but this works so
id doesn't really matter*/
    }
  return false;
  
}
