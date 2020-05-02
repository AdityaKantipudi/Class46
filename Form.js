class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Play");
        

    }
    hide() {
        this.input.hide
        this.button.hide

    }
    display() {
        this.input.position(displayWidth/2,displayHeight/2);
        this.button.position(displayWidth/2 + 100,displayHeight/2+100);
        var col= color("Green");
        this.button.style('background-color', col);
        fill(0,255,0);
        textSize(100);
        text("Space Invaders",displayWidth/2.5-200,300);
        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
            var name = this.input.value();
            text("Welcome"+name,displayWidth/2,600);
            gameState = 1;
        })
        
    }

}