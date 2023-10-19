var table = document.getElementById("table");
imageState = 0;
var current = 0;
Gallerystate = 1;
const ObjectImages = {
    ImgSrc: [''], Info: '', Imagestate2: 0, ChangeImage: function () {
        return this.ImgSrc[this.Imagestate2];
    }
};
const Images = ["./resources/images/Monkey-Selfie2.jpg", "./resources/images/Monkey-Selfie3.jpg", "./resources/images/Monkey-Selfie.jpg"];
var Objects = [];
class tableheader {
    currentrow = 1;
    row = table.insertRow(5);
    setToTable(value) {
        var header = table.createTHead();
        var row = header.insertRow(0);
        const rows = [row.insertCell(0), row.insertCell(1), row.insertCell(2)];
        for (let i = 0; i < 3; i++) {
            var item = value[i];
            var cell = rows[i];
            cell.innerHTML = "<b>" + item + "<b>";
        }
    }
    getCurrent(){
        return this.currentrow;
    }
}
class tablerow extends tableheader {
    constructor() {
        super();
    }
    setToTable(value) {
        Headers = value;
        var row = table.insertRow(super.getCurrent());
        const rows = [row.insertCell(0), row.insertCell(1), row.insertCell(2)];
        for (let i = 0; i < 3; i++) {
            var item = Headers[i];
            var cell = rows[i];
            cell.innerHTML = item;
        }
    }
}
function questionStart() {
    window.setTimeout(question, 200000);
}
function ImageTimer() {
    const imgarray = document.querySelectorAll(".MonkeyImg");
    imgarray.forEach(function(item){
        item.style.display = "none";
    })
    image(imgarray);
    window.setInterval(function() { image(imgarray); }, 3500 )
}
function image(imgarray) {
     $("#ImageLeft img").eq(current).fadeOut(0);
    current++; 
    current = current % imgarray.length;
    $("#ImageLeft img").eq(current).fadeIn(1500);
}
function tableinit() {
    var x;
    tablevartext = new tablerow();
    tablevarheader = new tableheader();
    x = ["Skills", "Experience", "History"];
    tablevarheader.setToTable(x);
    x = ["Soldering", "Beginner", "School projects and hobby projects that I've been a part of! You can see some of the project in the proceeding gallery!"];
    tablevartext.setToTable(x);
    x = ["Welding", "Experienced", "2 years in the working world!"];
    tablevartext.setToTable(x);
    table.style.borderStyle = "groove"
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
    Image1.ImgSrc = ["./resources/images/Monkey_invention.jpg", "./resources/images/Monkey-Selfie.jpg", "./resources/videos/placeholdervideo.mp4"]
    Image1.Info = "Introducing the latest in fruity technology - the Banana Phone! This delightful device combines the convenience of a smartphone with the charm of a banana. With its peel-to-answer feature and a 'split-screen' display, it's a-peeling to users of all ages. Whether you're making a potassium-packed call or checking your daily fruit intake, the Banana Phone is the ultimate blend of fun and functionality. It's the talk of the town and the top choice for those seeking a truly a-mazing mobile experience!"
    Image2 = Object.create(ObjectImages)
    Image2.ImgSrc = ["./resources/images/Monkey_invention2.jpg", "./resources/images/Monkey-Selfie3.jpg"]
    Image2.Info = "Step into the future with the Banana Phone, where innovation meets a-peel! This futuristic fruit device is not only a conversation starter but also a conversation finisher, with its smoothie-quick connection speeds and bunches of cool features. Its ergonomic design fits perfectly in your hand, and the banana-themed emojis will have you going bananas with excitement. So go ahead, split from the ordinary and embrace the yellow side of technology with the Banana Phone!"
    Image3 = Object.create(ObjectImages)
    Image3.ImgSrc = ["./resources/images/Monkey_invention3.png", "./resources/images/Monkey-Selfie2.jpg"]
    Image3.Info = "Banana Phones: The Future is Fruit-tastic! With a sleek, yellow design and a 'peel and dial' interface, these fruity gadgets are taking the tech world by storm. They're not just a snack; they're a statement! Whether you're slipping into a serious business call or sharing a tropical joke, the Banana Phone is the berry best way to stay connected. It's time to go bananas for communication with a twist!"
    Objects =[Image1, Image2, Image3]
    document.getElementById('gallery1').src = Image1.ChangeImage();
    document.getElementById('textInfo').innerHTML = Image1.Info;
}
function GalClickHandler(name) {
    if (Gallerystate < 3 && name === 'next') {
        Gallerystate++;
    } else if (Gallerystate > 1 && name === 'prev') {
        Gallerystate--;
    } else {

    }
    switch (Gallerystate) {
        case 1:
            console.log("1");
            reset();
            typehandler(Image1.ChangeImage(), scrollhandler(Gallerystate),0);
            document.getElementById('amount').innerHTML = Image1.Imagestate2 + 1 + "/" + Image1.ImgSrc.length;
            document.getElementById('textInfo').innerHTML = Image1.Info;
            break;
        case 2:
            console.log("2");
            reset();
            typehandler(Image2.ChangeImage(), scrollhandler(Gallerystate),1);
            document.getElementById('amount').innerHTML = Image2.Imagestate2 + 1 + "/" + Image2.ImgSrc.length;
            document.getElementById('textInfo').innerHTML = Image2.Info;
            break;
        case 3:
            console.log("3");
            reset();
            console.log(Image3.ChangeImage());
            typehandler(Image3.ChangeImage(), scrollhandler(Gallerystate),2);
            document.getElementById('amount').innerHTML = Image3.Imagestate2 + 1 + "/" + Image3.ImgSrc.length;
            document.getElementById('textInfo').innerHTML = Image3.Info;
            break;

    }
}
function ImgClickHandler(name) {
    switch (Gallerystate) {
        case 1:
            if (Image1.ImgSrc.length - 1 > Image1.Imagestate2 && name === "next") {
                Image1.Imagestate2++;
                document.getElementById('amount').innerHTML = Image1.Imagestate2 + 1 + "/" + Image1.ImgSrc.length;
            } else if (Image1.Imagestate2 > 0 && name === "prev") {
                Image1.Imagestate2--;
                document.getElementById('amount').innerHTML = Image1.Imagestate2 + 1 + "/" + Image1.ImgSrc.length;
            }
            console.log(scrollhandler());
            typehandler(Image1.ChangeImage(), scrollhandler(Gallerystate),0);
            break;
        case 2:
            if (Image2.ImgSrc.length - 1 > Image2.Imagestate2 && name === "next") {
                Image2.Imagestate2++;
                document.getElementById('amount').innerHTML = Image2.Imagestate2 + 1 + "/" + Image2.ImgSrc.length;
            } else if (Image2.Imagestate2 > 0 && name === "prev") {
                Image2.Imagestate2--;
                document.getElementById('amount').innerHTML = Image2.Imagestate2 + 1 + "/" + Image2.ImgSrc.length;
            }  
            typehandler(Image2.ChangeImage(), scrollhandler(Gallerystate),1);
            break;
        case 3:
            if (Image3.ImgSrc.length - 1 > Image3.Imagestate2 && name === "next") {
                Image3.Imagestate2++;
                document.getElementById('amount').innerHTML = Image3.Imagestate2 + 1 + "/" + Image3.ImgSrc.length;
            } else if (Image3.Imagestate2 > 0 && name === "prev") {
                Image3.Imagestate2--;
                document.getElementById('amount').innerHTML = Image3.Imagestate2 + 1 + "/" + Image3.ImgSrc.length;
            }
            typehandler(Image3.ChangeImage(), scrollhandler(Gallerystate),2);
            break;
    }
}
function reset(){
    $("#gallerycontainer #gallery2").fadeOut(0);
    $("#gallerycontainer #gallery1").fadeOut(0);
    $("#gallerycontainer #gallery").fadeOut(0);
}
function scrollhandler(){
    if(Gallerystate % 2 == 0){
       return 2;
    } else {
        return 1;
    }
}
function typehandler(value, galstate,object){
    if(value.slice(-4).includes("jpg") || value.slice(-4).includes("png")){
        $("#gallerycontainer #gallery").fadeOut(0);
        $("#gallerycontainer #gallery" + galstate).fadeOut(0);
        document.getElementById('gallery' + galstate).src = Objects[object].ChangeImage();
        $("#gallerycontainer #gallery" + galstate).fadeIn(300);
    } else {
        $("#gallerycontainer #gallery" + galstate).fadeOut(0);
        $("#gallerycontainer #gallery").fadeOut(0);
        document.getElementById('gallery' + galstate).src = Objects[object].ChangeImage();
        $("#gallerycontainer #gallery").fadeIn(300);
    }
}
