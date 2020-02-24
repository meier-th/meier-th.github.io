window.onload = () => {$('#fullpage').fullpage({
    anchors: ['intro', 'bio', 'contacts'],
    
});
let projectNames = ['anf', 'moscow', 'seifmo'];
projectNames.forEach( name => {
    document.getElementById(name+'-project').onmouseenter =  () => {
        document.getElementById(name+'-curtain').classList.add('opened-curtain');
    };
    document.getElementById(name+'-project').onmouseleave = () => {
        document.getElementById(name+'-curtain').classList.remove('opened-curtain');
    };
});

let curtains = document.getElementsByClassName('curtain');
Array.from(curtains).forEach((curtain) => {
    curtain.onmouseleave = () => {
        curtain.classList.remove('opened-curtain');
    };
});

}