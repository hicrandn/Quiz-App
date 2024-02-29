function Question(text,choices,answer){
    this.text = text;
    this.choices =choices;
    this.answer = answer;

}

Question.prototype.checkAnswer = function(answer){
    return this.answer===answer;

}
//quız constructor
function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionsIndex= 0;

}
// quız prototype
Quiz.prototype.getQuestion= function(){
    return this.questions[this.questionsIndex];
}
// quız isFinish
Quiz.prototype.isFinish= function(){
    return this.questions.length === 
    this.questionIndex;

}
//quiz guess
Quiz.prototype.guess = function(answer)
{
   var question = this.getQuestion();

    if (question.checkAnswer(answer)){
        this.score++;

    }
    this.questionsIndex++;
}

var q1 = new Question("what's the best programming language ? ", ["C#","javascript","python","asp.net"],"javascript");

var q2 = new Question("what's the most populer programming language ? ", ["C#","javascript","python","nodejs"],"javascript");

var q3 = new Question("what's the best modern programming language ? ", ["C#","javascript","visualbasic","python"],"javascript");

var questions = [q1,q2,q3];

//start quız

var quiz= new Quiz(questions);

loadQuestion();


function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }else{
        
    var question = quiz.getQuestion();
    var choices = question.choices;


    document.querySelector('#question')
    .textContent = question.text;


    for(var i=0; i<choices.length; i++){
        var element = document.querySelector('#choice'+i);
        element.innerHTML = choices[i];
        guess('btn'+i, choices[i]);


      }
    }


} 


function guess(id,guess){
    var btn = document.getElementById(id);
    btn.onclick= function(){
        quiz.guess(guess);
        loadQuestion()
    }

}


function showScore(){
    var html = `<h2>Score</h2><h4>${quiz.score}
    </h4>`;

    document.querySelector('.card-body').innerHTML 
    =html;


}
