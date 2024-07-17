"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import {React, useEffect, useRef } from "react"

const ModalContext = createContext();

export const ModalPopup = ({children})=>{

    const [open,setOpen] = useState(false);

    return (
        <ModalContext.Provider value={{open,setOpen}}>
            {children}
        </ModalContext.Provider>
    )

}