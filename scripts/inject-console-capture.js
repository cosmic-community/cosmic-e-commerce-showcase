const fs = require('fs');
const path = require('path');

function injectScript(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('dashboard-console-capture.js')) {
      return;
    }
    
    const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
    
    if (content.includes('</head>')) {
      content = content.replace('</head>', `  ${scriptTag}\n  </head>`);
    } else if (content.includes('<head>')) {
      content = content.replace('<head>', `<head>\n    ${scriptTag}`);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Injected console capture script into ${filePath}`);
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

const buildDir = path.join(process.cwd(), '.next');
if (fs.existsSync(buildDir)) {
  processDirectory(buildDir);
  console.log('✨ Console capture script injection complete');
} else {
  console.log('⚠️  Build directory not found. Run this script after building your app.');
}