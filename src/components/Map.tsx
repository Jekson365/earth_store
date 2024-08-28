// @ts-ignore
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


export const Map = () => {
    const position : any = [47.879082, 35.019531]; // Latitude and longitude coordinates

    return (
        <Box
            height={'30vh'}
        >
            <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Box>
    );
}