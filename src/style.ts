export let cssText = `
.pretty_label_file {
  cursor: pointer;
}
.pretty_btn {
  color: #2265b1;
  background-color: #fff;
  border-color: #2265b1;
  padding: 0 15px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #2265b1;
  height: 40px;
  line-height: 40px;
  outline: 0;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  touch-action: manipulation;
  white-space: nowrap;
}
.pretty_btn:hover {
  color: #fff;
  background: #2265b1;
}
`

export let hidden = `{
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
`
export let focus = `{
  outline: 1px solid #a6c7ff;
    outline: -webkit-focus-ring-color auto 5px;
}
`
