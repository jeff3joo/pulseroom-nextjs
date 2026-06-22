import { notFound } from "next/navigation";
import { Metadata } from "next";
import ChatPage from "@/components/ChatPage";

type Props = {
    params: Promise<{chatroom: string}> 
}

export const generateMetadata = async({params}: Props): Promise<Metadata> => {
    const {chatroom} = await params;
    return {
        title: `ChatRoom | ${chatroom}`,
    }
}


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
            <ChatPage room={chatroom} />
        </>
    )
}