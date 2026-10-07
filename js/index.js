/**
 * Función para manejar los botones de la landing page.
 * Actualmente lanza una alerta para simular la acción, 
 * pero acá se puede integrar la lógica para abrir un modal, 
 * redirigir a un formulario o enviar un evento a un chatbot.
 */
function sendPrompt(actionText) {
    console.log("Acción solicitada: " + actionText);
    alert("Pronto serás redirigido para: " + actionText);
}

// --- LÓGICA DEL MENÚ HAMBURGUESA ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        // Alterna la clase 'active' para mostrar/ocultar el menú
        navLinks.classList.toggle('active');
        
        // Alterna el icono de menú a "X" (cerrar)
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('ti-menu-2');
            icon.classList.add('ti-x');
        } else {
            icon.classList.remove('ti-x');
            icon.classList.add('ti-menu-2');
        }
    });
}

// --- LÓGICA DEL ACORDEÓN (FAQ) ---
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('i');

    question.addEventListener('click', () => {
        // Verifica si el ítem actual está abierto
        const isOpen = item.classList.contains('active');

        // (Opcional) Cierra todos los demás acordeones al abrir uno nuevo
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').style.maxHeight = null;
            otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            
            // Restaura el icono a "más"
            const otherIcon = otherItem.querySelector('i');
            otherIcon.classList.remove('ti-minus');
            otherIcon.classList.add('ti-plus');
        });

        // Si no estaba abierto originalmente, lo abrimos
        if (!isOpen) {
            item.classList.add('active');
            // Calcula la altura real del contenido para la animación
            answer.style.maxHeight = answer.scrollHeight + "px";
            question.setAttribute('aria-expanded', 'true');
            
            // Cambia el icono a "menos"
            icon.classList.remove('ti-plus');
            icon.classList.add('ti-minus');
        }
    });
});