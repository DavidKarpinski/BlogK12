import { dateFmt } from '../../scripts/dateFmt'

function TimeInfo({ _class, time_read, date }) {
  return (
    <p className={_class}>{time_read} min &bull; {dateFmt(date)}</p>
  )
}

export default TimeInfo