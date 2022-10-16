<script>
import { h } from 'vue';
export default {
  name: 'z-icon',
  props: {
    icon: String
  },
  setup(props){
    let { icon } = props;
    return () => {
      if(/svg/.test(icon)) {
        return h({
          template: `<svg-icon :name="${icon}"></svg-icon>`
        })
      } else {
        return h({
          template: `<el-icon><${icon}/></el-icon>`
        })
      }
      
    }
  },
}
</script>