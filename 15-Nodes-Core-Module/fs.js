// const fs=require('fs');
// const { read } = require('fs');
const fs=require('fs/promises');


// write to a file

//callback version 

// fs.writeFile('file.txt', 'Hello World', (err)=>{
//     if(err) throw err;
//     console.log('File Created');
// })

// fs.writeFile('file2.txt', 'Hello World 2')
//     .then(()=>console.log('File Created'))
//     .catch((err)=>console.log(err))

// fs.writeFileSync('file3.txt', 'Hello World 3');
// console.log('File Created')

// async function createFile(filename, content){
//     try{
//         await fs.writeFile(filename,content);
//         console.log('file created');
//     }catch(error){
//         console.log(error);
//     }
// }

// createFile('file4.txt', 'Hello World 4');

// Read From a files;;

async function readFile(filename){
    // let data;
    try{
        const data=  await fs.readFile(filename, 'utf8');
        // return data;
        console.log(data);
        
    }catch(error){
        console.log(error);
    }
}
// Delete file 

async function deleteFile(filename){
    try{
        await fs.unlink(filename);
    }catch(error){
        console.log(error);
    }
}
// Rename a method

async function renameFile(oldName, newName){
    try{
        await fs.rename(oldName, newName);
        console.log(`File ${oldName} renamed to ${newName}`);
    }catch(error){
        console.log(error);
    }
}

// Create Folder 

async function createFolder(folderName){
    try{
        await fs.mkdir(folderName);
        console.log(`Folder ${folderName} created`);
    }catch(error){
        console.log(error);
    }
}
// readFile('file4.txt').then((data)=>console.log(data))
// readFile('file4.txt');
// readFile('file3.txt');
readFile('file2.txt');
// renameFile('file4.txt', 'file');
createFolder('Niokhor');

// deleteFile('file3.txt');