  <template>
    <div id="app">
        {{msg}}
        <br>
        <input type="text" v-model="todo" @keydown="doAdd2($event)"/>
        <button @click="doAdd()">+增加</button>
        <hr>
        <h1>已完成</h1>
        <ul>
            <li v-for="(item,key) in list" :key="key" v-if="!item.status">
               <input type="checkbox" v-model="item.status">---{{item.title}}------<button @click="removeDate(key)">删除</button>
            </li>
        </ul>
        <hr>
        <h1>未完成</h1>
        <ul>
            <li v-for="(item,key) in list" :key="key" v-if="item.status">
               <input type="checkbox" v-model="item.status">---{{item.title}}------<button @click="removeDate(key)">删除</button>
            </li>
        </ul>
    </div>
  </template>

  <script>
  export default {
    name: 'app',
    data(){
        return{
        msg: "123",
        todo: "",
        list: [],
        }
    },
    methods:{
        doAdd(){
            //alert('增加');
            this.list.push({
                title: this.todo,
                status: false,
            });
            this.todo='';
        },
        doAdd2(e){
            //alert('增加');
            if(e.keyCode==13){
                this.list.push({
                    title: this.todo,
                    status: false,
                });
            }
            this.todo='';
        },
        removeDate(key){
            this.list.splice(key,1);
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
