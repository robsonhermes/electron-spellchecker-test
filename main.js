const electron = require('electron')
const {app, BrowserWindow } = require('electron')

let win

function createWindow() {
  win = new BrowserWindow({width: 1024, height: 768, webPreferences: {nodeIntegration: true}})
  win.webContents.openDevTools()
  win.loadFile('test.html')
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
