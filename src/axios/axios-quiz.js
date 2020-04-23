import axios from 'axios';
export default axios.create({
    baseURL: 'https://react-quiz-86ed9.firebaseio.com/'
});