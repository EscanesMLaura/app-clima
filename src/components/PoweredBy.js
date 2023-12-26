import React from "react";
import { Typography } from "@mui/material";

const PoweredBy = () => {
    return (
        <Typography
            textAlign="center"
            sx={{ mt: 2, fontSize: "10px" }}
        >
            Powered by:{" "}
            <a
                href="https://www.weatherapi.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Weather API"
            >
                WeatherApi.com
            </a>
        </Typography>
    );
};

export default PoweredBy;
