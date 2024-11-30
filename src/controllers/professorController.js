const Professor = require('../models/Professor');

exports.createProfessor = async (req, res) => {
    try {
        const professor = await Professor.create(req.body);
        res.status(201).json(professor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getProfessores = async (req, res) => {
    try {
        const professores = await Professor.findAll();
        res.status(200).json(professores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProfessorById = async (req, res) => {
    try {
        const professor = await Professor.findByPk(req.params.id);
        if (!professor) {
            return res.status(404).json({ error: 'Professor não encontrado' });
        }
        res.status(200).json(professor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProfessor = async (req, res) => {
    try {
        const professor = await Professor.findByPk(req.params.id);
        if (!professor) {
            return res.status(404).json({ error: 'Professor não encontrado' });
        }
        await professor.update(req.body);
        res.status(200).json(professor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteProfessor = async (req, res) => {
    try {
        const professor = await Professor.findByPk(req.params.id);
        if (!professor) {
            return res.status(404).json({ error: 'Professor não encontrado' });
        }
        await professor.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
