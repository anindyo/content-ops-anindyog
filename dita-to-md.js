const fs = require('fs-extra');
const { exec } = require('child_process');

// Read the DITA map file
const mapData = fs.readFileSync('acme-web.ditamap', 'utf-8');

// Remove the output directory 'out'
fs.remove('out', (error) => {
  if (error) {
    console.error(`Error removing directory: ${error}`);
    return;
  }
  console.log('Directory removed successfully');

  // Run the DITA command to generate Markdown
  exec("/Users/anindyogupta/dita-ot-4.0.2/bin/dita -i acme-web.ditamap -f html5 -o out/html", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }
    console.log('Output generated successfully');
    console.log(stdout);
  });
});
