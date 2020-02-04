var bc = bc || {};
bc.utils = {};

bc.utils.ready = function ready(whenReady) {
  if (document.readyState !== "loading") {
    // Document is already ready, call the callback directly
    whenReady();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener("DOMContentLoaded", whenReady);
  } else {
    // Old IE browsers
    document.attachEvent("onreadystatechange", function() {
      if (document.readyState === "complete") {
        whenReady();
      }
    });
  }
}
