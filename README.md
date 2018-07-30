# plus-vue [![npm](https://img.shields.io/badge/npm-Install-zys8119.svg?colorB=cb3837&style=flat-square)](https://www.npmjs.com/package/plus-vue)  [![github](https://img.shields.io/badge/github-<Code>-zys8119.svg?colorB=000000&style=flat-square)](https://github.com/zys8119/plus-vue)
vue plus插件，用于H5开发app时便捷调用sdk

## 安装

```angular2html
npm i plus-vue
```
## 配置

```angular2html
//引入plus-vue
import plusVue from "plus-vue"
Vue.use(plusVue)
```

## 教程

>例子
```vue
<script>
    export default {
        name: "Dome",
        mounted(){
            //设置语言
            this.$getPlus(()=>{
                //plus....
                //做你想做的事，调你想调的sdk
            })
        }
    }
</script>

<style scoped>

</style>
```

###### 具体方法及配置请查看[源代码](https://github.com/zys8119/plus-vue/blob/master/index.js)