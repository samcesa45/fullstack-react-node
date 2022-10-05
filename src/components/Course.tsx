import Content from './Content'
import Header from './Header'
import {ICourses} from '../types/types'

type ICourse={
  courses:ICourses
}

const Course=({courses}:ICourse)=>{
    const total = courses.parts.reduce((acc,current)=>{
        return acc + current.exercises
    },0)
   
    return (
        <div>
            <Header name={courses.name}/>
            {courses.parts.map(part=>(
                <Content name={part.name} exercises={part.exercises} key={part.id}/>
            ))}
             <p className='font-semibold'>total of {total} exercises</p>   
        </div>
    )
}

export default Course
