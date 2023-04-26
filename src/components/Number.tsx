import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import * as React from 'react';

interface Props {
    value:number;
    status:string;
    
}
export default function Number({value, status}:Props) {
  
  const tickets = useAppSelector((state:RootState)=> state.selected.tickets)
  
  return (  
    <div className={'ticket ' + status +(tickets.includes(value)?' select': '')}  >
      {value}
    </div>
  )
}
