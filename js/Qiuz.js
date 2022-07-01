
class Qiuz {
constructor(){

}
getState( ){
    var stateRef = database.ref('GameState')
    stateRef.on('value',function(data){
        gameState = data.val()
    })
}
update(state){
    database.ref('GameState').update({
        gameState:state
    })
}
async start( ){
    if(gameState===0){
        contestant = new Contestant();
        contestantCountRef = await database.ref('contestantCount').once('value')
        if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val()
            contestant.getCount()
        }
        question = new Question()
        question.display()
    }
}
}
