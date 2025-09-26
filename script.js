document.addEventListener ('DOMContentLoaded', () =>{
    const heading= document.querySelector ('.heading');
    const text= heading.textContent;

    heading.textContent='';

    text.split('').forEach((char,index) => {
        const span= document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.classList.add('letter')
        span.style.animationDelay = `${index * 0.05}s` ;

        heading.appendChild(span);
    })
})