var play;
var how;
var about;
//var body = document.querySelector(".body");

var htp, ply, backButton, atg, lvl1, htpimg, atgimg , randy2;
var backButton, nextButton , clueobjGroup1;
var spine , spineGroup , spineimg , randy1 , invisibleGround ,invisibleGround1 ,invisibleGround2 ,invisibleGround3 ,invisibleGround4 , igGroup;
var pl1, plimg1, pl2, clueimg1, pl3, ground, groundImage , pl4 , portal  , pl5 , solvebt;
var ddr;
var dd_running ,quizBackground , dr ,l1 ,l2, l1img , l2img , d_running , ideal ,wallimg ,wall , clueobject1 , opt1 , opt2 ,copt ,opt1img , opt2img ,opt3img;
var elem = document.documentElement;
var score = 10  ,cscore = 0 ,  bubbleGroup , bubble , bubbleimg , dinoGroup ,clueobjGroup , clueobject , pl2bg;

var ddr , b1 ,b2 , b3, b4 ,b5 ,b6 ,b7,b8 ,b9 ,b10 , b11 , gc1 ,gc2 , gc3 , gc4 , gc5;
var b1img ,b2img ,life = 2 , ddr2 , puzzle , puzzleimg,clue2img, ddr2img, b3img, b4img ,b5img ,b6img ,b7img,b8img ,b9img ,b10img , b11img , gameoverbg , restart ,gc1img , gc2img , gc3img ,gc4img ,gc5img;
 var gameState= "wait" ;

 //ddr = donald duck running , dd = dinosuar running

