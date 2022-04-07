var cabecera = basicScroll.create({
    elem: document.querySelector('.cabecera'),
    from: 'top-top',
    to: 'bottom-top',
    props: {
        '--opacidad-nav':{
            from: 0,
            to: 1
        },
        '--titular-pos':{
            from: 0,
            to: '40vh'
        }
    }
});

var imagen1 = basicScroll.create({
    elem: document.querySelector('.batifamilia-img'),
    from:'top-bottom',
    to:'middle-middle',
    
    props:{
        '--img1-pos':{
            from: '10vw',
            to:'0px'
        }
    }
});

var imagen2 = basicScroll.create({
    elem: document.querySelector('.caballeros-img'),
    from:'top-bottom',
    to:'bottom-top',
    
    props:{
        '--img2-pos':{
            from: '0',
            to:'-50%'
        }
    }
});

cabecera.start();
imagen1.start();
imagen2.start();