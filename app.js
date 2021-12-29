import express from "express";

const app = express();

const handleListen = () => console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(4000, handleListen);