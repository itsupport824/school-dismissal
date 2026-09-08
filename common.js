(function () {
  const classes = [];
  for (let grade = 1; grade <= 6; grade++) {
    for (const letter of ["A", "B", "C", "D", "E"]) {
      classes.push(`${grade}${letter}`);
    }
  }

  window.DISMISSAL_CLASSES = classes;

  window.initFirebaseServices = function () {
    if (!window.FIREBASE_CONFIG || !window.FIREBASE_CONFIG.apiKey ||
        window.FIREBASE_CONFIG.apiKey.includes("PASTE_")) {
      throw new Error("Firebase 尚未設定，請先修改 firebase-config.js");
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(window.FIREBASE_CONFIG);
    }

    return {
      db: firebase.database()
    };
  };

  window.objectKeysTrue = function (obj) {
    if (!obj || typeof obj !== "object") return [];
    return Object.keys(obj).filter(k => obj[k] === true);
  };
})();
