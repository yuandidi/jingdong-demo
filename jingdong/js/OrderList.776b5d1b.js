"use strict";(self["webpackChunkjingdong"]=self["webpackChunkjingdong"]||[]).push([[149],{2600:function(t,e,r){r.d(e,{A:function(){return _}});var n=r(6768),o=r(4232);const c={class:"docker"},s=["innerHTML"],a={class:"docker__title"};function i(t,e,r,i,d,l){const u=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",c,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.dockerList,((t,e)=>((0,n.uX)(),(0,n.CE)("span",{class:(0,o.C4)([{docker__item:!0,"docker__item--active":e===r.currentIndex},"docker__item"]),key:t.icon},[(0,n.bF)(u,{to:t.to},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"iconfont",innerHTML:t.icon},null,8,s),(0,n.Lk)("div",a,(0,o.v_)(t.text),1)])),_:2},1032,["to"])],2)))),128))])}var d={name:"Docker",props:["currentIndex"],setup(){const t=[{icon:"&#xe6f9",text:"首页",to:{name:"Home"}},{icon:"&#xe834",text:"购物车",to:{name:"CartList"}},{icon:"&#xe713",text:"订单",to:{name:"OrderList"}},{icon:"&#xe78b",text:"我的",to:{name:"Home"}}];return{dockerList:t}}},l=r(1241);const u=(0,l.A)(d,[["render",i],["__scopeId","data-v-6d153242"]]);var _=u},1707:function(t,e,r){r.r(e),r.d(e,{default:function(){return X}});var n=r(6768),o=r(4232);const c={class:"wrapper"},s={class:"orders"},a={class:"order__title"},i={class:"order__status"},d={class:"order__content"},l={class:"order__content__imgs"},u=["src"],_={class:"order__content__info"},k={class:"order__content__price"},v={class:"order__content__count"};function p(t,e,r,p,m,L){const f=(0,n.g2)("Docker");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",c,[e[0]||(e[0]=(0,n.Lk)("div",{class:"title"},"我的订单",-1)),(0,n.Lk)("div",s,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(p.list,((t,e)=>((0,n.uX)(),(0,n.CE)("div",{class:"order",key:e},[(0,n.Lk)("div",a,[(0,n.eW)((0,o.v_)(t.shopName)+" ",1),(0,n.Lk)("span",i,(0,o.v_)(t.isCanceled?"已取消":"已下单"),1)]),(0,n.Lk)("div",d,[(0,n.Lk)("div",l,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.products,((t,e)=>((0,n.uX)(),(0,n.CE)(n.FK,{key:e},[e<=3?((0,n.uX)(),(0,n.CE)("img",{key:0,class:"order__content__img",src:t.product.img},null,8,u)):(0,n.Q3)("",!0)],64)))),128))]),(0,n.Lk)("div",_,[(0,n.Lk)("div",k,"￥"+(0,o.v_)(t.totalPrice),1),(0,n.Lk)("div",v,"共"+(0,o.v_)(t.totalNumber)+"件",1)])])])))),128))])]),(0,n.bF)(f,{currentIndex:2})],64)}var m=r(144),L=r(2600),f=r(5067);const C=()=>{const t=(0,m.Kh)({list:[]}),e=async()=>{const e=await(0,f.J)("/api/order");if(0===e?.errno&&e?.data?.length){const r=e.data;r.forEach((t=>{const e=t.products||[];let r=0,n=0;e.forEach((t=>{n+=t?.orderSales||0,r+=t?.product?.price*t?.orderSales||0})),t.totalPrice=r,t.totalNumber=n})),t.list=e.data}};e();const{list:r}=(0,m.QW)(t);return{list:r}};var x={name:"OrderList",components:{Docker:L.A},setup(){const{list:t}=C();return{list:t}}},g=r(1241);const E=(0,g.A)(x,[["render",p],["__scopeId","data-v-79a8324e"]]);var X=E}}]);
//# sourceMappingURL=OrderList.776b5d1b.js.map