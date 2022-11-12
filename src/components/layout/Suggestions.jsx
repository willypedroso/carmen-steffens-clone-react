import suggestion1 from '../../images/suggestion1.jpeg';
import suggestion2 from '../../images/suggestion2.jpeg';
import suggestion3 from '../../images/suggestion3.jpeg';

function Suggestions() {
    return (
            <div className='flex flex-col justify-center align-middle min-w-[330px]'>
                <h1 className='self-center m-6 font-bold text-[1.5rem] text-center'>VOCÊ TAMBÉM PODE GOSTAR</h1>
                <div className="flex flex-wrap justify-center">
                    
                    <div className="flex flex-col justify-between align-middle w-[280px] h-[480px] m-3">
                        <img className='cursor-pointer ease-in duration-300 hover:scale-125' src={suggestion1} alt="Product suggestion 1" />
                        <div className='text-center hover:underline'>
                            <p className='font-bold text-[0.8rem] cursor-pointer'>Flat Basic Cobre</p>
                            <p className='text-gray-500 text-[0.8rem] cursor-pointer font-bold'>R$99,90</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col justify-between align-middle w-[280px] h-[480px] m-3">
                        <img className='cursor-pointer ease-in duration-300 hover:scale-125' src={suggestion2} alt="Product suggestion 2" />
                        <div className='text-center hover:underline'>
                            <p className='font-bold text-[0.8rem] cursor-pointer'>Regata Bustler Preta</p>
                            <p className='text-gray-500 text-[0.8rem] cursor-pointer font-bold'>R$224,95</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col justify-between align-middle w-[280px] h-[480px] m-3">
                        <img className='cursor-pointer ease-in duration-300 hover:scale-125' src={suggestion3} alt="Product suggestion 3" />
                        <div className='text-center hover:underline'>
                            <p className='font-bold text-[0.8rem] cursor-pointer'>Plataforma Rosa Perfeito</p>
                            <p className='text-gray-500 text-[0.8rem] cursor-pointer font-bold'>R$599,90</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Suggestions;