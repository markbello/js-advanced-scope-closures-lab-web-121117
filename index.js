function produceDrivingRange(maxDistance){
  return function(start, end){
    let startNum = start.match(/\d+/)
    let endNum = end.match(/\d+/)
    const tripLength = Math.abs(startNum - endNum)

    if(tripLength < maxDistance) {
      return `within range by ${maxDistance - tripLength}`
    } else{
      return `${Math.abs(maxDistance - tripLength)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(totalCost){
    return totalCost * percentage
  }
}
