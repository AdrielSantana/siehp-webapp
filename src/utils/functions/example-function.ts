import { EXAMPLE } from "../constants"

interface ExampleFunctionParamsDTO {
    exampleFunctionArg: string
}

interface ExampleFunctionResponseDTO {
    isExampleFunctionRight: boolean
}

export function exampleFunction({ exampleFunctionArg }: ExampleFunctionParamsDTO): ExampleFunctionResponseDTO {
    return { isExampleFunctionRight: exampleFunctionArg === EXAMPLE }
}