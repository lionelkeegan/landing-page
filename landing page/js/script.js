document.querySelectorAll(".footerSection .box").forEach((item) => {
    //code to change img title price start from here
    item.addEventListener("click", (event) =>{
        let imgsrc = item.querySelector(".thumbnail img").src;
        let title = item.querySelector(".infobox h5").textContent;
        let price = item.querySelector(".infobox .price").textContent;

        document.querySelector(".bannersection h1").textContent = title;
        document.querySelector(".bannersection .pricebox").textContent = price;
        document.querySelector(".bannersection .imgbox img").src = imgsrc;

        document
        .querySelector(".bannersection .infobox")
        .classList.add("animateLeft");
        document
        .querySelector(".bannersection .imgbox")
        .classList.add("animateRight");

        setTimeout(function(){
            document
            .querySelector(".bannersection .infobox")
            .classList.remove("animateLeft");
            document
            .querySelector(".bannersection .imgbox")
            .classList.remove("animateRight");
        }, 1000);
    });
    //code to change img title price end here

});

setTimeout(function(){
    document.querySelector(".bannersection .infobox").classlist.remove("animateLeft");
    document.querySelector(".bannersection .imgbox").classlist.remove("animateRight");
}, 1000);