function preload() {
  dd_running = loadAnimation("wlk1.png" , "wlk2.png" , "ideal.png")
   d_running = loadAnimation("dinowalk-1.png" , "dinowalk-2.png" , "dinowalk-3.png","dinowalk-4.png" , "dinowalk-5.png" , "dinowalk-6.png","dinowalk-7.png" , "dinowalk-8.png" , "dinowalk-9.png","dinowalk-10.png" , "dinowalk-11.png")
  gcimg = loadImage("goldcoin.png")
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
  ddr2img= loadImage("ddrjumping.png");
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
  createCanvas(windowWidth, windowHeight); 

  bubbleGroup=new Group();
  dinoGroup=new Group();
  clueobjGroup=new Group();
    clueobjGroup1=new Group();
  spineGroup=new Group();
  igGroup=new Group();


    wall = createSprite(windowWidth /2 , height / 2 ,600, windowHeight +800);
  wall.addImage(wallimg);
  wall.visible = false;
  wall.velocityY=-7;
  wall.scale = 1.4
  wall.class = "bgimg";
  // ddr = createImg("running.gif");
  // ddr.position(1150, 235);
  // ddr.size(850, 650);
  // ddr.class("plimg1");

  // ground = createImg("runnerbg.png");
  // ground.velocityX = -(6 + 3*10/100);

  plimg1 = createImg("plimg-1.png");
  plimg1.position(windowWidth / 2 + 200, windowHeight - 45);
  plimg1.size(125, 125);
  plimg1.class("plimg1");

  clueimg1 = createImg("clue1.png");
  clueimg1.position(windowWidth / 2 + 200, windowHeight - 800);
  clueimg1.size(425, 500);
  clueimg1.class("plimg1");


  portal = createImg("portal.png");
  portal.position(1220, 650);
  portal.size(200, 200);
  portal.class("plimg1");
  portal.hide();


  pl2 = createVideo("pl2.mp4");
  pl2.position(-50, -100);
  pl2.size(windowWidth + 70, windowHeight +200);

  pl3 = createVideo("pl3.mp4");
  pl3.position(-50, -100);
  pl3.size(windowWidth + 70, windowHeight +200);

  pl1 = createVideo("pl1.mp4");
  pl1.position(-50, -100);
  pl1.size(windowWidth + 70, windowHeight +200);

    pl5 = createVideo("pl5.mp4");
  pl5.position(-50, -100);
  pl5.size(windowWidth + 70, windowHeight +200);
  pl5.hide();

  play = createImg("Play.png");
  play.position(windowWidth / 2 + 200, windowHeight - 150);
  play.size(250, 100);

  backButton = createImg("backArrow.png");
  backButton.position(windowWidth - 1900,windowHeight -  950);
  backButton.size(90, 80);

  nextButton = createImg("nextbutton.png");
  nextButton.position(windowWidth / 2 - 100, windowHeight - 50);
  nextButton.size(250, 100);

  how = createImg("how.png");
  how.position(windowWidth / 2 - 100, windowHeight - 150);
  how.size(250, 100);

  solvebt = createImg("sbt.png");
  solvebt.position(windowWidth / 2 , windowHeight/2 - -200);
  solvebt.size(300, 150);
  solvebt.hide();

  about = createImg("about.png");
  about.position(windowWidth / 2 + windowWidth / 3.8, windowHeight - 150);
  about.size(250, 100);

  //ground
  bgsprite = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, height);
  bgsprite.addImage(groundImage);
  bgsprite.visible = false;
  bgsprite.scale = 0.7;

    invisibleGround = createSprite( windowWidth - 10 ,windowHeight -   80, windowWidth +2000  , 100);
  invisibleGround.visible = false;

      invisibleGround1 = createSprite( windowWidth - 10 ,windowHeight -   -10, windowWidth +2000  , 100);
  invisibleGround1.visible = false;
    igGroup.add(invisibleGround1);

      invisibleGround2 = createSprite( windowWidth - 0 ,windowHeight -   500, 10  ,  windowHeight);
  invisibleGround2.visible = false;
      igGroup.add(invisibleGround2);

      invisibleGround3 = createSprite( windowWidth - 1918 ,windowHeight -   500, 10  ,  windowHeight);
  invisibleGround3.visible = false;
      igGroup.add(invisibleGround3);

      invisibleGround4 = createSprite(  windowWidth - 10 ,windowHeight -   1000, windowWidth +2000  , 100);
  invisibleGround4.visible = false;
      igGroup.add(invisibleGround4);

    b1 = createSprite(windowWidth/2 + 800 ,windowHeight - 900 , 30 , 30);
  b1.addImage(b1img);
    b1.visible = false;
  b1.class = "plimg1";

    b2 = createSprite(windowWidth/2 + 800 ,windowHeight - 900 , 30 , 30);
  b2.addImage(b2img);
    b2.visible = false;

    b3 = createSprite(windowWidth/2 + 800 ,windowHeight - 900 , 30 , 30);
  b3.addImage(b3img);
    b3.visible = false;

    b4 = createSprite(windowWidth/2 + 800 ,windowHeight - 900 , 30 , 30);
  b4.addImage(b4img);
    b4.visible = false;

    b5 = createSprite(windowWidth/2 + 800 ,windowHeight - 900 , 30 , 30);
  b5.addImage(b5img);
    b5.visible = false;

    b6 = createSprite(windowWidth/2 + 800 ,windowHeight - 900 , 30 , 30);
  b6.addImage(b6img);
    b6.visible = false;

    b7 = createSprite(windowWidth/2 + 800 ,windowHeight - 900 , 30 , 30);
  b7.addImage(b7img);
    b7.visible = false;

    b8 = createSprite(windowWidth/2 + 800 ,windowHeight - 900 , 30 , 30);
  b8.addImage(b8img);
    b8.visible = false;

    b9 = createSprite(windowWidth/2 + 800 ,windowHeight - 900 , 30 , 30);
  b9.addImage(b9img);
    b9.visible = false;

    b10 = createSprite(windowWidth/2 + 800 ,windowHeight - 900 , 30 , 30);
  b10.addImage(b10img);
    b10.visible = false;

        b11 = createSprite(windowWidth/2 + 800 ,windowHeight - 900 , 30 , 30);
  b11.addImage(b11img);
    b11.visible = false;

  gc1 = createSprite(windowWidth/2 + 600 ,windowHeight - 900 , 30 , 30);
  gc1.addImage(gc1img);
  gc1.visible = false;

  gc2 = createSprite(windowWidth/2 + 600 ,windowHeight - 900 , 30 , 30);
  gc2.addImage(gc2img);
    gc2.visible = false;

  gc3 = createSprite(windowWidth/2 + 600 ,windowHeight - 900 , 30 , 30);
  gc3.addImage(gc3img);
    gc3.visible = false;

      gc4 = createSprite(windowWidth/2 + 600 ,windowHeight - 900 , 30 , 30);
  gc4.addImage(gc4img);
    gc4.visible = false;

  gc5 = createSprite(windowWidth/2 + 600 ,windowHeight - 900 , 30 , 30);
  gc5.addImage(gc5img);
    gc5.visible = false;

      pl4 = createVideo("pl4.mp4");
  pl4.position(-50, -100);
  pl4.size(windowWidth + 70, windowHeight +200);

   ddr = createSprite(windowWidth/2 - 700 ,windowHeight-100 , 20 , 20);
  ddr.addAnimation("running" , dd_running);
  ddr.scale=.7
  ddr.class = "plimg1";

    puzzle = createImg("puzzle.png");
   puzzle.position( windowWidth/2 - 300 ,windowHeight- 900);

  opt1 = createImg("opt1.png");
  opt1.position(windowWidth / 2 - 800, windowHeight - 350);
  opt1.size(250, 100);
    opt1.hide();

    opt2 = createImg("opt2.png");
  opt2.position(windowWidth / 2 - 100, windowHeight - 350);
  opt2.size(250, 100);
    opt2.hide();

    copt = createImg("opt3.png");
  copt.position(windowWidth / 2 - -500, windowHeight - 350);
  copt.size(300, 100);
  copt.hide();

  l1 = createSprite(windowWidth/2 + 600 , windowHeight - 900);
  l1.addImage(l1img);
  l1.visible = false;
  

  l2 = createSprite(windowWidth/2 + 600 ,windowHeight - 900);
  
  l2.addImage(l2img);
  l2.visible = false;
  
  
          ddr2 = createSprite(windowWidth/2 ,windowHeight/2 , 20 , 20);
        ddr2.addImage(ddr2img);
        ddr2.scale=.7
        ddr2.class = "plimg1";
        ddr2.visible = false;

    restart = createImg("restart.png");
  restart.position(windowWidth - 1100,windowHeight -  150);
  restart.size(300, 150);
  restart.class("plimg1");
  restart.hide();

}

