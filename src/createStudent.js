const createStudent = (studentName) => ({
  name: studentName,
  feedback: () => 'Eita pessoa boa!',
});

module.exports = createStudent;
