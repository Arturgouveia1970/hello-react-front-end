const apiUrl = 'https://127.0.0.1:3000/api/v1/greetings';
const GREET_ALL = '/greeting/GREET_ALL';

export const greetall = (data) => ({
  type: GREET_ALL,
  data,
});

export const fetchGreeting = () => (dispatch) => {
  fetch(`${apiUrl}`)
    .then((response) => response.json())
    .then((json) => dispatch(greetall(json)));
};

const greetingReducer = (state = [], action) => {
  if (action.type === GREET_ALL) {
    return action.data;
  }
  return state;
};

export default greetingReducer;
