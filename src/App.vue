  <template>
    <div id="app">
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
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
    </div>
  </template>

  <script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
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
  </style>
