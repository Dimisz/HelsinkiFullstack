import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const Course = ({ course }) => {
  
  const totalExercises = course.parts.reduce((sum, part) => {
    //console.log(sum, part.exercises);
    return sum + part.exercises;
  }, 0);
  console.log(totalExercises);


    return(
        <>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total total={totalExercises} />
        </>
    )
}

export default Course;