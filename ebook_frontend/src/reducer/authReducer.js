import { authType } from '../action/auth/authType'

const initial = {
  token: null,
  authenticate: false,
  loading: false,
  error: [],
  user: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initial, action) => {
  console.log(action)
  
  // eslint-disable-next-line default-case
  switch (action.type) {
    case authType.LOGIN_REQUEST:
      state = {
          ...state,
          loading: true
      }
      break
  }
  
  return state
}