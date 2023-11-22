export default {
    namespaced: true,
    state: {
        lessonsList: [
            { id: 1, subject: 'Mathematics' },
            { id: 2, subject: 'English' },
            { id: 3, subject: 'History' },
            { id: 4, subject: 'Science' },
            { id: 5, subject: 'Computer Science' },
            { id: 6, subject: 'Physical Education' },
            { id: 7, subject: 'Art' },
            { id: 8, subject: 'Music' },
            { id: 9, subject: 'Geography' },
            { id: 10, subject: 'Language Arts' },
        ],
    },
    getters: {
        lessonsList: ({ lessonsList }) => lessonsList,
        getLessonById:
            ({ lessonsList }) =>
            (lessonId) =>
                lessonsList.find((lesson) => lesson.id == lessonId),
    },
    mutations: {},
    actions: {},
    modules: {},
}
