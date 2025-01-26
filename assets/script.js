let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let header = document.querySelector('header');
let conteudo = document.getElementById('conteudo');

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    header.classList.toggle('dark')
    conteudo.classList.toggle('dark')
});