var lilyIdle, lilyJump, lilyWalk, lilyDead;
var parede1, parede2, parede3, parede4, parede5, parede6, parede7, parede8, parede9, parede10, parede11, parede12, parede13, parede14, parede15, parede16, parede17, parede18, parede19, parede20;
var armarioImage, banheiraImage, camaImage, chaoImage, computadorImage, estanteImage, guardaRoupaImage, heartImage, janelaImage, lampadaImage, mesaImage, portaImage, sofaImage, tvImage, tapeteImage, vasoImage, fogaoImage, piaImage;
var zombieFAttack, zombieFDead, zombieFIdle, zombieFWalk;
var zombieMAttack, zombieMDead, zombieMIdle, zombieMWalk;
var ponto;
var bolotinha;
var vidazombieF = 100;
var vidazombieM = 100;
var vidalily = 3;


function preload() {
//imagens da lily
  
  lilyWalk = loadAnimation("assets/CuteGirlFiles/lily/Walk (1).png","assets/CuteGirlFiles/lily/Walk (2).png","assets/CuteGirlFiles/lily/Walk (3).png","assets/CuteGirlFiles/lily/Walk (4).png","assets/CuteGirlFiles/lily/Walk (5).png","assets/CuteGirlFiles/lily/Walk (6).png","assets/CuteGirlFiles/lily/Walk (7).png","assets/CuteGirlFiles/lily/Walk (8).png","assets/CuteGirlFiles/lily/Walk (9).png","assets/CuteGirlFiles/lily/Walk (10).png","assets/CuteGirlFiles/lily/Walk (11).png","assets/CuteGirlFiles/lily/Walk (12).png","assets/CuteGirlFiles/lily/Walk (13).png","assets/CuteGirlFiles/lily/Walk (14).png","assets/CuteGirlFiles/lily/Walk (15).png","assets/CuteGirlFiles/lily/Walk (16).png","assets/CuteGirlFiles/lily/Walk (17).png","assets/CuteGirlFiles/lily/Walk (18).png","assets/CuteGirlFiles/lily/Walk (19).png","assets/CuteGirlFiles/lily/Walk (20).png");
//imagens dos zombies

zombieFWalk = loadAnimation("assets/zombiefiles/zombie/female/Walk (1).png","assets/zombiefiles/zombie/female/Walk (2).png","assets/zombiefiles/zombie/female/Walk (3).png","assets/zombiefiles/zombie/female/Walk (4).png","assets/zombiefiles/zombie/female/Walk (5).png","assets/zombiefiles/zombie/female/Walk (6).png","assets/zombiefiles/zombie/female/Walk (7).png","assets/zombiefiles/zombie/female/Walk (8).png","assets/zombiefiles/zombie/female/Walk (9).png","assets/zombiefiles/zombie/female/Walk (10).png");
//
zombieMWalk = loadAnimation("assets/zombiefiles/zombie/male/Walk (1).png","assets/zombiefiles/zombie/male/Walk (2).png","assets/zombiefiles/zombie/male/Walk (3).png","assets/zombiefiles/zombie/male/Walk (4).png","assets/zombiefiles/zombie/male/Walk (5).png","assets/zombiefiles/zombie/male/Walk (6).png","assets/zombiefiles/zombie/male/Walk (7).png","assets/zombiefiles/zombie/male/Walk (8).png","assets/zombiefiles/zombie/male/Walk (9).png","assets/zombiefiles/zombie/male/Walk (10).png");
//imagens dos moveis
armarioImage = loadImage("assets/house/moveis/armariofechado.png");
banheiraImage = loadImage("assets/house/moveis/banheira.png");
camaImage = loadImage("assets/house/moveis/cama.png");
chaoImage = loadImage("assets/house/moveis/chao.png");
computadorImage = loadAnimation("assets/house/moveis/computadorligado.png","assets/house/moveis/computadordesligado.png");
estanteImage = loadImage("assets/house/moveis/estante.png");
guardaRoupaImage = loadAnimation("assets/house/moveis/guardaroupaaberto.png","assets/house/moveis/guardaroupafechado.png");
heartImage = loadImage("assets/house/moveis/heart.png");
janelaImage = loadImage("assets/house/moveis/janela.png");
lampadaImage = loadImage("assets/house/moveis/lampada.png");
mesaImage = loadImage("assets/house/moveis/mesa.png");
portaImage = loadImage("assets/house/moveis/porta.png");
sofaImage = loadImage("assets/house/moveis/sofa.png");
tvImage = loadAnimation("assets/house/moveis/tvligada.png","assets/house/moveis/tvdesligada.png");
vasoImage = loadImage("assets/house/moveis/vasoerica.png");
piaImage = loadImage("assets/house/moveis//piaerica.png");
tapeteImage = loadImage("assets/house/moveis/tapeteerica.png");
fogaoImage = loadImage("assets/house/moveis/fogaoerica.png");
bolotinha = loadImage("assets/house/moveis/bolotinha.png");
}

