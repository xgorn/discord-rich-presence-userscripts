# 🎮 Discord Rich Presence Bridge + Userscripts

A lightweight system to display **custom Discord Rich Presence** from your browser using **Tampermonkey userscripts + a local WebSocket bridge (EXE)**.

---

## ✨ Features

* 🌐 Browser-based Rich Presence
* ⚡ Real-time updates via WebSocket
* 🧩 Easy-to-install userscripts
* 🖥️ Simple EXE (no setup required)
* 🔘 Supports buttons, timestamps, and activity states
* 📦 Expandable for future websites

---

## 📦 Project Structure

```id="e3z2p1"
discord-rpc/
├── userscripts/
│   ├── firenovel-rpc.user.js
│   └── (more coming soon...)
├── README.md
```

> 💡 The EXE file is available in the **Releases tab**, not in the repository.

---

## 🚀 Installation Guide

### 1. Download the Bridge (EXE)

Go to 👉 **Releases** and download:

* `Discord.RPC.Setup.1.0.0.exe`

Run it.

You should see:

```id="o2x91n"
WebSocket running at ws://127.0.0.1:6610
```

---

### 2. Install Tampermonkey

Install Tampermonkey extension on your browser.

---

### 3. Install Userscript

Go to the `userscripts/` folder and install:

* `firenovel-rpc.user.js`

---

### 4. Open Firenovel

Visit Firenovel and start reading.

✅ Your Discord status will update automatically.

---

## 🔁 Auto Start on Windows (IMPORTANT)

If you want the EXE to run automatically when your PC starts:

### ✅ Method 1 (Recommended)

1. Press `Win + R`
2. Type:

   ```
   ```

shell:startup

```
3. Press Enter
4. Copy your `Discord.RPC.Setup.1.0.0.exe` into that folder

➡️ Done! The app will now run every time Windows starts.

---

### ⚙️ Method 2 (Optional - Background)

1. Right click `Discord.RPC.Setup.1.0.0.exe`
2. Create shortcut
3. Move shortcut to:
```

shell:startup

````

---

## 🧠 How It Works

``` id="c4v9dp"
Userscript → WebSocket → EXE → Discord RPC
````

1. Userscript reads page info (book title, chapter, etc.)
2. Sends it to local WebSocket server
3. EXE forwards it to Discord Rich Presence

---

## 🧩 Supported Sites

| Site      | Status           |
| --------- | ---------------- |
| Firenovel | ✅                |
| More      | 🔜               |

---

## ⚙️ Requirements

* Discord Desktop app (must be running)
* Tampermonkey installed
* Windows OS

---

## ⚠️ Notes

* Use Discord Developer Portal assets instead
* Make sure the EXE is running before opening the website

---

## 📌 Roadmap

* [ ] Multi-site auto switching
* [ ] Settings UI
* [ ] Auto-start option inside app

---

## 🤝 Contributing

Pull requests are welcome!

Ideas:

* Add new site support
* Improve detection logic

---

## 📄 License

MIT License

---

## ⭐ Support

If you like this project, consider starring the repo ⭐
