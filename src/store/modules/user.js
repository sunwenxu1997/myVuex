

const state = {
    name: "",
    phone: ""
}

const mutations = {
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_PHONE: (state, phone) => {
        state.phone = phone
    },
}

const actions = {
    //后端获取用户信息的接口
    getInfo({ commit }) {
        return new Promise((resolve, reject) => {
            let data = {
                name: '小明',
                phone: '15518270529'
            }
            commit('SET_NAME', data.name)
            commit('SET_PHONE', data.phone)
            resolve(data)
        })
    },
    //保存用户信息，其实在真实环境中，你只需要调用下保存接口，然后再调用下 getInfo 接口就行了
    saveInfo({ commit }, userInfo) {
        alert('提交成功')
        console.log(userInfo);

        commit('SET_NAME', userInfo.name)
        commit('SET_PHONE', userInfo.phone)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}