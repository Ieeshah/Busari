
        
                  // greet      


                  let rake = new Date().getHours();
                            if (rake > 0 && rake < 11) {
                                alert('Good Morning')
                            }
                            else if (rake > 11 && rake < 17) {
                                alert("Good Afternoon")
                            }
                            else {
                                alert("Good Evening")
                            };
                        
        // Digital Time
        function busari() {
        let d = new Date();
        let ho = d.getHours();
        let mi = d.getMinutes();
        let sec = d.getSeconds();
        let da = d.getDate();
        if (ho < 10) {
          ho = `0` + ho;
        }
        if (mi < 10) {
          mi = `0` + mi;
        }
        if (sec < 10) {
          sec = `0` + sec;
        }
        document.querySelector(`#tunde`).innerHTML = `${ho} : ${mi} : ${sec}`;
      }
      let jean = setInterval(busari, 1000);

    //get day
    function dayy() {
                            let aDay = new Date().getDay();
                            let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

                            if (aDay == 0) {
                                alert(`Today is ${days[aDay]} Go to Church`);
                            }
                            else if (aDay == 6) {
                                alert(`Today is ${days[aDay]} Time to party`);
                            }
                            else if (aDay == 5) {
                                alert(`Today is ${days[aDay]} Go to Mosque`);
                            }
                            else {
                                alert(`Today is ${days[aDay]} Go to work`);
                            }
                        }

                        // greet us
                        function greet() {
    
    
    let a = new Date().getHours();
    if (a > 0 && a < 11) {
        alert('Good Morning')
    }
    else if (a > 11 && a < 17) {
        alert("Good Afternoon")
    }
    else {
        alert("Good Evening")
    };
}

 // Prime Number
 function myPrime() {
                            let a = prompt('enter any prime number')
                            if (a < 1 || isNaN(a) || !a) {
                                console.log('Invalid Input');

                            }
                            else if (a == 2) {
                                alert(`${a} is a prime number`);
                            }
                            else {
                                for (n = 2; n < a; n++) {
                                    if (a % n == 0) {
                                        alert(`${a} is not a prime number`)
                                        break;
                                    }
                                }
                                if (n == a) {
                                    alert(`${a} is a prime number`);
                                }

                            }
                        }
    //   Uber Ride

    let from = document.getElementById('fro');
    let dest = document.getElementById('to');
    let hou = document.getElementById('how');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let start = document.getElementById('start');
    let quit = document.getElementById('stop');
    let pause = document.getElementById('pause');
    let go = document.getElementById('froto');
    let duration = document.getElementById('dura');
    let total = document.getElementById('Tota');
    let tax = document.getElementById('taxe');
    let amount = document.getElementById('amt');
    let counter = document.getElementById('counterr');
    let receipts = document.getElementById('receipt');
    let span1 = document.getElementById('greek');
    let timeUsed = document.getElementById('tym');


    


    let efg = 0;
    let g;

    function engine() {
        ++efg;
        let hh = parseInt((efg/ 60)/ 60);
        let mm = parseInt(efg / 60);
        let ss = efg % 60;


        hh = (hh < 10) ? '0' + hh : hh;
        mm = (mm < 10) ? '0' + mm : mm;
        ss = (ss < 10) ? '0' + ss : ss;

        hou.innerHTML = hh;
        min.innerHTML = mm;
        sec.innerHTML = ss;
    };
    function count() {
        g = setInterval(engine, 1000);
    }
   
   
    function startengine() {
        count();
     
        start.style.display = 'none';
        quit.style.display='none';
        pause.style.display = 'inline';
        counter.style.display = 'inline';
        document.getElementById('place').style.display='none';
        
        
    }
    function pauseengine (){
        clearInterval(g);
        start.style.display = 'none';
        pause.style.display='none';
        quit.style.display = 'inline';
        document.getElementById('note').style.display='inline';
        efg = 0;
    }
    quitengine = function () {
        clearInterval(g);
        start.style.display = 'inline';
        quit.style.display = 'none';
        document.getElementById('drip').style.display='none';
        document.getElementById('note').style.display='none';
        efg = 0;
        //   document.getElementById('min').innerHTML='00';
        //   document.getElementById('sec').innerHTML='00';
        receipts.style.display = 'inline';
        let date= new Date().toLocaleDateString();
        let blue = (50 * min.innerHTML) + Math.floor((sec.innerHTML / 60) * 50);
        timeUsed.innerHTML= (min.innerHTML) + ':' + (sec.innerHTML);
        duration.innerHTML = blue;
        total.innerHTML = 800 + blue;
        amount.innerHTML = (800+blue)* 1.01;
        console.log(amount)
        tax.innerHTML= date;
        froto.innerHTML=`From ${from.value} to ${dest.value}.`



    }
    start.addEventListener('click', startengine);
    quit.addEventListener('click', quitengine);
    pause.addEventListener('click', pauseengine);



