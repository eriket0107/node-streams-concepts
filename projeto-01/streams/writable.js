import fs from 'node:fs'

const writeStream = fs.createWriteStream('output.txt');

// Escrevendo uma string simples no arquivo
writeStream.write('Hello, World!\n');

// Escrevendo um buffer no arquivo
const buffer = Buffer.from('This is a buffer example\n');
writeStream.write(buffer);

// Enviando um objeto JSON convertido em uma string
const jsonData = { message: 'This is a JSON object' };
writeStream.write(JSON.stringify(jsonData));

// Sinalizando o fim da escrita no arquivo
writeStream.end();

// Adicionando um listener para o evento 'finish'
writeStream.on('finish', () => {
  console.log('All data has been flushed to the file.');
});

// Adicionando um listener para o evento 'error'
writeStream.on('error', (err) => {
  console.error('An error occurred:', err);
});