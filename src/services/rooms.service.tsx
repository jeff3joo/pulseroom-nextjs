//Temporary room data
let room=["room1","room2"]

export const createRoom = async(roomName:string) =>{
    room.push(roomName);
}

export const getRooms = async() =>{
    return room;
}

export const modifyRoom = async(roomName:string,newRoomName:string) =>{

}

export const deleteRoom = async(roomName:string) =>{

}

export const joinRoom = async(roomName:string) =>{
    
}