const Table = require('cli-table3');

let table = new Table(({
    head: ['Time', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri']
}))

let period = ['Library', '.Net SK B1\nCG Lab VG B2\nDBMS SV B3', '.Net GC', 'TOC VP', 'DBMS SV', 'CG Lab VG B1\nDBMS SV B2\n.Net SK B3', 'IMP BP', 'CG YC','ID', 'DBMS SV B1\n.Net SK B2', 'CG LAB B3 VG', 'CG (TUT) YC', 'Club Activity', 'Mentor Meet'];

table.push(
    ['09:00 to 10:00', period[0], period[0], period[0], {rowSpan:3,content:period[1],vAlign:'center'}, period[2]],
    ['10:00 to 11:00', period[3], period[3], period[4], {rowSpan:3,content:period[5],vAlign:'center'}],
    ['11:00 to 12:00', period[6], period[7], period[3]],
    ['12:00 to 01:00', period[0], period[8], period[6], period[6]],
    ['01:00 to 02:00', {colSpan: 5, content: 'Lunch', hAlign: 'center'}],
    ['02:00 to 03:00', {rowSpan:3,content:period[9],vAlign:'center'},{rowSpan:3,content:period[10],vAlign:'center'}, period[3], period[2], period[4]],
    ['03:00 to 04:00', period[10], period[7], period[6]],
    ['04:00 to 05:00', period[3], period[11], period[12]]
);

console.log(table.toString())

//console.log('_________________________\n---------------------');

// ['03:00 to 04:00', period[0], [], []],
    // ['04:00 to 05:00', [], [], []]