import request from '@/utils/request';

export const test = data => {
  return request({
    url: 'test',
    method: 'post',
    data: data
  })
}