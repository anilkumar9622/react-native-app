import { UserRole } from "enum/common";
import { IApiResponse } from "./Common";

export type UserLoginReq = {
    emailId: string;
    password: string;
}

export type UserLoginRes = IApiResponse<{
    accessToken: string;
}>

export type UserData = {
    id: number
    name: string
    emailId: string
    contactNumber: string
    manager: string
    address: string
    zone: string
    joiningDate: string
    isAttendanceMarked: boolean
    role: UserRole
}

export type GetProfileRes = IApiResponse<UserData>