// ==UserScript==
// @name           Novelfire-RPC
// @version        0.1
// @author         Noid
// @icon           https://novelfire.net/apple-touch-icon.png?v=9.1.3
// @description    Share your Novelfire reads with Discord RPC.
//
// @grant GM_notification
//
// @include https://novelfire.net/book/*/chapter-*
// ==/UserScript==

(function() {
    "use strict";

    const el = document.querySelector('.booktitle');
    const ct = document.querySelector('.chapter-title');
    const img = document.querySelector('meta[name="twitter:image"]');

    const Socket = new WebSocket("ws://127.0.0.1:6610");

    let lastPayload = null;

    function sendActivity() {
        if (!el || !ct) return;

        const payload = {
            clientId: "977347206174625895",
            details: el.textContent.trim(),
            state: ct.textContent.trim(),
            largeImageKey: "main",
            largeImageText: el.textContent.trim(),
            startTimestamp: Date.now(),
            buttons: [
                { label: "View Novel", url: el.href},
                { label: "Read Chapter", url: window.location.href }
            ]
        };

        // ✅ Prevent duplicate updates
        if (JSON.stringify(payload) === JSON.stringify(lastPayload)) return;

        lastPayload = payload;

        Socket.send(JSON.stringify(payload));
        console.log("Sent activity:", payload);
    }

    Socket.onopen = () => {
        // Send once on load
        sendActivity();
    };

    // 👀 Detect page changes (important for SPA-like navigation)
    //  const observer = new MutationObserver(() => {
    //      sendActivity();
    //  });
    // might need this later

    //observer.observe(document.body, {
    //    childList: true,
    //    subtree: true
    //});

    Socket.onerror = (err) => {
        console.error("# [Novelfire-RPC] Error:", err);
    };

    Socket.onclose = (err) => {
        console.error("# [Novelfire-RPC] Closed:", err);
    };
})();
