var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controllers')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

// Página del autor

router.get('/author', function(req, res) {
  res.render('author', { autor: 'Ángel' });
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load);  // autoload :quizId



// Definición de rutas de /quizes

router.get('/quizes',                      quizController.index);
router.get('/quizes/:quizId(\\d+)',        quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

module.exports = router;


