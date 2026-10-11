type StatCardProps = {
  title: string,
  subtitle?: string,
  value: string,
  className?: string
}

function StatCard(props: StatCardProps) {
  return (
      <article className={`stat-card ${props.className ?? ''}`}>
      {/* <StatCard
            title='Total Net Worth'
            className='total-net-worth-StatCard'
            ...
          /> */}
      <h2>{props.title}</h2>
      {props.subtitle && <h3>{props.subtitle}</h3>}
      {/* <h3>{props.subtitle}</h3> */}
      <p>{props.value}</p>
    </article>
  );
}

export default StatCard;