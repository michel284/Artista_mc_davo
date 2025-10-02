(function () {
    const slider = [...document.querySelectorAll('.news-body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value =1 ;

        buttonNext.addEventListener('click', ()=>{
            changePosition(1);
        });

        buttonBefore.addEventListener('click', ()=>{
            changePosition(-1);
        });
        

        const changePosition = (add) => {
            const currentNews = document.querySelector('.news-body-show').dataset.id;
            value = Number (currentNews);
            value += add;

            slider [Number(currentNews)-1].classList.remove ('news-body-show');
            if (value == slider.length+1 || value === 0 ){
                value = value === 0 ? slider.length : 1;
            }
        slider [value-1].classList.add ('news-body-show');
    }
}) ();