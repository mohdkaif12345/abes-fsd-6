import { readJsonFile} from "./readAndWriteServices.js";

const readFile = async (path) => {
    let data = []
    let message = "";
    try{
        data = await fstat.readFile(path,"utf-8");
        data = JSON.parse(fileData);
        message = "Data has been read successfully."
    }catch (error) {
        console.log("unable to read file")
    }
    return {data}
}