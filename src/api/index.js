import axios from 'axios';

//Http Request & response 와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};
// API 함수들을 정리
async function fetchNewsList(){
    //return axios.get(config.baseUrl + 'news/1.json');
    //문자열과 변수를 같이 적절히 사용시 백틱사용 (shift + ~)
    return await axios.get(`${config.baseUrl}news/1.json`);
}

async function fetchAskList(){
    const response = await axios.get(`${config.baseUrl}ask/1.json`);
    return response;
}  

function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}
function fetchList(pageName){
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(username){
    return axios.get(`${config.baseUrl}user/${username}.json`)
}
// function fetchItemInfo(id){
//     return axios.get(`${config.baseUrl}item/${id}.json`)
// }

const fetchItemInfo = (id) => {
    return axios.get(`${config.baseUrl}item/${id}.json`)
}
export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList,

}
