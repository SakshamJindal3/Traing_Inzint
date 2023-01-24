//Factory Function
function createCourse(title){
    return{
        title:title,
        duration:6,
        topics:["Marketing","Sales"],
        Fees:2500,
        Address:"Jalandhar,India"
        }
    }

var ftor=createCourse('java');
console.log('print ftor',ftor);

//Constructor Function
function Course(title){
    this.title=title,
    this.enroll=function(){
        console.log("You Are Successfully Enrolled!")
    }
}

const course=new Course("JavaScript");
course.enroll()