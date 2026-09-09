import greekColumn from '../../assets/greek_column.png'

export function ProjectsColumn() {
  return (
    <div aria-hidden="true" className="relative -mt-1.5 h-[clamp(150px,17vw,240px)]">
      <div
        className="absolute inset-y-0 left-1/2 w-[78%] -translate-x-1/2 filter-[drop-shadow(0_14px_28px_rgba(10,8,32,.55))]"
        style={{
          backgroundImage: `url(${greekColumn})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: '100% auto',
        }}
      />
    </div>
  )
}
