class Form{
    constructor()
    {}
    display()
    {
        var title = createElement('h1');
        title.html("car Racing game");
        title.position(130,0);
        var input=createInput("name");
        input.position(130,160);
        var button = createButton("Play");
        button.position (130,190)
        var greeting=createElement('h2');
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name =input.value();
            playercount+=1;
            player.update(name);
            player.updateCount(playercount);
            greeting.html("Hello"+name);
            greeting.position(130,160);
        })
    }
}