// =========================================================================
// SUBJECT FILE: GAMES
// Use // for single-line notes, or /* ... */ for multi-line notes.
// =========================================================================

window.STEEZY_TUTORIALS.push({
    subjectTitle: "Make Unblocked HTML5 Games",
    tag: "Games",
    description: "Learn how to code single-file browser games that run directly on GitHub Pages.",

    pages: [
        // --- PAGE 1 ---
        {
            pageTitle: "Setting Up the Game Canvas",
            text: `HTML5 games run 100% inside the browser, so you can host them directly on GitHub Pages with no extra server needed.

Start by adding a canvas tag to your HTML file:`,
            code: `<canvas id="gameCanvas" width="600" height="400" style="background:#000;"></canvas>`
        },

        // --- PAGE 2 ---
        {
            pageTitle: "Creating the 60FPS Game Loop",
            text: `Every browser game uses requestAnimationFrame() to update movement and redraw the screen 60 times per second:`,
            code: `const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let playerX = 50;

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00f0ff';
    ctx.fillRect(playerX, 180, 40, 40);
    requestAnimationFrame(loop);
}
loop();`
        }

        // Add more pages below whenever you want!
    ]
});
