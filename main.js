/**
 * Alterna a aba de doações ativa.
 * @param {HTMLElement} btn - Botão clicado
 * @param {string} tipo - ID do painel a exibir ('pix', 'boleto' ou 'presencial')
 */
function escolherDoacao(btn, tipo) {
document.querySelectorAll('.doacoes-opcao').forEach(b => b.classList.remove('ativo'));
document.querySelectorAll('.doacoes-pix').forEach(p => p.classList.remove('visivel'));
btn.classList.add('ativo');
document.getElementById(tipo).classList.add('visivel');
}

/**
 * Simula envio do formulário de contato com feedback visual.
 * Conecte ao seu backend ou serviço de e-mail (ex: Formspree, EmailJS).
 * @param {Event} e - Evento de submit
 */
function enviarContato(e) {
e.preventDefault();
const btn = e.target.querySelector('button[type="submit"]');
const textoOriginal = btn.textContent;

btn.textContent = 'Mensagem Enviada! ✓';
btn.style.background = '#27AE60';
btn.style.borderColor = '#27AE60';
btn.disabled = true;

setTimeout(() => {
    btn.textContent = textoOriginal;
    btn.style.background = '';
    btn.style.borderColor = '';
    btn.disabled = false;
    e.target.reset();
}, 3000);
}