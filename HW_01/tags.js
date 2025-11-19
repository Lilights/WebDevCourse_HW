const skins = ["SKINS/shared-skin.css" ,"SKINS/basic.css","SKINS/dark.css","SKINS/modern.css"];


let currSkinIndx = 0;


function skinChng(){
    const link = document.getElementById("skinStyleSheet");

    currSkinIndx = (currSkinIndx+1) % skins.length;
    link.href = skins[currSkinIndx];
}

document.addEventListener("DOMContentLoaded", ()=>{
    const btn = document.getElementById("skinChngBtn");
    btn.addEventListener("click", skinChng);
});