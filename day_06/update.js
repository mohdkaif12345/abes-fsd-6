import {readJsonFile, writeJsonFile} from "../day_05/readAndWriteServices";
const FILE = "../day_05/student.json";
const updateData = async(id, data) => {
    const students = await readJsonFile(FILE);
    if(students.length === 0) return;

    const user = students.filter((student)=> student.id === id);
    if(user.length === 0) return;
         
    const updateData = students.map((student)=>
    student.id === id ?  { ...student, ...data } : student);

    const response = await writeJsonFile(FILE, updateData);
    
    console.log(response.status);
}

updateData(211,{first_name:"abc",last_name:"xyz"});