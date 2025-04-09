import { Stamp } from "../../lib/Img";

export interface IMapDoor{
    LeftDoor: number|undefined,
    RightDoor: number|undefined,
    TopDoor: number|undefined,
    BottomDoor: number|undefined,
    LeftDoorImage: Stamp,
    RightDoorImage: Stamp,
    TopDoorImage: Stamp,
    BottomDoorImage: Stamp,
}