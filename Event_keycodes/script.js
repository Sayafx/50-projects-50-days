const insertcontent = document.getElementById(`insert`)

window.addEventListener('keydown' ,(event) => {
    console.log(event)
    insertcontent.innerHTML = `
        <div class="key">
            ${event.key === ' ' ? 'Space' : event.key}
            <div class="small">event.key</div>
        </div>

        <div class="key">
            ${event.keyCode}
            <div class="small">event.keycode</div>
        </div>

        <div class="key">
            ${event.code}
            <div class="small">event.code</div>
        </div>
    `

})