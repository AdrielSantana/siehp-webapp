// import { SIEHPConfig } from '@/main/config/siehp'
import { ExampleError } from '@/domain/errors/example-error'
import { Example } from '@/domain/usecases'
// import axios from 'axios'
import { GetExampleParamsDTO, GetExampleResponseDTO } from '@/domain/dtos'
import { CONSTANT } from '@/constants'

export class RemoteExample implements Example {
  async getExample({example}: GetExampleParamsDTO): Promise<GetExampleResponseDTO> {
    // const httpResponse = await axios.post<GetExampleResponseDTO>(`${SIEHPConfig.apiURL}/example/${example}`)
    // fingindo requisição
    const httpResponse = {
      data: {
        example: {
          exampleModelAttribute: `${example} ${CONSTANT}`
        },
        error: undefined
      }
    }

    if (httpResponse.data.error !== undefined) {
      throw new ExampleError()
    }

    return httpResponse.data
  }
}
