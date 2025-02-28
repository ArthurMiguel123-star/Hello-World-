let clicks = 0; // Alterado de 'const' para 'let'

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn");
    if (button) {
        button.addEventListener("click", () => {
            clicks++;
            alert("You have clicked the button " + clicks + " times"); // Corrigido "Times" para "times" para consistência
        });
    } else {
        console.error("Botão com o ID 'btn' não encontrado no DOM!");
    }
});
