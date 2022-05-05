function saveOptions(e) {
    e.preventDefault();
    console.log("yay");
    browser.storage.sync.set({
        hideThumbnailDuration: document.querySelector("#hideThumbnailDuration").checked,
        hideThumbnailProgressBar: document.querySelector("#hideThumbnailProgressBar").checked,
        hidePlayerProgressBar: document.querySelector("#hidePlayerProgressBar").checked,
        hidePlayerDuration: document.querySelector("#hidePlayerDuration").checked
    });
}

function restoreOptions() {
    function setCurrentChoice(result) {
        document.querySelector("#hideThumbnailDuration").checked = result.hideThumbnailDuration || false;
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting = browser.storage.sync.get("hideThumbnailDuration");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);