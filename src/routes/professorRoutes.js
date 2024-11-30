const express = require('express');
const professorController = require('../controllers/professorController');

const router = express.Router();

router.post('/projeto-escolar/professor', professorController.createProfessor);
router.get('/projeto-escolar/professor', professorController.getProfessores);
router.get('/projeto-escolar/professor/:id', professorController.getProfessorById);
router.put('/projeto-escolar/professor/:id', professorController.updateProfessor);
router.delete('/projeto-escolar/professor/:id', professorController.deleteProfessor);

module.exports = router;
