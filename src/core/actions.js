const input = ({ data }) => ({
	input: data,
});

const todo = ({ state }) => ({
	todo: state.todo.concat({ id: Date.now(), text: state.input }),
});
const actions = {
	input,
	todo,

};

export default actions;
