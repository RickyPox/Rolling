export default function Produtos (){
    return(
        <div className="px-2 sm:px-6 mb-[50px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#30B6C9]">Nossos</h1>
                <h1>Produtos</h1>
            </div>
            <div className="flex flex-col space-y-[40px]">
                <div className="flex xl:flex-row flex-col justify-center items-center xl:space-x-[60px]">
                    <a href="/Ferramentas"><div className="w-[200px] h-[300px] relative flex justify-center items-center">
                        <div className="productImageBlur flex justify-center w-full h-full bg-[#FAF9F6]/0 absolute opacity-0 rounded-[15px] hover:bg-[#FAF9F6]/50 transition-all duration-300 hover:z-10 hover:opacity-100 ">
                            <p className="font-bold text-black mt-[100px] ">Lubrificantes</p>
                        </div>
                        <img className="productImage" src="LubImg.png"></img>
                    </div></a>

                    <div className="w-[200px] h-[300px] relative flex justify-center items-center">
                        <div className="productImageBlur flex justify-center w-full h-full bg-[#FAF9F6]/0 absolute opacity-0 rounded-[15px] hover:bg-[#FAF9F6]/50 transition-all duration-300 hover:z-10 hover:opacity-100 ">
                            <p className="font-bold text-black mt-[100px] ">Lubrificantes</p>
                        </div>
                        <img className="productImage" src="LubImg.png"></img>
                    </div>

                    <div className="w-[200px] h-[300px] relative flex justify-center items-center">
                        <div className="productImageBlur flex justify-center w-full h-full bg-[#FAF9F6]/0 absolute opacity-0 rounded-[15px] hover:bg-[#FAF9F6]/50 transition-all duration-300 hover:z-10 hover:opacity-100 ">
                            <p className="font-bold text-black mt-[100px] ">Lubrificantes</p>
                        </div>
                        <img className="productImage" src="LubImg.png"></img>
                    </div>

                    <div className="w-[200px] h-[300px] relative flex justify-center items-center">
                        <div className="productImageBlur flex justify-center w-full h-full bg-[#FAF9F6]/0 absolute opacity-0 rounded-[15px] hover:bg-[#FAF9F6]/50 transition-all duration-300 hover:z-10 hover:opacity-100 ">
                            <p className="font-bold text-black mt-[100px] ">Lubrificantes</p>
                        </div>
                        <img className="productImage" src="LubImg.png"></img>
                    </div>
                </div>
                
                <div className="flex xl:flex-row flex-col justify-center items-center xl:space-x-[60px]">
                    <div className="w-[200px] h-[300px] relative flex justify-center items-center">
                        <div className="productImageBlur flex justify-center w-full h-full bg-[#FAF9F6]/0 absolute opacity-0 rounded-[15px] hover:bg-[#FAF9F6]/50 transition-all duration-300 hover:z-10 hover:opacity-100 ">
                            <p className="font-bold text-black mt-[100px] ">Lubrificantes</p>
                        </div>
                        <img className="productImage" src="LubImg.png"></img>
                    </div>

                    <div className="w-[200px] h-[300px] relative flex justify-center items-center">
                        <div className="productImageBlur flex justify-center w-full h-full bg-[#FAF9F6]/0 absolute opacity-0 rounded-[15px] hover:bg-[#FAF9F6]/50 transition-all duration-300 hover:z-10 hover:opacity-100 ">
                            <p className="font-bold text-black mt-[100px] ">Lubrificantes</p>
                        </div>
                        <img className="productImage" src="LubImg.png"></img>
                    </div>

                    <div className="w-[200px] h-[300px] relative flex justify-center items-center">
                        <div className="productImageBlur flex justify-center w-full h-full bg-[#FAF9F6]/0 absolute opacity-0 rounded-[15px] hover:bg-[#FAF9F6]/50 transition-all duration-300 hover:z-10 hover:opacity-100 ">
                            <p className="font-bold text-black mt-[100px] ">Lubrificantes</p>
                        </div>
                        <img className="productImage" src="LubImg.png"></img>
                    </div>
                </div>

            </div>
        </div>
    )
}