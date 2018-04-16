import {cssText, hidden, focus} from './style';
import typeFileHandle from './file'

let style = null;

export interface fileArgs {
  isFile: boolean,
  innerText?: string,
  innerElement?: any,
  showFileName?: boolean
}
export default function handler(selector:any, args?:fileArgs){
  if (typeof window === 'undefined') {
    console.error('prettyInput only works on browser.')
    return
  }

  let eles, inputIds, inputLabels;
  if(typeof selector === 'string'){
    eles = Array.prototype.slice.call(document.querySelectorAll(selector));
  } else if(selector instanceof NodeList) {
    eles = Array.prototype.slice.call(selector)
  } else if(typeof selector === 'object' && selector.nodeType && selector.nodeType === 1 && selector.nodeName === "INPUT"){
    eles = [selector]
  } else {
    console.error('prettyInput only receives CSS Selectors, input Node or NodeList, not ', selector)
    return
  }

  for(let ele of eles){
    if(!ele.nodeType || ele.nodeType !== 1 || ele.nodeName !== 'INPUT' || !ele.type.match(/(radio|checkbox|file)/i)){
      console.warn('prettyInput only works on input[type="radio|checkbox|file"], but found ', ele);
      continue;
    }
    if(!ele.parentNode){
      console.warn(`could not found ${ele} in current page`);
      continue;
    }
    if(!ele.id) ele.id = `pretty_${parseInt((Math.random()*100).toString(), 10)}`
    // input[type='file']
    if(ele.type.match(/file/i)){
      typeFileHandle(ele, args);
    }
    inputIds = inputIds ? inputIds+`,#${ele.id} `: `#${ele.id}`;
    inputLabels = inputLabels ? inputLabels+`,#${ele.id}:focus + label.pretty_label `: `#${ele.id}:focus + label.pretty_label`;
  }

  // 插入样式
  if(!style){
    style = document.createElement('style');
    style.innerHTML = cssText;
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  style.innerHTML += inputIds + hidden + inputLabels + focus;

}

