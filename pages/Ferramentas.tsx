import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Nav'

export default function Ferramentas(){

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

            <div className="mt-[50px] mx-[200px] pb-[150px] mb- border-l-4 border-[#30B6C9]">
                <div className=' pl-[40px] pt-[70px]'>
                    <h1 className='text-[#30B6C9]'>Ferramentas</h1>
                    <p className='w-[740px] ml-[130px] indent-[60px] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. (TEXTO SOBRE A FERRAMENTA)</p>
                </div>
                <div className='flex justify-center items-center mt-[50px] space-x-[90px]'>
                    <div className='w-[200px] h-[300px] bg-[#E8E4DB] rounded-[15px]'></div>
                    <div className='w-[200px] h-[300px] bg-[#E8E4DB] rounded-[15px]'></div>
                    <div className='w-[200px] h-[300px] bg-[#E8E4DB] rounded-[15px]'></div>
                    <div className='w-[200px] h-[300px] bg-[#E8E4DB] rounded-[15px]'></div>
                    <div className='w-[200px] h-[300px] bg-[#E8E4DB] rounded-[15px]'></div>
                </div>
                
            </div>
            <Footer></Footer>

            
        </div>
    )
  }