const students =[
    {
        name: 'grace',
        grade: 6
    },
    {
        name: 'jennifer',
        grade: 4
    },
    {
        name: 'raul',
        grade: 10
    }
];

function getapprovedstudents(studentslist) {
    return studentslist.filter(students => students.grade >= 7);
}
console.log('Alunos Aprovados');
console.log(getapprovedstudents(students));
console.log('\nLista de alunos');
console.log(students);