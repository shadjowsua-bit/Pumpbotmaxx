import assert from 'node:assert/strict';
function totals(transactions){let income=0,expenses=0;for(const t of transactions){if(!Number.isFinite(t.amount)||t.amount<=0)throw Error('Montant invalide');if(t.type==='income')income+=t.amount;else if(t.type==='expense')expenses+=t.amount;else throw Error('Type invalide')}return {income,expenses,net:Math.round((income-expenses)*100)/100}}
assert.deepEqual(totals([]),{income:0,expenses:0,net:0});
assert.deepEqual(totals([{type:'income',amount:19},{type:'expense',amount:4.5}]),{income:19,expenses:4.5,net:14.5});
assert.throws(()=>totals([{type:'income',amount:-1}]));
assert.throws(()=>totals([{type:'refund',amount:2}]));
console.log('OK — 4 tests de calcul/validation réussis.');
