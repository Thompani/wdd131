const aCourse = {
    code: "CSE121b",
    name:   "Javascript Langauge",
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T",
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 25,
            days: "TTh",
            instructor: "Sis A",
        },
    ],
   enrollStudent:  function(sectionNum) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sections.findIndex (
     (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
     this.sections[sectionIndex].enrolled++;
     renderSections(this.sections);
    }
   },
   dropStudent: function(sectionNum) {
// find the right section...Array.findIndex will work here
const sectionIndex = this.sections.findIndex (
  (section) =>  section.sectionNum == sectionNum
);
if (sectionIndex >= 0) {
    this.sections[sectionIndex].enrolled--;
    renderSections(this.sections);
}
   },
};

function setCourseInfo(course){
    const courseName = document.querySelector("#CourseNAme");
    const courseCode = document.querySelector("#CourseCode");
    courseName.textContent = course.name;

}
function renderSections(section){
  const html = sections.map (
    //return
    (section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomName}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td><tr>`  
);
document.querySelector("#sections").innerHTML = html.join("");
}
document.querySelector("#enrollStudent").addEventListener("click", function(){
  const sectionNum =   document.querySelector("#sectionNumber").value;
  aCourse.enrollStudent(sectionNum);
});
document.querySelector("#enrollStudent").addEventListener("click", function(){
    const sectionNum =   document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
  });

// function renderSections(sections) {
//     const html = sections.map(sectionTemplate);
// document.querySelector("#sections").innerHTML = html.join("");
// }

setCourseInfo(aCourse);
renderSections(aCourse.sections);