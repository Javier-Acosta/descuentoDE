import { useState } from "react"
import type { MenuItem } from "../types"
import { OrderItem } from '../types/index';

export default function useOrder (){
    const [order, setOrder]= useState <OrderItem[]>([])
   

    const addItem=(item:MenuItem)=> {
        
        const itemExist= order.find(OrderItem => OrderItem.id === item.id)

        if (itemExist){
            const   updateOrder=order.map (OrderItem=>OrderItem.id === item.id ? {...OrderItem, quantity:OrderItem.quantity+1}: OrderItem)
            setOrder (updateOrder)
            
        }else{

            const newItem  ={...item, quantity :1}
            setOrder ([...order,newItem])
            
        }


    }
     const removeItem=(id:MenuItem['id']) => {
        setOrder(order.filter(item => item.id !==id))
        
    }
    
    return{
        order,
        addItem,
        removeItem
    }
}