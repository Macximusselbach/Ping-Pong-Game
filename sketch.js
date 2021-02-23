//Variáveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 15

//Velocidades da bolinha
let velocidadeXbolinha = 7
let velocidadeYbolinha = 7
let raio = diametro /2

//Variáveis das raquetes
let xRaquete = 5
let yRaquete = 150
let comprimentoRaquete = 10
let alturaRaquete = 90

let xRaquete2 = 585
let yRaquete2 = 150
let velocidadeRaquete2;

let colidiu = false
let chanceErrar = 0

//Placar do jogo
let pontos1 = 0
let pontos2 = 0

//Sons do jogo
let somPontos;
let somRaquetada;
let somFundo;





//--------------------------------
function preload(){
  somPontos = loadSound("ponto.mp3")
  somRaquetada = loadSound("raquetada.mp3")
  somFundo = loadSound("trilha.mp3")
  
}


function setup() {
  createCanvas(600, 400)
  somFundo.loop()
}

function draw() {
  background(0)
  mostraBolinha()
  movimentosBolinha()
  colisaoBolinha()
  mostraRaquetes()
  movimentoRaquete()
  movimentoRaquete2()
  //colisaoRaquetes()
  colisaoRaquetesgit(xRaquete, yRaquete)
  colisaoRaquetesgit(xRaquete2, yRaquete2)
  placar()
  marcaPontos()
  calculaChandeErro()

}



//--------------------------------
function mostraRaquetes(){
 rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete) 


 rect(xRaquete2, yRaquete2, comprimentoRaquete, alturaRaquete)
}



//--------------------------------
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro)
}



//--------------------------------
function movimentosBolinha(){
  xBolinha += velocidadeXbolinha
  yBolinha += velocidadeYbolinha
}



//--------------------------------
function colisaoBolinha(){
 
  if (xBolinha + raio > width || xBolinha - raio < 0){
  velocidadeXbolinha *= -1
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYbolinha *= -1
  } 
}



//--------------------------------
function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 5
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 5
  }
}
  


//--------------------------------
function movimentoRaquete2(){
 velocidadeRaquete2 = yBolinha -yRaquete2 - comprimentoRaquete / 2 - 30
  yRaquete2 += velocidadeRaquete2 + chanceErrar
}
  
  
  function calculaChandeErro(){
   if (pontos2 >= pontos1) {
    chanceErrar += 1
    if (chanceErrar >= 39){
    chanceErrar = 40
    }
  } else {
    chanceErrar -= 1
    if (chanceErrar <= 35){
    chanceErrar = 35
    }
   }
  }




//--------------------------------
function colisaoRaquetes(x, y){
 if (xBolinha - raio < x + comprimentoRaquete  && yBolinha - raio < y + alturaRaquete && yBolinha + raio > y){
 velocidadeXbolinha *= -1
 }
}



//--------------------------------
  function colisaoRaquetesgit(x, y){
    colidiu = 
collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio)
    if (colidiu){
      velocidadeXbolinha *= -1
      somRaquetada.play()
    }
    
  }



//--------------------------------
function placar(){
  stroke(255)
  textAlign(CENTER)
  textSize(20)
  fill(color(255, 140, 0))
  rect(180, 10, 40, 20)
  fill(255)
  text(pontos1, 200, 26)
  fill(color(255, 140, 0))
  rect(380, 10, 40, 20)
  fill(255)
  text(pontos2, 400, 26)
}
  


//--------------------------------
function marcaPontos(){
  if (xBolinha > 590){
  pontos1 += 1
  somPontos.play()
  }
  
  if (xBolinha < 10){
  pontos2 += 1
  somPontos.play()
  }
}
  
  
  
  
  
  
  
  
  
