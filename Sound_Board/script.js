const audioElements = document.getElementsByTagName('audio')
// 把获取到的audio组成一个数组，取id，并剔除空id
const sounds = Array.from(audioElements).map(audio => audio.id).filter(id => id !== '')


sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    // 获取到id为buttons的元素，把btn加在它的子元素列表末尾
    document.getElementById('buttons').appendChild(btn)
})

function stopSongs () {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}