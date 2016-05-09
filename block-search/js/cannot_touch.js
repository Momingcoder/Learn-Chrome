function block_search(el, mouseLeft, mouseTop) {
    var leftRnd = (Math.random() - 0.5) * 20;
    var topRnd = (Math.random() - 0.5) * 20;
    var buttonLeft = mouseLeft + (leftRnd > 0 ? 100 : -100) + leftRnd;
    var buttonTop = mouseTop + (topRnd > 0 ? 30 : -30) + topRnd;

    buttonLeft = buttonLeft < 100 ? (buttonLeft + window.innerWidth - 200) : (buttonLeft > window.innerWidth - 100 ? buttonLeft - window.innerWidth + 200 : buttonLeft);
    buttonTop = buttonTop < 100 ? (buttonTop + window.innerHeight - 200) : (buttonTop > window.innerHeight - 100 ? buttonTop - window.innerHeight + 200 : buttonTop);

    el.style.position = 'fixed';
    el.style.left = buttonLeft + 'px';
    el.style.top = buttonTop + 'px';
}

function over_button(e) {
    if(!e) {
        e = window.event;
    }
    block_search(this, e.clientX, e.clientY);
}

document.getElementById('su').onmouseover = over_button;
