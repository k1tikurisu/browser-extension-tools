import styleText from 'data-text:./content.css';
import type { PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoGetStyle } from 'plasmo';
import { App } from './App';

export const config: PlasmoCSConfig = {
  matches: ['*://*/*'],
};

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement('style');
  style.textContent = styleText;
  return style;
};

export const getInlineAnchor: PlasmoGetInlineAnchor = () => document.body;

const Index = () => <App />;

export default Index;
