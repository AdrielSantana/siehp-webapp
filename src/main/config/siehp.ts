interface SIEHPConfig {
    baseURL: string
    apiURL: string
}
  
const baseURL = String(process.env.NEXT_PUBLIC_SIEHP_URL)
const apiURL = String(process.env.NEXT_PUBLIC_SIEHP_API_URL)
  
export const SIEHPConfig: SIEHPConfig = {
    baseURL,
    apiURL
}