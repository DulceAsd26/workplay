
        const $video = document.querySelector('#video')
        const $play = document.querySelector('#play')
        const $pause = document.querySelector('#pause')
        const $backward = document.querySelector('#backward')
        const $forward = document.querySelector('#forward')

        $play.addEventListener('click', handlePlay)
        $pause.addEventListener('click', handlePause)

        function handlePlay(){
            $video.play()
            $play.hidden = true
            $pause.hidden = false
            console.log('se reproduce correctamente')
        }
        function handlePause(){
            $video.pause()
            $play.hidden = false
            $pause.hidden = true
            console.log('se pausa correctamente')
        }


        $backward.addEventListener('click', handleBackward)
        function handleBackward(){
            $video.currentTime = $video.currentTime - 10
            console.log('para atras 10 segundos')
        }
        $forward.addEventListener('click', handleForward)
        function handleForward(){
            $video.currentTime = $video.currentTime + 10
            console.log('para adelantar 10 segundos', $video.currentTime)
        }
        
