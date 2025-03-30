import { Photo } from "./photo.model"

export interface Member {
    ID: number
    Email: string
    UserName: string
    Age: number
    KnownAs: string
    PhotoURL: string
    Created: Date
    LastActive: Date
    Gender: string
    Introduction: string
    LookingFor: string
    Interests: string
    City: string
    Country: string
    Photos: Photo[]
}