function setup() {
  createCanvas(900,600);
  //sprite do chao
  chao = createSprite(806,506);
  chao.addImage(chaoImage);
  chao.scale = 2.28;
  //
  chao = createSprite(695,506);
  chao.addImage(chaoImage);
  chao.scale = 2.28;
  //
  chao = createSprite(80,248);
  chao.addImage(chaoImage);
  chao.scale = 1.85;
  //
  chao = createSprite(170,248);
  chao.addImage(chaoImage);
  chao.scale = 1.85;
  //
  chao = createSprite(260,248);
  chao.addImage(chaoImage);
  chao.scale = 1.85;
  //sprites das paredes
  parede1 = createSprite(450,25,850,10);
  parede2 = createSprite(450,570,850,10);
  parede3 = createSprite(30,300,10,550);
  parede4 = createSprite(870,300,10,550);
  parede5 = createSprite(450,300,850,10);
  parede6 = createSprite(450,450,850,5);
  parede7 = createSprite(450,200,850,5);
  //sprites dos moveis
  //sprite da banheira
  banheira = createSprite(230,200);
  banheira.addImage(banheiraImage);
  banheira.scale = 2;
  //sprite da cama
  cama = createSprite(805,250);
  cama.addImage(camaImage);
  cama.scale = 2;
  //sprite da estante
  estante = createSprite(230,400);
  estante.addImage(estanteImage);
  estante.scale = 3;
  //sprite do guarda roupa
  guardaRoupa = createSprite(700,160);
  guardaRoupa.addAnimation("guardaRoupa",guardaRoupaImage);
  guardaRoupa.scale = 3;
  guardaRoupa.frameDelay = 10;
  //sprite do coracao
  coracao = createSprite(820,50);
  coracao.addImage(heartImage);
  coracao.scale = 5;
  //
  coracao2 = createSprite(777,50);
  coracao2.addImage(heartImage);
  coracao2.scale = 5;
  //
  coracao3 = createSprite(735,50);
  coracao3.addImage(heartImage);
  coracao3.scale = 5;
  //sprite da janela
  janela = createSprite(752,349);
  janela.addImage(janelaImage);
  janela.scale = 3;
  //
  janela = createSprite(160,120);
  janela.addImage(janelaImage);
  janela.scale = 3;
  //sprite do armario
  armario = createSprite(680,435);
  armario.addImage(armarioImage);
  armario.scale = 3;
  //
  //sprite do armario 2
  armario = createSprite(825,435);
  armario.addImage(armarioImage);
  armario.scale = 3;
  //sprite da lampada
  lampada = createSprite(420,317);
  lampada.addImage(lampadaImage);
  lampada.scale = 2;
  //sprite da mesa
  mesa = createSprite(520,450);
  mesa.addImage(mesaImage);
  mesa.scale = 2;
  //
  mesa2 = createSprite(560,200);
  mesa2.addImage(mesaImage);
  mesa2.scale = 2;
  //sprite da porta
  porta = createSprite(100,380);
  porta.addImage(portaImage);
  porta.scale = 3;
  porta.debug = true;
  porta.setCollider("rectangle", 10, 0, 5, 5);
  //
  porta2 = createSprite(400,130);
  porta2.addImage(portaImage);
  porta2.scale = 3;
  porta2.debug = true;
  porta2.setCollider("rectangle", 10, 0, 5, 5);
  //sprite do sofa
  sofa = createSprite(350,430);
  sofa.addImage(sofaImage);
  sofa.scale = 3;
  //sprite da tv
  tv = createSprite(520,425);
  tv.addAnimation("tv",tvImage);
  tv.scale = 2;
  //sprites do computador
  computador = createSprite(563,170);
  computador.addAnimation("computador",computadorImage);
  computador.scale = 2;
  //sprites do vaso
  vaso = createSprite(55,250);
  vaso.addImage(vasoImage);
  vaso.scale = 2;
  //sprites da pia
  pia = createSprite(80,180);
  pia.addImage(piaImage);
  pia.scale = 3;
  //sprite do fogao
  fogao = createSprite(754,435);
  fogao.addImage(fogaoImage);
  fogao.scale = 3;
  //sprite do tapete
  tapete = createSprite(352,520);
  tapete.addImage(tapeteImage);
  tapete.scale = 5;
  //sprite da lily parada
  lily = createSprite(700,500);
  lily.addAnimation("WalkLily",lilyWalk);
  
  lily.scale = 0.2;
  //sprite do zombie F
  zombieF = createSprite(130,500);
 
  zombieF.addAnimation("WalkZombieF",zombieFWalk);
  
  zombieF.scale = 0.2;
  zombieF.velocityX = 3;
  //sprite do zombie M
  zombieM = createSprite (500,200);

  zombieM.addAnimation("WalkZombieM",zombieMWalk);

  zombieM.scale = 0.2;
  zombieM.velocityX = 3;
  //sprite do ponto
  ponto = createSprite(0,0,5,5);
  ponto.shapeColor = "red";

  powerGroup = new Group();
}

