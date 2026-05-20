// Espera o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {

    // Mensagem de boas-vindas
    console.log("Bem-vindo ao Meu Site!");

    // Seleciona os links do menu
    const links = document.querySelectorAll("nav a");

    // Adiciona efeito ao clicar
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Remove classe ativa de todos
            links.forEach(item => item.classList.remove("ativo"));

            // Adiciona classe ao item clicado
            link.classList.add("ativo");

            // Mostra alerta
            alert(`Você clicou em: ${link.textContent}`);
        });
    });

    // Animação suave na seção principal
    const section = document.querySelector("section");

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";

    setTimeout(() => {
        section.style.transition = "all 1s ease";
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
    }, 300);

});