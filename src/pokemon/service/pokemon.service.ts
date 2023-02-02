import { HTTPAxiosRequests } from '../../adapter/HTTPAxiosRequests'

export default class PokemonService {
  public async getData<TDataResponse>(endPoint: string) {
    const response = await HTTPAxiosRequests.get<TDataResponse>(endPoint)

    return response
  }
}
