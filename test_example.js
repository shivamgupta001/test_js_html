
      var i = 0 , count = 0;
      var myTest = 
           
          [
              {
                  question_text: "Question 1",
                  answers: [ 
                    { "answer_text": "q1ans 1"}, 
                    { "answer_text": "q1ans 2"}, 
                    {"answer_text": "q1ans 3" },
                    {"answer_text": "q1ans 4",}
                  ] ,
                  correct : "a"
              },
              {
                  question_text: "Question 2",
                  answers: [    
                    {"answer_text": "q2ans 1"},
                    {"answer_text": "q2ans 2"},
                    {"answer_text": "q2ans 3"},
                    {"answer_text": "q2ans 4"}
                  ],
                  correct : "b"
              },
              {
                  question_text: "Question 3",
                  answers: [  
                    {"answer_text": "q3ans 1"},
                    {"answer_text": "q3ans 2"},
                    {"answer_text": "q3ans 3"},
                    {"answer_text": "q3ans 4"}
                  ],
                  correct : "c"
              },
              {
                  question_text: "Question 4",
                  answers: [  
                    {"answer_text": "q4ans 1"},
                    {"answer_text": "q4ans 2"},
                    {"answer_text": "q4ans 3"},
                    {"answer_text": "q4ans 4"}
                  ],
                  correct : "d"
              }
          ];

      function question_answer(question_no)
      {
         document.getElementById("question").innerHTML=myTest[question_no].question_text;
         document.getElementById("opt1").innerHTML=myTest[question_no].answers[0].answer_text;
         document.getElementById("opt2").innerHTML=myTest[question_no].answers[1].answer_text;
         document.getElementById("opt3").innerHTML=myTest[question_no].answers[2].answer_text;
         document.getElementById("opt4").innerHTML=myTest[question_no].answers[3].answer_text;
      }

      $(document).ready(function(){

              $("#form").hide();
              $("#next").hide();
              $("#answer_status").hide();

              $("#start_test").click(function(){

                  $("#start_test").hide();
                  $("#form").show();
                  question_answer(i);                     

              });

              $("#next").click(function(){

                  $("#start_test").hide();
                  $("#form").show();
                  $("#submit_button").show();
                  $("#next").hide();
                  $("#answer_status").hide();
                    i++;
                    question_answer(i);

              });

              $("#submit_button").bind("click",function(){

                  $("#submit_button").hide();
                  $("#next").show();
                  $("#form").show();
                  $("#answer_status").show();
                  
                  user_option1=document.getElementById("op1").checked;
                  user_option2=document.getElementById("op2").checked;
                  user_option3=document.getElementById("op3").checked;
                  user_option4=document.getElementById("op4").checked;

                  if(user_option1==true)
                     user_option="a";
                  else if(user_option2==true)
                          user_option="b";
                        else if(user_option3==true)
                                user_option="c";       
                             else if(user_option4==true)
                                     user_option="d";
                  
                  if(user_option==myTest[i].correct)
                      {   document.getElementById("answer_status").innerHTML="Correct Answer";
                           count++;
                      }
                  else 
                      document.getElementById("answer_status").innerHTML="Wrong Answer . Correct Answer is "+myTest[i].correct;                 
                  if(i==3)
                     {  document.getElementById("next").innerHTML="Finish";
                        document.getElementById("score").innerHTML="Your Score is "+count;
                     }
               });
                     
      });
