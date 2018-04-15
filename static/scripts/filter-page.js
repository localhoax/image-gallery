cnv = document.getElementById("canvas");
cntxt = cnv.getContext("2d");
let img = new Image();
let filename = "";
let extension = "";
let newFilename = "";
img.src = sessionStorage.getItem("current-img") || NaN;
const downloadBtn = document.getElementById("dl-btn");
const revertBtn = document.getElementById("revert-btn");
img.onload = function () {
    cnv.width = img.width;
    cnv.height = img.height;
    cntxt.drawImage(img, 0, 0, img.width, img.height);
    cnv.removeAttribute("data-caman-id");
    Caman(cnv, img, function () {
        this.render();
    })
    filename = img
        .src
        .split('/')[4];
    extension = filename.split('.');
    extension = extension[extension.length - 1];
    filename = filename.split("." + extension);
    newFilename = filename[0] + '-edited.' + extension;
}
document.addEventListener("click", e => {
    if (e.target.classList.contains("filter-btn")) {
        if (e.target.classList.contains("brightness-add")) {
            Caman("#canvas", img, function () {
                this
                    .brightness(5)
                    .render();
            });
        } else if (e.target.classList.contains("brightness-remove")) {
            Caman("#canvas", img, function () {
                this
                    .brightness(-5)
                    .render();
            });
        } else if (e.target.classList.contains("contrast-add")) {
            Caman("#canvas", img, function () {
                this
                    .contrast(5)
                    .render();
            });
        } else if (e.target.classList.contains("contrast-remove")) {
            Caman("#canvas", img, function () {
                this
                    .contrast(-5)
                    .render();
            });
        } else if (e.target.classList.contains("saturation-add")) {
            Caman("#canvas", img, function () {
                this
                    .saturation(5)
                    .render();
            });
        } else if (e.target.classList.contains("saturation-remove")) {
            Caman("#canvas", img, function () {
                this
                    .saturation(-5)
                    .render();
            });
        } else if (e.target.classList.contains("vibrance-add")) {
            Caman("#canvas", img, function () {
                this
                    .vibrance(5)
                    .render();
            });
        } else if (e.target.classList.contains("vibrance-remove")) {
            Caman("#canvas", img, function () {
                this
                    .vibrance(-5)
                    .render();
            });
        } else if (e.target.classList.contains("vintage-add")) {
            Caman("#canvas", img, function () {
                this
                    .vintage()
                    .render();
            });
        } else if (e.target.classList.contains("lomo-add")) {
            Caman("#canvas", img, function () {
                this
                    .lomo()
                    .render();
            });
        } else if (e.target.classList.contains("clarity-add")) {
            Caman("#canvas", img, function () {
                this
                    .clarity()
                    .render();
            });
        } else if (e.target.classList.contains("sincity-add")) {
            Caman("#canvas", img, function () {
                this
                    .sinCity()
                    .render();
            });
        } else if (e.target.classList.contains("crossprocess-add")) {
            Caman("#canvas", img, function () {
                this
                    .crossProcess()
                    .render();
            });
        } else if (e.target.classList.contains("pinhole-add")) {
            Caman("#canvas", img, function () {
                this
                    .pinhole()
                    .render();
            });
        } else if (e.target.classList.contains("nostalgia-add")) {
            Caman("#canvas", img, function () {
                this
                    .nostalgia()
                    .render();
            });
        } else if (e.target.classList.contains("hermajesty-add")) {
            Caman("#canvas", img, function () {
                this
                    .herMajesty()
                    .render();
            });
        }
    }
});
// Revert Filters
revertBtn.addEventListener("click", e => {
    Caman("#canvas", img, function () {
        this.revert();
    });
});
downloadBtn.addEventListener("click", () => {
    download(cnv, newFilename);
});
downloadNav = document.getElementById('nav-download-btn');

downloadNav.addEventListener("click", () => {
    download(cnv, newFilename);
});
function download(canvas, filename) {
    // Init event
    let e;
    // Create link
    const link = document.createElement("a");
    // Set props
    link.download = filename;
    link.href = canvas.toDataURL("image/jpeg", 0.8);
    // New mouse event
    e = new MouseEvent("click");
    // Dispatch event
    link.dispatchEvent(e);
}