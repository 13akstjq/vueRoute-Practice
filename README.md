# vueproject

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### vue router 

vue-router를 사용하기 위한 npm 설치 


```
npm add vue-router
```

### router.js에서 해야할 것  
  * vue-router import
  * Vue.use(Router);
  * 보여줄 페이지 객체 생성 (path,name,component)를 갖고 있음. path는 router-link에 사용하고 
  component는 보여줄 component를 적으면 됨.
  
***

### main.js에서 해야할 것   
  * 만들어 놓은 **router.js**사용하기  (main.js에서 router객체 만들어도 상관없음)  
  * Vue객체에 **router**넣어주기   

***

### App.vue에서 해야할 것 
  * div안에 **router-view** 태그 넣기 ( 이 태그가 현재 router가 가르키고 있는 페이지를 보여주는 역할을 함)  
  
### Router사용하기 

```
<router-link to="./Post"></router-link>
```
