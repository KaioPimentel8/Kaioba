import data from '../../artigos.json'

function Home() {
    return ( 
       <div className='grid-rows-1 space-y-20'>
        <div className='text-center text-5xl'>
            Qual é a boa de hoje?
        </div>
        <div className='flex flex-row space-x-32'> 
            {
            
                data.map(
                    (filme, index) => (
                        <div className=' border-4 border-black rounded-xl w-72 flex flex-col justify-center  space-y-5  m-5 ' key={index}>
                            
                            <img className='w-60  self-center rounded-xl' src={filme.image}/>
                            <div className=" rounded-full self-center bg-black"><h1 className='text-3xl m-2 text-white' >{filme.title}</h1>
                            </div>
                            <div className='text text-balance text-center'>
                                {
                                    filme.text.map( text=>(
                                        <span className='text' key={text}>{text}</span>
                                    ))
                                }
                            </div>
                        </div>
                        
                       
            
                        
                        
                )
                
            )
            
            }
            </div>
        </div>
    );
}

export default Home;