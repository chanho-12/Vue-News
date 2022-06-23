import { fetchAskList, fetchList, fetchNewsList } from '../api/index.js';
import { fetchJobsList, fetchUserInfo, fetchItemInfo } from '../api/index.js';
export default {
    //promise
    FETCH_NEWS(context) {
        return fetchNewsList()
            .then(response => {
                console.log(response);
                context.commit('SET_NEWS', response.data);
                // state.news = response.data;
                return response;
            })
            .catch(error => {
                console.log(error);
            })
    },

    // async
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },
    FETCH_JOBS({ commit }) {
        return fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ASK(context) {
        return fetchAskList()
            .then(response => {
                console.log(response);
                context.commit('SET_ASK', response.data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_USER({ commit }, name){
        return fetchUserInfo(name)
        .then( ({data}) => {
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_ITEM({ commit }, name){
        return fetchItemInfo(name)
        .then( ({data}) => {
            commit('SET_ITEM', data)
        })
        .catch(error =>{ 
            console.log(error)
        })
    },
    FETCH_LIST({ commit }, pageName){
        return fetchList(pageName)
            .then(response => {commit('SET_LIST', response.data); 
            return response.data})
            .catch(error => console.log(error));
        
    },
    async FETCH_LIST({ commit}, pageName){
        try{
        const response = await fetchList(pageName)
        commit('SET_LIST', response.data)
        return response.data;
        } catch(error){
            console.log(error);
        }
    }
}