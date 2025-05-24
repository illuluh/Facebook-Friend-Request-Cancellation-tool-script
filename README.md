<h1 align="center">Facebook Friend Request Canceller</h1>

<p align="center">
  <img src="https://img.shields.io/badge/code-JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/version-1.0.0-blue" alt="Version" />
  <img src="https://img.shields.io/badge/license-CC%20BY--NC--ND%204.0-lightgrey" alt="License" />
</p>

> **Easily cancel Facebook friend requests** — just scroll and let the script do the clicking!

🧹 A lightweight JavaScript tool that helps you cancel multiple **sent friend requests** on Facebook — one batch at a time.

Rather than clicking each **"Cancel request"** button manually, this script automates that part. All **you need to do is scroll**, and it will handle the cancellations.

---

## 💡 How It Works

This script **does not scroll automatically**.

- You scroll manually through the **Sent Requests** list.
- As new requests load in, the script:
  - Detects all visible "Cancel request" buttons
  - Clicks them one by one with a delay
- Once finished with the current batch, it checks again if more buttons are available.
- You can continue scrolling while the script works in the background.

This makes the script lightweight, safe, and non-intrusive — ideal for long friend request lists.

---

## 📦 Version

**v1.0.0** — Initial release

- Basic batch cancellation
- Manual scrolling support
- Logging to console
- Built-in safety delay

---

## ✅ Features

- Manual scrolling: you stay in control
- Detects and cancels each request with delay (to avoid detection)
- Simple to run via browser console
- Automatically re-checks for newly loaded buttons

---

## 🛠️ How to Use

1. Open Facebook and go to: `/friends/requests` (link: https://www.facebook.com/friends/requests).
2. Press on `View sent requests`, A panel will open showing everyone you've sent friend requests to who haven't responded yet.
3. Open your browser's **Developer Console** (`F12` or `Ctrl+Shift+J`).
4. Paste the script and hit **Enter**, [The Script](https://github.com/illuluh/Facebook-Friend-Request-Cancellation-tool-script/blob/main/Script/CancelSentRequestsFinal.js)!

---

## 📜 License

This script is free for personal, non-commercial use.  
If you'd like to contribute or suggest changes, please do so via the official repository.

For full terms, see the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International](https://github.com/illuluh/Facebook-Friend-Request-Cancellation-tool-script/blob/main/LICENSE).
