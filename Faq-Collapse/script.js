const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    const btn = faq.querySelector('.faq-toggle')
    const closeBtn = faq.querySelector('.fa-times')
    const openBtn = faq.querySelector('.fa-chevron-down')

    btn.addEventListener('click', () => {
        faq.classList.toggle('active')
    })
})
