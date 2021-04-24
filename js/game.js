class Game{
    constructor(){
    }
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    start(){
        if(gameState===0)
        {
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
            console.log("gameState is 0. :)");
        }
    }
}
//this is just for fun.

// __         __
//   \_(@_@)_/