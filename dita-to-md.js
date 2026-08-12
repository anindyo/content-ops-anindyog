const fs = require('fs-extra');
const { stderr } = require('process');
const { exec } = require('child_process');

const mapData = fs.readFileSync('acme-web.ditamap', 'utf-8');
fs.removeSync('out', { recursive: true, force: true }), (error, stdout, stderr) => { 
  if (error) {
    console.error(`Error removing directory: ${error}`);
    return;
  }
  console.log('Directory removed successfully');
  exec("/Users/anindyogupta/dita-ot-4.0.2/bin/dita -i acme-web.ditamap -f markdown -o out", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }
    console.log('Markdown generated successfully');
  }
);
};


