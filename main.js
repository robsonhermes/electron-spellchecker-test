const electron = require('electron')
const {app, BrowserWindow } = require('electron')

let win

function createWindow() {
  win = new BrowserWindow({width: 1024, height: 768, webPreferences: {nodeIntegration: true}})
  win.webContents.openDevTools()
  win.loadFile('test.html')
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
