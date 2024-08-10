import { Dispatch, SetStateAction } from "react"

const tipOptions = [
   
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]


type TipPercentageFormProps={
     setTip: Dispatch<SetStateAction<number>>
}

export default function TipPercentageForm({setTip}: TipPercentageFormProps) {
  return (
   
    <div>

        <h3 className="font-black text-2xl">Descuento ONE SHOT:</h3>

        <form action="">
                    {tipOptions.map(tip=> (

                <div key={tip.id} className="flex gap-2">
                    <label htmlFor="">{tip.label}</label>
                    <input type="text" 
                            id={tip.id}
                            type="radio"
                            name="tip"
                            value={tip.value}
                            onChange={e=> setTip(+e.target.value)}
                    />

                </div>

))}
        </form>

    </div>


  )
}
