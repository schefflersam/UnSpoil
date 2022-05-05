function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
        hideThumbnailDuration: document.querySelector("#hideThumbnailDuration").checked,
        hideThumbnailProgressBar: document.querySelector("#hideThumbnailProgressBar").checked,
        hidePlayerProgressBar: document.querySelector("#hidePlayerProgressBar").checked,
        hidePlayerDuration: document.querySelector("#hidePlayerDuration").checked
    });
}

function restoreOptions() {
    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let gettingHideThumbnailDuration = browser.storage.sync.get("hideThumbnailDuration");
    gettingHideThumbnailDuration.then((result) => {
        document.querySelector("#hideThumbnailDuration").checked = result.hideThumbnailDuration || false;
    }, onError);

    let gettingHideThumbnailProgressBar = browser.storage.sync.get("hideThumbnailProgressBar");
    gettingHideThumbnailProgressBar.then((result) => {
        document.querySelector("#hideThumbnailProgressBar").checked = result.hideThumbnailProgressBar || false;
    }, onError);

    let gettingHidePlayerProgressBar = browser.storage.sync.get("hidePlayerProgressBar");
    gettingHidePlayerProgressBar.then((result) => {
        document.querySelector("#hidePlayerProgressBar").checked = result.hidePlayerProgressBar || false;
    }, onError);

    let gettingHidePlayerDuration = browser.storage.sync.get("hidePlayerDuration");
    gettingHidePlayerDuration.then((result) => {
        document.querySelector("#hidePlayerDuration").checked = result.hidePlayerDuration || false;
    }, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);