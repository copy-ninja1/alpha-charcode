(()=>{var r={10:r=>{function t(){return Array.from(Array(26)).map(((r,t)=>t+65)).map((r=>String.fromCharCode(r)))}r.exports=class{constructor(){this.value=t()}get val(){return this.value}call(){return this}from(r,e){if(r&&e){let n=t().findIndex((t=>t===r)),a=t().findIndex((r=>r===e));return this.value=t().splice(n,a),this}throw new Error("the from method expects 2 argument a start and an end string")}random(){return this.value=function(r){for(var t,e=r.length;0!=e;)t=Math.floor(Math.random()*e),e--,[r[e],r[t]]=[r[t],r[e]];return r}(this.value),this}}}},t={},e=function e(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return r[n](o,o.exports,e),o.exports}(10);module.exports=e})();