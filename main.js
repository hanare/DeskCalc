const { app, BrowserWindow,IpcMessageEvent } = require('electron')

const ipc = require('electron').ipcMain

let win;

function createWindow(){

	win = new BrowserWindow({
		width: 540,
		height:600,
		backgroundColor: '#fff',
		frame : false
	})
	console.log("\n"+__dirname+"  ${__dirname} ");
	//win.loadURL('file://' + __dirname + '/dist/ircAPP/index.html');
	//win.loadURL('file://' + __dirname + '/src/index.html');
	win.loadURL("http://localhost:4200");

	win.webContents.openDevTools();

	win.on('closed',function(){
		win =  null;
	});
}



app.on('ready',createWindow);

app.on('window-all-closed',function(){

	if(process.platform!=='darwin'){
		app.quit()
	}
});

app.on('activate',function(){
	if(win===null){
		createWindow();
	}
});

