let db = {
  cblockf: {
    status: "1201-",
    date: "1-1-26",
    time: "18:03:32"
  },
  cblockm: {
    status: "0012+",
    date: "12-2-26",
    time: "12:03:21"
  },
  rec1m: {
    status: "221021+",
    date: "12-5-26",
    time: "8:50:32"
  },
  rec1f: {
    status: "222221+",
    date: "12-5-26",
    time: "9:45:12"
  },
  rec2m: {
    status: "222011+",
    date: "16-6-26",
    time: "10:50:49"
  },
  rec2f: {
    status: "122211+",
    date: "22-5-26",
    time: "14:25:11"
  },
  ticker: {
    msg: "Under Maintainence",
    date: "7-6-26",
    time: "9:32:53"
  }
}

function refreshStatus(block, gender) {
  let currentBlock = block + gender;
  let results = [];
  let currentNum;
  let lastUpdated = db[currentBlock].date + " " + db[currentBlock].time;

  for (let i = 0; i < (db[currentBlock].status.length - 1); i++) {
    currentNum = db[currentBlock].status[i];  
    if (currentNum == "0") {
      results.push(`Stall ${i} in ${currentBlock} is unavailable\n`);
    } else if (currentNum == "1") {
      results.push(`Stall ${i} in ${currentBlock} is orange\n`);
    } else if (currentNum == "2") {
      results.push(`Stall ${i} in ${currentBlock} is green\n`);
    }
  }

  if (db[currentBlock].status.endsWith("-")) {  
    results = [];
    results.push(`The ${currentBlock} toilets are out of order`);
  }

  results.push(`Last updated at ${lastUpdated}`);  
  return results;
}

function tickerNews() {
  return db.ticker.msg;
}

console.log(refreshStatus("rec2", "f"));
console.log(tickerNews());