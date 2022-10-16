// 跟据窗口变化，调整显示元素的缩放比例，让元素等比例显示在窗口之间
import { onMounted, ref } from "vue";

let app = ref(null);
let content = ref(null);
let computedScale = () => {
  let height = app.value.clientHeight;
  let width = app.value.clientWidth;

  let contentHeight = 1080;
  let contentWidth = 1980;

  let baseSize = parseFloat(contentWidth / contentHeight).toFixed(5);
  let win = parseFloat(width / height).toFixed(5);

  if(win > baseSize) {
    const scaleWidth = parseFloat( (height * baseSize) / contentWidth ).toFixed(5)
    setStyle(scaleWidth)
  } else {
    const scaleHeight = parseFloat(width / baseSize / contentHeight).toFixed(5)
    setStyle(scaleHeight)
  }
}

const setStyle = (scale) => {
  content.value.style = 'transform: scale(' + scale +')'
}

onMounted(() => {
  computedScale()
  window.addEventListener('resize', computedScale)
})