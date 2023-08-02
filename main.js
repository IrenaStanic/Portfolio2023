let kontejnerSlike = document.querySelector(".imageContainer");
let left = document.querySelector(".leva");
let right = document.querySelector(".desna");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let niz = [];
right.addEventListener("click", rightPokreni);
left.addEventListener("click", leftPokreni);
start.addEventListener("click", startuj);
stop.addEventListener("click", stopiraj);
let slika, trenutnaSlika;

priUcitavanjuStranice();
function priUcitavanjuStranice(){
    for(let i = 0; i<=6; i++){
        niz.push(i);
    }
    trenutnaSlika = 0;
slika = document.createElement("img");
slika.src = `./images_projects/${niz[trenutnaSlika]}.png`;
kontejnerSlike.appendChild(slika);
napraviTackice();
aktivnaSlika();
}
function rightPokreni(){
    trenutnaSlika++;
    if(trenutnaSlika == niz.length) {
        trenutnaSlika=0}
    slika.src = `./images_projects/${niz[trenutnaSlika]}.png`;
    aktivnaSlika();
}
function leftPokreni(){
    trenutnaSlika--;
    if(trenutnaSlika == -1) {trenutnaSlika = niz.length-1}
    slika.src = `./images_projects/${niz[trenutnaSlika]}.png`;
    aktivnaSlika();
}
let timer;
function startuj(){
   timer = setInterval(rightPokreni,2000);
   aktivnaSlika();
}
function stopiraj(){
    clearInterval(timer);
}
function napraviTackice(){
    let div = document.createElement("div");
    div.classList.add("dots");
    kontejnerSlike.appendChild(div);
    for(let i=0; i<niz.length; i++){
        let spanTacka = document.createElement("span");
        spanTacka.classList.add("dot");
        div.appendChild(spanTacka);
        spanTacka.addEventListener("click", function(){
            promeniSliku(i);
        });
    }
}

function promeniSliku(index){
    trenutnaSlika = index;
    slika.src = `./images_projects/${niz[trenutnaSlika]}.png`;
    aktivnaSlika();
}

function aktivnaSlika(){
    let svetacke = document.querySelectorAll(".dot");
    svetacke[trenutnaSlika].classList.add("active");
    for(let i=0; i<niz.length;i++){
        if(i!=trenutnaSlika){
            svetacke[i].classList.remove("active");
        }
    }
}
