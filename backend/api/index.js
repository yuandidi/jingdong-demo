const express = require('express');  
const bodyParser = require('body-parser');  
const cors = require('cors');  

const app = express();  

app.use(cors());  
app.use(bodyParser.json());  

const users = [];
const hotList = {
  errno: 0,
  data: [{
    id: '1',
    name: '沃尔玛',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
    sales: 10000,
    expressLimit: 0,
    expressPrice: 5,
    slogan: 'VIP尊享89元减4元运费券'
  }, {
    id: '2',
    name: '山姆会员商店',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
    sales: 2000,
    expressLimit: 0,
    expressPrice: 5,
    slogan: '联合利华洗护满10减5'
  }],
  message: 'errno !==0'
}

let orderList = {
  errno: 0,
  data: [
    {
      address: {
        city: '合肥',
        department: 'xx小区',
        houseNumber: '门牌号',
        name: '张三',
        phone: '18611112222'
      },
      shopId: '1',
      shopName: '沃尔玛',
      isCanceled: false,
      products: [
       {
        orderSales: 5,
        product: {
          name: '番茄 250g / 份',
          img: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
          price: 33.6,
          sales: 6
        }
       }
      ]
    }
  ],
  message: 'errno !== 时的错误信息'
}

const shop1 = {
  errno: 0,
  data: {
    id: '1',
    name: '沃尔玛',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
    sales: 10000,
    expressLimit: 0,
    expressPrice: 5,
    slogan: 'VIP尊享89元减4元运费券'
  },
  message: 'errno !==0'
}

const shop1Products = {
  error: 0,
  data: [{
    id: '1',
    name: '番茄250g/份',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
    sales: 10,
    price: 33.6,
    oldPrice: 39.6
  }, {
    id: '2',
    name: '车厘子500g/份',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/cherry.png',
    sales: 10,
    price: 99.6,
    oldPrice: 110.6
  }, {
    id: '3',
    name: '提子250g/份',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/orange.png',
    sales: 110,
    price: 12.6,
    oldPrice: 22.6
  }],
  message: 'errno !==0'
}

const shop2 = {
  errno: 0,
  data: {
    id: '2',
    name: '山姆会员商店',
    imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
    sales: 2000,
    expressLimit: 0,
    expressPrice: 5,
    slogan: '联合利华洗护满10减5'
  },
  message: 'errno !==0'
}

app.post('/api/login', (req, res) => {  
  const { username, password } = req.body;  

  // 这里可以添加验证逻辑  
  if(users.find(user => user.username === username) && users.find(user => user.password === password)) {  
    res.status(200).json({ errno: 0, message: '登录成功' });  
  } else {  
    res.status(200).json({ errno: 1, message: '用户名或密码错误' });  
  }  
});

// 创建一个 POST 注册接口  
app.post('/api/register', (req, res) => {  
  const { username, password } = req.body;  
  const existingUser = users.find(user => user.username === username);  
  if (existingUser) {  
    return res.status(200).json({ errno: 1, message: '用户名已存在' });  
  }  
  // 如果用户名不存在，保存用户信息（在实际情况中应当保存到数据库）  
  users.push({ username, password });  
  res.status(201).json({ errno: 0, message: '注册成功' });  
}); 

app.post('/api/order', (req, res) => {    
    res.status(200).json({ errno: 0, message: '登录成功' });    
});

// 创建一个 GET 接口，获取 hotList  
app.get('/api/hot-list', (req, res) => {  
  res.status(200).json(hotList);  
}); 

app.get('/api/shop/1', (req, res) => {  
  res.status(200).json(shop1);  
});
 
app.get('/api/shop/1/products/all', (req, res) => {  
  res.status(200).json(shop1Products);  
});

app.get('/api/shop/1/products/seckill', (req, res) => {  
  res.status(200).json(shop1Products);  
});

app.get('/api/shop/1/products/fruit', (req, res) => {  
  res.status(200).json(shop1Products);  
});

app.get('/api/shop/2', (req, res) => {  
  res.status(200).json(shop2);  
}); 

app.get('/api/shop/2/products/all', (req, res) => {  
  res.status(200).json(shop1Products);  
});

app.get('/api/shop/2/products/seckill', (req, res) => {  
  res.status(200).json(shop1Products);  
});

app.get('/api/shop/2/products/fruit', (req, res) => {  
  res.status(200).json(shop1Products);  
});

app.get('/api/order', (req, res) => {  
  res.status(200).json(orderList);  
});


module.exports = app; // 将Express应用导出