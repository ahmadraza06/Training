import React, { useState } from 'react'
import { Input } from './Input'
import { CounterDisplay } from './CounterDisplay'
import { Button } from './Button'

export const Card = ({children}) => {
  return (
    <div id='container'>{children}</div>
  )
}
