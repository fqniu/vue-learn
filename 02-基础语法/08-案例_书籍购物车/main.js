const app=new Vue({
  el:'#app',
  data:{
    books:[{
      id:1,
      name:'书本1',
      data:'2020-1',
      price:10.00,
      count:1
    },{
      id:2,
      name:'书本2',
      data:'2020-2',
      price:20.00,
      count:1
    },{
      id:3,
      name:'书本3',
      data:'2020-3',
      price:30.00,
      count:1
    },{
      id:4,
      name:'书本4',
      data:'2020-4',
      price:40.00,
      count:1
    }]
  },
  methods:{
    // getFinalPrice(price){
    //   return '￥'+price.toFixed(2);
    // },
    increment(index){
      this.books[index].count++;
    },
    decrement(index){
      this.books[index].count--;
    },
    removeHandle(index){
      this.books.splice(index,1);
    }
  },
  computed:{
    totalPrice(){
      // let total=0;
      // 1、遍历数组第一种方法：
      // for(let i=0;i<this.books.length;i++){
      //   total += this.books[i].price*this.books[i].count;
      // }
      

      // 2、遍历数组第二种方法：for(let i in this.books)  其中i就是索引号，this.books[i]就是数组里面的元素
      //   for(let i in this.books){
      //     console.log(i);
      //     console.log(this.books[i]);
      //     total += this.books[i].price*this.books[i].count;
      // }

      // 3、遍历数组第三种方法：for(item of this.books)  其中item就是里面的数组元素
      //   for(let item of this.books){
      //   console.log(item);
      //   total += item.price*item.count;
      // }

      //  return total;
      //  或者用高阶函数写：
      return this.books.reduce(function(pre,book){
        console.log(book);
        return pre + book.price * book.count;
      },0)
      
    }
  },
  filters:{    //过滤器 
    showPrice(price){
      return '￥'+price.toFixed(2);
    }
  }
  

})