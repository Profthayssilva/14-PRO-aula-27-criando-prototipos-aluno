
// 4. Veja o arquivo Tower.js criado dentro da pasta Js.

class Tower {
//   Vamos criar uma função constructor()
// (construtor) e, dentro da função, vamos escrever
// a instrução para criar um corpo de torre
// retangular
  constructor(x, y, width, height) {

//   6-   Agora, vamos adicionar um parâmetro adicional
// “options” (opções) em Bodies.rectangle(), que
// irá ajustar o mecanismo de física para o objeto e
// adicioná-lo ao mundo.

    var options = {
     
    };

    // 5- Crie um corpo tower dentro da função constructor
    
  

    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    // 7- Adicione este objeto ao World (mundo)
    
  }
  display() {
    var pos = this.body.position;
    //10- .Carregue e adicione a imagem da Torre dentro da classe Tower
    var angle = 
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(       );
    pop();
  }
}
