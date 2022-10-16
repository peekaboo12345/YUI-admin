import { reactive, onMounted, onBeforeUnmount, toRefs } from 'vue';

export const savePoint = () => {
  let point = reactive({
    x: null,
    y: null
  })

  let savePoints = (e) => {
    point.x = e.pageX;
    point.y = e.pageY
  }

  onMounted(() => {
    window.addEventListener('click', savePoints)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoints)
  })

  return point
}