function level2(){
 wall.visible = true;
 backButton.hide();   
 if(ddr2.isTouching(igGroup)){
  gameState = "gameOver";
   hide();
 }    
        // console.log("working");
        // this.hide();
        ddr2.visible = true;
        ddr2.velocityY = ddr2 .velocityY + 0.81;

        if(keyWentDown("space") && ddr2.y >= 159){
         ddr2.velocityY = -20;
    }

            if(keyWentDown("right") && ddr2.x >=  -190){
            ddr2.velocityX = ddr2 .velocityX + 0.5;
    }

                if(keyWentDown("left") && ddr2.x >=  +190){
            ddr2.velocityX = ddr2 .velocityX - 0.5;
    }
  

    if(frameCount%420 == 0){
      randy1=Math.round(random(5,width-(width/2)))
       spine = createSprite(randy1, 150 );
  spine.class = "plimg1";
  spine.scale = 0.9;
  spine.velocityY = 5;
  spineGroup.add(spine)
    
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1:   spine.addImage(spineimg);
              break;
      case 2:   spine.addImage(spineimg);
              break;
      case 3:    spine.addImage(spineimg);
              break;
      default: break;
    }
}
}

function pzl(){
    
        opt1.mousePressed(() =>{
        life = life -1;
      })


              opt2.mousePressed(() =>{
        life = life -1;
                console.log(life)
            })

      copt.mousePressed(() =>{
                       opt1.hide();
        opt2.hide();
        copt.hide();
        puzzle.hide();
        quizBackground.visible = false;
        l1.visible = false;
                l2.visible = false;
                        gamestate = "gameOver";
                        console.log("shhhh.....");
                        background("spine.png");
      })

      if(life === 0){
        gamestate = "gameOver";
                opt1.hide();
        opt2.hide();
        copt.hide();
        puzzle.hide();
        l1.visible = false;
                l2.visible = false;
      }

              if(life === 2){
                l2.visible = true;
        l1.visible = false;
      }

      if(life === 1){
        l1.visible = true;
        l2.visible= false;
        console.log("working123")
      }
}



