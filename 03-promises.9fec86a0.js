function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("7Y9D8");const u=document.querySelector(".form"),l=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),s=document.querySelector('input[name="amount"]');function d(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r&&n({position:e,delay:t}),o({position:e,delay:t})}),t)}))}u.addEventListener("submit",(function(t){t.preventDefault();let n=Number(l.value);const o=Number(a.value),r=Number(s.value);let c=0;if(n<=0||o<=0||r<=0)return e(i).Notify.failure("Please enter a correct value");for(let t=1;t<=r;t++)c=t,d(c,n).then((({position:t,delay:n})=>{e(i).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`Rejected promise ${t} in ${n}ms`)})),n+=o;u.reset()}));
//# sourceMappingURL=03-promises.9fec86a0.js.map
