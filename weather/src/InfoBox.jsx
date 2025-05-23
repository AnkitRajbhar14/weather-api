import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1603695820889-f8a0a86b8712?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHl8ZW58MHx8MHx8fDA%3D"
  
     let HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    let RAIN_URL = "https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"
     let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    return(
        <div className="InfoBox">
         
         <div className='cardConatiner'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
            {info.humidity > 80 ? < ThunderstormIcon className='icon'/> : info.temp > 15 ? <WbSunnyIcon className='icon'/> : <AcUnitIcon className='icon'/>}
          
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C </p>
         <p>Humidity = {info.humidity} </p>
         <p>Min Temp = {info.tempMin}&deg;C </p>
         <p>Max Temp = {info.tempMax}&deg;C </p>
         <p>The weathercan be described as <i>{info.weather}</i> and feels like {info.temp}&deg;C </p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}