// Head Component
const Head = (props) => {
  console.log(props)
  return ( 
    <div>
       <h1>{props.course}</h1>
    </div>

   );
}


// Content Component
const Content = () => {

  return (
    <div>
      <Part1 />
      <Part2  />
      <Part3 />
    </div>
   );
}
 

//Refactoring Contet component
const Part1 = () => {
  return ( 
    <div>
      <p> {part1} {exercises1}</p>
    </div>
   );
}

const Part2 = () => {
  return ( 
    <div>
      <p> {part2} {exercises2}</p>
    </div>
   );
}

const Part3 = () => {
  return ( 
    <div>
      <p> {part3} {exercise3}</p>
    </div>
   );
}





// // Total Component
const Total = (props) => {
  console.log(props)
 return ( <div>

<p> Number of exercises {props.exercises}</p>

 </div>
  );
}
 





const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
     <Head course={course} />
     <Content />
      {/* <Content part={part1} exercises={exercises1} /> */}
      {/* <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} /> */}

      <Total exercises = {exercises1 + exercises2 + exercises3}/>
      
    </div>
  ) 
}

export default App