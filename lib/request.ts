/**
 * Next.js 封装 fetch 函数
 * @param {string} url 请求地址
 * @param {object} options 请求选项
 * @param {object} options.headers 请求头，可以自定义修改
 * @param {string} options.method 请求方法，默认为 GET
 * @param {any} options.body 请求主体（文本、Blob、BufferSource、FormData、URLSearchParams 等）
 * @param {string} options.credentials 请求凭证模式（默认为 same-origin）
 */
interface FetchOptions extends RequestInit {
  headers?: HeadersInit
}
const fetcher = async (
  url: string,
  options: FetchOptions = {}
): Promise<any> => {
  const { headers, ...rest } = options
  const requestOptions: RequestInit = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(headers ? headers : {}),
    },
    ...rest,
  }

  const response = await fetch(url, requestOptions)

  if (!response.ok) {
    const error = new Error(response.statusText || '请求失败')
    error.message = JSON.stringify(response)
    throw error
  }

  const data = await response.json()
  return data
}

export default fetcher
