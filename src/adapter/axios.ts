import axios from 'axios'

const axiosProvider = axios.create()

export async function getData<TDataResponse>(endPoint: string) {
  const response = await axiosProvider.get<TDataResponse>(endPoint)

  return response
}
