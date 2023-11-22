export default {
    namespaced: true,
    state: {
        teachersList: [
            { id: 1, name: 'John Wik' },
            { id: 2, name: 'Alice Johnson' },
            { id: 3, name: 'Bob Smith' },
            { id: 4, name: 'Eva Davis' },
            { id: 5, name: 'Michael Brown' },
            { id: 6, name: 'Sophia Miller' },
            { id: 7, name: 'David Wilson' },
            { id: 8, name: 'Olivia Anderson' },
            { id: 9, name: 'James Lee' },
            { id: 10, name: 'Emma Taylor' },
        ],
    },
    getters: {
        teachersList: ({ teachersList }) => teachersList,
        getTeacherById: ({teachersList}) => teacherId => teachersList.find(teacher => teacher.id == teacherId)
    },
    mutations: {},
    actions: {},
    modules: {},
}
