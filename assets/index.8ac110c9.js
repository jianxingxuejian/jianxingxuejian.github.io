import{f as ve,x as o,g as fe,y as f,i as _,z as P,A as $,d as D,B as me,j as ke,k as Y,C as xe,D as _e,F as ye,l as J,n as h,m as ze,G,H as Q,h as y,J as Se,K as Ie,L as Pe,o as k,s as I,M as S,O as Z,P as q,c as X,w as z,b as ee,Q as N,u as A,e as $e,a as B,R as Be,_ as He,T as Me}from"./index.6a64574e.js";const Re={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},we=l=>{const{textColor2:d,primaryColorHover:e,primaryColorPressed:u,primaryColor:a,infoColor:i,successColor:n,warningColor:s,errorColor:c,baseColor:m,borderColor:x,opacityDisabled:g,tagColor:C,closeIconColor:r,closeIconColorHover:t,closeIconColorPressed:v,borderRadiusSmall:b,fontSizeMini:p,fontSizeTiny:H,fontSizeSmall:M,fontSizeMedium:R,heightMini:w,heightTiny:F,heightSmall:T,heightMedium:E,closeColorHover:V,closeColorPressed:j,buttonColor2Hover:O,buttonColor2Pressed:W,fontWeightStrong:L}=l;return Object.assign(Object.assign({},Re),{closeBorderRadius:b,heightTiny:w,heightSmall:F,heightMedium:T,heightLarge:E,borderRadius:b,opacityDisabled:g,fontSizeTiny:p,fontSizeSmall:H,fontSizeMedium:M,fontSizeLarge:R,fontWeightStrong:L,textColorCheckable:d,textColorHoverCheckable:d,textColorPressedCheckable:d,textColorChecked:m,colorCheckable:"#0000",colorHoverCheckable:O,colorPressedCheckable:W,colorChecked:a,colorCheckedHover:e,colorCheckedPressed:u,border:`1px solid ${x}`,textColor:d,color:C,colorBordered:"rgb(250, 250, 252)",closeIconColor:r,closeIconColorHover:t,closeIconColorPressed:v,closeColorHover:V,closeColorPressed:j,borderPrimary:`1px solid ${o(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:o(a,{alpha:.12}),colorBorderedPrimary:o(a,{alpha:.1}),closeIconColorPrimary:a,closeIconColorHoverPrimary:a,closeIconColorPressedPrimary:a,closeColorHoverPrimary:o(a,{alpha:.12}),closeColorPressedPrimary:o(a,{alpha:.18}),borderInfo:`1px solid ${o(i,{alpha:.3})}`,textColorInfo:i,colorInfo:o(i,{alpha:.12}),colorBorderedInfo:o(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:o(i,{alpha:.12}),closeColorPressedInfo:o(i,{alpha:.18}),borderSuccess:`1px solid ${o(n,{alpha:.3})}`,textColorSuccess:n,colorSuccess:o(n,{alpha:.12}),colorBorderedSuccess:o(n,{alpha:.1}),closeIconColorSuccess:n,closeIconColorHoverSuccess:n,closeIconColorPressedSuccess:n,closeColorHoverSuccess:o(n,{alpha:.12}),closeColorPressedSuccess:o(n,{alpha:.18}),borderWarning:`1px solid ${o(s,{alpha:.35})}`,textColorWarning:s,colorWarning:o(s,{alpha:.15}),colorBorderedWarning:o(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:o(s,{alpha:.12}),closeColorPressedWarning:o(s,{alpha:.18}),borderError:`1px solid ${o(c,{alpha:.23})}`,textColorError:c,colorError:o(c,{alpha:.1}),colorBorderedError:o(c,{alpha:.08}),closeIconColorError:c,closeIconColorHoverError:c,closeIconColorPressedError:c,closeColorHoverError:o(c,{alpha:.12}),closeColorPressedError:o(c,{alpha:.18})})},Fe={name:"Tag",common:ve,self:we},Te=Fe,Ee={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Ve=fe("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[f("strong",`
 font-weight: var(--n-font-weight-strong);
 `),_("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),_("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),_("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),_("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),f("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[_("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),_("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),f("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),f("icon, avatar",[f("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),f("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),f("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[P("disabled",[$("&:hover","background-color: var(--n-color-hover-checkable);",[P("checked","color: var(--n-text-color-hover-checkable);")]),$("&:active","background-color: var(--n-color-pressed-checkable);",[P("checked","color: var(--n-text-color-pressed-checkable);")])]),f("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[P("disabled",[$("&:hover","background-color: var(--n-color-checked-hover);"),$("&:active","background-color: var(--n-color-checked-pressed);")])])])]),je=Object.assign(Object.assign(Object.assign({},Y.props),Ee),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),Oe=Ie("n-tag"),We=D({name:"Tag",props:je,setup(l){const d=me(null),{mergedBorderedRef:e,mergedClsPrefixRef:u,inlineThemeDisabled:a,mergedRtlRef:i}=ke(l),n=Y("Tag","-tag",Ve,Te,l,u);xe(Oe,{roundRef:_e(l,"round")});function s(r){if(!l.disabled&&l.checkable){const{checked:t,onCheckedChange:v,onUpdateChecked:b,"onUpdate:checked":p}=l;b&&b(!t),p&&p(!t),v&&v(!t)}}function c(r){if(l.triggerClickOnClose||r.stopPropagation(),!l.disabled){const{onClose:t}=l;t&&Pe(t,r)}}const m={setTextContent(r){const{value:t}=d;t&&(t.textContent=r)}},x=ye("Tag",i,u),g=J(()=>{const{type:r,size:t,color:{color:v,textColor:b}={}}=l,{common:{cubicBezierEaseInOut:p},self:{padding:H,closeMargin:M,closeMarginRtl:R,borderRadius:w,opacityDisabled:F,textColorCheckable:T,textColorHoverCheckable:E,textColorPressedCheckable:V,textColorChecked:j,colorCheckable:O,colorHoverCheckable:W,colorPressedCheckable:L,colorChecked:oe,colorCheckedHover:re,colorCheckedPressed:le,closeBorderRadius:ce,fontWeightStrong:ne,[h("colorBordered",r)]:ae,[h("closeSize",t)]:se,[h("closeIconSize",t)]:te,[h("fontSize",t)]:ie,[h("height",t)]:U,[h("color",r)]:de,[h("textColor",r)]:he,[h("border",r)]:ue,[h("closeIconColor",r)]:K,[h("closeIconColorHover",r)]:ge,[h("closeIconColorPressed",r)]:be,[h("closeColorHover",r)]:pe,[h("closeColorPressed",r)]:Ce}}=n.value;return{"--n-font-weight-strong":ne,"--n-avatar-size-override":`calc(${U} - 8px)`,"--n-bezier":p,"--n-border-radius":w,"--n-border":ue,"--n-close-icon-size":te,"--n-close-color-pressed":Ce,"--n-close-color-hover":pe,"--n-close-border-radius":ce,"--n-close-icon-color":K,"--n-close-icon-color-hover":ge,"--n-close-icon-color-pressed":be,"--n-close-icon-color-disabled":K,"--n-close-margin":M,"--n-close-margin-rtl":R,"--n-close-size":se,"--n-color":v||(e.value?ae:de),"--n-color-checkable":O,"--n-color-checked":oe,"--n-color-checked-hover":re,"--n-color-checked-pressed":le,"--n-color-hover-checkable":W,"--n-color-pressed-checkable":L,"--n-font-size":ie,"--n-height":U,"--n-opacity-disabled":F,"--n-padding":H,"--n-text-color":b||he,"--n-text-color-checkable":T,"--n-text-color-checked":j,"--n-text-color-hover-checkable":E,"--n-text-color-pressed-checkable":V}}),C=a?ze("tag",J(()=>{let r="";const{type:t,size:v,color:{color:b,textColor:p}={}}=l;return r+=t[0],r+=v[0],b&&(r+=`a${G(b)}`),p&&(r+=`b${G(p)}`),e.value&&(r+="c"),r}),g,l):void 0;return Object.assign(Object.assign({},m),{rtlEnabled:x,mergedClsPrefix:u,contentRef:d,mergedBordered:e,handleClick:s,handleCloseClick:c,cssVars:a?void 0:g,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender})},render(){var l,d;const{mergedClsPrefix:e,rtlEnabled:u,closable:a,color:{borderColor:i}={},round:n,onRender:s,$slots:c}=this;s==null||s();const m=Q(c.avatar,g=>g&&y("div",{class:`${e}-tag__avatar`},g)),x=Q(c.icon,g=>g&&y("div",{class:`${e}-tag__icon`},g));return y("div",{class:[`${e}-tag`,this.themeClass,{[`${e}-tag--rtl`]:u,[`${e}-tag--strong`]:this.strong,[`${e}-tag--disabled`]:this.disabled,[`${e}-tag--checkable`]:this.checkable,[`${e}-tag--checked`]:this.checkable&&this.checked,[`${e}-tag--round`]:n,[`${e}-tag--avatar`]:m,[`${e}-tag--icon`]:x,[`${e}-tag--closable`]:a}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},x||m,y("span",{class:`${e}-tag__content`,ref:"contentRef"},(d=(l=this.$slots).default)===null||d===void 0?void 0:d.call(l)),!this.checkable&&a?y(Se,{clsPrefix:e,class:`${e}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:n,absolute:!0}):null,!this.checkable&&this.mergedBordered?y("div",{class:`${e}-tag__border`,style:{borderColor:i}}):null)}}),Le={class:"flex-center"},Ne=S("span",{class:"shrink-0"},"\u6807\u7B7E\uFF1A",-1),Ae={class:"grow flex-start"},De=D({__name:"MyTag",props:{tags:null},setup(l){const e=l.tags.map(u=>{switch(u){case"js":return{name:"JavaScript",color:{color:"#d3b72f"}};default:return{name:"",color:void 0}}});return(u,a)=>{const i=We;return k(),I("div",Le,[Ne,S("div",Ae,[(k(!0),I(Z,null,q(A(e),n=>(k(),X(i,{key:n.name,size:"small",bordered:!1,color:n.color,class:"cursor-pointer mr-3"},{default:z(()=>[ee(N(n.name),1)]),_:2},1032,["color"]))),128))])])}}}),Ue={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ke=S("path",{fill:"currentColor",d:"M21 4H3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M3 19V6h8v13H3m18 0h-8V6h8v13m-7-9.5h6V11h-6V9.5m0 2.5h6v1.5h-6V12m0 2.5h6V16h-6v-1.5Z"},null,-1),Je=[Ke];function Ge(l,d){return k(),I("svg",Ue,Je)}const Qe={name:"mdi-book-open-outline",render:Ge},Ye=ee(" \u9605\u8BFB "),Ze={class:"flex-col ml-8 sm:flex-evenly sm:flex-row sm:ml-8"},Xe=D({__name:"index",setup(l){const d=$e();return(e,u)=>{const a=Qe,i=He,n=De,s=Me;return k(),X(s,{bordered:!1,class:"bg-white/50 lg:min-h-[calc(100vh-40px)] lg:mb-20px"},{default:z(()=>[(k(!0),I(Z,null,q(A(Be),c=>(k(),I("div",{key:c.path,class:"flex-col"},[B(s,{title:c.title,class:"mb-20px bg-white/80"},{"header-extra":z(()=>[B(i,{text:"",onClick:m=>A(d).push(c.path)},{icon:z(()=>[B(a)]),default:z(()=>[Ye]),_:2},1032,["onClick"])]),default:z(()=>[S("div",Ze,[B(n,{tags:c.tags},null,8,["tags"]),S("div",null,"\u65F6\u95F4\uFF1A"+N(c.date),1),S("div",null,"\u5B57\u6570\uFF1A"+N(c.wordCount),1)])]),_:2},1032,["title"])]))),128))]),_:1})}}});export{Xe as default};
