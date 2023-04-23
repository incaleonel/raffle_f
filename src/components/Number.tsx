import * as React from 'react';

interface Props {
    value:number;
    status:string;
    
}
export default function Number({value, status}:Props) {
  const [select, setSelect] = React.useState<boolean>(false);
  
  const handleClick = ()=>{
    setSelect(!select);
  }

  return (
    <div className={'ticket ' + status +(select?' select': '')} onClick={handleClick}  >
      {value}
    </div>
  )
}
