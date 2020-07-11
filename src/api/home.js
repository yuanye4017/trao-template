import http from '@/service/http'

export const getDemo = () => {
  return http.get('/demo')
}
