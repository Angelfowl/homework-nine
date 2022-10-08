
function initListeners () {
    $("nav a").click(function (e) {
        // this listens for ids on the a tags
        let aID = e.currentTarget.id;
        // console.log("a id" + aID);

        let contentID = aID + "Content";
        // console.log (contentID);

        MODEl.updateView(contentID);

        
    });
}


$(document).ready(function () {
    initListeners();
    MODEl.updateView("homeContent");
});