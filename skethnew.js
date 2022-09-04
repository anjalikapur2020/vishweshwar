var bg1
var gameState = "wait"



function preload() {

    dd_running = loadAnimation("wlk1.png", "wlk2.png", "ideal.png")
    d_running = loadAnimation("dinowalk-1.png", "dinowalk-2.png", "dinowalk-3.png", "dinowalk-4.png", "dinowalk-5.png", "dinowalk-6.png", "dinowalk-7.png", "dinowalk-8.png", "dinowalk-9.png", "dinowalk-10.png", "dinowalk-11.png")
    goldimg = loadAnimation("c1.png", "c2.png", "c3.png", "c4.png", "c5.png", "c6.png", "c7.png", "c8.png", "c9.png", "c10.png")

    groundImage = loadImage("runnerbg.png");
    waitimg = loadImage("splash.gif");
    htpimg = loadImage("htpbackground.png");
    atgimg = loadImage("atgbackground.png");
    ideal = loadAnimation("ideal.png");
    bubbleimg = loadImage("bubble.png");
    b1img = loadImage("b-0.png");
    b2img = loadImage("b-1.png");
    b3img = loadImage("b-2.png");
    b4img = loadImage("b-3.png");
    b5img = loadImage("b-4.png");
    b6img = loadImage("b-5.png");
    b7img = loadImage("b-6.png");
    b8img = loadImage("b-7.png");
    b9img = loadImage("b-8.png");
    b10img = loadImage("b-9.png");
    b11img = loadImage("b-10.png");
    gc1img = loadImage("gc-0.png");
    gc2img = loadImage("gc-1.png");
    gc3img = loadImage("gc-2.png");
    gc4img = loadImage("gc-3.png");
    gc5img = loadImage("gc-4.png");
    gameoverbg = loadImage("gameover.jpg");
    wallimg = loadImage("wall.png");
    ddr2img = loadImage("ddrjumping.png");
    spineimg = loadImage("spine.png");
    clue2img = loadImage("clue2.png");
    puzzleimg = loadImage("puzzle.png");
    opt1img = loadImage("opt1.png");
    opt2img = loadImage("opt2.png");
    opt3img = loadImage("opt3.png");
    l1img = loadImage("heart1.png");
    l2img = loadImage("heart2.png");
    quizBackground = loadImage("quizbackground.gif");
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    dinoGroup = new Group()
    clueobjGroup = new Group()


    play = createImg("Play.png")
    play.position(width / 2 + width / 4, height - 100)
    play.size(150, 70)

    how = createImg("how.png")
    how.position(width / 2 + width / 4 - 200, height - 100)
    how.size(150, 70)


    about = createImg("about.png")
    about.position(width / 2 + width / 4 + 200, height - 100)
    about.size(150, 70)


    back = createImg("backArrow.png")
    back.position(10, 10)
    back.size(100, 70)
    back.hide()

    pl1 = createVideo("pl1.mp4");
    pl1.position(-50, -100);
    pl1.size(windowWidth + 70, windowHeight + 200);
    pl1.hide()

    pl2 = createVideo("pl2.mp4");
    pl2.position(-50, -100);
    pl2.size(windowWidth + 70, windowHeight + 200);
    pl2.hide()


    pl3 = createVideo("pl4.mp4");
    pl3.position(-50, -100);
    pl3.size(windowWidth + 70, windowHeight + 200);
    pl3.hide()

    photoframe = createImg("plimg-1.png");
    photoframe.position(windowWidth / 2 + 200, height - 200);
    photoframe.size(125, 125);
    //photoframe.class("plimg1");
    photoframe.hide()


    pl3 = createVideo("pl3.mp4");
    pl3.position(-50, -100);
    pl3.size(windowWidth + 70, windowHeight + 200);
    pl3.hide()


    clueimg1 = createImg("clue1.png");
    clueimg1.position(windowWidth / 2 + 200, height / 4);
    clueimg1.size(400, 400);
    //clueimg1.class("plimg1");
    clueimg1.hide()


    nextButton = createImg("nextbutton.png");
    nextButton.position(width / 2 - 100, height - 100);
    nextButton.size(200, 80);
    nextButton.hide()


    bgsprite = createSprite(width / 2, height / 2, width, 20);
    bgsprite.addImage(groundImage);
    bgsprite.visible = false;
    bgsprite.scale = 0.5;


    invisibleGround = createSprite(width / 2, height - 80, width, 50);
    invisibleGround.visible = false;


    player1 = createSprite(windowWidth / 2 - 700, windowHeight - 100, 20, 20);
    player1.addAnimation("running", dd_running);
    player1.scale = .7
    player1.class = "plimg1";
    player1.visible = false


}


function draw() {


    if (gameState === "wait") {

        background(waitimg)
        play.show()
        how.show()
        about.show()
        back.hide()
    }


    play.mousePressed(() => {
        gameState = "level1-a"

    })

    back.mousePressed(() => {
        gameState = "wait"
    })

    if (gameState === "level1-a") {

        back.show()
        play.hide()
        how.hide()
        about.hide()
        pl1.show()
        pl1.play()

        // pl3.show()
        photoframe.show()

        photoframe.mousePressed(() => {
            gameState = "level1-b"
        })


    }

    if (gameState === "level1-b") {
        pl2.play()
        pl2.show()
        pl1.stop()
        pl1.hide()
        photoframe.hide()
        clueimg1.show()
        clueimg1.mousePressed(() => {
            gameState = "level1-c"
        })

    }

    if (gameState === "level1-c") {

        pl2.stop()
        pl2.hide()
        pl1.stop()
        pl1.hide()
        photoframe.hide()
        clueimg1.hide()
        pl3.play()
        pl3.show()
        nextButton.show()

        nextButton.mousePressed(() => {
            gameState = "level1-play"
            bgsprite.visible = true
            bgsprite.velocityX = -4
            // invisibleGround.visible=true
            player1.visible = true
            player1.collide(invisibleGround)


        })

    }


    if (gameState === "level1-play") {
        background("green")
        spawnObstacles()
        spawnCoins()
        pl2.stop()
        pl2.hide()
        pl1.stop()
        pl1.hide()
        photoframe.hide()
        clueimg1.hide()
        pl3.hide()
        pl3.stop()
        nextButton.hide()
        //dr.collide(invisibleGround);

        if (bgsprite.x <= width / 4) {
            bgsprite.x = width / 2
        }


    }


    drawSprites()

}


function spawnObstacles() {

    invisibleGround = createSprite(width / 2, height - 80, width, 50);
    invisibleGround.visible = false;
    if (frameCount % 320 == 0) {
        dr = createSprite(width, height - 200);
        //dr.class = "plimg1";
        dr.scale = 0.20;
        dr.velocityX = -2;
        dr.collide(invisibleGround);
        dr.addAnimation("running", d_running)
        dinoGroup.add(dr)
        // dr.debug=true
    }
}

function spawnCoins() {


    if (frameCount % 300 == 0) {

        randy = Math.round(random(50, (height / 2)))
        clueobject = createSprite(width, randy, 20, 20);
        clueobject.size = 0.2;

        clueobject.velocityX = -2;
        clueobject.addAnimation("goldcoin",goldimg)
        clueobjGroup.add(clueobject)


    }

}
