document.getElementById("share").onclick = function () {compartir()};

function compartir(){
    document.getElementById("open-share").style.display="flex";
};

document.getElementById("remove-share").onclick = function () {nocompartir()};

function nocompartir(){
document.getElementById("open-share").style.display="none "
}