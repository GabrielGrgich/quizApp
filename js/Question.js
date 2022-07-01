
class Question{
    constructor(){
        this.Title = createElement('h1')
        this.input1 = createInput("Enter Name Here: ");
        this.input2 = createInput("input option number: ");
        this.button = createButton('submit button');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
    }
    hide(){
        this.Title.hide()
        this.input1.hide()
        this.input2.hide()
        this.button.hide()
    }
    display(){
        this.Title.html('My First Game')
        this.Title.position(350,0)

        this.question.html('question: what starts and ends with the letter E but only has one letter')
        this.question.position(150,380)
        this.option1.html('1: everyone')
        this.option1.position(150,100)
        this.option2.html('2: envelope')
        this.option2.position(150,120)
        this.option3.html('3: Estimate')
        this.option3.position(150,140)
        this.option4.html('4: example')
        this.option4.position(150,160)
        this.input1.position(150,230)
        this.input2.position(350,230)

        this.button.position(300,300)
        this.button.mousePressed(()=>{
            this.input1.hide()
            this.input2.hide()
            this.button.hide()
            this.Title.hide()
            contestant.name = this.input1.value()
            contestant.answer = this.input2.value()
            contestantCount+=1
            contestsnt.index = contestantCount
            contestant.update()
            contestant.updateCount(contestantCount)
        })
    }
}
