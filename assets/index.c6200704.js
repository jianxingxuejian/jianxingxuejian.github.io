import{w as oe,g as p,e as T,h as d,k as te,a as re,s as le,l as W,m as X,b as c,n as m,f as S,r as $,u as E,p as q,j as F,q as K,t as G,d as h,v as R,N as ne,x as se,y as U,z as N,A as j,o as A,c as H,B as I,C as B,D as ae,T as ie,F as ce,G as de}from"./index.bb5ee7d4.js";import{_ as ue}from"./_plugin-vue_export-helper.cdc0426e.js";function be(e,o){return oe(e,t=>{t!==void 0&&(o.value=t)}),p(()=>e.value===void 0?o.value:e.value)}const he=T({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),ge=e=>{const{baseColor:o,textColor2:t,bodyColor:a,cardColor:i,dividerColor:r,actionColor:v,scrollbarColor:s,scrollbarColorHover:l,invertedColor:y}=e;return{textColor:t,textColorInverted:"#FFF",color:a,colorEmbedded:v,headerColor:i,headerColorInverted:y,footerColor:v,footerColorInverted:y,headerBorderColor:r,headerBorderColorInverted:y,footerBorderColor:r,footerBorderColorInverted:y,siderBorderColor:r,siderBorderColorInverted:y,siderColor:i,siderColorInverted:y,siderToggleButtonBorder:`1px solid ${r}`,siderToggleButtonColor:o,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:W(a,s),siderToggleBarColorHover:W(a,l),__invertScrollbar:"true"}},fe=te({name:"Layout",common:re,peers:{Scrollbar:le},self:ge}),V=fe,ve=X("n-layout-sider"),M={type:String,default:"static"},me=c("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[c("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),m("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),pe={embedded:Boolean,position:M,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Z=X("n-layout");function J(e){return T({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},S.props),pe),setup(o){const t=$(null),a=$(null),{mergedClsPrefixRef:i,inlineThemeDisabled:r}=E(o),v=S("Layout","-layout",me,V,o,i);function s(g,f){if(o.nativeScrollbar){const{value:C}=t;C&&(f===void 0?C.scrollTo(g):C.scrollTo(g,f))}else{const{value:C}=a;C&&C.scrollTo(g,f)}}G(Z,o);let l=0,y=0;const Y=g=>{var f;const C=g.target;l=C.scrollLeft,y=C.scrollTop,(f=o.onScroll)===null||f===void 0||f.call(o,g)};q(()=>{if(o.nativeScrollbar){const g=t.value;g&&(g.scrollTop=y,g.scrollLeft=l)}});const P={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},k={scrollTo:s},L=p(()=>{const{common:{cubicBezierEaseInOut:g},self:f}=v.value;return{"--n-bezier":g,"--n-color":o.embedded?f.colorEmbedded:f.color,"--n-text-color":f.textColor}}),_=r?F("layout",p(()=>o.embedded?"e":""),L,o):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:t,scrollbarInstRef:a,hasSiderStyle:P,mergedTheme:v,handleNativeElScroll:Y,cssVars:r?void 0:L,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender},k)},render(){var o;const{mergedClsPrefix:t,hasSider:a}=this;(o=this.onRender)===null||o===void 0||o.call(this);const i=a?this.hasSiderStyle:void 0,r=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return d("div",{class:r,style:this.cssVars},this.nativeScrollbar?d("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):d(K,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const ye=J(!1),Ce=J(!0),xe=c("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[m("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),m("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),_e={position:M,inverted:Boolean,bordered:{type:Boolean,default:!1}},Se=T({name:"LayoutHeader",props:Object.assign(Object.assign({},S.props),_e),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=E(e),a=S("Layout","-layout-header",xe,V,e,o),i=p(()=>{const{common:{cubicBezierEaseInOut:v},self:s}=a.value,l={"--n-bezier":v};return e.inverted?(l["--n-color"]=s.headerColorInverted,l["--n-text-color"]=s.textColorInverted,l["--n-border-color"]=s.headerBorderColorInverted):(l["--n-color"]=s.headerColor,l["--n-text-color"]=s.textColor,l["--n-border-color"]=s.headerBorderColor),l}),r=t?F("layout-header",p(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:i,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Te=c("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[m("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),m("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),Be=Object.assign(Object.assign({},S.props),{inverted:Boolean,position:M,bordered:Boolean}),ze=T({name:"LayoutFooter",props:Be,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=E(e),a=S("Layout","-layout-footer",Te,V,e,o),i=p(()=>{const{common:{cubicBezierEaseInOut:v},self:s}=a.value,l={"--n-bezier":v};return e.inverted?(l["--n-color"]=s.footerColorInverted,l["--n-text-color"]=s.textColorInverted,l["--n-border-color"]=s.footerBorderColorInverted):(l["--n-color"]=s.footerColor,l["--n-text-color"]=s.textColor,l["--n-border-color"]=s.footerBorderColor),l}),r=t?F("layout-footer",p(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:i,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${o}-layout-footer`,this.themeClass,this.position&&`${o}-layout-footer--${this.position}-positioned`,this.bordered&&`${o}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),we=c("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[m("bordered",[h("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),h("left-placement",[m("bordered",[h("border",`
 right: 0;
 `)])]),m("right-placement",`
 justify-content: flex-start;
 `,[m("bordered",[h("border",`
 left: 0;
 `)]),m("collapsed",[c("layout-toggle-button",[c("base-icon",`
 transform: rotate(180deg);
 `)]),c("layout-toggle-bar",[R("&:hover",[h("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),c("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[c("base-icon",`
 transform: rotate(0);
 `)]),c("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[R("&:hover",[h("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),m("collapsed",[c("layout-toggle-bar",[R("&:hover",[h("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),c("layout-toggle-button",[c("base-icon",`
 transform: rotate(0);
 `)])]),c("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[c("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),c("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[h("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),h("bottom",`
 position: absolute;
 top: 34px;
 `),R("&:hover",[h("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),h("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),R("&:hover",[h("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),h("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),c("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),m("show-content",[c("layout-sider-scroll-container",{opacity:1})]),m("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Re=T({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},d(ne,{clsPrefix:e},{default:()=>d(he,null)}))}}),$e=T({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},d("div",{class:`${e}-layout-toggle-bar__top`}),d("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Ie={position:M,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Pe=T({name:"LayoutSider",props:Object.assign(Object.assign({},S.props),Ie),setup(e){const o=se(Z),t=$(null),a=$(null),i=p(()=>N(l.value?e.collapsedWidth:e.width)),r=p(()=>e.collapseMode!=="transform"?{}:{minWidth:N(e.width)}),v=p(()=>o?o.siderPlacement:"left"),s=$(e.defaultCollapsed),l=be(U(e,"collapsed"),s);function y(b,n){if(e.nativeScrollbar){const{value:u}=t;u&&(n===void 0?u.scrollTo(b):u.scrollTo(b,n))}else{const{value:u}=a;u&&u.scrollTo(b,n)}}function Y(){const{"onUpdate:collapsed":b,onUpdateCollapsed:n,onExpand:u,onCollapse:O}=e,{value:w}=l;n&&j(n,!w),b&&j(b,!w),s.value=!w,w?u&&j(u):O&&j(O)}let P=0,k=0;const L=b=>{var n;const u=b.target;P=u.scrollLeft,k=u.scrollTop,(n=e.onScroll)===null||n===void 0||n.call(e,b)};q(()=>{if(e.nativeScrollbar){const b=t.value;b&&(b.scrollTop=k,b.scrollLeft=P)}}),G(ve,{collapsedRef:l,collapseModeRef:U(e,"collapseMode")});const{mergedClsPrefixRef:_,inlineThemeDisabled:g}=E(e),f=S("Layout","-layout-sider",we,V,e,_);function C(b){var n,u;b.propertyName==="max-width"&&(l.value?(n=e.onAfterLeave)===null||n===void 0||n.call(e):(u=e.onAfterEnter)===null||u===void 0||u.call(e))}const Q={scrollTo:y},D=p(()=>{const{common:{cubicBezierEaseInOut:b},self:n}=f.value,{siderToggleButtonColor:u,siderToggleButtonBorder:O,siderToggleBarColor:w,siderToggleBarColorHover:ee}=n,x={"--n-bezier":b,"--n-toggle-button-color":u,"--n-toggle-button-border":O,"--n-toggle-bar-color":w,"--n-toggle-bar-color-hover":ee};return e.inverted?(x["--n-color"]=n.siderColorInverted,x["--n-text-color"]=n.textColorInverted,x["--n-border-color"]=n.siderBorderColorInverted,x["--n-toggle-button-icon-color"]=n.siderToggleButtonIconColorInverted,x.__invertScrollbar=n.__invertScrollbar):(x["--n-color"]=n.siderColor,x["--n-text-color"]=n.textColor,x["--n-border-color"]=n.siderBorderColor,x["--n-toggle-button-icon-color"]=n.siderToggleButtonIconColor),x}),z=g?F("layout-sider",p(()=>e.inverted?"a":"b"),D,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:a,mergedClsPrefix:_,mergedTheme:f,styleMaxWidth:i,mergedCollapsed:l,scrollContainerStyle:r,siderPlacement:v,handleNativeElScroll:L,handleTransitionend:C,handleTriggerClick:Y,inlineThemeDisabled:g,cssVars:D,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender},Q)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:N(this.width)}]},this.nativeScrollbar?d("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):d(K,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),a?a==="bar"?d($e,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):d(Re,{clsPrefix:o,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?d("div",{class:`${o}-layout-sider__border`}):null)}}),ke={};function Le(e,o){const t=ce("router-view");return A(),H(t,null,{default:I(({Component:a,route:i})=>[B(ie,{name:"fade-slide",mode:"out-in",appear:""},{default:I(()=>[(A(),H(ae(a),{key:i.fullPath}))]),_:2},1024)]),_:1})}const Oe=ue(ke,[["render",Le]]),Fe=T({__name:"index",setup(e){return(o,t)=>{const a=Pe,i=Se,r=Ce,v=ze,s=ye;return A(),H(s,{"has-sider":"",class:"h-screen"},{default:I(()=>[B(a),B(s,null,{default:I(()=>[B(i),B(r,null,{default:I(()=>[B(de(Oe))]),_:1}),B(v)]),_:1})]),_:1})}}});export{Fe as default};
