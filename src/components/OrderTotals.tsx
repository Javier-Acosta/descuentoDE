import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderTotalProps={
    order: OrderItem[],
    tip:number
}

export default function OrderTotals({order,tip}:OrderTotalProps) {


    const subtotalAmount =useMemo (()=> order.reduce ((total, item)=>total + (item.quantity * item.price), 0), [order])

    const tipAmount= useMemo (()=>subtotalAmount*tip, [tip,order]) 
    const totalAmount= useMemo (()=>subtotalAmount - tipAmount, [tip,order]) 

  return (
<>
<div className="space-y-3">
<h2 className="font-black text-2xl">Total a pagar con descuento “one shot” </h2>
<p>Subtotal a pagar: {''}
    <span className="font-bold">{formatCurrency (subtotalAmount)} </span>
</p>
<p>“descuento one shot”: {''}
    <span className="font-bold"> {formatCurrency(tipAmount)}</span>
</p>
 
<p>Total a pagar: {''}
    <span className="font-bold"> {formatCurrency(totalAmount)}</span>
</p>
 

</div>
<button></button>
</>
  )
}
