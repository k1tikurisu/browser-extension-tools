import ReactDOM from 'react-dom/client';
import { createShadowRootUi } from 'wxt/client';
import { defineContentScript } from 'wxt/sandbox';
import App from './App.tsx';

export default defineContentScript({
  matches: ['*://*/*'],
  cssInjectionMode: 'ui',
  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      name: 'wxt-react-example',
      position: 'inline',
      anchor: 'body', // Elementを直に指定することも可能
      append: 'first',
      // UIのマウント時に実行されるコールバック
      onMount: (container) => {
        const wrapper = document.createElement('div');
        container.append(wrapper);

        const root = ReactDOM.createRoot(wrapper);
        root.render(<App />);
        return { root, wrapper };
      },
      // UIがWebページから削除される時に呼ばれる
      onRemove: (elements) => {
        elements?.root.unmount();
        elements?.wrapper.remove();
      },
    });

    ui.mount(); // onMountが実行される
  },
});
