import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";
import PoweredBy from "./PoweredBy";
import fondo from "../image/fondo-blanco1.jpg";

const API_WEATHER = 'https://api.weatherapi.com/v1/current.json?key=59b1710a95544bd1a7f181307232212&q='

export default function Index() {

    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        error: false,
        message: "",
    });
    const [weather, setWeather] = useState({
        city: "",
        country: "",
        temp: "",
        tempF: "",
        condition: "",
        icon: "",
        conditionText: "",
        localtime: "",
    });


    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError({
            error: false,
            message: "",
        });
        try {
            if (!city.trim()) throw new Error("El campo ciudad es obligatorio");

            const response = await fetch(`${API_WEATHER}${city}`)
            const data = await response.json();

            if (data.error) throw new Error(data.error.message);

            setWeather({
                city: data.location.name,
                country: data.location.country,
                temp: data.current.temp_c,
                tempF: data.current.temp_f,
                condition: data.current.condition.code,
                icon: data.current.condition.icon,
                conditionText: data.current.condition.text,
                localtime: data.location.localtime,
            })

        } catch (error) {
            setError({
                error: true,
                message: error.message,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${fondo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Container
                maxWidth="xs"
                sx={{ mt: 2 }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    align="center"
                    gutterBottom
                >
                    Weather App
                </Typography>
                <Box
                    sx={{ display: "grid", gap: 2 }}
                    component="form"
                    autoComplete="off"
                    onSubmit={onSubmit}
                />
                <WeatherForm
                    onSubmit={onSubmit}
                    city={city}
                    setCity={setCity}
                    loading={loading}
                    error={error}
                />
                {weather.city && <WeatherInfo weather={weather} />}
                <PoweredBy />
            </Container>
        </div>
    );
}