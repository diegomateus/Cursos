var cabecera = basicScroll.create({
    elem: document.querySelector('.cabecera'),
    from: 'top-top',
    to: 'bottom-top',
    props:{
        '--opacity-nav':{
            from: 0,
            to: 1
        }
    }
});

cabecera.start();