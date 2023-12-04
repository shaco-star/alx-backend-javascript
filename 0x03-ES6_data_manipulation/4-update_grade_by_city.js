import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity(arr, city, newGrades) {
  const filtered = arr.filter((el) => el.location === city);
  return filtered.map((el) => {
    const grade = newGrades.find((item) => item.studentId === el.id);
    return { ...el, grade: grade ? grade.grade : 'N/A' };
  });
}
console.log(updateStudentGradeByCity(getListStudents(), 'San Francisco', [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), 'San Francisco', [{ studentId: 5, grade: 97 }]));
