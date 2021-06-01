const BannerStyle ={
    minHeight: '65vh' ,
    mindWidth: '100%' ,
    position: 'relative'
}
const BannerImage = {
    postion: 'absolute' ,
    width: '100%',
    height: '50vh' ,
    objectPosition: 'center' ,
    objectFit: 'cover' ,
    zIndex: 9
} 

const TextStyle = {
    position: 'absolute' ,
    width: '100%' ,
    textAlign: 'center' ,
    top: '30%' , 
    zIndex: 99,
    color: "white"
}
export function Banner ( props ){
return (
    <div className="banner"style={BannerStyle}>
        <img src={props.image} className="banner-image"
         style = {BannerImage} />
        <h2 className= "banner-text" style={TextStyle}>
            {props.text}</h2>
    </div>
)
}