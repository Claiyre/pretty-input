import {cssText, hidden, focus} from './style';

let style = null;


export default function handler(selector:any, innerElement?:string){
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
    let label = document.createElement('label');
    if(!ele.id) ele.id = `pretty_${parseInt((Math.random()*100).toString(), 10)}`
    label.htmlFor = ele.id;
    label.className = `pretty_label pretty_label_${ele.type}`;
    inputIds = inputIds ? inputIds+`,#${ele.id} `: `#${ele.id}`;
    inputLabels = inputLabels ? inputLabels+`,#${ele.id}:focus + label.pretty_label `: `#${ele.id}:focus + label.pretty_label`;
    // input[type='file']
    if(ele.type.match(/file/i)){
      if(!innerElement) innerElement = '<span class="pretty_btn">upload file</span>';
      label.innerHTML = innerElement;
    }

    ele.parentNode.insertBefore(label, ele.nextSibling);
  }

  // 插入其他公共样式
  if(!style){
    style = document.createElement('style');
    style.innerHTML = cssText;
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  style.innerHTML += inputIds + hidden + inputLabels + focus;

}

