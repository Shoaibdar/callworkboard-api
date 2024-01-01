const express = require("express");
const router = express.Router();
const multer = require("multer")();
const data = require("./index.json");

router.post("/", multer.none(), function (req, res, next) {
	const requestData = {
		pageNumber: req.query.pageNumber,
		pageSize: req.query.pageSize,
	};

	let returnData = data.slice(
		(requestData.pageNumber - 1) * requestData.pageSize,
		requestData.pageNumber * requestData.pageSize
	);

	if (returnData) res.send(returnData);
	else res.send([]);
});

module.exports = router;