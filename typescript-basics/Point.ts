interface Point {
    x: number
    y: number
    z:string
  }
  
  function logPoint(point: Point): void {
    console.log(`${point.x}, ${point.y},${point.z}`)
  }
  
  

  // logs "12, 26"
  const force = { x: 12, y: 26,z:"ajay"}
  logPoint(force)
  
  