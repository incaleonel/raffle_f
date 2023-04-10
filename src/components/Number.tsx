
interface Props {
    value:number,
    status:string
}
export default function Number({value, status}:Props) {
  return (
    <div className={'ticket ' + status}>
      {value}
    </div>
  )
}
