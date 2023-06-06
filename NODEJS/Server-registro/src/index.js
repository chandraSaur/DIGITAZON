import express from "express";
import * as students from "./studentsRoutes.mjs";


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Gruppo 1");
});

app.get("/digitazon/2023/02/group/1/students", students.getGroupStudents);
app.get("/digitazon/2023/02/students", students.getAllStudents);



app.listen(3000, () => {
  console.log("Gruppo uno, porta 3000");
});
