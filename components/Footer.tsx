export default function Footer(){
    return(
        <div>
            <div className="xl:px-[510px] px-6 py-[30px] bg-[#203B4D] border-white border-b-2">
                <img className="w-[250px]" src="/FooterLogo.svg"/>
                <div className=" flex xl:space-x-[400px] space-x-[50px] mt-[20px] xl:mt-[60px] xl:mb-[100px] mb-[20px]">
                    <div className="flex flex-col xl:space-y-[70px] space-y-[20px]">
                        <p className="text-white">+351 912 345 678</p>
                        <p className="text-white">geral@rollingdimension.com</p>
                        <p className="text-white underline"><a href="#">Política de Privacidade</a></p>
                    </div>
                    <div className="flex flex-col xl:space-y-[70px] space-y-[20px]">
                        <p className="text-white">Segunda - Sexta</p>
                        <p className="text-white">09h00 - 12h30 <br></br>
                            14h00 - 19h00</p>
                    </div>
                </div>
            </div>
            <div  className="flex flex-col xl:flex-row xl:px-[510px] px-6 py-[30px] space-y-6 xl:space-y-0 bg-[#203B4D] justify-between items-center ">
                    <p className="text-white text-[14px]">© 2022 Roilling Dimension. All Rights Reserved.</p>
                    <a href="#"><img src="/UpArrow.svg"/></a>
                </div>
        </div>
    )
}