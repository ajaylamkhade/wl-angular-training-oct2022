interface Point1 {
    x: number
    y: number
    z:number
  }
  
  function logPoint1(point: Point1): void {
    console.log(`${point.x}, ${point.y}, ${point.z}`)
  }
  
  
  // logs "12, 26"
  const force1 = { x: 12, y: 26 ,z:21}
  logPoint1(force1)
  
 