const slider = selector => {
    const slidersContainer = document.querySelectorAll(selector);

    const sliderHandler = slideContainer => {
        const sliders = slideContainer.querySelector('.slides');
        if (!sliders) return;

        const slides = slideContainer.querySelectorAll('.slide');
        if (!slides || !slides.length > 1) return;

        const buttons = slideContainer.querySelectorAll('.button');
        if (!buttons) return;

        const switchSlide = e => {
            const buf = e.target.classList.contains('next');

            let x = sliders.style.transform || '0';
            x = x.replace('translate(', '');
            x = Math.abs(parseInt(x));

            if (buf){
                if (x < (slides.length * 100) - 100){
                    x += 100;
                }else{
                    x = 0;
                }
            }else{
                if (x > 0){
                    x-= 100;
                }else{
                    x = (slides.length * 100) - 100;
                }
            }
                sliders.style.transform = `translate(-${x}%)`;
        }

        buttons.forEach(button => {
            button.addEventListener('click', switchSlide);
        });
    }
    
    slidersContainer.forEach(slide => sliderHandler(slide));
}

slider('.main__slider')