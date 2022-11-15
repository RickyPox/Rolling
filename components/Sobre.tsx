export default function SobreNos(){
    return(
        <div className="xl:py-[110px] mx-6" id="sobre">
            <div className="flex xl:flex-row flex-col justify-start xl:space-x-12 space-y-6 xl:space-y-0 xl:pl-[200px] xl:pr-[390px]">
                <div className="flex flex-col justify-start leading-none">
                    <h1 className="textLine text-right text-[#30B6C9] xl:flex xl:items-center">Como</h1>
                    <h1 className="text-right">Trabalhamos</h1>
                </div>
                <p className="leading-9">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br><br></br>
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                    (TEXTO SOBRE NOS // COMO TRABALHAMOS)
                </p>
            </div>
            
            <div className="flex flex-col xl:flex-row justify-center items-center space-y-6 xl:space-y-0 mt-[20px] mb-[50px] xl:space-x-[15px] ">
                <div className="flex bg-[#F8FAEE] space-x-[25px] py-[40px]  w-[350px] xl:w-[390px] pl-[25px] rounded-[20px]">
                    <img src="Precos.svg"></img>
                    <div className="flex flex-col">
                        <h3>Melhores Preços</h3>
                        <p className=" text-[#203B4D]">Procuramos <br></br>os melhores preços</p>
                    </div>
                </div>
                <div className="flex bg-[#F8FAEE] space-x-[25px] py-[40px]  w-[350px] xl:w-[390px] pl-[25px] rounded-[20px]">
                    <img src="Produtos.svg"></img>
                    <div className="flex flex-col">
                        <h3>Melhores Produtos</h3>
                        <p className=" text-[#203B4D]">Procuramos <br></br>os melhores produtos</p>
                    </div>
                </div><div className="flex bg-[#F8FAEE] space-x-[25px] py-[40px] w-[350px] xl:w-[390px] pl-[25px] rounded-[20px]">
                    <img src="Solucoes.svg"></img>
                    <div className="flex flex-col">
                        <h3>Melhores Soluções</h3>
                        <p className=" text-[#203B4D]">Procuramos <br></br>as melhores soluções</p>
                    </div>
                </div>
            </div>
        </div>
    )
}