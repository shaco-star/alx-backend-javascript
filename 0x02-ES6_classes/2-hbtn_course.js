export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name need to be sting');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Lenght need to be Integer');
    }
    this._length = size;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (value instanceof Array) {
      this._students = value;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }
}
