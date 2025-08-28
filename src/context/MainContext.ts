"use client"
import { createContext, Dispatch, SetStateAction } from "react";

interface defaultValueProps {
    setCounter: Dispatch<SetStateAction<number>>
    counter: number
    addFunction: () => void
}

const defaultValue: defaultValueProps = {
    addFunction: ()=> {},
    counter: 0,
    setCounter: () => {}
}
export const SomeContext = createContext(defaultValue)
