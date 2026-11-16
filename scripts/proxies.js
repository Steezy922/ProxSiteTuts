// =========================================================================
// SUBJECT FILE: PROXIES
// Lines starting with // are private notes just for you in the code.
// =========================================================================

window.STEEZY_TUTORIALS.push({
    // The main title shown on the homepage card
    subjectTitle: "How to Make a Web Proxy",

    // The small glowing badge above the title
    tag: "Proxies",

    // The short summary shown on the homepage card
    description: "Learn how web proxies work and how to build and host your own working proxy site.",

    // =====================================================================
    // PAGES LIST
    // Each { ... } block below is 1 page. Add as many as you want!
    // =====================================================================
    pages: [
        // --- PAGE 1 ---
        {
            pageTitle: "How Proxies Actually Work",
            text: `A web proxy acts as a middleman between your browser and the website you want to visit.

Instead of your browser asking for a blocked site directly, your browser asks your proxy server. Your server fetches the page and sends it back to you.

Click Next Page below to set up the server code.`,
            code: "" // Leave empty "" if you don't want a code box on this page
        },

        // --- PAGE 2 ---
        {
            pageTitle: "Setting Up the Backend Server",
            text: `GitHub Pages only hosts static HTML, so your proxy backend needs a Node.js host like Render, Railway, or Glitch.

1. Create a new project folder and run: npm init -y
2. Install Express and proxy middleware: npm install express http-proxy-middleware
3. Create an index.js file and paste this code:`,
            code: `const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/service', createProxyMiddleware({
    target: 'https://example.com',
    changeOrigin: true,
    pathRewrite: { '^/service': '' }
}));

app.listen(3000, () => console.log('Proxy running on port 3000'));`
        },

        // --- PAGE 3 ---
        {
            pageTitle: "Adding an about:blank Cloaker",
            text: `Once your proxy is live, you can hide your site URL from browser history by opening it inside an about:blank tab.

Add this function to your homepage button:`,
            code: `function cloakSite(url) {
    const win = window.open('about:blank', '_blank');
    const iframe = win.document.createElement('iframe');
    iframe.style.cssText = "position:fixed;inset:0;width:100%;height:100%;border:none;";
    iframe.src = url;
    win.document.body.appendChild(iframe);
}`
        }

        // =================================================================
        // HOW TO ADD PAGE 4 (OR MORE):
        // 1. Put a comma , after the closing } of Page 3 above.
        // 2. Copy the template below, remove the /* and */, and fill it in!
        // =================================================================
        /*
        ,
        {
            pageTitle: "Page 4 Title Goes Here",
            text: `Write your tutorial instructions here.
Pressing Enter creates a new line automatically.`,
            code: `Paste your code example here (or leave as "" for no code box)`
        }
        */
    ]
});
