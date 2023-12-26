import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const conditionTranslations = {
    Sunny: "Soleado",
    Cloudy: "Nublado",
    Overcast: "Nublado",
    "Partly cloudy": "Parcialmente Nublado",
    Rain: "Lluvia",
    "Light rain": "Lluvia ligera",
    "Patchy rain possible": "Posible lluvia irregular",
    Thunderstorm: "Tormenta",
    Snow: "Nieve",
    Fog: "Niebla",
    Windy: "Ventoso",
    Clear: "Despejado",
    Mist: "Neblina",
    Haze: "Neblina",
    Showers: "Chubascos",
    Drizzle: "Llovizna",
    "Showers Snow": "Chubascos de Nieve",
    "Thunderstorm with rain": "Tormenta con Lluvia",
    "Thunderstorm with snow": "Tormenta con Nieve",
};

const WeatherInfo = ({ weather }) => {

    const [isCelsius, setIsCelsius] = useState(true);
    const translatedCondition = conditionTranslations[weather.conditionText] || weather.conditionText;

    return (
        <Container maxWidth="xs" sx={{ mt: 2 }}>
            {weather.city && (
                <Box
                    sx={{
                        mt: 2,
                        display: "grid",
                        gap: 2,
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h4" component="h2">
                        {weather.city}, {weather.country}
                    </Typography>
                    <Box
                        component="img"
                        alt={weather.conditionText}
                        src={weather.icon}
                        sx={{ margin: "0 auto" }}
                    />

                    <Typography variant="h5" component="h3">
                        {isCelsius ? `${weather.temp} ºC` : `${weather.tempF} ºF`}
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={() => setIsCelsius(!isCelsius)}
                            sx={{ marginLeft: 1 }}
                        >
                            {isCelsius ? 'Ver °F' : 'Ver °C'}
                        </Button>
                    </Typography>

                    <Typography variant="h6" component="h4">
                        {translatedCondition}
                    </Typography>

                    <Typography variant="h6" component="h4">
                        {weather.localtime}
                    </Typography>
                </Box>
            )}

        </Container>
    );
};

export default WeatherInfo;
