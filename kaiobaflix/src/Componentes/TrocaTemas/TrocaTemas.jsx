import React, { useEffect, useState } from "react"
import {FaSun, FaMoon} from 'react-icons/fa'

const TrocaTemas = () => {
  const pageRef = document.documentElement.classList
  const systemThemePreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [dark, setDark] = useState(systemThemePreference)

  useEffect(() => {
    dark && pageRef.add('dark')
  }, [])

  const trocaTemas = () => {
    pageRef.toggle('dark')
    setDark(!dark)
  }

  return (
    <div className="hidden sm:block mr-0">
      <FaSun className='w-7 h-7 text-black cursor-pointer hidden dark:block' onClick={trocaTemas} />
      <FaMoon className='w-7 h-7 text-gray-100 cursor-pointer block dark:hidden' onClick={trocaTemas} />
    </div>
  )
}

export default TrocaTemas
