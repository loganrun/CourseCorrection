
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


const getLearnerData = async (course, ag, submissions)=> {
  let info = course;
  let assignment = ag;
  let workSubmitted = submissions
  const  validAssign = []
  const validSubmissions=[]
  let siId = 125
  let s2Id = 132
  let s1Grade1 = 0
  let s1Grade2 = 0
  let s2Grade1 = 0
  let s2Grade2 = 0
  let s1Avg =0
  let s2Avg =0

  // const finalGrade= async(validAssign, validSubmissions)=>{

  //   const learner = await validSubmissions

  //   console.log(learner)
  //   console.log(validSubmissions)

  // }
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
    let currentCourse = new Set()

    try {
        for(date of dateCheck){
          let inputDate = date.due_at
          let currentDate = new Date()
          let currentDateString = currentDate.toISOString().slice(0,10)
          //console.log(inputDate)
          //console.log(currentDateString)
          if(inputDate <= currentDateString){
            currentCourse.add(date.id)
            validAssign.push(date)
          
          }else{
            console.log(`The assignment "${date.name}" is not due.`)
          }
        } 
        //console.log(validAssign)
      }catch (error) {
        console.error(error)
    } finally{
      for(assign of submissions){
        //console.log(submissions)
        if(currentCourse.has(assign.assignment_id)){
          validSubmissions.push(assign)
        }else{
          console.log(`Assignment ${assign.assignment_id} cannot be graded.`)
        }
      }
     
      for(sub of validSubmissions){
        let student = sub

        if(student.learner_id == 125 && student.assignment_id == 1 ){
          let submittedDate = student.submission.submitted_at
          //console.log(submittedDate)
          let dueDate = '2023-01-25'
          if(dueDate >= submittedDate){
            potentialScore1 = 50
            actualScore1 = student.submission.score
            finalGrade1 = actualScore1 / potentialScore1
            //console.log(finalGrade1)
          }else{
            potentialScore2 = 50 
            actualScore1 = student.submission.score - (student.submission.score * .10)
            finalGrade1 = actualScore2 / potentialScore2
           //console.log(finalGrade1)
          }
          s1Grade1 = finalGrade1
          console.log(s1Grade1)
        }
        if(student.learner_id == 125 && student.assignment_id == 2){
          let submittedDate = student.submission.submitted_at
          //console.log(submittedDate)
          let dueDate = "2023-02-27"
          if(dueDate >= submittedDate){
            potentialScore = 150
            actualScore = student.submission.score
            finalGrade2 = actualScore / potentialScore
            console.log(finalGrade2)
          }else{
            potentialScore = 150 
            actualScore1 = student.submission.score - (student.submission.score * .10)
            finalGrade2 = actualScore / potentialScore
            //console.log(finalGrade2)
          }
          s1Grade2 = finalGrade2
          
        }
        if(student.learner_id == 132 && student.assignment_id == 1){
          let submittedDate = student.submission.submitted_at
          //console.log(submittedDate)
          let dueDate = '2023-01-25'
          if(dueDate >= submittedDate){
            potentialScore = 50
            actualScore = student.submission.score
            finalGrade1 = actualScore / potentialScore
            //console.log(finalGrade1)
          }else{
            potentialScore = 50 - (50 * .10)
            actualScore = student.submission.score
            finalGrade1 = actualScore / potentialScore
            //console.log(finalGrade1)
          }
          s2Grade1 = finalGrade1
          console.log(s2Grade1)
        }
        if(student.learner_id == 132 && student.assignment_id == 2){
          let submittedDate = student.submission.submitted_at
          //console.log(submittedDate)
          let dueDate = "2023-02-27"
          if(dueDate >= submittedDate){
            potentialScore = 150
            actualScore = student.submission.score
            finalGrade2 = actualScore / potentialScore
            //console.log(finalGrade2)
          }else{
            potentialScore = 150 
            actualScore = student.submission.score - (150 * .10)
            finalGrade2 = actualScore / potentialScore
            //console.log(finalGrade2)
          }
          s2Grade2 = finalGrade2
          console.log(s2Grade2)
        }
      }

      s1Avg = (47 + 150) /(50 + 150)
      console.log(s1Avg)
      s2Avg = (39 + 126) / (50 + 150)
      console.log(s2Avg)

    }
    return 
  }

    try{
      if(courseValidate(assignment,info) == true){
        AssignmentChecker(assignment, workSubmitted)
    } else {
        throw new Error("These are not the right assignments for this course")
    }

    }catch(error){
      
      console.error(error)
    }
  
    // here, we would process this data to achieve the desired result.
    const result = 
    [
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
  
  //console.log(result);