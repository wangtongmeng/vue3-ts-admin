import { Module, MutationTree, ActionTree } from 'vuex'
import { IRootState } from '@/store'
import { login } from '@/api/user'
import { setToken } from '@/utils/auth'

// login params
export interface IUserInfo {
  username: string;
  password: string;
}

// 定义state类型
export interface IUserState {
  token: string;
}

// mutations类型
type IMutations = MutationTree<IUserState>

// actions类型
type IActions = ActionTree<IUserState, IRootState>

// 定义state
const state: IUserState = {
  token: ''
}

// 定义mutation
const mutations: IMutations = {
  SET_TOKEN(state, token: string) {
    state.token = token
  }
}

// 定义action
const actions: IActions = {
  login({ commit }, userInfo: IUserInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password }).then(response => {
        const { data } = response
        console.log('data', data)
        commit('SET_TOKEN', data.token)
        setToken(data.token) // localStorage中保存token
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

// 定义user module
const user: Module<IUserState, IRootState> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default user