function level1clues(){
 
      b11.visible = true;
      ddr.visible =true; 
   puzzle.hide();
       if(cscore === 0){
    gc1.visible = true ;
    gc2.visible = false;
    gc3.visible = false;
        gc4.visible = false;
    gc5.visible = false;
  }

  if(cscore === 1){
        gc1.visible = false ;
    gc2.visible = true;
    gc3.visible = false;
        gc4.visible = false;
    gc5.visible = false;
  }

  if(cscore === 2){
        gc1.visible = false ;
    gc2.visible = false;
    gc3.visible = true;
    gc4.visible = false;
    gc5.visible = false;
  }

    if(cscore === 3){
    gc1.visible = false ;
    gc2.visible = false;
    gc3.visible = false;
    gc4.visible = true;
    gc5.visible = false;
  }

  if(cscore === 4){
    gc1.visible = false ;
    gc2.visible = false;
    gc3.visible = false;
    gc4.visible = false;
    gc5.visible = true;
  }



            if(score === 1){
      b11.visible = false;
      b10.visible = false;
      b9.visible = false;
      b8.visible = false;
      b7.visible = false;
      b6.visible = false;
      b5.visible = false;
      b4.visible = false;
      b3.visible = false;
      b2.visible = true;
    }

        if(score === 2){
      b11.visible = false;
      b10.visible = false;
      b9.visible = false;
      b8.visible = false;
      b7.visible = false;
      b6.visible = false;
      b5.visible = false;
      b4.visible = false;
      b3.visible = true;
    }

        if(score === 3){
      b11.visible = false;
      b10.visible = false;
      b9.visible = false;
      b8.visible = false;
      b7.visible = false;
      b6.visible = false;
      b5.visible = false;
      b4.visible = true;
    }

    if(score === 4){
      b11.visible = false;
      b10.visible = false;
      b9.visible = false;
      b8.visible = false;
      b7.visible = false;
      b6.visible = false;
      b5.visible = true;
    }

        if(score === 5){
      b11.visible = false;
      b10.visible = false;
      b9.visible = false;
      b8.visible = false;
      b7.visible = false;
      b6.visible = true;
    }

        if(score === 6){
      b11.visible = false;
      b10.visible = false;
      b9.visible = false;
      b8.visible = false;
      b7.visible = true;
    }

        if(score === 7){
      b11.visible = false;
      b10.visible = false;
      b9.visible = false;
      b8.visible = true;
    }

    if(score === 8){
      b11.visible = false;
      b10.visible = false;
      b9.visible = true;
    }

    if(score === 9){
      b11.visible = false;
      b10.visible = true;
    }
    if(frameCount%320 == 0){
       dr = createSprite(1700, 750 );
  dr.class = "plimg1";
  dr.scale = 0.20;
  dr.velocityX = -2;
  dr.collide(invisibleGround);
  dinoGroup.add(dr)
    
    //generate random obstacles
    var rand = Math.round(random(1,7));
    switch(rand) {
      case 1:   dr.addAnimation("running" , d_running);
              break;
      case 2:   dr.addAnimation("running" , d_running);
              break;
      case 3:   dr.addAnimation("running" , d_running);
              break;
      case 4:   dr.addAnimation("running" , d_running);
              break;
      case 5:   dr.addAnimation("running" , d_running);
              break;
      case 6:   dr.addAnimation("running" , d_running);
              break;
      case 7:   dr.addAnimation("running" , d_running);
              break;
      default: break;
    }
         ddr.visible=true;
    
randy=Math.round(random(5,height-(height/2)))
clueobject=createSprite(width,randy , 20 ,20);
clueobject.size = 0.2;

clueobject.velocityX=-2;

clueobject.velocityX = -2;

clueobjGroup.add(clueobject)
    
    //generate random clueobject
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: clueobject.addImage(gcimg);
              break;
      case 2: clueobject.addImage(gcimg);
              break;
      case 3: clueobject.addImage(gcimg);
              break;
      case 4: clueobject.addImage(gcimg);
              break;
      case 5: clueobject.addImage(gcimg);
              break;
      default: break;
    }

  }
       ddr.visible=true;
    bgsprite.visible = true;
    bgsprite.class = "bgimg"
    backButton.show();

    if(keyWentDown("space") && ddr.y >= 159){
         ddr.velocityY = -22;
         ddr.changeAnimation(ideal)
    }

        if(keyWentDown("right") && score >0){
         
    bubble=createSprite(360,100,5,10);
 bubble.addImage(bubbleimg);
 bubble.velocityX=6;
 bubble.scale=0.1;
 bubble.y=ddr.y - -30;
  bubble.x=ddr.x - -100;
 bubble.lifetime=155;
 bubbleGroup.add(bubble);

 score = score -1;
 console.log(score)
    }

    ddr.velocityY = ddr .velocityY + 0.81


    ddr.collide(invisibleGround);
    bgsprite.velocityX = -9;

    if(bubbleGroup.isTouching(dinoGroup)){
      dinoGroup.destroyEach();
      bubbleGroup.destroyEach();
    }

          if(dinoGroup.isTouching(ddr)){
        ddr.visible = false;
        gameState = "gameOver";
      }

        if(bubbleGroup.isTouching(clueobjGroup)){
      bubbleGroup.destroyEach();
      clueobjGroup.destroyEach();
      cscore = cscore +1
    }

        if(cscore === 5  || keyWentDown("left")){
      gameState = "video2";
      cscore = 5;
            if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
  }

