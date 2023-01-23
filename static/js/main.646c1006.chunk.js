(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),o=(c(10),c(11),c(5)),i=c.n(o),d=c(0),r=Object(l.memo)((function(e){var t=e.todos,c=e.selectedTodoId,s=e.onSelectTodoId;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"todo",children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),Object(d.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:i()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e.id)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"far fa-eye".concat(c===e.id?"-slash":"")})})})})]},e.id)}))})]})})),j=Object(l.memo)((function(e){var t=e.onSelectFilter,c=e.filter,s=e.onFilter,a=e.query;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return t(e.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return s("")}})})]})]})}));function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var u=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},h=Object(l.memo)((function(e){var t=e.todo,c=e.onClose,s=Object(l.useState)(),a=Object(n.a)(s,2),o=a[0],i=a[1],r=Object(l.useState)(!1),j=Object(n.a)(r,2),h=j[0],O=j[1],m=Object(l.useState)(!1),x=Object(n.a)(m,2),f=x[0],p=x[1];Object(l.useEffect)((function(){var e;O(!0),(e=t.userId,b("/users/".concat(e))).then(i).catch((function(){return p(!0)})).finally((function(){return O(!1)}))}),[t.userId]);return Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),h?Object(d.jsx)(u,{}):Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c()}})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(null===o||void 0===o?void 0:o.email),children:null===o||void 0===o?void 0:o.name})]})]})]}),f&&Object(d.jsx)("p",{className:"has-text-danger",children:"Can not load user"})]})})),O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(0),o=Object(n.a)(a,2),i=o[0],O=o[1],m=Object(l.useState)("all"),x=Object(n.a)(m,2),f=x[0],p=x[1],N=Object(l.useState)(""),v=Object(n.a)(N,2),y=v[0],g=v[1],k=Object(l.useState)(!1),C=Object(n.a)(k,2),S=C[0],w=C[1],I=Object(l.useState)(!1),T=Object(n.a)(I,2),F=T[0],_=T[1];Object(l.useEffect)((function(){w(!0),b("/todos").then(s).catch((function(){return _(!0)})).finally((function(){return w(!1)}))}),[]);var B=Object(l.useCallback)((function(e){p(e)}),[]),E=Object(l.useCallback)((function(e){g(e)}),[]),L=Object(l.useCallback)((function(e){O(e)}),[]),q=Object(l.useCallback)((function(){O(0)}),[]),A=y.toLowerCase().split(" ").filter(Boolean).join(" "),J=Object(l.useMemo)((function(){return c.filter((function(e){var t=e.title.toLowerCase().includes(A),c=!0;switch(f){case"active":c=!e.completed;break;case"completed":c=e.completed;break;default:c=!0}return t&&c}))}),[f,A,c]),M=Object(l.useMemo)((function(){return J.find((function(e){return e.id===i}))}),[i,J]),P=y&&!J.length;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(j,{onSelectFilter:B,filter:f,onFilter:E,query:y})}),Object(d.jsxs)("div",{className:"block",children:[S?Object(d.jsx)(u,{}):Object(d.jsx)(r,{todos:J,onSelectTodoId:L,selectedTodoId:i}),F&&Object(d.jsx)("p",{className:"has-text-danger",children:"Can not load todos."}),P&&Object(d.jsx)("p",{className:"has-text-danger",children:"no matched todos"})]})]})})}),M&&Object(d.jsx)(h,{todo:M,onClose:q})]})};a.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.646c1006.chunk.js.map