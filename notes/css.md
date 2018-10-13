### 隐藏滚动条
```
在main页面中有一个tab组件，当其中一个tab的内容超过div的高度时会出现滚动条，
导致了原来的按照百分比编写的tab宽度发生了变化，导致tab组件对齐方式很不美观，
解决办法是隐藏到tab容器的scrollbar，示例如下：
.content-wrapper::-webkit-scrollbar {
    display: none;
}
```