// import { SIEHPConfig } from '@/main/config/siehp'
// import axios from 'axios'
import { GetExampleParamsDTO, GetExampleResponseDTO } from "@/shared/domain/dtos";
import { ExampleError } from "@/shared/domain/errors";
import { Example } from "@/shared/domain/usecases";
import { CONSTANT } from "@/shared/infra/utils/constants";

export class RemoteExample implements Example {
  async getExample({
    example,
  }: GetExampleParamsDTO): Promise<GetExampleResponseDTO> {
    // const httpResponse = await axios.post<GetExampleResponseDTO>(`${SIEHPConfig.apiURL}/example/${example}`)
    // fingindo requisição
    const httpResponse = {
      data: {
        example: {
          exampleModelAttribute: `${example} ${CONSTANT}`,
        },
        error: undefined,
      },
    };

    if (httpResponse.data.error !== undefined) {
      throw new ExampleError();
    }

    return httpResponse.data;
  }
}
