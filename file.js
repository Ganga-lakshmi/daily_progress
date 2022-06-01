const fs = require('fs');

//reading files
//file name should be existed one

fs.readFile('./docs/blog1.txt',(err,data)=>
{
    if(err){
        console.log(err);
    }
    console.log('1.the file readed')
    console.log(data.toString());
});

console.log('2.last line');

//writing files

fs.writeFile('./docs/blog2.txt','hello, world',() =>{
    console.log('3.file was written');
});
//if the file exists it replaces with new data or else it creates the file with data


// directories

//making directory and remove (rmdir) directories

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('4.folder created');
    })
}
else{
    fs.rmdir('./assets' , (err) => {
        if(err){
            console.log(err);
        }
        console.log('5.folder deleted');
    });
}

//deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('6.file deleted');
    })
}
else{
    console.log('file not extsts');
}


// if(fs.existsSync('./useles')){
//     fs.unlink('./useles' , (err) => {
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted');
//     })
// } trying for deleting folder