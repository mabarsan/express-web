const hbs = require('hbs');

hbs.registerHelper('getAnio', () => new Date().getFullYear());

hbs.registerHelper('capitalizar', (nombre) => {
    let tex = nombre.split(' ');
    tex.forEach((text, idx) =>  {
        text[idx] = palabra.charAt[0].toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return text.join(' ');
});