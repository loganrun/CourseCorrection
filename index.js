const validAssign=[]
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

const courseValidate=(assignment, courseInfo) =>{
    let courseId= courseInfo.id
    let assignCheck = assignment.course_id

    if(courseId === assignCheck){
        return true
    }else{
        return false
    }
}

const AssignmentChecker = (assignment, workSubmitted) =>{
    const dateCheck = assignment.assignments
    const submissions = workSubmitted
    let validAssign = []
    let currentCourse = new Set()

    try {
        
        
        interDate=''
        for(date of dateCheck){
          interDate = date.due_at

         //console.log(interDate)
          let inputDate = date.due_at
          let currentDate = new Date()
          let currentDateString = currentDate.toISOString().slice(0,10)
          //console.log(inputDate)
          //console.log(currentDateString)
          if(inputDate <= currentDateString){
            currentCourse.add(date.id)
            validAssign.push(date)
          
          }else{
            //console.log(`The assignment "${date.name}" is not due`)
          }
        } 
        //console.log(validAssign)
      }catch (error) {
        console.error(error)
        
    } finally{

      for(assign of submissions){
        
        if(currentCourse.has(assign.assignment_id)){

          validAssign.push(assign)

        }else{

          //console.log("these assignments aren't valid")
        }

        
        //console.log(currentCourse)

      }
      //console.log(validAssign)
        
    }
}

const getLearnerData = async (course, ag, submissions)=> {
    let info = course;
    let assignment = ag;
    let workSubmitted = submissions
    //const courseValidator = await courseValidate(assignment,info)

    if(courseValidate(assignment,info) == true){
        AssignmentChecker(assignment, workSubmitted)
    } else {
        throw new Error("These are not the right assignments for this course")
    }

    


    
    // for(assign in assignment){
    //     //console.log(assignment.course_id)
    // }



    // for(learner of submissions){

    //     //console.log(learner.learner_id)

    // }






    //console.log(info)
    //console.log(assignment)
    //console.log(entry)

    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);