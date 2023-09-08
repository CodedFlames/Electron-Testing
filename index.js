const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 500,
  });
  win.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();
  console.log("App READY!");
});
