let t=document.body.firstElementChild.firstElementChild;    // accessing table
console.log(t);

console.log(t.rows);    // give all rows in form of html collection

console.log(t.caption); // give caption

console.log(t.tHead);    // give <thead>
console.log(t.tFoot);   // give <tfoot>

// gets all <tbody> which existed in table
let tBody=t.tBodies;
console.log(tBody);

// gets all <tr> of first <tbody> which existed in table
let tr=tBody[0].rows;
console.log(tr);
let trArr=Array.from(tr);
console.log(trArr);
console.log(trArr[0], typeof trArr[0]);
console.log(tr[0], typeof tr[0]);


console.log(tr[0].rowIndex);    // gives row index of first <tr>