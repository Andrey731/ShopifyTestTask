/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */

const content = document.querySelector('.collapsible__content p'),
    btn = document.querySelector('.collapsible__button'),
    btnVisible = document.querySelector('.collapsible__action--visible'),
    btnHidden = document.querySelector('.collapsible__action--hidden');


btnVisible.style.display = 'none';

const animation = [{
        overflow: 'hidden',
        lineHeight: '100%',
    },
    {
        overflow: 'hidden',
        lineHeight: '0%',
    },
    {
        overflow: 'hidden',
        lineHeight: '0%',
        margin: '0',
    }
]

let animationTiming = {
    duration: 1000,
    fill: 'forwards',
}

let collapseAnimation = content.animate(
    animation,
    animationTiming
)

collapseAnimation.finish();

btn.addEventListener('click', () => {
    if (btnVisible.style.display == 'none') {
        btnVisible.style.display = '';
        btnHidden.style.display = 'none';
        collapseAnimation.playbackRate = -1;
        collapseAnimation.play();
    } else {
        btnVisible.style.display = 'none';
        btnHidden.style.display = '';
        collapseAnimation.playbackRate = 1;
        collapseAnimation.play();
    }
});