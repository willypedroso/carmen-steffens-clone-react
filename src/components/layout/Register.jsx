function Register() {
    return (

        /* Register field */
        <div className="flex flex-wrap justify-center align-middle mt-10 min-w-[330px]">
            <div className="flex flex-col m-5 text-center">
                <h1 className="font-bold text-[1.23rem] mb-1">RECEBA NOSSAS PROMOÇÕES</h1>
                <p className="text-[0.8rem]">Informe seu e-mail e receba novidades e promoções</p>
            </div>
            
            {/* Name and email field */}
            <div className="flex flex-col m-5 w-[330px] mt-0 mb-[-10px]">
                <input className="border-b-[1px] border-black
                    text-[0.8rem] p-2 placeholder:text-black" type="text" placeholder="Seu nome" />
                <input className="border-b-[1px] border-black
                    text-[0.8rem] p-2 placeholder:text-black" type="text" placeholder="Seu e-mail" />
            </div>
            
            {/* Accept newsletter and register button */}
            <div className="flex flex-wrap p-2 m-5 justify-center align-middle">
                <input type="checkbox" id="accept" /><label className="text-[0.8rem] m-4" htmlFor="accept">Aceito receber novidades</label>
                <button className="bg-black text-white font-bold p-1 w-[200px] h-[60px]">Inscrever-se</button>
            </div>
        </div>
    );
};

export default Register;