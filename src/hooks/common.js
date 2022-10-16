import { useBaseStore } from '@/store/base'
import { useUserStore } from '@/store/user'
import { useRoute, useRouter} from 'vue-router';
import pinia from '@/store'

export const init = () => {
  let base = useBaseStore(pinia)
  let user = useUserStore(pinia)
  let route = useRoute();
  let router = useRouter();
  return {
    base,
    user,
    route,
    router  
  }
}