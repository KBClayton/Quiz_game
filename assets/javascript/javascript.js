$(document).ready(function() {
//quiz content variables
    var q1text=["Who invented Amplitude Modulation?", "assets/images/q1.jpg", "assets/images/q1-2.jpg"];
    var q1a1=["Reginald Fessenden", "https://en.wikipedia.org/wiki/Reginald_Fessenden"];
    var q1a2=["Harold J. Power"];
    var q1a3=["Edwin Armstrong"];
    var q1a4=["Julio Cervera Baviera"];
    var q1=[q1text, q1a1, q1a2, q1a3, q1a4];


    var q2text=["When did Roberto Landell de Moura make a publice radio transmission of voice?",  "assets/images/q2.png", "assets/images/q2-2.jpg"];
    var q2a1=["1900", "https://en.wikipedia.org/wiki/Roberto_Landell_de_Moura"];
    var q2a2=["1901"];
    var q2a3=["1902"];
    var q2a4=["1903"];
    var q2=[q2text, q2a1, q2a2, q2a3, q2a4];

    var q3text=["Where was the first radio news broadcast?",  "assets/images/q3.jpg", "assets/images/q3-2.jpg"];
    var q3a1=["Detroit", "https://en.wikipedia.org/wiki/History_of_radio#20th_century"];
    var q3a2=["New York"];
    var q3a3=["Washington D.C."];
    var q3a4=["Boston"];
    var q3=[q3text, q3a1, q3a2, q3a3, q3a4];

    var q4text=["Who invented Frequency Modulation for transmissions?",  "assets/images/q4.jpg", "assets/images/q4-2.jpg"];
    var q4a1=["Edwin Armstrong", "https://en.wikipedia.org/wiki/Edwin_Howard_Armstrong"];
    var q4a2=["Frank Conrad"];
    var q4a3=["Charles David Herrold"];
    var q4a4=["Nikola Tesla"];
    var q4=[q4text, q4a1, q4a2, q4a3, q4a4];

    var q5text=["Who experimentally proved electromagnetic waves could be transmitted through air?",  "assets/images/q5.jpg", "assets/images/q5-2.jpg"];
    var q5a1=["Heinrich Hertz", "https://en.wikipedia.org/wiki/Heinrich_Hertz"];
    var q5a2=["David Hughes"];
    var q5a3=["Elihu Thomson"];
    var q5a4=["John Perry"];
    var q5=[q5text, q5a1, q5a2, q5a3, q5a4];

    var q6text=["What part of the atmosphere do High Frequency transmissions refract off of?",  "assets/images/q6.jpg", "assets/images/q6-2.jpg"];
    var q6a1=["Ionosphere", "https://en.wikipedia.org/wiki/Skywave"];
    var q6a2=["Troposphere"];
    var q6a3=["Stratosphere"];
    var q6a4=["Exosphere"];
    var q6=[q6text, q6a1, q6a2, q6a3, q6a4];

    var q7text=["What frequency band is used in tropospheric scatter systems?",  "assets/images/q7.jpg", "assets/images/q7-2.jpg"];
    var q7a1=["Ultra high frequency", "https://en.wikipedia.org/wiki/Tropospheric_scatter"];
    var q7a2=["Low frequency"];
    var q7a3=["High frequency"];
    var q7a4=["Medium frequncy"];
    var q7=[q7text, q7a1, q7a2, q7a3, q7a4];

    var q8text=["Who proposed the electromagnetic theory of light?",  "assets/images/q8.jpg", "assets/images/q8-2.jpg"];
    var q8a1=["James Maxwell", "https://en.wikipedia.org/wiki/James_Clerk_Maxwell"];
    var q8a2=["Heinrich Hertz"];
    var q8a3=["Oliver Heaviside"];
    var q8a4=["Edmond Becquerel"];
    var q8=[q8text, q8a1, q8a2, q8a3, q8a4];

    var q9text=["What were the primary transmitter types used after they became invented in the 1920s?",  "assets/images/q9.jpg", "assets/images/q9-2.jpg"];
    var q9a1=["Vacuum tubes", "https://en.wikipedia.org/wiki/History_of_radio#The_first_vacuum_tubes"];
    var q9a2=["Spark-gap"];
    var q9a3=["Alexanderson alternator"];
    var q9a4=["Arc converter"];
    var q9=[q9text, q9a1, q9a2, q9a3, q9a4];

    var q10text=["When did Bell's Mobile Telephone Service start?",  "assets/images/q10.jpg", "assets/images/q10-2.jpg"];
    var q10a1=["1946", "https://en.wikipedia.org/wiki/Mobile_Telephone_Service"];
    var q10a2=["1945"];
    var q10a3=["1944"];
    var q10a4=["1943"];
    var q10=[q10text, q10a1, q10a2, q10a3, q10a4];

    var quiz=[q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];


//end quiz content variables
//other variables
    var chosenq=[];
    var chosena=[];
    var currentq=0;
    var totaltime=0;
    var questtime=30;
    var intervalId;
    var aright=0;
    var awrong=0;
    var aempty=0;
    var currentcorrect=-2;

    //game object
    var game = {

        //resets all variables
        reset: function(){
             chosenq=[];
             chosena=[];
             currentq=0;
             totaltime=0;
             questtime=30;
             aright=0;
             awrong=0;
             aempty=0;
             currentcorrect=-2;

             $("#Quest").text("");
             $("#Ans1").text("");
             $("#Ans2").text("");
             $("#Ans3").text("");
             $("#Ans4").text("");
             $("#pics").html("");
        },

        //displays the questions and answers
        qdisplay: function(){
            $("#Quest").text(quiz[chosenq[currentq]][0][0]);
            $("#Ans1").text(quiz[chosenq[currentq]][chosena[0]][0]);
            $("#Ans2").text(quiz[chosenq[currentq]][chosena[1]][0]);
            $("#Ans3").text(quiz[chosenq[currentq]][chosena[2]][0]);
            $("#Ans4").text(quiz[chosenq[currentq]][chosena[3]][0]);
        },

        //populates the array that determines the order of questions
        qchoice: function(){
            var randq=0;
            while ((quiz.length>chosenq.length))
            {
                randq= Math.floor(Math.random()*(quiz.length));
                if (chosenq.indexOf(randq)==-1){
                    chosenq.push(randq);
                    continue;
                }
                else{
                    continue;
                }
            }
        },
        //populates the array that determines the order possible answers are dislplayed in
        achoice: function(){

            chosena=[];
            var randa=0;
            while ((quiz[chosenq[currentq]].length-1)>chosena.length)
            {
                randa=Math.floor(Math.random()*((quiz[chosenq[currentq]].length-1))+1);
                if (chosena.indexOf(randa)==-1){
                    chosena.push(randa);
                    continue;
                }
                else{
                    continue;
                }
            }
            currentcorrect=chosena.indexOf(1);
        },

        //displays most information on the splash screen
        sdisplay: function(){
            $("#right").text("Right: "+ aright);
            $("#wrong").text("Wrong: "+ awrong);
            $("#unans").text("Unanswered: "+ aempty);
            $("#timetotal").text("Total time: "+ totaltime +"seconds");
        },

        //determines right, wrong, or timeout and displays some info on splash screen
        rightwrong: function(x){
            clearInterval(intervalId);
            totaltime+=(30-questtime);
            document.getElementById("splash").style.display = 'inline';
            document.getElementById("quizbox").style.display = 'none';
            console.log(quiz[chosenq[currentq]][0][1]);
            if(x==currentcorrect)
            {
                $("#lastq").text("Correct");
                $("#pics").html("<img src='"+quiz[chosenq[currentq]][0][1]+"' width='400px'>");
                aright++;
                this.sdisplay();
            }
            else if (x==4){
                $("#lastq").html("Time is out, the correct answer is <a href='"+quiz[chosenq[currentq]][1][1]+"'>"+quiz[chosenq[currentq]][1][0]+"</a>");
                $("#pics").html("<img src='"+quiz[chosenq[currentq]][0][2]+"' width='400px'>");
                aempty++;
                this.sdisplay();

            }
            else{
                $("#lastq").html("Wrong, the correct answer is <a href='"+quiz[chosenq[currentq]][1][1]+"'>"+quiz[chosenq[currentq]][1][0]+"</a>"); 
                $("#pics").html("<img src='"+quiz[chosenq[currentq]][0][2]+"' width='400px'>");
                awrong++;
                this.sdisplay();

            }
            currentcorrect=-2;
            setTimeout(game.nextquest, 5000);
        },

        //determines if it's at the end of quiz, and displays next question if not
        nextquest: function(){
            questtime=30;

            if(currentq==(quiz.length-1)){
                game.final();
            }
            else{
                document.getElementById("splash").style.display = 'none';
                document.getElementById("quizbox").style.display = 'inline';
                currentq++;
                game.achoice();
                game.qdisplay();
                game.timer();
                $('#splashscreen').fadeOut(100);
            }
        },

        //redisplays start button and prepares for another run
        final: function(){
            document.getElementById("splash").style.display = 'inline';
            document.getElementById("quizbox").style.display = 'none';
            document.getElementById("startbtn").style.display = 'inline';
            game.reset();
        },


        //timer funtions to count down during questions
        timer: function(){
            $("#time").text("30"); 
            intervalId=setInterval(game.count,1000)
        },
        count: function() {
            questtime--;
            $("#time").text(questtime); 
            if (questtime==0){
                game.rightwrong(4);
            }
        }
    }


    //game method calls and click handlers
    $("#Ans1").on("click", function() {
        game.rightwrong(0);

    });
    $("#Ans2").on("click", function() {
        game.rightwrong(1);
    });
    $("#Ans3").on("click", function() {
        game.rightwrong(2);

    });
    $("#Ans4").on("click", function() {
        game.rightwrong(3);
    });

    $('#startbtn').click(function () {
        document.getElementById("splash").style.display = 'none';
        document.getElementById("startbtn").style.display = 'none';
        document.getElementById("quizbox").style.display = 'inline';
        game.qchoice();
        game.achoice();
        game.qdisplay();
        game.timer();
    });

});
