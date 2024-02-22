// FAQ

var faqItem = document.querySelectorAll('.faq-item-container');

faqItem.forEach((faq) => {
    let sum = faq.childNodes[1].clientHeight + 24;
    faq.style.maxHeight = `${sum}px`;
});

window.addEventListener("resize", closeAllFaqs);

function closeAllFaqs() {
    faqItem.forEach((faq) => {
        let sum = faq.childNodes[1].clientHeight + 24;
        faq.style.maxHeight = `${sum}px`;
        faq.childNodes[1].childNodes[3].childNodes[3].style.display = 'unset';
        faq.childNodes[1].childNodes[3].classList.add('plus');
    });
}

function toggleFaqItem(num) {
    if (faqItem[num].childNodes[1].childNodes[3].classList.contains('plus')) {
        openFaqItem(num);
    } else {
        closeFaqItem(num);
    }
}

function openFaqItem(num) {
    closeAllFaqs();
    faqItem[num].childNodes[1].childNodes[3].childNodes[3].style.display = 'none';
    faqItem[num].style.maxHeight = '100%';

    faqItem[num].childNodes[1].childNodes[3].classList.remove('plus');
}

function closeFaqItem(num) {
    faqItem[num].childNodes[1].childNodes[3].childNodes[3].style.display = 'unset';

    let sum = faqItem[num].childNodes[1].clientHeight + 24;
    faqItem[num].style.maxHeight = `500px`;
    setTimeout(function () {
        faqItem[num].style.maxHeight = `${sum}px`;
    }, 10);

    faqItem[num].childNodes[1].childNodes[3].classList.add('plus');
}

// Popups

function openMenu() {
    document.querySelector('.popups').classList.add('displayBlock');
    document.querySelector('.section-header-right-container-mobile').classList.add('openMobileMenu');
}

function closeMenu() {
    document.querySelector('.popups').classList.remove('displayBlock');
    document.querySelector('.section-header-right-container-mobile').classList.remove('openMobileMenu');
}