  <template>
    <div id="app">
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
      <input type="text" v-model="msg"/>
      <button v-on:click="getMsg">获取表单数据</button>
      <button v-on:click="setMsg">设置表单数据</button>
      <hr>
      <input type="text" ref="userInfo"/>
      <button v-on:click="setValue()">设置第二个表单数据</button>
      <hr>
      <div ref="box">box</div>

      <h2>Essential Links</h2>
      <h3>{{obj.name}}</h3>
      <ul>
        <li v-for="item in list" :key="item"> 
          {{item}}
        </li>
      </ul>
      <ul>
        <li v-for="item in list1" :key="item.title">
          {{item.title}}
        </li>
      </ul>
      <ul>
        <li v-for="item in list2" :key="item">
          {{item.cate}}
          <ol v-for="a in item.list" :key="a">
            {{a.title}}
          </ol>
        </li>
      </ul>
      <div v-bind:title="title">鼠标放上去看一下</div>
      <img v-bind:src="url"/>
      <img :src="url"/>
      <br>
      {{h}}
      <div v-html="h"></div>
      <div v-text="msg"></div>
      <div v-bind:class="{'red':flag}">我是一个DIV</div>
      <div v-bind:class="{'red':flag,'green':!flag}">我是另一个DIV</div>
      <ul>
        <li v-for="(item,key) in list" :key="item" :class="{'red':key==0,'green':key==1}"> 
          {{key}}----->{{item}}
        </li>
      </ul>
      <div class="box" :style="{width:boxwidth+'px'}">我是另一个DIV</div>
    </div>
  </template>

  <script>
  export default {
    name: 'app',
    methods: {
      getMsg(){
        alert(this.msg)
      },
      setMsg(){
        this.msg="改变后的数据"
      },
      setValue(){
        console.log(this.$refs.userInfo);
        this.$refs.box.style.background='red';
        alert(this.$refs.userInfo.value);
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        title: "我是一个标题",
        url: 'http://localhost:8080/dist/logo.png?82b9c7a5a3f405032b1db71a25f67021',
        h: '<h2>我是h2</h2>',
        flag: false,
        boxwidth: 300,
        obj:{
          name:"张三"
        },
        list:['111','222','eee'],
        list1:[
          {'title':'111'},
          {'title':'111'},
          {'title':'111'}
        ],
        list2:[
          {
          "cate": "国内新闻",
          "list":[
            {'title':'国内新闻111'},
            {'title':'国内新闻222'},
          ]
        },
          {
          "cate": "国际新闻",
          "list":[
            {'title':'国际新闻111'},
            {'title':'国际新闻222'},
          ]
        }

        ]
      }
    }
  }
  </script>

  <style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .red{
    color: red;
  }

  .green{
    color: green;
  }

  .box{
    width: 100px;
    height: 100px;
    background: red;
  }
  </style>
