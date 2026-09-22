// quick smoke test
const { TENETS, TENET_TEXT, isCell, watchMode, toggleWatch } = require('./index.js');
console.log('tenets:', Object.values(TENETS));
console.log('isCell({state,witness_log,behavior,address,type}):', isCell({state:1,witness_log:[],behavior:'idle',address:'h',type:'cell'}));
console.log('isCell({}):', isCell({}));
console.log('watchMode({scope:"universe"}):', watchMode({scope:'universe'}));
console.log('toggleWatch:', toggleWatch({scope:'universe'}));
