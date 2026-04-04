let db = {cblockm: "1201", cblockf: "0210"}; // 0 = no door, 1 = no lock, 2 = fine

function refreshStatus(block, gender){
    let currentBlock = window[block + "block" + gender];
    let currentNum
    for (let i = 0; i++; i < db[currentBlock].length){ // figure out way to get length of db.var.length
        let currentNum = db[currentBlock][i];   
        if (currentNum == 0){
            document.getElementById(i).style.backgroundColor("red")
        }
        else if (currentNum == 1){
            document.getElementById(i).style.backgroundColor("orange")
        }
        else if (currentNum == 2){
            document.getElementById(i).style.backgroundColor("green")
        }
        else {
            document.getElementById(i).style.backgroundColor("gray")
        }
    }
}