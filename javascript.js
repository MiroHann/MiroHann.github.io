imageState = 0;
Gallerystate = 1;
const ObjectImages = {
    ImgSrc: [''], Info: '', Imagestate2: 0, ChangeImage: function () {
        return this.ImgSrc[this.Imagestate2];
    }
};
const Images = ["./resources/images/Monkey-Selfie2.jpg", "./resources/images/Monkey-Selfie3.jpg", "./resources/images/Monkey-Selfie.jpg"];
function questionStart() {
    window.setTimeout(question, 2000000);
}
function ImageTimer() {
    window.setInterval(image, 2000)
}
function image() {
    switch (imageState) {
        case 0:
            document.getElementById('Monkey').src = Images[0];
            imageState++;
            break;
        case 1:
            document.getElementById('Monkey').src = Images[1];
            imageState++;
            break;
        case 2:
            document.getElementById('Monkey').src = Images[2];
            imageState = 0;
            break;
    }
}
function question() {
    let Answer = prompt("Are you liking the site?", "Yes");
    if (Answer == "Yes") {
        alert("Nice to hear!");
    } else if (Answer == "No") {
        alert("That's a shame");
        document.getElementById("Smiley").innerHTML = "&#128542;"
    } else {
        alert("Can't quite understand");
        document.getElementById("Smiley").innerHTML = "&#128563;"
    }
}
function ObjectInit() {
    Image1 = Object.create(ObjectImages)
    Image1.ImgSrc = ["./resources/images/Monkey_invention.jpg", "./resources/images/Monkey-Selfie.jpg"]
    Image1.Info = "Ring Ring"
    Image2 = Object.create(ObjectImages)
    Image2.ImgSrc = ["./resources/images/Monkey_invention2.jpg", "./resources/images/Monkey-Selfie3.jpg"]
    Image2.Info = "Ring Ring Ring"
    Image3 = Object.create(ObjectImages)
    Image3.ImgSrc = ["./resources/images/Monkey_invention3.png", "./resources/images/Monkey-Selfie2.jpg"]
    Image3.Info = "Banana Phone!"
    document.getElementById('gallery').src = Image1.ChangeImage();
    document.getElementById('textInfo').innerHTML = Image1.Info;
}
function GalClickHandler(name) {
    if (Gallerystate < 3 && name === 'next') {
        Gallerystate++;
    } else if (Gallerystate > 1 && name === 'prev') {
        Gallerystate--;
    }
    switch (Gallerystate) {
        case 1:
            document.getElementById('gallery').src = Image1.ChangeImage();
            document.getElementById('amount').innerHTML = Image1.Imagestate2 + 1 + "/" + Image1.ImgSrc.length;
            document.getElementById('textInfo').innerHTML = Image1.Info;
            break;
        case 2:
            document.getElementById('gallery').src = Image2.ChangeImage();
            document.getElementById('amount').innerHTML = Image2.Imagestate2 + 1 + "/" + Image2.ImgSrc.length;
            document.getElementById('textInfo').innerHTML = Image2.Info;
            break;
        case 3:
            document.getElementById('gallery').src = Image3.ChangeImage();
            document.getElementById('amount').innerHTML = Image3.Imagestate2 + 1 + "/" + Image3.ImgSrc.length;
            document.getElementById('textInfo').innerHTML = Image3.Info;
            break;

    }
}
function ImgClickHandler(name) {
    console.log("GalleryState: " + Gallerystate);
    console.log(name);
    switch (Gallerystate) {
        case 1:
            if (Image1.ImgSrc.length - 1 > Image1.Imagestate2 && name === "next") {
                Image1.Imagestate2++;
                document.getElementById('amount').innerHTML = Image1.Imagestate2 + 1 + "/" + Image1.ImgSrc.length;
            } else if (Image1.Imagestate2 > 0 && name === "prev") {
                Image1.Imagestate2--;
                document.getElementById('amount').innerHTML = Image1.Imagestate2 + 1 + "/" + Image1.ImgSrc.length;
            }
            document.getElementById('gallery').src = Image1.ChangeImage();
            break;
        case 2:
            if (Image2.ImgSrc.length - 1 > Image2.Imagestate2 && name === "next") {
                Image2.Imagestate2++;
                document.getElementById('amount').innerHTML = Image2.Imagestate2 + 1 + "/" + Image2.ImgSrc.length;
            } else if (Image2.Imagestate2 > 0 && name === "prev") {
                Image2.Imagestate2--;
                document.getElementById('amount').innerHTML = Image2.Imagestate2 + 1 + "/" + Image2.ImgSrc.length;
            }
            document.getElementById('gallery').src = Image2.ChangeImage();
            break;
        case 3:
            if (Image3.ImgSrc.length - 1 > Image3.Imagestate2 && name === "next") {
                Image3.Imagestate2++;
                document.getElementById('amount').innerHTML = Image3.Imagestate2 + 1 + "/" + Image3.ImgSrc.length;
            } else if (Image3.Imagestate2 > 0 && name === "prev") {
                Image3.Imagestate2--;
                document.getElementById('amount').innerHTML = Image3.Imagestate2 + 1 + "/" + Image3.ImgSrc.length;
            }
            document.getElementById('gallery').src = Image3.ChangeImage();
            break;
    }
}