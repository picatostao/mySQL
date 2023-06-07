const mysql=require("mysql2/promise");
async function main(){
try{
    let connection=await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"danimola",
        database:"reto1"
    });
    console.log("ready");

//CREAR COLUMNA

        // let insertar_columna="ALTER TABLE direccion ADD nueva_columna VARCHAR(10)";
        // let [result]=await connection.query(insertar_columna);
        // console.log(result);
        // await connection.end


//BORRAR COLUMNA


        // let borrar_columna="ALTER TABLE direccion DROP COLUMN nueva_columna";
        // let [result]=await connection.query(borrar_columna);
        // console.log(result);
        // await connection.end


//BORRAR TABLA


        // let borrarTabla="DROP TABLE direccion";
        // let [result]=await connection.query(borrarTabla);
        // console.log(result);
        // await connection.end

//TODOS SUSPENSOS  

        // let todosSuspensos="UPDATE marks set mark=0";
        // let [result]=await connection.query(todosSuspensos);
        // console.log(result);
        // await connection.end

        //EN WORKBENCH: UPDATE marks set mark=0

//NOMBRES ALUMNOS        

        // let nombresAlumnos="SELECT first_name , last_name FROM students ";
        // let [result]=await connection.query(nombresAlumnos);
        // console.log(result);
        // await connection.end

        //EN WORKBENCH:  SELECT first_name , last_name FROM students 

//DATOS PROFESORES        

        // let nombresAlumnos="SELECT * FROM teachers ";
        // let [result]=await connection.query(nombresAlumnos);
        // console.log(result);
        // await connection.end
        
        //EN WORKBENCH : SELECT * FROM teachers 

//APROBADO GENERAL!


        // let aprobadoGeneral="UPDATE marks SET mark=5 WHERE mark < 5 ";
        // let [result]=await connection.query(aprobadoGeneral);
        // console.log(result);
        // await connection.end

        //EN WORKBENCH: UPDATE marks SET mark=5 WHERE mark<5

//BORRAR VIEJOS


        // let borrarviejos="DELETE FROM marks WHERE date < YEAR(CURRENT_DATE)-1";
        // let [result]=await connection.query(borrarviejos);
        // console.log(result);
        // await connection.end

        //EN WORKBENCH: DELETE FROM marks WHERE date < YEAR(CURRENT_DATE)-1


  //////////////
 /// DIA 2 ////
//////////////


//MEDIA ASIGNATURA 1


        // let media_asignatura1="SELECT AVG (mark) AS media  FROM reto1.marks WHERE subject_id=1;";
        // let [result]=await connection.query(media_asignatura1);
        // console.log(result);
        // await connection.end

        //EN WORKBENCH: SELECT AVG (mark) AS media  FROM reto1.marks WHERE subject_id=1;


//TOTAL ALUMNOS

        // let total_alumnos="SELECT COUNT(*) FROM reto1.students;";
        // let [result]=await connection.query(total_alumnos);
        // console.log(result);
        // await connection.end

        //EN WORKBENCH: SELECT COUNT(*) FROM reto1.students;


//LISTAR TODOS LOS CAMPOS DE GROUPS

        // let listar_groups="SELECT * FROM reto1.grupos";
        // let [result]=await connection.query(listar_groups);
        // console.log(result);
        // await connection.end

        //EN WORKBENCH: SELECT * FROM reto1.grupos;


//ELIMINAR TODAS LAS NOTAS DE LA BASE DE DATOS QUE ESTÉN POR ENCIMA DE 5 Y TENGAN MAS DE UN AÑO
        

        // let eliminarAprobadosViejos="DELETE FROM reto1.marks WHERE mark>5 AND date < YEAR(CURRENT_DATE)-1";
        // let [result]=await connection.query(eliminarAprobadosViejos);
        // console.log(result);
        // await connection.end

        //EN WORKBENCH: DELETE FROM reto1.marks WHERE mark>5 AND date < DATE_SUB(NOW(), INTERVAL 1 YEAR);

///////////////////
//OBTENER TODOS LOS DATOS DE TODOS LOS ESTUDIANTES DE ESTE AÑO   


        // let eliminarAprobadosViejos="SELECT * FROM reto1.students WHERE date < YEAR(CURRENT_DATE)-1";
        // let [result]=await connection.query(eliminarAprobadosViejos);
        // console.log(result);
        // await connection.end

        //EN WORKBENCH: SELECT * FROM reto1.students WHERE date < YEAR(CURRENT_DATE)-1;


//CALCULAR EL NUMERO DE PROFESORES POR ASIGNATURA


        // let profesPorAsignatura="SELECT subject_id, COUNT(DISTINCT teacher_id) as profesorPorAsignatura FROM reto1.subject_teacher GROUP BY subject_id;";
        // let [result]=await connection.query(profesPorAsignatura);
        // console.log(result);
        // await connection.end

        //EN WORKBENCH: SELECT subject_id, COUNT(DISTINCT teacher_id) as profesorPorAsignatura FROM reto1.subject_teacher GROUP BY subject_id;



  //////////////////////////////////////RETO2///////////////////////////////////////////////

///////////////////////////////
//OBTERER ID Y NOTAS DE ALUMNOS (ID ENTRE 1 Y 2O Y NOTA MAYOR DE 8 Y DEL AÑO PASADO)

        // let idYnotas="SELECT student_id, mark FROM reto1.marks WHERE (student_id BETWEEN 1 AND 20)OR (mark>8 AND YEAR(CURRENT_DATE)-1)";
        // let [result]=await connection.query(idYnotas);
        // console.log(result);
        // await connection.end

    //EN WORKBENCH:SELECT student_id, mark FROM reto1.marks WHERE (student_id BETWEEN 1 AND 20)OR (mark>8 AND YEAR(CURRENT_DATE)-1)


//MEDIA DE NOTAS EN EL ULTIMO AÑO POR ASIGNATURA

        // let mediaUltimoAño="SELECT subject_id, AVG(mark) AS media  FROM reto1.marks WHERE YEAR(CURRENT_DATE)-1 GROUP BY subject_id";
        // let [result]=await connection.query(mediaUltimoAño);
        // console.log(result);
        // await connection.end

        //EN WORKBENCH:SELECT subject_id, AVG(mark) AS media  FROM reto1.marks WHERE DATE_SUB(NOW(), INTERVAL 1 YEAR) GROUP BY subject_id;


//MEDIA ULTIMO AÑO POR ALUMNO

        // let mediaUltimoAñoalum="SELECT student_id, AVG(mark) AS media from reto1.marks WHERE YEAR(CURRENT_DATE)-1 GROUP BY student_id";
        // let [result]=await connection.query(mediaUltimoAñoalum);
        // console.log(result);
        // await connection.end

        //EN WORKBENCH:SELECT student_id, AVG(mark) AS media from reto1.marks WHERE YEAR(CURRENT_DATE)-1 GROUP BY student_id;



    }
    

    catch(err){
        console.log(err);
        connection.end();
    }
}
main();

