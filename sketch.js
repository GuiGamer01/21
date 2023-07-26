//variáveis

var jogador, solo;

var bolaDeFogo, fundo, inimigo;

var gameOver, restart, checkpoint;

//imagem de variáveis

var jogadorIMG, soloIMG;

var bolaDeFogoIMG, fundoIMG, inimigoIMG;

var gameOverIMG, restartIMG, checkpointSOM;

//estados e pontos

var pontos = 0;

var play = 1;

var end = 0;

var estadoDoJogo = play

function preload() {
    jogadorIMG = loadImage("prota.gif");
    soloIMG = loadImage("ground2.png");
    bolaDeFogoIMG = loadAnimation("fireball-flame-ball.gif");
    //fundoIMG = loadImage("3.jpg");
    //inimigoIMG = loadImage("bixo.gif");
    //gameOverIMG = loadImage("gameOver.jpg");
    //restartIMG = loadImage("restart.gif");
    //checkpointSOM = loadSound("checkpoint.mp3");
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    jogador = createSprite(50, height - 100, 20, 50);
    jogador.addImage(jogadorIMG);
    jogador.scale = 0.5;
    Piso = createSprite(width / 2, height - 70, width, 2);
    Piso.addImage(soloIMG);
    PisoInvisivel = createSprite(width / 2, height - 40, width, 125);
    PisoInvisivel.visible = false;
    inimigo= createSprite(50,height,-100);
    //fundo.addAnimation(fundoIMG);
    //bolaDeFogo = createSprite(50,height-100)
    //bolaDeFogo.addImage(bolaDeFogoIMG)
    //bolaDeFogo.scale=0.5
    //GameOver = createSprite(width / 2, height / 2 - 50);
    //GameOver.addImage(GameOverIMG);
    //GameOver.scale = 0.5;
    //GameOver.visible = false
    //restart = createSprite(width / 2, height / 2);
    //restart.addImage(RestartIMG);
    //restart.scale = 0.5;
    //restart.visible = false     Fundo = createSprite(windowWith, windowHeight);
    jogador.setCollider("circle", 0, 0, 40);
    jogador.debug = false;
}

function draw() {
    background("White");
    textSize(20)
    text("Pontos:" + pontos, 1190, 50);
    //   bolaDeFogo.velocityX=-3
    // if (bolaDeFogo.x < 0) {
    //     bolaDeFogo.x=width
    //  }
    if (estadoDoJogo === play) { 
        Piso.velocityX = -(4 + 3 * pontos / 250);
        pontos = pontos + Math.round(getFrameRate() / 60);
        if (pontos > 0 && pontos % 500 === 0) {
          checkpointSOM.play();
         }
         if (pontos.x < 0) {

         Piso.x = Piso.width / 2;



        }
        if (keyDown("Space") && jogador.y >= 520) {
          jogador.velocityY = -13;
        }
     jogador.velocityY = jogador.velocityY + 0.5;
     jogador.collide(PisoInvisivel);

     // if (BolaDeFogo.isTouching(PLAYER)) {
     //estadoDoJogo = end;
     //}

     } else {
        //     //         Piso.velocityX = 0;
        //     //         PLAYER.velocityY = 0;
        //     //         GameOver.visible = true;
        //     //         Restart.visible = true;
        //     //     }
        //     //     if (touches.length > 0 || mousePressedOver(Restart)) {
        //     //         touches = [];

        drawSprites();
    }
}

//function Resetar() {
// //         estadoDoJogo = play
// //         GameOver.visible = false;
// //         Restart.visible = false;
// //         BolaDeFogo.destroyEach()
// //         Pontos = 0
//}