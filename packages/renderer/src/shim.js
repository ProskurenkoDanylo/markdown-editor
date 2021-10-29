/* eslint-disable no-undef */
import process from 'process'

if (typeof global === 'undefined' || typeof global.process === 'undefined') {
    // global
    window.global = window
    window.process = process
}