import fetcher from "@lib/request";


export const apiTest = () => {
  return fetcher(process.env.HOST_API_URL + "/route/list")
}


export const apiSelf = () => {
  return fetcher("/api/hello")
}
