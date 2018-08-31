const { app, BrowserWindow, Menu} = require('electron');
const pkg = require('./package.json') // 引用package.json 

const path = require('path')
const url = require('url')

// 关闭安全警告 
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true


// 浏览器引用
let window;

// 创建浏览器窗口函数
let createWindow = () => {
  // 创建浏览器窗口
  window = new BrowserWindow({
    width: 800,
    height: 600
  });

  //加载应用中的index.html文件
  //window.loadFile('./build/index.html/');
  //通过控制 package.json 中的 DEV 来确定开发 && 生产。"DEV": true 开发环境，反之亦然
  
  //   默认情况下，homepage是 http://localhost:3000 ,
  //   build后，所有资源文件路径都是 /static，而Electron调用的入口是以file：协议，
  //   /staitc就会定位到系统的根目录去，所以找不到静态文件。
  //   在package.json文件中添加homepage字段并设置为"."后，静态文件的路径就变成了相对路径，就能正确的找到了。
  //   /static/js/main.355578ff.js => 变为 ./static/js/main.6b9f1149.js
  if(pkg.DEV) { 
    window.loadURL("http://localhost:3000/")
  } else { 
    //console.log(__dirname);
    //window.loadURL('file://' + __dirname + '/build/index.html')
    window.loadFile('./build/index.html/');
  }

  window.webContents.openDevTools({mode:'bottom'});
  //在console里输入 require('electron-react-devtools').install()
  //按f5刷新，则会出现调试react的选项

  // 当window被关闭时，除掉window的引用
  window.on('closed', () => {
    window = null;
  });

  //菜单创建
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};

// 当app准备就绪时候开启窗口
app.on('ready', createWindow);

//当全部窗口都被关闭之后推出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 在macos上，单击dock图标并且没有其他窗口打开的时候，重新创建一个窗口
app.on('activate', () => {
  if (window == null) {
    createWindow();
  }
});






const template = [
  {
     label: 'Edit',
     submenu: [
        {
           role: 'undo'
        },
        {
           role: 'redo'
        },
        {
           type: 'separator'
        },
        {
           role: 'cut'
        },
        {
           role: 'copy'
        },
        {
           role: 'paste'
        }
     ]
  },
  
  {
     label: 'View',
     submenu: [
        {
           role: 'reload'
        },
        {
           role: 'toggledevtools'
        },
        {
           type: 'separator'
        },
        {
           role: 'resetzoom'
        },
        {
           role: 'zoomin'
        },
        {
           role: 'zoomout'
        },
        {
           type: 'separator'
        },
        {
           role: 'togglefullscreen'
        }
     ]
  },
  
  {
     role: 'window',
     submenu: [
        {
           role: 'minimize'
        },
        {
           role: 'close'
        }
     ]
  },
  
  {
     role: 'help',
     submenu: [
        {
           label: 'Learn More'
        }
     ]
  }
]