if(bgsprite.x<=width/4){
    bgsprite.x=width/2
}

}


function hide() {
  play.hide();
  how.hide();
  about.hide();
  restart.hide();
  wall.visible = false;
  // backButton.hide();
  pl1.hide();
  pl2.hide();
  pl3.hide();
  pl4.hide();
  nextButton.hide();
  opt1.hide();
    opt2.hide();
      copt.hide();
      l1.visible = false;
      l2.visible = false;
              gc1.visible = false ;
    gc2.visible = false;
    gc3.visible = false;
    gc4.visible = false;
    gc5.visible = false;
          b11.visible = false;
      b10.visible = false;
      b9.visible = false;
      b8.visible = false;
      b7.visible = false;
      b6.visible = false;
      b5.visible = false;
      b4.visible = false;
      b3.visible = false;
      b2.visible = false;
      b1.visible = false;
      ddr.visible = false;
            bgsprite.visible = false;
      dinoGroup.visible = false;
      bubbleGroup.visible = false;
}

function draw() {
  
if(wall.y<=height/100){
    wall.y=height/2
}

    if (gameState === "playstate1") {
  level1clues();
    pl4.hide();
       puzzle.hide();
  }

  
    
    if(score === 0){
            b11.visible = false;
      b10.visible = false;
      b9.visible = false;
      b8.visible = false;
      b7.visible = false;
      b6.visible = false;
      b5.visible = false;
      b4.visible = false;
      b3.visible = false;
      b2.visible = false;
      b1.visible = false;
      gc1.visible= false;
      gc2.visible= false;
      gc3.visible= false; 
      gc4.visible= false;
      gc5.visible= false;
      gameState = "gameOver";
      ddr.visible = false;
    }

  if (gameState === "wait") {
    background(waitimg);
    score=10;
    bgsprite.visible = false;
    play.show();
    how.show();
      pl4.hide();
    about.show();
    backButton.hide();
    pl1.hide();
    pl1.stop();
    plimg1.hide();
       puzzle.hide();
    pl2.hide();
    clueimg1.hide();
    pl3.hide();
    nextButton.hide();
    ddr.visible = false;
// clueobject.visible = false;
  }

  plimg1.mousePressed(() => {
    gameState = "playstate";
    plimg1.hide();
    pl1.stop();
    pl1.hide();
    pl2.show();
    pl2.play();
    clueimg1.show();
    pl3.hide();
    nextButton.hide();
    ddr.visible=false;
    // dr.scale=0.0007
  });

  clueimg1.mousePressed(() => {
    ddr.visible=false;
    clueimg1.hide();
    pl2.stop();
    pl2.hide();
    pl3.show();
    pl3.play();
    // dr.scale=0.0007
    nextButton.show();
  });

  nextButton.mousePressed(() => {
    gameState = "playstate1";
    pl3.hide();
    pl3.stop();
    nextButton.hide();
    ddr.visible=true;
      // dr.visible=true;
        if (document.exitFullscreen) {
    document.exitFullscreen();
  }
  });

  if (gameState === "how") {
    background(htpimg);
    backButton.show();
    plimg1.hide();
    pl2.hide();
    clueimg1.hide();
    nextButton.hide();
    pl3.hide();
       puzzle.hide();
      pl4.hide();
    ddr.visible=false;
    
// clueobject.visible = false;
  }

  if (gameState === "about") {
    background(atgimg);
    backButton.show();
      pl4.hide();
    plimg1.hide();
       puzzle.hide();
    pl2.hide();
    clueimg1.hide();
    nextButton.hide();
    pl3.hide();
    ddr.visible=false;
    
// clueobject.visible = false;
  }

  play.mousePressed(() => {
    play.hide();
    about.hide();
    how.hide();
    pl1.play();
    pl1.show();
    gameState = "playstate";
    plimg1.show();
      if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
  });


  how.mousePressed(() => {
    play.hide();
    about.hide();
    how.hide();
    gameState = "how";
  });


  about.mousePressed(() => {
    play.hide();
    about.hide();
    how.hide();
    //body.style.background="#A5E1FF";
    //  atg = new Atg();
    //  atg.display();
    gameState = "about";
  });

  backButton.mousePressed(() => {
    gameState = "wait";
        bubbleGroup.destroyEach();
        dinoGroup.destroyEach();
                    clueobjGroup.destroyEach();
                            b11.visible = false;
      b10.visible = false;
      b9.visible = false;
      b8.visible = false;
      b7.visible = false;
      b6.visible = false;
      b5.visible = false;
      b4.visible = false;
      b3.visible = false;
      b2.visible = false;
      b1.visible = false;
      gc1.visible = false;
      gc2.visible = false;
      gc3.visible = false;
      gc4.visible = false;
      gc5.visible = false;
         puzzle.hide();
  });

  restart.mousePressed(() =>{
    // gameState = "wait";
    // restart.hide();
    // score=10;
location.reload();
  })
  
  if(gameState === "video2"){
      console.log("working");
      // wall.visible = true;
      pl4.show();
      pl4.play();
      portal.show();
         puzzle.hide();

      // if(pl4.end()){
      //   pl4.stop();
      // }

       bgsprite.visible = false;
    bubbleGroup.destroyEach();
            dinoGroup.destroyEach();
            clueobjGroup.destroyEach();
                        b11.visible = false;
      b10.visible = false;
      b9.visible = false;
      b8.visible = false;
      b7.visible = false;
      b6.visible = false;
      b5.visible = false;
      b4.visible = false;
      b3.visible = false;
      b2.visible = false;
      b1.visible = false;
      gc1.visible= false;
      gc2.visible= false;
      gc3.visible= false; 
      gc4.visible= false;
      cscore = 6
      ddr.visible = false;
  }


        portal.mousePressed(() =>{
        pl4.stop();
                pl4.hide();
                gameState = "playstate2";
                portal.hide();
        if (document.exitFullscreen) {
    document.exitFullscreen();
  }
      })

      if(gameState === "playstate2"){
       level2();

       if(frameCount%400 == 0){
              randy2=Math.round(random(5,height-(height/2)))
               clueobject1=createSprite(randy2, 20 , 20 ,20);
clueobject1.scale = 0.49;

clueobject1.velocityY=13; 

clueobjGroup1.add(clueobject1)
    
    //generate random clueobject
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: clueobject1.addImage(clue2img);
              break;
      case 2: clueobject1.addImage(clue2img);
              break;
      default: break;
    }
       }

      if(ddr2.isTouching(spineGroup)){
      gameState = "gameOver"
      ddr2.visible = false;
      spine.visible = false;
      wall.visible = false;
      spineGroup.destroyEach();
      }

       if(ddr2.isTouching(clueobjGroup1) || keyWentDown("down")){
      console.log('workings');
      restart.hide();
      hide();
      igGroup.destroyEach();
      spineGroup.destroyEach();
      clueobjGroup1.destroyEach();
      clueobjGroup.destroyEach();
      solvebt.show();
      ddr2.visible = false;
      ddr2.velocityY = 0;
      ddr2.velocityX = 0;
              pl5.show();
        pl5.play();
      restart.hide();
        wall.visible = false;
        wall.velocityY = 0;
                    if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
                      clueobjGroup1.destroyEach();
      spineGroup.destroyEach();
  }


      }



    solvebt.mousePressed(() =>{
      gameState = "playstate3";
    })

          if(gameState === "playstate3"){
              solvebt.hide();
              background(quizBackground)
      opt1.show();
      opt2.show();
      copt.show(); 
      wall.visible = false;
      clueobjGroup1.destroyEach();
      spineGroup.destroyEach();
      pl5.stop();
      pl5.hide();
      puzzle.show();
      pzl();
      ddr.visible = false;
      ddr2.visible = false;
              if (document.exitFullscreen) {
    document.exitFullscreen();
  }
      }


      if(gameState === "gameOver"){
    background(gameoverbg);
    bgsprite.visible = false;
    bubbleGroup.destroyEach();
    restart.show();
    clueobjGroup1.destroyEach();
    spineGroup.destroyEach();
    ddr2.visible = false;
            dinoGroup.destroyEach();
            clueobjGroup.destroyEach();
                        b11.visible = false;
      b10.visible = false;
      b9.visible = false;
      b8.visible = false;
      b7.visible = false;
      b6.visible = false;
      b5.visible = false;
      b4.visible = false;
      b3.visible = false;
      b2.visible = false;
      b1.visible = false;
      gc1.visible= false;
      gc2.visible= false;
      gc3.visible= false; 
      gc4.visible= false;
      gc5.visible= false;
      ddr.visible = false;
         puzzle.hide();
  }


  drawSprites();
}