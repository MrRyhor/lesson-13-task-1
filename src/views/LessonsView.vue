<template>
    <div v-if="lessonsList.length" class="lessons-container">
        <h1>Выберiть урокi:</h1>
        <div v-for="lesson in lessonsList" :key="lesson.id">
            <label
                >{{ lesson.subject }}
                <input v-model="selectedLessons" type="checkbox" :value="lesson.id" />
            </label>
        </div>
        <button type="button" :disabled="!selectedLessons.length" @click="onTeachersChooseBtn">Выберiть вчителiв</button>
        {{ selectedLessons }}
    </div>
    <div v-else>No results</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'LessonsView',
    data() {
        return {
            selectedLessons: [],
        }
    },

    computed: {
        ...mapGetters('lessons', ['lessonsList']),        
    },
    methods: {
        onTeachersChooseBtn() {
            this.$router.push({
                name: 'selected-teachers',
                params: {
                    id: this.selectedLessons,
                },
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.lessons-container {
    & > button {
        margin-top: 20px;
    }
}
</style>
