/**
 *
 * @param ballRef
 */
export default function pocketed(ballRef){
  ballRef.current.speed.x = 0
  ballRef.current.speed.y = 0
  ballRef.current.position.set(50, 50, 0)
}