function draw() {
  background("black");  
  
  if (lily.isTouching(porta)){
    lily.x = 500;
    lily.y = 150;
  }
  if (lily.isTouching(porta2)){
    lily.x = 200;
    lily.y = 480;
  }
  if (keyDown("space")){
    atirar();
  }
  
  if (vidazombieF<0){
    zombieF.destroy();
  }if (powerGroup.isTouching(zombieF)){
  powerGroup.destroyEach();
    vidazombieF-=10;
  }
  if (vidazombieM<0){
    zombieM.destroy();
  }if (powerGroup.isTouching(zombieM)){
  powerGroup.destroyEach();
    vidazombieM-=10;
  }
  
  lily.collide(parede1);
  lily.collide(parede2);
  lily.collide(parede3);
  lily.collide(parede4);
  lily.collide(parede5);

  drawSprites();
  if (vidalily<1){
    textAlign(CENTER, CENTER);
    textSize(72);
    strokeWeight(5);
    stroke("pink");
    fill("red");
    text("Você perdeu", 450, 300);
    lily.destroy();
  }
  if (vidazombieF<0&&vidazombieM<0){
    textAlign(CENTER, CENTER);
    textSize(72);
    strokeWeight(5);
    stroke("pink");
    fill("red");
    text("Você ganhou", 450, 300);
  }
  coordenadas();
  Walk();
  zWalk();
  dano();
}

function coordenadas() {
  ponto.x = mouseX;
  ponto.y = mouseY;
  textSize(30);
  text("x:"+ponto.x+", y:"+ponto.y,ponto.x,ponto.y-20);
}

function Walk() {
 if (keyDown("up")){
  lily.velocityY = -3;
  
 }
 if (keyDown("down")){
  lily.velocityY = 3;
  
}
if (keyDown("left")){
  lily.velocityX = -3;
  lily.mirrorX(lily.mirrorX()*-1);
}
if (keyDown("right")){
  lily.velocityX = 3;
  lily.mirrorX(lily.mirrorX()*-1);
}
  lily.velocityY+=0.3;
}
function zWalk() {
  if (zombieF.isTouching(parede4)){
    zombieF.velocityX = -3;
    zombieF.mirrorX(zombieF.mirrorX()*-1);
  }
  if (zombieF.isTouching(parede3)){
    zombieF.velocityX = 3;
    zombieF.mirrorX(zombieF.mirrorX()*-1);
  }
  if (zombieM.isTouching(parede4)){
    zombieM.velocityX = -3;
    zombieM.mirrorX(zombieM.mirrorX()*-1);
  }
  if (zombieM.isTouching(parede3)){
    zombieM.velocityX = 3;
    zombieM.mirrorX(zombieM.mirrorX()*-1);
  }
}
  function atirar(){
    if (frameCount%10 === 0){
      var power = createSprite(lily.x,lily.y);
      power.addImage(bolotinha);
      power.scale = 0.1;
      powerGroup.add(power);
      if (lily.y>300){
        if (power.x>zombieF.x){
          power.velocityX = -5;
        }
        else{
          power.velocityX = 5;
        }
      }
      else{
        if (power.x>zombieM.x){
          power.velocityX = -5;
        }
        else{
          power.velocityX = 5;
        }
      }
    }
  }
function dano(){
  console.log(vidalily);
  if (lily.isTouching(zombieF)||lily.isTouching(zombieM)){
    lily.x+=150;
    vidalily = 2;
  }
   if (vidalily==2){
  coracao3.destroy();
    if (lily.isTouching(zombieF)||lily.isTouching(zombieM)){
    vidalily = 1;
    lily.x+=150;
  }
  }
   if (vidalily==1){
    coracao2.destroy();
    if (lily.isTouching(zombieF)||lily.isTouching(zombieM)){
    lily.x+=150;
    vidalily = 0;
  }
  }
  else{
    coracao.destroy();
  }
    if (lily.x>550){
    lily.x-=300;
  }
  }
