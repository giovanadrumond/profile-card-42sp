var balao = document.getElementById("balao");
var tamanho = 200;
var cores = ["red", "green", "blue"];
var corIndex = 0;

balao.addEventListener("click", function() {
tamanho += 10;
if (tamanho > 420) {
tamanho = 200;
}
this.style.width = tamanho + "px";
this.style.height = tamanho + "px";
corIndex = (corIndex + 1) % cores.length;
this.style.backgroundColor = cores[corIndex];
});

balao.addEventListener("mouseenter", function() {
tamanho -= 5;
if (tamanho < 200) {
tamanho = 200;
}
this.style.width = tamanho + "px";
this.style.height = tamanho + "px";
corIndex = (corIndex - 1 + cores.length) % cores.length;
this.style.backgroundColor = cores[corIndex];
});