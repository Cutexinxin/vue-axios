import {get} from './api.config'

export default {
  getUser(data) {
    return get('/static/demo.json',data)
  }
}
