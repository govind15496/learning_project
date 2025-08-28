"use client"
import { SomeContext } from "@/context/MainContext"
import { useContext } from "react"

export const IncrementBtn = () => {
    const {addFunction} = useContext(SomeContext);
    
    return(
        <div className="" >

        <button style={{border: '1px solid black', padding: 10}} onClick={addFunction}>Increamnet</button>
        </div>
    )
}