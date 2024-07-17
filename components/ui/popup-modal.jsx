"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import {React, useEffect, useRef, useContext, useState } from "react"

const ModalContext = createContext();

export const ModalPopup = ({children})=>{

    const [open,setOpen] = useState(false);

    return (
        <ModalContext.Provider value={{open,setOpen}}>
            {children}
        </ModalContext.Provider>
    )

}

export const useModal=()=>{
    const context = useContext(ModalContext);
    if(!context){
        throw new Error("useModal must be used within a ModalPopup");
    }
    return context;
}

export function Modal({children}){
    return <ModalPopup>
        {children}
    </ModalPopup>
}
    

export const ModalTrigger = ({children,className})=>{
    const {setOpen} = useModal();

    return (
      <button
      className={cn(
        "px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
        className
      )}
      onClick={()=>setOpen(true)}
      >
        {children}
      </button>
    )

}