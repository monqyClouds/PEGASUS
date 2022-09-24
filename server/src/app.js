const path = require("path");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const api = require('./routes/api');

const app = express();

app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

app.use(
	helmet.contentSecurityPolicy({
		directives: {
			upgradeInsecureRequests: null,
		},
	})
);

app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use('/v1', api);

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
