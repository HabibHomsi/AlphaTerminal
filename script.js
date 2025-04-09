// Función común para añadir líneas a la terminal
function addLineToTerminal(text, terminalId = 'terminal-output') {
    const terminalOutput = document.getElementById(terminalId);
    const newLine = document.createElement('div');
    newLine.className = 'terminal-line';
    newLine.textContent = text;
    terminalOutput.appendChild(newLine);
    
    // Scroll automático al final
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Efecto de escritura inicial
function initTerminalAnimation() {
    const initialLines = document.querySelectorAll('.terminal-line');
    initialLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.2}s`;
    });
}

// Inicialización común
document.addEventListener('DOMContentLoaded', function() {
    initTerminalAnimation();
});