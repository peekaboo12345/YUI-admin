import { ElLoading, ElMessage } from 'element-plus';

export default function (Dom) {
  let loading = null;
  const openLoading = () => {
    if (loading) loading.close();

    loading = ElLoading.service({
      target: Dom.value,
      lock: true,
      text: '加载中...',
    });

    let timer = window.setTimeout(() => {
      ElMessage({
        message: '加载失败，请稍后再试',
        type: 'warning',
      });

      loading.close();
      loading = null;
      window.clearTimeout(timer);
    }, 30000);
  };

  const closeLoading = () => {
    loading.close();
    loading = null;
  };

  return {
    openLoading,
    closeLoading,
  };
}
