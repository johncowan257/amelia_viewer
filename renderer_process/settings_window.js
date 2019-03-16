// Creates a window used to set the settings for the camera and the video
// stream

const {BrowserWindow} = require('electron')

let child = new BrowserWindow({parent: top, modal: true, frame: false, 
    transparent: true})
child.loadFile('html/settings.html')
child.once('ready-to-show', () => {
    child.show()
})

child.on('closed', () => {
  child = null
})
