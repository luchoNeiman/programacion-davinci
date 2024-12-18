const $tabla = document.querySelector('#tabla')
console.log('$tabla.rows', $tabla.rows);
console.log('$tabla.tBodies', $tabla.tBodies);
console.log('$tabla.rows[0]', $tabla.rows[0].cells);

for (let i = 0; i < $tabla.rows.length; i++) {
  console.log($tabla.rows[i].cells[1]);
  $tabla.rows[i].cells[i].style.backgroundColor = 'indianred';
}