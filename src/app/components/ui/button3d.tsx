export function Button3D({ btn, link }: { btn: string; link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn-flip" data-front={btn} data-back="See more"></a>
  )
}