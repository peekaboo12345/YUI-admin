import { reactive, onActivated, onDeactivated, onMounted } from 'vue';
// import { useRoute } from 'vue-router';
import mitt from '@/config/mitt';
/**
 * 对KeepAlive缓存的页面进行滚动条记录
 */
export default () => {
  // let route = useRoute();
  // 当前组件设置为缓存时保存滚动条信息
  // if(route.meta.keepAlive) {


    let offset = reactive({
      left: 0,
      top: 0
    })
    
    onMounted(() => {
      mitt.emit('scrollChange', offset)
    })

    onActivated(() => {
      mitt.emit('scrollChange', offset)
    })
  
    onDeactivated(() => {
      mitt.emit('getOffset', (obj) => {
        offset.left = obj.left;
        offset.top = obj.top;
      })
    })
  // }
}