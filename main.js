/* from the electron quick-start */
var electron = require('electron');
var ipcMain = require('electron').ipcMain;
var app = electron.app;
var mainwin = null;

function createWindow() {
	if (mainwin) return;
	win = new electron.BrowserWindow({
		width: 1300, height: 800,
        fullscreen: false,
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true
		}
	});
	win.loadURL("file://" + __dirname + "/cn/index.html");
	//win.webContents.openDevTools();
	win.on('closed', function () { win = null; });
    mainwin = win
}
app.on('open-file', function () { console.log(arguments); });
app.on('ready', createWindow);
app.on('activate', createWindow);
app.on('window-all-closed', function () { if (process.platform !== 'darwin') app.quit(); });
