/*
 * @Description:
 * @Author: songlin
 * @Date: 2022-06-17 16:37:33
 * @LastEditTime: 2022-06-17 16:40:37
 * @LastEditors: songlin
 */
import { ref } from 'vue'

export function useFetch(url) {
  if (!url) {
    return
  }
  const data = ref(null)
  const error = ref(null)
  fetch(url)
    .then(res => res.json)
    .then(json => (data.value = json))
    .catch(err => (error.value = err))

  return { data, error }
}
