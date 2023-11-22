<template>
    <div v-if="getSelectedLessonsList.length" class="list-container">
        <div v-for="lesson in getSelectedLessonsList" :key="lesson.id" class="item-container">
            {{ lesson.subject }}
            <select v-model="selectedTeacherVal" @change = "onChange(lesson.id)">
                <option default>Select teacher</option>
                <option v-for="teacher in teachersList" :key="teacher.id" :value="teacher.id">
                    {{ teacher.name }}
                </option>
            </select>            
        </div>
        <button type="button" @click="onBtnActiob">Розпочати навчання</button>        
    </div>
    <div v-else>No results</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'TeachersView',
    data() {
        return {
            selectedTeacherVal: null,
            selectedTeachersLessonsArr: [],
        }
    },

    computed: {
        ...mapGetters('teachers', ['teachersList']),
        ...mapGetters('lessons', ['getLessonById']),
        getSelectedLessonsList() {
            return this.$route.params.id.map((id) => this.getLessonById(id))
        },
    },
    methods: {       
        onChange(lessonId){
          // this.selectedTeachersLessonsArr.push({lesson: lessonId, teacher: this.selectedTeacherVal})
          this.selectedTeachersLessonsArr.push(`${lessonId}-${this.selectedTeacherVal}`)

          console.log(this.selectedTeachersLessonsArr)
        },
         onBtnActiob() {
           this.$router.push({
            name: 'selected-teachers-lessons',
            params:{
              id:this.selectedTeachersLessonsArr
            }
           })
        },
    },
}
</script>
<style lang="scss" scoped>
.list-container {
    max-width: 1000px;

    & .item-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }

    & .teachers-list-select {
        display: flex;
        flex-direction: column;
    }

    & > button {
        margin-top: 20px;
    }
}
</style>
