import fs from 'node:fs'

const readStream = fs.createReadStream('output.txt');

// Configurando o encoding para 'utf8' para ler os dados como texto
readStream.setEncoding('utf8');

// Escutando o evento 'data' para processar os dados à medida que são lidos
readStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  console.log(chunk);
});

// Escutando o evento 'end' para saber quando a leitura foi concluída
readStream.on('end', () => {
  console.log('No more data to read.');
});

// Escutando o evento 'error' para tratar quaisquer erros que possam ocorrer
readStream.on('error', (err) => {
  console.error('An error occurred:', err);
});
