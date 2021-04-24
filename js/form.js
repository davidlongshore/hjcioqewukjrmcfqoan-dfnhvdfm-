class Form{
    constructor(){
    }
    display(){
        var title=createElement("h1");
        title.html("knock off version of rocket league.");
        title.position(40, 0);
        var input=createInput("name here please");
        input.position(130, 160);
        var button=createButton("click me after name please");
        button.position(200,200);
        var greeting=createElement("h3");
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("hello "+name);
            greeting.position(130, 160);
            console.log("hello "+name);
        })
    }
}