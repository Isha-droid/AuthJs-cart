"use client"
import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Header from '@/components/header'

const ReduxProvider = ({children}) => {
  return (
    
    <Provider store={store}>
        <Header/>
        {children}</Provider>
  )
}

export default ReduxProvider
