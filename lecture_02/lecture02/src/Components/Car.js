import React from 'react'

const Car = ({  model, isOfRoad, img=true, type }) => {
    console.log(typeof (typeof (typeof isOfRoad)))

    const displayOffRoad = () => {
        if(isOfRoad){
            return <img width={200} 
            height={100} 
            src={'https://www.onxmaps.com/wp-content/uploads/sites/7/2021/11/Off-roading-Essentials-1-1.jpg'} alt='off Road' />
            
        }
        else {
            return  <img width={200} 
            height={100}
             src={'https://mediacloud.carbuyer.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1579647440/carbuyer/2019/06/1.jpg'} alt='limusina' />       
              
        }
    }
  return (
    <div style={{display: 'flex'}}>
        <div style={{marginRight: 20}}>
        {isOfRoad ? <p>this is a jeep</p> : <p>this is a limusine</p>}
        </div>
        {/* {isOfRoad && (
            <img width={200} height={100} src={'https://www.onxmaps.com/wp-content/uploads/sites/7/2021/11/Off-roading-Essentials-1-1.jpg'} alt='off Road' />
        )}
        {!isOfRoad && (
               <img width={200} height={100} src={'https://mediacloud.carbuyer.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1579647440/carbuyer/2019/06/1.jpg'} alt='off Road' />
               )} */}

{/*                
        {isOfRoad ? (  
            <img width={200} 
            height={100} 
            src={'https://www.onxmaps.com/wp-content/uploads/sites/7/2021/11/Off-roading-Essentials-1-1.jpg'} alt='off Road' />
            ) : (
        <img width={200} 
        height={100}
         src={'https://mediacloud.carbuyer.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1579647440/carbuyer/2019/06/1.jpg'} alt='limusina' />       
            )
        } */}

       {type === 'car' ? (
       <img width={200} 
       height={100} 
       src={'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg'} alt='off Road' />
       ) : type === 'jeep' ? (
        <img width={200} 
        height={100}
         src={'https://play-lh.googleusercontent.com/yzzfCuM1q4tRbG1GhH5Z07m6yMNGFxQ7yN3x8E9nzznBioNAPX6nAJO8ccg7we3OnIuJ'} alt='limusina' />              
       ) : (
       <img  width={200} 
       height={100} src={'https://media.istockphoto.com/id/1344687455/vector/question-sing-flat-icon-vector-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ZU6kq0hQacI7mZoYuXTqXF8KsgNnbCRaxDm_nAIdCAw='} />
       )
       }
    {/* if(type==='car') {
        return car
    } else if (type==='jeep') {
        return jeep
    } else {
        return ?
    } */}
    

        <p>{model}</p>
    </div>
  )
}

export default Car