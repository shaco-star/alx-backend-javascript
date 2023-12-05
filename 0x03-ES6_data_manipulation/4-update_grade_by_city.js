export default function updateStudentGradeByCity(arr, city, newGrades) {
  const filtered = arr.filter((el) => el.location === city);
  return filtered.map((el) => {
    const grade = newGrades.find((item) => item.studentId === el.id);
    return { ...el, grade: grade ? grade.grade : 'N/A' };
  });
}
