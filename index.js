function superbowlWin(record1){
 
    let winRecord = record1.find(win => win.result === "W")
   return (winRecord !== undefined) ? winRecord.year : undefined

   }
