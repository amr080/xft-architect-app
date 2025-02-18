"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{50775:(e,r,t)=>{t.d(r,{Qm:()=>d,S_:()=>i,d4:()=>a,nZ:()=>u,zV:()=>o});var l=t(3994),n=t(68442);let a=(0,l.B)("\n  mutation CreateOrder($order: CreateOrder!) {\n    createOrder(order: $order)\n  }\n"),d=(0,l.B)("\n  mutation CancelOrder($orderId: OrderId!) {\n    cancelOrder(orderId: $orderId)\n  }\n"),o=(0,l.B)("\n  mutation CancelAllOrders($venueId: VenueId) {\n    cancelAllOrders(venueId: $venueId)\n  }\n"),i=(0,l.B)("\n    mutation PreviewSmartOrderRouterAlgo($algo: CreateSmartOrderRouterAlgo!) {\n      previewSmartOrderRouterAlgo(algo: $algo) {\n        orders {\n          ...OrderFields\n        }\n      }\n    }\n  ",[n._X]),u=(0,l.B)("\n  mutation CreateSmartOrderRouterAlgo($algo: CreateSmartOrderRouterAlgo!) {\n    createSmartOrderRouterAlgo(algo: $algo)\n  }\n")},93026:(e,r,t)=>{t.d(r,{x:()=>u});var l=t(53368),n=t(26736),a=t(3994),d=t(44902);let o=(0,a.B)("\n    subscription GetFills(\n      $route: RouteId\n      $venue: VenueId\n      $base: ProductId\n      $quote: ProductId\n      $interval: Int!\n    ) {\n      pollFills(\n        route: $route\n        venue: $venue\n        base: $base\n        quote: $quote\n        pollIntervalMs: $interval\n      ) {\n        normal {\n          ...FillFields\n        }\n      }\n    }\n  ",[d.C]),i=[],u=e=>{var r,t,a;let d,u;let s=(0,l.c)(8),c=null==e?void 0:e.venue,m=null==e?void 0:e.base,v=null==e?void 0:e.quote;s[0]!==c||s[1]!==m||s[2]!==v?(d={variables:{venue:c,base:m,quote:v,interval:1e3}},s[0]=c,s[1]=m,s[2]=v,s[3]=d):d=s[3];let g=(0,n.m)(o,d),x=(null!==(a=null===(r=g.data)||void 0===r?void 0:r.pollFills.normal.length)&&void 0!==a?a:0)>0?null===(t=g.data)||void 0===t?void 0:t.pollFills.normal:i;return s[4]!==x||s[5]!==g.loading||s[6]!==g.error?(u={fills:x,loading:g.loading,error:g.error},s[4]=x,s[5]=g.loading,s[6]=g.error,s[7]=u):u=s[7],u}},40228:(e,r,t)=>{t.d(r,{u:()=>O});var l=t(52322),n=t(53368),a=t(37288),d=t(75084),o=t(25978),i=t(51533),u=t(84214),s=t(28279),c=t(31490),m=t(93026),v=t(63578),g=t(89364),x=t(3833),h=t(76541),b=t(65124),p=t(59713),S=t(87114);let f=[{id:"market",header:"Market",getExportedValue:e=>{let{market:r}=e,{baseName:t,quoteName:l}=h.H.getMarketData(null==r?void 0:r.name);return"".concat(t,"-").concat(l)},render:e=>{let{market:r}=e;return r?(0,l.jsx)(g.k,{...r}):null}},{id:"venue",header:"Venue",getExportedValue:e=>{var r;let{market:t}=e;return null!==(r=null==t?void 0:t.venue.name)&&void 0!==r?r:""},render:e=>{var r;let{market:t}=e,n=(0,x.yu)(null==t?void 0:t.venue.name);return(0,l.jsxs)(a.sL,{alignItems:"center",gap:"$2",children:[n&&(0,l.jsx)(d.n,{size:18,children:n}),(0,l.jsx)(o.x,{numberOfLines:1,children:null!==(r=null==t?void 0:t.venue.name)&&void 0!==r?r:""})]})}},{id:"side",header:"Side",sortable:!0,getSortableValue:e=>{let{dir:r}=e;return r},getExportedValue:e=>{let{dir:r}=e;return r},render:e=>{let{dir:r}=e;return(0,l.jsx)(o.x,{color:"buy"===r?"$textGreen":"$textRed",children:(0,s.kC)(r)})}},{id:"price",header:"Price",sortable:!0,getSortableValue:e=>{let{price:r}=e;return Number(r)},getExportedValue:e=>{let{price:r}=e;return Number(r)},render:e=>{let{price:r,market:t}=e;return t?(0,l.jsx)(c.Z,{market:t,value:r}):r}},{id:"amount",header:"Amount",sortable:!0,getSortableValue:e=>{let{quantity:r}=e;return Number(r)},getExportedValue:e=>{let{quantity:r}=e;return Number(r)},render:e=>{let{quantity:r,market:t}=e;return h.H.formattedSize(t,r)}},{id:"time",header:"Time",sortable:!0,descending:!0,getSortableValue:e=>{let{tradeTime:r}=e;return new Date(r).getTime()},getExportedValue:e=>{let{tradeTime:r}=e;return new Date(r).toLocaleString()},render:e=>{let{tradeTime:r}=e;return(0,b.WU)(r,"MM/dd/yyyy HH:mm:ss")}},{id:"id",header:"Action",align:"right",exportable:!1,render:e=>{let{market:r}=e;return(0,l.jsx)(p.r,{href:r?h.H.getTradeLink(r):"",children:(0,l.jsx)(i.z,{variant:"blueLight",size:"small",rounded:!0,children:(0,l.jsx)(i.z.Text,{children:"Trade"})})})}}],O=e=>{let r,t,a,d;let o=(0,n.c)(8),{marketId:i}=e,s=(0,v.A)(i),c=null==s?void 0:s.venue.name;o[0]!==c?(r={venue:c},o[0]=c,o[1]=r):r=o[1];let{fills:g,error:x}=(0,m.x)(r);o[2]!==g||o[3]!==i?(a=g&&g.filter(e=>{let{marketId:r,fillId:t}=e;return(!i||r===i)&&t}),o[2]=g,o[3]=i,o[4]=a):a=o[4],t=a;let h=!!x;return o[5]!==h||o[6]!==t?(d=(0,l.jsx)(u.i,{error:h,emptyComponent:"You don’t have any filled orders.",columns:f,data:t,maxHeight:400,defaultSortColumn:"time",defaultDescending:!0,exportId:"".concat(S.m.History.valueOf(),"-export")}),o[5]=h,o[6]=t,o[7]=d):d=o[7],d}},97918:(e,r,t)=>{t.d(r,{e:()=>h});var l=t(52322),n=t(53368),a=t(99810),d=t(51533),o=t(28279),i=t(37288),u=t(25978),s=t(89545);let c=e=>{let r,t,o,c,m,v,g;let x=(0,n.c)(21),{header:h,bodyText:b,loading:p,buttonText:S,onButtonPress:f,setOpen:O,open:$}=e,y=void 0===S?"Submit":S;return x[0]!==O?(r=()=>O(!1),x[0]=O,x[1]=r):r=x[1],x[2]!==b?(t=(0,l.jsx)(u.x,{size:"l",mb:"$5",children:b}),x[2]=b,x[3]=t):t=x[3],x[4]!==f||x[5]!==O?(o=async()=>{await (null==f?void 0:f()),O(!1)},x[4]=f,x[5]=O,x[6]=o):o=x[6],x[7]!==y?(c=(0,l.jsx)(d.z.Text,{children:y}),x[7]=y,x[8]=c):c=x[8],x[9]!==p||x[10]!==o||x[11]!==c?(m=(0,l.jsx)(d.z,{rounded:!0,disabled:p,onPress:o,variant:"redDefault",children:c}),x[9]=p,x[10]=o,x[11]=c,x[12]=m):m=x[12],x[13]!==t||x[14]!==m?(v=(0,l.jsxs)(i.FA,{gap:"$4",minWidth:a.$L?400:"unset",children:[t,m]}),x[13]=t,x[14]=m,x[15]=v):v=x[15],x[16]!==h||x[17]!==$||x[18]!==r||x[19]!==v?(g=(0,l.jsx)(s.V,{header:h,open:$,onClose:r,children:v}),x[16]=h,x[17]=$,x[18]=r,x[19]=v,x[20]=g):g=x[20],g};var m=t(1804),v=t(50775);let g=()=>{let e,r;let t=(0,n.c)(5),[l,a]=(0,m.D)(v.zV);return t[0]!==l?(e=e=>l({variables:{venueId:e}}),t[0]=l,t[1]=e):e=t[1],t[2]!==e||t[3]!==a?(r={cancelAllOrders:e,...a},t[2]=e,t[3]=a,t[4]=r):r=t[4],r};var x=t(2784);function h(e){let r,t,i,u;let s=(0,n.c)(10),{venue:m}=e,[v,h]=(0,x.useState)(!1),{cancelAllOrders:b,loading:p}=g(),S=m?"CME"===m.name?"CME":(0,o.kC)(m.name.toLowerCase()):"all venues";s[0]===Symbol.for("react.memo_cache_sentinel")?(r=()=>h(!0),s[0]=r):r=s[0],s[1]===Symbol.for("react.memo_cache_sentinel")?(t=(0,l.jsx)(d.z,{size:a.$L?"medium":"small",rounded:!0,onPress:r,variant:"redLight",children:(0,l.jsx)(d.z.Text,{children:"Cancel all"})}),s[1]=t):t=s[1];let f="Are you sure you want to cancel all orders for ".concat(S,"?");return s[2]!==m||s[3]!==b?(i=()=>m?b(null==m?void 0:m.id):b(),s[2]=m,s[3]=b,s[4]=i):i=s[4],s[5]!==f||s[6]!==p||s[7]!==i||s[8]!==v?(u=(0,l.jsxs)(l.Fragment,{children:[t,(0,l.jsx)(c,{header:"Cancel All Orders",bodyText:f,loading:p,onButtonPress:i,open:v,setOpen:h})]}),s[5]=f,s[6]=p,s[7]=i,s[8]=v,s[9]=u):u=s[9],u}},64933:(e,r,t)=>{t.d(r,{m:()=>I});var l=t(52322),n=t(53368),a=t(37288),d=t(75084),o=t(25978),i=t(51533),u=t(84214),s=t(28279),c=t(31490),m=t(28240),v=t(24015),g=t(1804),x=t(50775);let h=()=>{let e,r;let t=(0,n.c)(5),[l,a]=(0,g.D)(x.Qm);return t[0]!==l?(e=e=>l({variables:{orderId:e}}),t[0]=l,t[1]=e):e=t[1],t[2]!==e||t[3]!==a?(r={cancelOrder:e,...a},t[2]=e,t[3]=a,t[4]=r):r=t[4],r};var b=t(89364),p=t(3833),S=t(76541),f=t(65124),O=t(98242),$=t(87114),y=t(85697),j=t(68442);let C=(e,r)=>{let t,l,a,d,o;let i=(0,n.c)(15),u=!e||!r;i[0]!==e?(t=e.toISOString(),i[0]=e,i[1]=t):t=i[1],i[2]!==r?(l=r.toISOString(),i[2]=r,i[3]=l):l=i[3],i[4]!==t||i[5]!==l?(a={fromInclusive:t,toExclusive:l},i[4]=t,i[5]=l,i[6]=a):a=i[6],i[7]!==u||i[8]!==a?(d={pollInterval:500,skip:u,variables:a},i[7]=u,i[8]=a,i[9]=d):d=i[9];let{data:s,error:c,refetch:m}=(0,y.a)(j.fB,d),v=null==s?void 0:s.openOrders,g=null==s?void 0:s.outedOrders;return i[10]!==v||i[11]!==g||i[12]!==c||i[13]!==m?(o={openOrders:v,outedOrders:g,error:c,refetch:m},i[10]=v,i[11]=g,i[12]=c,i[13]=m,i[14]=o):o=i[14],o};var E=t(82375),k=t(55349);let z=[{id:"time",header:"Time",sortable:!0,descending:!0,showTooltip:!0,getSortableValue:e=>{let{timestamp:r}=e;return new Date(r).getTime()},getExportedValue:e=>{let{timestamp:r}=e;return new Date(r).toLocaleString()},render:e=>{let{timestamp:r}=e;return(0,f.WU)(r,"MM/dd HH:mm:ss a")}},{id:"market",header:"Market",getExportedValue:e=>{let{order:r}=e,t=(0,O.vz)(v.Q8,r.market),{baseName:l,quoteName:n}=S.H.getMarketData(t.name);return"".concat(l,"-").concat(n)},render:e=>{let{order:r}=e;return(0,l.jsx)(b.k,{...(0,O.vz)(v.Q8,r.market)})}},{id:"venue",header:"Venue",getExportedValue:e=>{let{order:r}=e;return(0,O.vz)(v.Q8,r.market).venue.name},render:e=>{var r;let{order:t}=e,n=(0,O.vz)(v.Q8,t.market),i=(0,p.yu)(n.venue.name);return(0,l.jsxs)(a.sL,{alignItems:"center",gap:"$2",children:[i&&(0,l.jsx)(d.n,{size:18,children:i}),(0,l.jsx)(o.x,{numberOfLines:1,children:null!==(r=n.venue.name)&&void 0!==r?r:""})]})}},{id:"side",header:"Side",sortable:!0,getSortableValue:e=>{let{order:r}=e;return r.dir},getExportedValue:e=>{let{order:r}=e;return r.dir},render:e=>{let{order:r}=e;return(0,l.jsx)(o.x,{color:"buy"===r.dir?"$textGreen":"$textRed",children:(0,s.kC)(r.dir)})}},{id:"price",header:"Price",sortable:!0,getSortableValue:e=>{let{order:r}=e;return Number(r.orderType.limitPrice)},getExportedValue:e=>{let{order:r}=e,t=(0,O.vz)(v.Q8,r.market);return S.H.formattedPrice({market:t,value:r.orderType.limitPrice,forceDecimalFormat:!0})},render:e=>{let{order:r}=e,t=(0,O.vz)(v.Q8,r.market);return(0,l.jsx)(c.Z,{market:t,value:r.orderType.limitPrice})}},{id:"qty",header:"OrderQty",sortable:!0,getSortableValue:e=>{let{order:r,filledQty:t}=e;return Number(t)+Number(r.quantity)},getExportedValue:e=>{var r;let{order:t,filledQty:l}=e,n=(0,O.vz)(v.Q8,t.market),a=Number(l)+Number(t.quantity);return S.H.removeTrailingZeros(null!==(r=S.H.formattedSize(n,a))&&void 0!==r?r:"")},render:e=>{var r;let{order:t,filledQty:l}=e,n=(0,O.vz)(v.Q8,t.market),a=Number(l)+Number(t.quantity);return S.H.removeTrailingZeros(null!==(r=S.H.formattedSize(n,a))&&void 0!==r?r:"")}},{id:"filled",header:"Filled",sortable:!0,getSortableValue:e=>{let{filledQty:r}=e;return Number(r)},getExportedValue:e=>{var r;let{filledQty:t,order:l}=e,n=(0,O.vz)(v.Q8,l.market);return S.H.removeTrailingZeros(null!==(r=S.H.formattedSize(n,t))&&void 0!==r?r:"")},render:e=>{var r;let{filledQty:t,order:l}=e,n=(0,O.vz)(v.Q8,l.market);return S.H.removeTrailingZeros(null!==(r=S.H.formattedSize(n,t))&&void 0!==r?r:"")}},{id:"source",header:"Source",align:"left",getExportedValue:e=>{let{order:r}=e;return r.source},render:e=>{let{order:r}=e;return r.source}},{id:"status",header:"Status",align:"left",showTooltip:!0,getExportedValue:e=>{let{orderState:r}=e;return r.join(", ")},render:e=>{let{order:r,orderState:t,filledQty:n}=e,[a,d]=function(e){let{orderState:r,order:t,filledQty:l}=e;return r.includes("REJECTED")?["Rejected","$textRed"]:r.includes("OUT")?r.includes("FILLED")?Number(l)<Number(t.quantity)?["Partial Filled","$textBlue"]:["Filled","$textBlue"]:r.includes("CANCELED")?["Canceled","$textSubdued"]:["Out","$textSubdued"]:r.includes("CANCELING")?["Canceling","$textLight"]:r.includes("ACKED")?["Open","$textYellow"]:r.includes("OPEN")?["Pending","$textLight"]:[r.join(", "),"$textDefault"]}({orderState:t,order:r,filledQty:n});return(0,l.jsx)(o.x,{color:d,children:a})}},{id:"rejectReason",header:"Message",align:"left",showTooltip:!0,style:{maxWidth:200},getExportedValue:e=>{let{rejectReason:r}=e;return null!=r?r:""},render:e=>{let{rejectReason:r}=e;return(0,l.jsx)(o.x,{numberOfLines:1,children:r})}},{id:"actions",header:"Action",align:"right",exportable:!1,render:e=>{let{order:r,orderState:t}=e;return(0,l.jsx)(a.sL,{gap:"$2",children:t.includes("OPEN")&&(0,l.jsx)(V,{order:r})})}}],V=e=>{let r,t,a;let d=(0,n.c)(7),{order:o}=e,{pushNotification:u}=(0,m.z)(),{cancelOrder:s}=h();d[0]!==s||d[1]!==o.id||d[2]!==u?(r=async()=>{var e;(null===(e=(await s(o.id)).data)||void 0===e?void 0:e.cancelOrder)?u({id:"cancelOrderSuccess",title:"Success",text:"Order cancelled"}):u({id:"cancelOrderError",title:"Error",text:"Something went wrong"})},d[0]=s,d[1]=o.id,d[2]=u,d[3]=r):r=d[3];let c=r;return d[4]===Symbol.for("react.memo_cache_sentinel")?(t=(0,l.jsx)(i.z.Text,{children:"Cancel"}),d[4]=t):t=d[4],d[5]!==c?(a=(0,l.jsx)(i.z,{onPress:c,variant:"redLight",size:"small",rounded:!0,children:t}),d[5]=c,d[6]=a):a=d[6],a},I=e=>{let r;let t=(0,n.c)(4),{marketId:a}=e,{orders:d,error:o,refetch:i}=function(e){let r,t,l,a,d,o;let i=(0,n.c)(19);i[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,E.I)(new Date,{days:-1}),i[0]=r):r=i[0],i[1]===Symbol.for("react.memo_cache_sentinel")?(t={oneDayAgo:r,tomorrow:(0,E.I)(new Date,{days:1})},i[1]=t):t=i[1];let{oneDayAgo:u,tomorrow:s}=t,{openOrders:c,outedOrders:m,error:v,refetch:g}=C(u,s);if(i[2]!==c?(a=null!=c?c:[],i[2]=c,i[3]=a):a=i[3],i[4]!==e||i[5]!==a||i[6]!==m){let r,t,l,n;i[8]!==e?(r=r=>{let{order:t}=r;return!e||t.marketId===e},i[8]=e,i[9]=r):r=i[9];let o=a.filter(r);i[10]!==m?(t=null!=m?m:[],i[10]=m,i[11]=t):t=i[11],i[12]!==e?(l=r=>{let{order:t}=r;return!e||t.marketId===e},i[12]=e,i[13]=l):l=i[13];let u=t.filter(l);i[14]===Symbol.for("react.memo_cache_sentinel")?(n=(e,r)=>(0,k.R)(r.timestamp,e.timestamp)?1:-1,i[14]=n):n=i[14],d=o.concat(u).sort(n),i[4]=e,i[5]=a,i[6]=m,i[7]=d}else d=i[7];return l=d,i[15]!==l||i[16]!==v||i[17]!==g?(o={orders:l,error:v,refetch:g},i[15]=l,i[16]=v,i[17]=g,i[18]=o):o=i[18],o}(a),s=!!o;return t[0]!==s||t[1]!==i||t[2]!==d?(r=(0,l.jsx)(u.i,{error:s,retry:i,emptyComponent:"You don't have any open or past orders",columns:z,data:d,maxHeight:400,defaultSortColumn:"time",defaultDescending:!0,exportId:"".concat($.m.Orders.valueOf(),"-export"),rightPinnedColumnId:"actions"}),t[0]=s,t[1]=i,t[2]=d,t[3]=r):r=t[3],r}}}]);