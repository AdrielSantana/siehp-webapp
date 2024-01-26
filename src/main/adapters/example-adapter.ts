import { ExampleAdapterDTO, GetExampleResponseDTO } from "@/domain/dtos";

export function exampleAdapter({error, example}: GetExampleResponseDTO): ExampleAdapterDTO {
    console.log(error)
    return {
        example: example,
    }
}