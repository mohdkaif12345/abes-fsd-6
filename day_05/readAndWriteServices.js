import fs from "fs/promises";


const readJsonFile = async (path)=>{

try {
    const data = await fs.readFile(path,"utf-8");
    console.log (JSON.parse(data));
}catch (error) {

    console.log("unable to read file");
}
}

readJsonFile("student.json");

