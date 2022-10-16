<script>
import { h } from 'vue';
import { RouterLink } from 'vue-router';
import { isLink } from '@/utils'
export default {
  name: 'z-link',
  props: {
    href: String,
    title: String,
  },
  setup(props){
    let { href, title } = props;
    return () => {
      if(isLink(href)) {
        return h('a', {
          href: href,
          class: 'router-link',
          target: '_blank',
        }, h('span', title))
      } else {
        return h(RouterLink, {
          to: href,
          class: 'router-link',
        }, () => h('span', title)); // 这里不使用函数返回就会出警告
      }
    }
  },
}
</script>