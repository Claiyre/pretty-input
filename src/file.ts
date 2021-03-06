import {fileArgs} from './index'

export default function (ele:any, arg:fileArgs = {isFile: true, showFileName: true}){
  if(arg.showFileName){
    let span = document.createElement('span');
    span.id = `span_${ele.id}`
    span.innerText = 'no file selected'
    ele.parentNode.insertBefore(span, ele.nextSibling)

    // show fileName
    ele.addEventListener('change', (e)=>{
      console.log('change', ele);
      let text = ele.value.split('\\').pop();
      if(!text) text = 'no file selected';
      document.getElementById(`span_${ele.id}`).innerText = text
    })
  }

  let label = document.createElement('label');
  label.htmlFor = ele.id;
  label.className = `pretty_label pretty_label_${ele.type}`;

  if(arg.innerElement) {
    label.innerHTML = arg.innerElement
  } else if(arg.innerText){
    label.innerHTML = `<span class="pretty_btn">${arg.innerText}</span>`
  } else {
    label.innerHTML = '<span class="pretty_btn">upload file</span>'
  }
  ele.parentNode.insertBefore(label, ele.nextSibling);

}
