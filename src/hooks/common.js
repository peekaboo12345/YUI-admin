import { useBaseStore } from '@/store/base';
import { useCommonStore } from '@/store/common';
import router from '@/router';
import { useRoute } from 'vue-router';
import pinia from '@/store';

export const init = () => {
  let base = useBaseStore(pinia);
  let common = useCommonStore(pinia);
  let route = useRoute();
  return {
    base,
    common,
    route,
    router,
  };
};
