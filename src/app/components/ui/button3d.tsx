export function Button3D({ className, btn, link }: { className: string; btn: string; link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={className} data-front={btn} data-back="See more"></a>
  )
}