# prettyInput
customize your input style freely

## Install

```
npm install pretty-input
```

## Usage

```
import handleInput from 'pretty-input'

handleInput('#file2', {isFile:true, showFileName: false});
handleInput('#file3');

```
Currently only support for input[type=file]
## API

```
handleInput(select[, agrs])
```
| key | value |
|:-------|:-------|
| select | cssSelector/elementNode/NodeList | 
| args | default { isFile: true, showFileName: true, innerElement: undefined, innerText: undefined } |
