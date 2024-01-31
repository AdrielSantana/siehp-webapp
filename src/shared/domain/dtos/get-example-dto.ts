import { ExampleModel } from "../models"

export interface GetExampleParamsDTO {
    example: string
}

export interface GetExampleResponseDTO {
    example: ExampleModel
    error?: string
}

export interface ExampleAdapterDTO {
    example: ExampleModel
}