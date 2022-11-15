import Head from 'next/head'
import ImageSlider from '../components/ImageSlider'
import Navbar from '../components/Nav'
import Produtos from '../components/Produtos'
import SobreNos from '../components/Sobre'
import ProductSlider from '../components/ProductSlider'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
        <Head>
          <title>Rolling Dimension</title>
          <link rel="icon" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;700&display=swap" rel="stylesheet"></link>
        </Head>

        <Navbar></Navbar>
        <ImageSlider></ImageSlider>
        <SobreNos></SobreNos>
        <ProductSlider></ProductSlider>
        <Produtos></Produtos>
        <Footer></Footer>
    </div>
  )
}