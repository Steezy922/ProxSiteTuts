// =========================================================================
// SUBJECT FILE: CHATROOMS
// Use // at the start of any line to write notes for yourself.
// =========================================================================

window.STEEZY_TUTORIALS.push({
    subjectTitle: "Build a Live Chatroom",
    tag: "Chatrooms",
    description: "Make a real-time chatroom where messages appear instantly without refreshing the page.",

    pages: [
        // --- PAGE 1 ---
        {
            pageTitle: "Frontend Chat Layout",
            text: `First, create an index.html file for your chatroom interface. You need a message list, a text box, and a send button:`,
            code: `<ul id="messages"></ul>
<form id="form">
    <input id="input" autocomplete="off" placeholder="Type a message..." />
    <button>Send</button>
</form>`
        },

        // --- PAGE 2 ---
        {
            pageTitle: "Connecting Live WebSockets",
            text: `Using Socket.io, every user connected to your server receives new messages in milliseconds.

Add this to your server.js file:`,
            code: `const io = require('socket.io')(3000, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});`
        }

        // Add Page 3 here by putting a comma after Page 2's } and pasting a new { pageTitle, text, code } block!
    ]
});
