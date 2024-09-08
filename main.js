import { app, BrowserWindow, ipcMain, screen } from 'electron';
import { IS_WINDOWS_11, MicaBrowserWindow } from 'mica-electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let isMaximized = false; // Track the window state
const defaultWidth = 1160;
const defaultHeight = 600;

function createWindow() {
  const win = new MicaBrowserWindow({
    width: defaultWidth,
    height: defaultHeight,
    frame: false, // Frameless window
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (IS_WINDOWS_11) {
    win.setMicaEffect();
  } else {
    win.setAcrylicEffect();
  }

  win.loadURL('http://localhost:5173');

  // Polyfill for requestAnimationFrame
  const requestAnimationFrame = (callback) => {
    return setTimeout(() => {
      callback(Date.now());
    }, 1000 / 60); // 60 FPS
  };

  // Function to lerp the window size and position
  function lerpWindowSize(targetWidth, targetHeight, targetX, targetY, duration) {
    const startWidth = win.getSize()[0];
    const startHeight = win.getSize()[1];
    const startX = win.getPosition()[0];
    const startY = win.getPosition()[1];
    const startTime = Date.now();

    function animate() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const newWidth = startWidth + (targetWidth - startWidth) * progress;
      const newHeight = startHeight + (targetHeight - startHeight) * progress;
      const newX = startX + (targetX - startX) * progress;
      const newY = startY + (targetY - startY) * progress;

      win.setBounds({
        x: Math.round(newX),
        y: Math.round(newY),
        width: Math.round(newWidth),
        height: Math.round(newHeight)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    animate();
  }

  // Toggle maximize and restore window with animation
  function toggleMaximize() {
    if (isMaximized) {
      lerpWindowSize(defaultWidth, defaultHeight, 20, 20, 70); // Restore to default size and position
    } else {
      const { width, height } = screen.getPrimaryDisplay().workAreaSize;
      lerpWindowSize(width, height, 0, 0, 70); // Maximize to full screen
    }
    isMaximized = !isMaximized;
  }

  win.webContents.once('dom-ready', () => {
    win.show();
  });

  ipcMain.on('minimize-window', () => {
    win.minimize();
  });

  ipcMain.on('maximize-window', toggleMaximize);

  ipcMain.on('close-window', () => {
    win.close();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
