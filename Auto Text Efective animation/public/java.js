const containerEl =document.querySelector(".container");
const career =["YouTuber","Web Developer","Cloud Engineer","Esports PlaYer","Instructor"]

let carrerindex =0;
let chacindex =0;

updatetext()
function updatetext()
{
    chacindex++;
    containerEl.innerHTML = ` <h1> I am ${career[carrerindex].slice(0,1) === 'I' ? "an" : 'a'} ${career[carrerindex].slice(0,chacindex)}</h1>`;
    
    if(chacindex ===career[carrerindex].length){
        carrerindex++;
        chacindex=0;
    }
    if(carrerindex === career.length){
        carrerindex=0;
    }
    setTimeout(()=>{
            updatetext()
    },400)

}


