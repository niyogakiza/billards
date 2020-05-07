/**
 *
 * @param force
 * @param ref
 */
export default function shoot(force, ref){
  const angle = ref.current.rotation.z - (-90 * Math.PI) / 180
  const speedX = Math.cos(angle) * force
  const speedY = Math.sin(angle) * force
  ref.current.speed.x = speedX
  ref.current.speed.y = speedY
}