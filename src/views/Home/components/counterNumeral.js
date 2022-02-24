import React from 'react'
import CounterNumber from '../../../components/Counter/counter';

const CounterNumerals = (props) => {
    const { DataFake } = props

    return (
        <>
            <div class="grid grid-cols-4 content-center justify-items-center">
                {DataFake && DataFake.length ? DataFake.map(item => {
                    return (
                        <>
                            <div className=' content-center justify-items-center text-center'>
                               <h5>{item.title}</h5> 
                                <CounterNumber  sending = {item.quantity}/>
                            </div>
                        </>
                    )
                }) : null}
            </div>
        </>
    )
}
export default CounterNumerals