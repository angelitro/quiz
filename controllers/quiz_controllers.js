var models = require('../models/models.js');

// GET /quizes todas
exports.index = function(req, res) {
  models.Quiz.findAll().then(function(quizes) {
    res.render('quizes/index.ejs', { quizes: quizes});
  })
};


// GET /quizes/:id	 una en concreto
exports.show = function(req, res) {
  models.Quiz.find(req.params.quizId).then(function(quiz) {
    res.render('quizes/show', { quiz: quiz});
  })
};



// GET /quizes/:id/answer	respuesta en concreto
exports.answer = function(req, res) {
  models.Quiz.find(req.params.quizId).then(function(quiz) {
    if (req.query.respuesta.toLowerCase() === quiz.respuesta.toLowerCase()) {
      res.render('quizes/answer', 
                 { quiz: quiz, respuesta: 'Correcto' });
    } else {
      res.render('quizes/answer', 
                 { quiz: quiz, respuesta: 'Incorrecto'});
    }
  })
};