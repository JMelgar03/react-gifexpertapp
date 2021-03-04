import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


   const { data:images, loading} = useFetchGifs(category);
    
    // useEffect(() => {
    //     getGifs(category)
    //     .then(setImages);
    // }, [category])
    

    return (
        <>
        <h2>{ category }</h2>
        
        {loading && <p>Cargando...</p>}

        <div className="card-grid">
            
            {
                
                images.map( img =>( 
                
                    <GifGridItem 
                    key = {img.id}
                    {...img} 
                    />

                ))
                
            }
       </div>
       </>
    )
}
