"use client";

import { usePathname } from "next/navigation";

export default function NotFound (){

    const pathname = usePathname();
    const chatroom = pathname.split('/')[2]

    return(
        <>
            <p>
                {chatroom} - Room Not Found
            </p>
        </>
    )
}