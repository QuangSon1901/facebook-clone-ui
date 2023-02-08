const body = document.body;

function disabledScroll() {
    body.style.overflow = 'hidden';
}

function enabledScroll() {
    body.style.overflow = 'overlay';
}

export { disabledScroll, enabledScroll };
