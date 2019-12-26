let mutations = {
    ADD_TASK(state, task) {
        state.tasks.push(task)
    },
    ALTERNAR_TASK(state, task) {
        task.completed = !task.completed
    }
}

export default mutations
