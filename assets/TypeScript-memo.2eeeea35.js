import{d as e,o as a,c,w as t,s,r as p,b as l}from"./index.9ae90b47.js";const r=s("div",{class:"prose"},[s("h1",null,"TS \u5907\u5FD8\u5F55"),s("p",null,[s("strong",null,"\u53EF\u80FD\u7528\u5230\u7684\u5DE5\u5177\u7C7B\u578B\uFF1A")]),s("pre",null,[s("code",{class:"language-typescript"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#1E1E1E"}},[s("code",{class:""},[s("span",{class:"line"},[s("span",{style:{color:"#6A9955"}},"/** \u53EF\u4E3Anull */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"type"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"Nullable"),s("span",{style:{color:"#D4D4D4"}},"<"),s("span",{style:{color:"#4EC9B0"}},"T"),s("span",{style:{color:"#D4D4D4"}},"> = "),s("span",{style:{color:"#4EC9B0"}},"T"),s("span",{style:{color:"#D4D4D4"}}," | "),s("span",{style:{color:"#4EC9B0"}},"null")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A9955"}},"/** \u4E0D\u53EF\u4E3Anull */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"type"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"NonNullable"),s("span",{style:{color:"#D4D4D4"}},"<"),s("span",{style:{color:"#4EC9B0"}},"T"),s("span",{style:{color:"#D4D4D4"}},"> = "),s("span",{style:{color:"#4EC9B0"}},"T"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#569CD6"}},"extends"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"null"),s("span",{style:{color:"#D4D4D4"}}," | "),s("span",{style:{color:"#4EC9B0"}},"undefined"),s("span",{style:{color:"#D4D4D4"}}," ? "),s("span",{style:{color:"#4EC9B0"}},"never"),s("span",{style:{color:"#D4D4D4"}}," : "),s("span",{style:{color:"#4EC9B0"}},"T")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"type"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"Arrayable"),s("span",{style:{color:"#D4D4D4"}},"<"),s("span",{style:{color:"#4EC9B0"}},"T"),s("span",{style:{color:"#D4D4D4"}},"> = "),s("span",{style:{color:"#4EC9B0"}},"T"),s("span",{style:{color:"#D4D4D4"}}," | "),s("span",{style:{color:"#4EC9B0"}},"T"),s("span",{style:{color:"#D4D4D4"}},"[]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A9955"}},"/** \u5C06\u5BF9\u8C61\u7684\u6240\u6709\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u53EF\u9009\u4E14\u53EF\u4E3Anull */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"type"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"NullablePartial"),s("span",{style:{color:"#D4D4D4"}},"<"),s("span",{style:{color:"#4EC9B0"}},"T"),s("span",{style:{color:"#D4D4D4"}},"> = {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  ["),s("span",{style:{color:"#4EC9B0"}},"P"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#569CD6"}},"in"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#569CD6"}},"keyof"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"T"),s("span",{style:{color:"#D4D4D4"}},"]?: "),s("span",{style:{color:"#4EC9B0"}},"T"),s("span",{style:{color:"#D4D4D4"}},"["),s("span",{style:{color:"#4EC9B0"}},"P"),s("span",{style:{color:"#D4D4D4"}},"] | "),s("span",{style:{color:"#4EC9B0"}},"null")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A9955"}},"/** \u5C06\u5BF9\u8C61\u7684\u90E8\u5206\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u53EF\u9009 */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"type"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"Optional"),s("span",{style:{color:"#D4D4D4"}},"<")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#4EC9B0"}},"T"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#569CD6"}},"extends"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"Record"),s("span",{style:{color:"#D4D4D4"}},"<"),s("span",{style:{color:"#4EC9B0"}},"string"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#4EC9B0"}},"any"),s("span",{style:{color:"#D4D4D4"}},">,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#4EC9B0"}},"K"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#569CD6"}},"extends"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#569CD6"}},"keyof"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"T"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#569CD6"}},"keyof"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"T")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"> = "),s("span",{style:{color:"#4EC9B0"}},"Omit"),s("span",{style:{color:"#D4D4D4"}},"<"),s("span",{style:{color:"#4EC9B0"}},"T"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#4EC9B0"}},"K"),s("span",{style:{color:"#D4D4D4"}},"> & "),s("span",{style:{color:"#4EC9B0"}},"Partial"),s("span",{style:{color:"#D4D4D4"}},"<"),s("span",{style:{color:"#4EC9B0"}},"Pick"),s("span",{style:{color:"#D4D4D4"}},"<"),s("span",{style:{color:"#4EC9B0"}},"T"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#4EC9B0"}},"K"),s("span",{style:{color:"#D4D4D4"}},">>")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A9955"}},"/** \u8054\u5408\u7C7B\u578B\u8F6C\u4EA4\u53C9\u7C7B\u578B */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A9955"}},"// https://stackoverflow.com/questions/50374908")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"type"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"UnionToIntersection"),s("span",{style:{color:"#D4D4D4"}},"<"),s("span",{style:{color:"#4EC9B0"}},"U"),s("span",{style:{color:"#D4D4D4"}},"> = ("),s("span",{style:{color:"#4EC9B0"}},"U"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#569CD6"}},"extends"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"any"),s("span",{style:{color:"#D4D4D4"}}," ? ("),s("span",{style:{color:"#9CDCFE"}},"k"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#4EC9B0"}},"U"),s("span",{style:{color:"#D4D4D4"}},") "),s("span",{style:{color:"#569CD6"}},"=>"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"void"),s("span",{style:{color:"#D4D4D4"}}," : "),s("span",{style:{color:"#4EC9B0"}},"never"),s("span",{style:{color:"#D4D4D4"}},") "),s("span",{style:{color:"#569CD6"}},"extends"),s("span",{style:{color:"#D4D4D4"}}," (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"k"),s("span",{style:{color:"#D4D4D4"}},": "),s("span",{style:{color:"#569CD6"}},"infer"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"I")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},") "),s("span",{style:{color:"#569CD6"}},"=>"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4EC9B0"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  ? "),s("span",{style:{color:"#4EC9B0"}},"I")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  : "),s("span",{style:{color:"#4EC9B0"}},"never")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#FFFFFF"}},[s("code",{class:""},[s("span",{class:"line"},[s("span",{style:{color:"#008000"}},"/** \u53EF\u4E3Anull */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0000FF"}},"type"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#267F99"}},"Nullable"),s("span",{style:{color:"#000000"}},"<"),s("span",{style:{color:"#267F99"}},"T"),s("span",{style:{color:"#000000"}},"> = "),s("span",{style:{color:"#267F99"}},"T"),s("span",{style:{color:"#000000"}}," | "),s("span",{style:{color:"#267F99"}},"null")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#008000"}},"/** \u4E0D\u53EF\u4E3Anull */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0000FF"}},"type"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#267F99"}},"NonNullable"),s("span",{style:{color:"#000000"}},"<"),s("span",{style:{color:"#267F99"}},"T"),s("span",{style:{color:"#000000"}},"> = "),s("span",{style:{color:"#267F99"}},"T"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#0000FF"}},"extends"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#267F99"}},"null"),s("span",{style:{color:"#000000"}}," | "),s("span",{style:{color:"#267F99"}},"undefined"),s("span",{style:{color:"#000000"}}," ? "),s("span",{style:{color:"#267F99"}},"never"),s("span",{style:{color:"#000000"}}," : "),s("span",{style:{color:"#267F99"}},"T")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0000FF"}},"type"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#267F99"}},"Arrayable"),s("span",{style:{color:"#000000"}},"<"),s("span",{style:{color:"#267F99"}},"T"),s("span",{style:{color:"#000000"}},"> = "),s("span",{style:{color:"#267F99"}},"T"),s("span",{style:{color:"#000000"}}," | "),s("span",{style:{color:"#267F99"}},"T"),s("span",{style:{color:"#000000"}},"[]")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#008000"}},"/** \u5C06\u5BF9\u8C61\u7684\u6240\u6709\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u53EF\u9009\u4E14\u53EF\u4E3Anull */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0000FF"}},"type"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#267F99"}},"NullablePartial"),s("span",{style:{color:"#000000"}},"<"),s("span",{style:{color:"#267F99"}},"T"),s("span",{style:{color:"#000000"}},"> = {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"  ["),s("span",{style:{color:"#267F99"}},"P"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#0000FF"}},"in"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#0000FF"}},"keyof"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#267F99"}},"T"),s("span",{style:{color:"#000000"}},"]?: "),s("span",{style:{color:"#267F99"}},"T"),s("span",{style:{color:"#000000"}},"["),s("span",{style:{color:"#267F99"}},"P"),s("span",{style:{color:"#000000"}},"] | "),s("span",{style:{color:"#267F99"}},"null")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#008000"}},"/** \u5C06\u5BF9\u8C61\u7684\u90E8\u5206\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u53EF\u9009 */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0000FF"}},"type"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#267F99"}},"Optional"),s("span",{style:{color:"#000000"}},"<")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"  "),s("span",{style:{color:"#267F99"}},"T"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#0000FF"}},"extends"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#267F99"}},"Record"),s("span",{style:{color:"#000000"}},"<"),s("span",{style:{color:"#267F99"}},"string"),s("span",{style:{color:"#000000"}},", "),s("span",{style:{color:"#267F99"}},"any"),s("span",{style:{color:"#000000"}},">,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"  "),s("span",{style:{color:"#267F99"}},"K"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#0000FF"}},"extends"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#0000FF"}},"keyof"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#267F99"}},"T"),s("span",{style:{color:"#000000"}}," = "),s("span",{style:{color:"#0000FF"}},"keyof"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#267F99"}},"T")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"> = "),s("span",{style:{color:"#267F99"}},"Omit"),s("span",{style:{color:"#000000"}},"<"),s("span",{style:{color:"#267F99"}},"T"),s("span",{style:{color:"#000000"}},", "),s("span",{style:{color:"#267F99"}},"K"),s("span",{style:{color:"#000000"}},"> & "),s("span",{style:{color:"#267F99"}},"Partial"),s("span",{style:{color:"#000000"}},"<"),s("span",{style:{color:"#267F99"}},"Pick"),s("span",{style:{color:"#000000"}},"<"),s("span",{style:{color:"#267F99"}},"T"),s("span",{style:{color:"#000000"}},", "),s("span",{style:{color:"#267F99"}},"K"),s("span",{style:{color:"#000000"}},">>")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#008000"}},"/** \u8054\u5408\u7C7B\u578B\u8F6C\u4EA4\u53C9\u7C7B\u578B */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#008000"}},"// https://stackoverflow.com/questions/50374908")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0000FF"}},"type"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#267F99"}},"UnionToIntersection"),s("span",{style:{color:"#000000"}},"<"),s("span",{style:{color:"#267F99"}},"U"),s("span",{style:{color:"#000000"}},"> = ("),s("span",{style:{color:"#267F99"}},"U"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#0000FF"}},"extends"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#267F99"}},"any"),s("span",{style:{color:"#000000"}}," ? ("),s("span",{style:{color:"#001080"}},"k"),s("span",{style:{color:"#000000"}},": "),s("span",{style:{color:"#267F99"}},"U"),s("span",{style:{color:"#000000"}},") "),s("span",{style:{color:"#0000FF"}},"=>"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#267F99"}},"void"),s("span",{style:{color:"#000000"}}," : "),s("span",{style:{color:"#267F99"}},"never"),s("span",{style:{color:"#000000"}},") "),s("span",{style:{color:"#0000FF"}},"extends"),s("span",{style:{color:"#000000"}}," (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"  "),s("span",{style:{color:"#001080"}},"k"),s("span",{style:{color:"#000000"}},": "),s("span",{style:{color:"#0000FF"}},"infer"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#267F99"}},"I")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},") "),s("span",{style:{color:"#0000FF"}},"=>"),s("span",{style:{color:"#000000"}}," "),s("span",{style:{color:"#267F99"}},"void")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"  ? "),s("span",{style:{color:"#267F99"}},"I")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#000000"}},"  : "),s("span",{style:{color:"#267F99"}},"never")]),l(`
`),s("span",{class:"line"})])])])])])],-1),y={title:"TS\u5907\u5FD8\u5F55(TODO)",date:"2022-09-26T00:00:00.000Z",wordCount:100,tags:["ts"]},C="",E=e({__name:"TypeScript-memo",setup(D,{expose:o}){return o({frontmatter:{title:"TS\u5907\u5FD8\u5F55(TODO)",date:"2022-09-26T00:00:00.000Z",wordCount:100,tags:["ts"]},excerpt:void 0}),(u,F)=>{const n=p("essay");return a(),c(n,{frontmatter:y},{default:t(()=>[r]),_:1})}}});export{E as default,C as excerpt,y as frontmatter};