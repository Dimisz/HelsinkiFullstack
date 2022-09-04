import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const Course = ({ course }) => {
    let totalExercises = 0;
    for(let i = 0; i < course.parts.length; i++){
        totalExercises += course.parts[i].exercises;
    }
    
    return(
        <>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total total={totalExercises} />
        </>
    )
}

export default Course;