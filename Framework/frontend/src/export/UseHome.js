export const UseHomeFile = `import React, { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'

const useHome = () => {
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tamanhoimagem, setTamanhoImagem] = useState('100')
  const [tamanhonavbar, setTamanhoNavBar] = useState('')
  const [show, setShow] = useState(false)
  const [footer, setFooter] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const [darkmode, setDarkMode] = useState(false)
  const [logo, setLogo] = useState('')
  const [rodape, setRodape] = useState('')
  const [marca, setMarca] = useState('')

  const [textcolor, setTextColor] = useState('#ffffff')

  //Costumizaçao frontend
  const [color, setColor] = useState('#4582ec')
  const [navcolor, setNavColor] = useState('#4582ec')
  const [image, setImage] = useState('')
  const [novocamponome, setNovoCampoNome] = useState('')
  const [novocampo, setNovoCampo] = useState(false)

  useEffect(() => {
    loadHomepage()
  }, []) //mostra as informações anteriores

  const loadHomepage = async () => {
    try {
      const { data } = await axios.get('/api/cms/page/productlist')
      console.log('hook', data)
      setName(data.name)
      setEmail(data.email)
      setTitle(data.title)
      setShow(data.show)
      setNavbar(data.navbar)
      setFooter(data.footer)
      setColor(data.color)
      setNavColor(data.navcolor)
      setLogo(data.logo)
      setImage(data.image)
      setTamanhoImagem(data.tamanhoimagem)
      setTamanhoNavBar(data.tamanhonavbar)
      setRodape(data.rodape)
      setNovoCampoNome(data.novocamponome)
      setNovoCampo(data.novocampo)
      setMarca(data.marca)
      setTextColor(data.textcolor)
      setDarkMode(data.darkmode)
    } catch (error) {
      console.log(error)
    }
  }
  return {
    title,
    tamanhoimagem,
    tamanhonavbar,
    show,
    footer,
    navbar,
    color,
    navcolor,
    logo,
    rodape,
    name,

    email,
    novocamponome,
    novocampo,
    marca,
    textcolor,
    darkmode,
    image,
    setImage,
    setName,
    setDarkMode,
    setTextColor,
    setMarca,
    setNovoCampo,
    setNovoCampoNome,
    setEmail,
    setRodape,
    setLogo,
    setNavColor,
    setColor,
    setTitle,
    setFooter,
    setTamanhoImagem,
    setTamanhoNavBar,
    setShow,
    setNavbar,
  }
}

export default useHome

`
