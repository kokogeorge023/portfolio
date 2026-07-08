const fs = require('fs');
const path = require('path');

const filePath = 'd:/portofolio/public/projects/newwave/editorial.html';
const content = fs.readFileSync(filePath, 'utf8');

const regex = /<script id="tailwind-config">([\s\S]*?)<\/script>/;
const match = content.match(regex);

if (!match) {
    console.error("No tailwind-config script block found.");
    process.exit(1);
}

const jsCode = match[1];
try {
    // We mock tailwind so we can run the config script
    const tailwind = { config: {} };
    eval(jsCode);
    console.log("Syntax is VALID!");
    console.log("tailwind.config:", JSON.stringify(tailwind.config, null, 2));
} catch (e) {
    console.error("Syntax Error found:", e);
}
