import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import App from './App.vue'

Vue.config.productionTip

const FilePicker = wrap(Vue, App)

// @ts-expect-error mismatch in type comes from the wrapper library
customElements.define('file-picker', FilePicker)
