const mongoCollections = require("../config/mongoCollections");
const reports = mongoCollections.reports;
const { ObjectId } = require("mongodb");
const helper = require("../helpers");
const createReport = async (
	title,
	description,
	images,
	date,
	location,
	time,
	comments
) => {
	const reportData = {
		title: title,
		description: description,
		images: images,
		date: date,
		location: location,
		time: time,
		comments: comments
	}
    
	const reportCollection = await reports();
	const insertInfo = await reportCollection.insertOne(reportData);

	if (!insertInfo.acknowledged || !insertInfo.insertedId) {
		throw {
			'code': 500,
			'message': 'Error: Could not add the report'
		}
	}

	const newId = insertInfo.insertedId.toString();
	const report = await getReportById(newId);
	report.id = String(newId);

	return report;
};

const getAllReports = async () => {
    const reportCollection = await reports();
    const reportList = await reportCollection.find({}).toArray();
    return reportList;
};

const getReportById = async (id) => {
	const reportCollection = await reports();
	const report = await reportCollection.findOne({ _id: ObjectId(id) });
	if (report === null) {
		throw {
			'code': 404,
			'message': `Error: No report found with ID: ${id}`
		}
	}
	report.id = id;

	return report;
}

const addComment = async (reportId, comment) => {
    const report = await getReportById(reportId);
  
    const newComment = {
      text: comment.text,
      user: comment.user,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
  
    report.comments.push(newComment);
  
    const reportCollection = await reports();
    const updateInfo = await reportCollection.updateOne(
      { _id: ObjectId(reportId) },
      { $set: report }
    );
  
    if (!updateInfo.acknowledged || updateInfo.modifiedCount === 0) {
      throw {
        code: 500,
        message: "Error: Could not add the comment",
      };
    }
  
    return await getReportById(reportId);
};

// exports
module.exports = {
    createReport,
    getReportById,
    getAllReports,
    addComment
};