import { notFound } from "next/navigation";

export default async function ChatRoom ({
    params, 
}:{ 
    params: Promise<{chatroom: string}> 
}){
    const {chatroom} = await params;

    const isChatRoomPresent = (chatroom: string): boolean => {
        if(chatroom == "notfound") return false; // for testing

        // logic to be implemented
        return true;
    };

    if(!isChatRoomPresent(chatroom))notFound();

    return(
        <>
            <p>
                ChatRoom {chatroom}
            </p>
        </>
    )
}