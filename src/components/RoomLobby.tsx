"use client";
import * as roomsService from "@/services/rooms.service";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function RoomLobby (){

    const [roomName, setRoomName] = useState("");
    
    const [showError, setShowError] = useState(false);
    const [errorMsg, setErronMsg] = useState("");

    const handleRoomAction = async (
        room: string,
        action: (room: string) => Promise<void>
    ) => {
        if (!room.trim()) {
            setError(true, "Room Name cannot be empty");
            return;
        }

        try {
            await action(room);
            setError(false, "");
        } catch (error: any) {
            setError(true, error.message || "Something went wrong");
        }
    };

    const onCreateRoom = async(room: string) => {
        handleRoomAction(room, roomsService.createRoom)
    }

    const onJoinRoom = async(room: string) => {
        handleRoomAction(room, roomsService.joinRoom)
    }

    const setError = (status:boolean, message:string) =>{
        setErronMsg(message);
        setShowError(status);
    }

    return(
        <div>
            <Grid container sx={{textAlign: "center", minHeight: "80vh"}}>
                <Grid size={12} sx={{}}> 
                    <Typography>
                        Welcome To Pulse Room Website.
                        You can create or Join a Room to chat with others.
                    </Typography>
                </Grid>
                <Grid size={12}>
                    <TextField
                        value={roomName}
                        required
                        id="room-name"
                        label="Room Name"
                        onChange={(e) => setRoomName(e.target.value)}
                    />
                    <Button onClick={()=> onCreateRoom(roomName)}>Create a Room</Button>
                    <Button onClick={()=> onJoinRoom(roomName)}>Join a Room</Button>
                </Grid>
                {
                    showError && (
                        <Grid size={12}>
                            <Box sx={{color: "red"}}>{errorMsg}</Box>
                        </Grid>
                    )
                }
            </Grid>
        </div>
    )
}