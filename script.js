let db = {cblockm: "1201-", cblockf: "0210+"}; // if ends with `+`, toilets are in order, `-` means out of order

function refreshStatus(block, gender) {
  let currentBlock = block + "block" + gender;
  let results = []; 
  let currentNum

  for (let i = 0; i < (db[currentBlock].length - 1); i++) {
    currentNum = db[currentBlock][i];

    if (currentNum == "0") {
      results.push(`Stall ${i} in ${currentBlock} is unavailable`);
    }
    else if (currentNum == "1") {
      results.push(`Stall ${i} in ${currentBlock} is orange`);
    }
    else if (currentNum == "2") {
      results.push(`Stall ${i} in ${currentBlock} is green`);
    }
  }
  if (db[currentBlock].endsWith("-")) {
    results = []
    results.push(`The ${currentBlock} toilets are out of order`)
  }
  return results;
}

console.log(refreshStatus("c", "m"));
