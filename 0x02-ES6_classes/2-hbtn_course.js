class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name need to be sting');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(size) {
    if (typeof name !== 'number') {
      throw new TypeError('Lenght need to be Integer');
    }
    this._length = size;
  }

  get students() {
    return this._students;
  }

  set students(student) {
    this._students = student;
  }
}
