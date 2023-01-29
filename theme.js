class Theme {
    constructor () {
        // dark theme :
        this.moon = document.querySelector('.moon');
        this.moon.addEventListener('click' , () => {
            this.theme("moon");
        });
        // light theme :
        this.sun = document.querySelector('.sun');
        this.sun.addEventListener('click', () => {
            this.theme("sun");
        });
        // variables :
        this.body = document.querySelector('body');
        this.themeBorder = document.querySelector('.theme');
        this.text = document.querySelector('.text');
        this.menu = document.querySelector('.menu');
        this.title1 = document.querySelector('.title1');
        this.title2 = document.querySelector('.title2');
        this.span = document.querySelector('.title2 span'); 
        this.current = document.querySelector('.current');
        this.duration = document.querySelector('.duration');
        this.button1 = document.querySelector('.button1');
        this.button2 = document.querySelector('.button2');
        this.button3 = document.querySelector('.button3');
        this.img = document.querySelector('.img');
        this.input_player = document.querySelector('.input_player');
        this.volume = document.querySelector('.volume');
        this.theme(localStorage.getItem("savetheme"));
    }
    theme(theme){
        if (theme == "moon") {
            this.moon.style.display = "none";
            this.sun.style.display = "block";
            this.body.style.backgroundColor = "var(--clr-primary-5)";
            this.themeBorder.style.borderColor= "var(--clr-primary-1)";
            this.themeBorder.style.color = "var(--clr-primary-1)";
            this.text.style.color = "var(--clr-primary-1)";
            this.title1.style.color = "var(--clr-primary-1)";
            this.menu.style.borderColor = "var(--clr-primary-1)";
            this.menu.style.color = "var(--clr-primary-1)";
            this.title2.style.color = "var(--clr-primary-1)";
            this.span.style.color = "var(--clr-primary-1)";
            this.current.style.color = "var(--clr-primary-1)";
            this.duration.style.color = "var(--clr-primary-1)";
            this.button1.style.borderColor= "var(--clr-primary-1)";
            this.button1.style.color = "var(--clr-primary-1)";
            this.button2.style.borderColor= "var(--clr-primary-1)";
            this.button2.style.color = "var(--clr-primary-1)";
            this.button3.style.borderColor= "var(--clr-primary-1)";
            this.button3.style.color = "var(--clr-primary-1)";
            this.img.style.borderColor = 'var(--clr-primary-1)';
            this.input_player.style.backgroundColor = 'var(--clr-primary-2)';
            this.volume.style.backgroundColor = 'var(--clr-primary-1)';
        }else if (theme == "sun") {
            this.moon.style.display = "block";
            this.sun.style.display = "none";
            this.body.style.backgroundColor = "var(--clr-primary-1)";
            this.themeBorder.style.borderColor= "var(--clr-primary-2)";
            this.themeBorder.style.color = "var(--clr-primary-2)";
            this.text.style.color = "var(--clr-primary-2)";
            this.title1.style.color = "var(--clr-primary-2)";
            this.menu.style.borderColor = "var(--clr-primary-2)";
            this.menu.style.color = "var(--clr-primary-2)";
            this.title2.style.color = "var(--clr-primary-2)";
            this.span.style.color = "var(--clr-primary-2)";
            this.current.style.color = "var(--clr-primary-2)";
            this.duration.style.color = "var(--clr-primary-2)";
            this.button1.style.borderColor= "var(--clr-primary-2)";
            this.button1.style.color = "var(--clr-primary-2)";
            this.button2.style.borderColor= "var(--clr-primary-2)";
            this.button2.style.color = "var(--clr-primary-2)";
            this.button3.style.borderColor= "var(--clr-primary-2)";
            this.button3.style.color = "var(--clr-primary-2)";
            this.img.style.borderColor = 'var(--clr-primary-2)';
            this.input_player.style.backgroundColor = 'var(--clr-primary-4)';
            this.volume.style.backgroundColor = 'var(--clr-primary-2)';
        }
        localStorage.setItem('savetheme', theme)
    }
}
onload = new Theme();