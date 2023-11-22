<template>
    <div class="result-container">
        <div v-for="item in getСurriculumList" :key="item.id" class="item-container">
            <div>{{ item.subject }}</div>
            <div>---</div>
            <div>{{ item.teacher }}</div>
            <!-- {{ item.subject }} --- {{ item.teacher }} -->
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'СurriculumView',
    computed: {
        ...mapGetters('teachers', ['teachersList', 'getTeacherById']),
        ...mapGetters('lessons', ['lessonsList', 'getLessonById']),
        getParams() {
            console.log(this.$route.params.id)
            return this.$route.params.id
        },
        getСurriculumList() {
            const res = this.$route.params.id.map((id) => {
                const firstNum = id.match(/^(\d+)-\d+/)
                // console.log(firstNum)
                const firstVal = this.getLessonById(firstNum[1])
                const secondNum = id.match(/^\d+-(\d+)$/)
                // console.log(secondNum)
                const secondVal = this.getTeacherById(secondNum[1])
                // console.log(firstVal, secondVal)
                return { id: Date.now(), subject: firstVal.subject, teacher: secondVal.name }
            })
            // console.log(res)
            return res
        },
    },
}
</script>
<style lang="scss" scoped>
    .result-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        & .item-container{
            margin-top: 10px;
            display: flex;
        }
    }
</style>
