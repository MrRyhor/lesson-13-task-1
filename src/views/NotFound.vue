<template>
    <div class="not-found">
        This page is not found (404)
        <button type="button" @click = "onBackAction">Back to Main</button>
    </div>
</template>
<script>
export default {
    name: 'NotFound',

    methods: {
        onBackAction(){
            this.$router.push({
                name: 'main'
            })
        }
    },
}
</script>
<style lang="scss" scoped>
    .not-found{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        flex-grow: 1;
        text-transform: uppercase;
        font-weight: 700;
    }
</style>