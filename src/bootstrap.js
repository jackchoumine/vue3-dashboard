import { createApp } from 'vue'
// import App from './components/Hello.vue'
import App from './App.vue'
import { setupRouter } from './route'
import { createWebHistory, createMemoryHistory } from 'vue-router'

function mount(el, { isMemoryHistory, basePath, currentPath, onNavigate, sharedData = {} }) {
  const app = createApp(App, { basePath, currentPath, isMemoryHistory, onNavigate, sharedData })
  const isProd = process.env.NODE_ENV === 'production'
  const history = isMemoryHistory
    ? createMemoryHistory(basePath)
    : createWebHistory(isProd ? '/vue3-dashboard' : undefined)

  setupRouter(app, { history })
  // history.push('/upload')
  // FIXME　监听不起效
  // history.listen(onNavigate)
  app.mount(el)

  return {
    onParentNavigate({ pathname: nextPathname }) {
      console.log('dashboard vue onParentNavigate', nextPathname)
      history.listen((currentPath) => {
        if (currentPath !== nextPathname) {
          history.push(nextPathname)
        }
      })
    },
  }
}

// If we are in development and in isolation,
// call mount immediately
// if (process.env.NODE_ENV === 'development') {
const devRoot = document.querySelector('#dashboard-dev-root')

if (devRoot) {
  mount(devRoot, { isMemoryHistory: false })
}
// }

// We are running through container
// and we should export the mount function
export { mount }
