export default function getStudentIdsSum(arr) {
  return arr.reduce((total, student) => total + student.id, 0);
}
