"use client";

import { useEffect } from "react";

export function ProtectionLayer() {
  useEffect(() => {
    // ===== ANTI-COPY PROTECTION =====

    // Disable right-click context menu
    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Disable text selection
    const disableSelect = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Disable drag
    const disableDrag = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable copy/cut/paste
    const disableCopyPaste = (e: ClipboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
      // Clear clipboard
      if (e.clipboardData) {
        e.clipboardData.setData("text/plain", "");
        e.clipboardData.setData("text/html", "");
      }
      return false;
    };

    // Disable keyboard shortcuts (Ctrl+C, Ctrl+U, Ctrl+S, Ctrl+A, Ctrl+Shift+I, F12, etc.)
    const disableKeyboard = (e: KeyboardEvent) => {
      // F12 - DevTools
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }

      // Ctrl/Cmd combinations
      if (e.ctrlKey || e.metaKey) {
        const blocked = [
          "c", "C",  // Copy
          "x", "X",  // Cut
          "u", "U",  // View Source
          "s", "S",  // Save
          "a", "A",  // Select All
          "p", "P",  // Print
          "j", "J",  // Console (Chrome)
          "h", "H",  // History
        ];

        if (blocked.includes(e.key)) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

        // Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspector)
        if (e.shiftKey && ["I", "i", "J", "j", "C", "c"].includes(e.key)) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }

      return true;
    };

    // Disable print screen
    const disablePrintScreen = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        e.preventDefault();
        // Attempt to clear clipboard on print screen
        navigator.clipboard.writeText("").catch(() => {});
        return false;
      }
    };

    // ===== DEV TOOLS DETECTION =====

    // Detect DevTools via debugger timing
    const detectDevTools = () => {
      const threshold = 160;
      const start = performance.now();
      // eslint-disable-next-line no-debugger
      debugger;
      const end = performance.now();
      if (end - start > threshold) {
        document.body.innerHTML = "<div style='display:flex;align-items:center;justify-content:center;height:100vh;background:#111;color:#fff;font-family:system-ui;font-size:2rem;text-align:center;padding:2rem;'><div><h1>⚠️ Access Denied</h1><p style='font-size:1rem;color:#888;margin-top:1rem;'>Developer tools detected. This content is protected.</p></div></div>";
      }
    };

    // Detect DevTools via console object manipulation
    const detectConsoleOpen = () => {
      const element = new Image();
      let consoleOpen = false;
      Object.defineProperty(element, "id", {
        get: function () {
          consoleOpen = true;
          document.body.innerHTML = "<div style='display:flex;align-items:center;justify-content:center;height:100vh;background:#111;color:#fff;font-family:system-ui;font-size:2rem;text-align:center;padding:2rem;'><div><h1>⚠️ Access Denied</h1><p style='font-size:1rem;color:#888;margin-top:1rem;'>Inspection tools detected. This content is protected.</p></div></div>";
          return "";
        },
      });
      console.log("%c", element as unknown as string);
      return consoleOpen;
    };

    // Detect window resize (DevTools docked)
    let windowWidth = window.outerWidth;
    let windowHeight = window.outerHeight;
    const detectResize = () => {
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;
      if (widthDiff > 200 || heightDiff > 200) {
        // Likely DevTools is open
        document.body.style.filter = "blur(20px)";
        document.body.style.pointerEvents = "none";
      } else {
        document.body.style.filter = "";
        document.body.style.pointerEvents = "";
      }
      windowWidth = window.outerWidth;
      windowHeight = window.outerHeight;
    };

    // ===== ANTI-IFRAME PROTECTION =====
    if (window.top !== window.self) {
      // Site is being loaded in an iframe — break out or blank
      document.body.innerHTML = "<div style='display:flex;align-items:center;justify-content:center;height:100vh;background:#111;color:#fff;font-family:system-ui;font-size:2rem;'><h1>⚠️ Unauthorized Embedding</h1></div>";
    }

    // ===== DISABLE SOURCE VIEW =====
    // Override Ctrl+U behavior
    const disableViewSource = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "u") {
        e.preventDefault();
        window.location.href = "about:blank";
        return false;
      }
    };

    // ===== ATTACH ALL EVENT LISTENERS =====
    document.addEventListener("contextmenu", disableContextMenu, true);
    document.addEventListener("selectstart", disableSelect, true);
    document.addEventListener("dragstart", disableDrag, true);
    document.addEventListener("copy", disableCopyPaste, true);
    document.addEventListener("cut", disableCopyPaste, true);
    document.addEventListener("paste", disableCopyPaste, true);
    document.addEventListener("keydown", disableKeyboard, true);
    document.addEventListener("keydown", disablePrintScreen, true);
    document.addEventListener("keydown", disableViewSource, true);
    window.addEventListener("resize", detectResize);

    // Run DevTools detection periodically
    const devToolsInterval = setInterval(() => {
      detectConsoleOpen();
    }, 3000);

    // Initial resize check
    detectResize();

    // ===== DISABLE TEXT SELECTION VIA CSS (backup) =====
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";
    (document.body.style as unknown as Record<string, string>).msUserSelect = "none";
    (document.body.style as unknown as Record<string, string>).MozUserSelect = "none";

    // ===== CLEANUP =====
    return () => {
      document.removeEventListener("contextmenu", disableContextMenu, true);
      document.removeEventListener("selectstart", disableSelect, true);
      document.removeEventListener("dragstart", disableDrag, true);
      document.removeEventListener("copy", disableCopyPaste, true);
      document.removeEventListener("cut", disableCopyPaste, true);
      document.removeEventListener("paste", disableCopyPaste, true);
      document.removeEventListener("keydown", disableKeyboard, true);
      document.removeEventListener("keydown", disablePrintScreen, true);
      document.removeEventListener("keydown", disableViewSource, true);
      window.removeEventListener("resize", detectResize);
      clearInterval(devToolsInterval);
    };
  }, []);

  // Render nothing visible — this is a protection-only component
  return null;
}
