const errorHandler = (error, req, res, next) => {
    console.error(
        `[${new Date().toISOString()}]: ERROR ~ ${req.method} ~ ${req.url} ~ ${
            error.message
        }`
    );

    res.status(error.status || 500).json({
        status: "error",
        message: error.message || "Internal Server Error",
    });
};

export default errorHandler;
