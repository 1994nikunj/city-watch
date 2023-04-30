// ======================================== Vars
const express = require('express');
const router = express.Router();
const data = require('../data');
const reportsData = data.reports;
const helper = require('../helpers');


// ======================================== Routes

// Create a new report
router.post('/', async (req, res) => {
  const reportInfo = req.body;
  try {
    const newReport = await reportsData.createReport(
      reportInfo.title,
      reportInfo.description,
      reportInfo.images,
      reportInfo.date,
      reportInfo.location,
      reportInfo.time,
      reportInfo.comments
    );
    res.status(201).json(newReport);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

// Get all reports
router.get('/', async (req, res) => {
  try {
    const reports = await reportsData.getAllReports();
    res.json(reports);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

// Get a report by ID
router.get('/:id', async (req, res) => {
  try {
    const report = await reportsData.getReportById(req.params.id);
    res.json(report);
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

// Update a report by ID
router.put('/:id', async (req, res) => {
  const updatedReport = req.body;
  try {
    await reportsData.getReportById(req.params.id);
    const updated = await reportsData.updateReport(req.params.id, updatedReport);
    res.json(updated);
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

// Add a comment to a report by ID
router.post('/:id/comments', async (req, res) => {
  const comment = req.body;
  try {
    const updatedReport = await reportsData.addComment(req.params.id, comment);
    res.json(updatedReport);
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

// Delete a report by ID
router.delete('/:id', async (req, res) => {
  try {
    await reportsData.getReportById(req.params.id);
    await reportsData.deleteReport(req.params.id);
    res.sendStatus(200);
  } catch (e) {
    res.status(404).json({ error: e });
  }
});


// ======================================== export
module.exports = router;
