(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(151);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(144),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(146),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(34);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Chatbot Workshop Hands-On Labs"}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(48),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},149:function(e,t,a){},151:function(e,t,a){"use strict";var n=a(147),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(153),s=a.n(l),u=a(145),d=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},m=a(152);a(33),a(154);function p(e){var t=e.exact,a=e.className,n=e.activeClassName,r=e.children;return i.a.createElement(u.Link,Object.assign({},e,{getProps:function(e){var r=e.isCurrent,i=e.isPartiallyCurrent;return{className:["nav-link",a,t&&r?n:"",!t&&i?n:""].join(" ").trim()}}}),r)}p.propTypes={exact:c.a.bool,className:c.a.string,activeClassName:c.a.string,children:c.a.node.isRequired},p.defaultProps={exact:!1,activeClassName:"current",className:""};var h=function(){return i.a.createElement("div",{style:{background:"#E5CCFF",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960}},i.a.createElement(m.a,{pills:!0},i.a.createElement(m.b,null,i.a.createElement(p,{to:"/",exact:!0},"Home")),i.a.createElement(m.b,null,i.a.createElement(p,{to:"/lab-1"},"Lab 1")),i.a.createElement(m.b,null,i.a.createElement(p,{to:"/lab-2"},"Lab 2")),i.a.createElement(m.b,null,i.a.createElement(p,{to:"/lab-3"},"Lab 3")))))},f=(a(149),a(155),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"A collection of hands-on labs to build chatbots with IBM Watson Assistant."},{name:"keywords",content:"chatbot, chatbots, watson, watson assistant, ibm, workshop, chatbot workshop"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(h,null),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});f.propTypes={children:c.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-404-js-34fe9c498b9d266bf69a.js.map