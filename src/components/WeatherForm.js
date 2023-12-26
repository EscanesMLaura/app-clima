import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const WeatherForm = ({ onSubmit, city, setCity, loading, error }) => {
    
    return (
        <Box
            sx={{ display: "grid", gap: 2 }}
            component="form"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <TextField
                id="city"
                label="Ciudad"
                variant="outlined"
                size="small"
                required
                fullWidth
                value={city}
                onChange={(e) => setCity(e.target.value)}
                error={error.error}
                helperText={error.message}
            />

            <LoadingButton
                type="submit"
                variant="contained"
                loading={loading}
                loadingIndicator="Cargando..."
            >
                Buscar
            </LoadingButton>
        </Box>
    );
};

export default WeatherForm;
