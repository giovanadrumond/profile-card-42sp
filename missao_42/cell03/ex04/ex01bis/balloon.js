$(document).ready(function() {
    var balao = $("#balao");
    var tamanho = 200;
    var cores = ["red", "green", "blue"];
    var corIndex = 0;
  
    balao.on("click", function() {
      tamanho += 10;
      if (tamanho > 420) {
        tamanho = 200;
      }
      $(this).css({
        width: tamanho + "px",
        height: tamanho + "px",
        backgroundColor: cores[++corIndex % cores.length]
      });
    });
  
    balao.on("mouseenter", function() {
      tamanho -= 5;
      if (tamanho < 200) {
        tamanho = 200;
      }
      $(this).css({
        width: tamanho + "px",
        height: tamanho + "px",
        backgroundColor: cores[--corIndex % cores.length]
      });
    });
  });
  