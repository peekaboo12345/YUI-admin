import {reactive} from 'vue';
export default (url) => {
  let data = reactive({
    msg: url,
    data: [],
    code: 200
  })

  return data
}