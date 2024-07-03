        const express = require("express");
        const cors = require("cors");
        const proxy = require("express-http-proxy");

        const app = express();
        app.use(cors());
        app.use(express.json());

        app.get("/", (req, res) => {
            console.log("GET request received for '/'");
            res.send("Data from server");
        });
        
        
        const cors = require("cors");
        const proxy = require("express-http-proxy");

        const app = express();
        app.use(cors());
        app.use(express.json());

        app.get("/", (req, res) => {
            console.log("GET request received for '/'");
            res.send("Data from server");
        });
        
        app.use('/api/userService', proxy("https://userservice-coursecom.onrender.com"));
        app.use('/api/courseService', proxy("https://courseservice-coursecom.onrender.com"));
        app.use('/api/paymentService', proxy("http://localhost:6060"));
        app.use('/api/categoryService', proxy("http://localhost:7070"));
        app.use('/api/adminSercice', proxy("http://localhost:8080"));
        app.use('/api/analyticsService', proxy("http://localhost:5050"));
        app.use('/api/contentDeliveryService', proxy("http://localhost:3030"));
        app.use('/api/notificationService', proxy("http://localhost:4747"));
        app.use('/api/OrderService', proxy("http://localhost:3040"));

        app.listen(9000, () => {
            console.log("Gateway is Listening to Port 9000");
        });"));
        app.use('/api/courseService', proxy("https://courseservice-coursecom.onrender.com"));
        app.use('/api/paymentService', proxy("http://localhost:6060"));
        app.use('/api/categoryService', proxy("http://localhost:7070"));
        app.use('/api/adminSercice', proxy("http://localhost:8080"));
        app.use('/api/analyticsService', proxy("http://localhost:5050"));
        app.use('/api/contentDeliveryService', proxy("http://localhost:3030"));
        app.use('/api/notificationService', proxy("http://localhost:4747"));
        app.use('/api/OrderService', proxy("http://localhost:3040"));

        app.listen(9000, () => {
            console.log("Gateway is Listening to Port 9000");
        });
