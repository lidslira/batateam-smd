import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//pages
import PreInitial from '../pages/pre-initial';
import Home from '../pages/home';
import Welcome from '../pages/welcome';
import ErrorPage from '../pages/error-page';
import Explanation from '../pages/explanation-page';
import FAQ from '../pages/faq';
import Survey from '../pages/survey';
import SurveyQuestions from '../pages/survey/survey-questions';
import SurveyResults from '../pages/survey/survey-results';
import Audiovisual from '../pages/trails/Audiovisual';
import Design from '../pages/trails/DesignDigital';
import Jogos from '../pages/trails/Jogos';
import Sistemas from '../pages/trails/Sistemas';
import Optativas from '../pages/optativas';
import Obrigatórias from '../pages/obrigatórias';
import Eletivas from '../pages/eletivas';

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <PreInitial/> } />
        <Route path="/explanation" element={ <Explanation/> } />
        <Route path="/welcome" element={ <Welcome/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/help" element={ <FAQ/> } />

        <Route path="/survey" element={ <Survey /> } />
        <Route path="/survey-questoes" element={ <SurveyQuestions /> } />
        <Route path="/survey-resultados" element={ <SurveyResults /> } />

        <Route path="/audiovisual" element={ <Audiovisual/> } />
        <Route path="/design" element={ <Design/> } />
        <Route path="/jogos" element={ <Jogos/> } />
        <Route path="/sistemas" element={ <Sistemas/> } />

        <Route path="/obrigatórias" element={ <Obrigatórias /> } />
        <Route path="/eletivas" element={ <Eletivas /> } />
        <Route path="/optativas" element={ <Optativas /> } />

        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </Router>
  )
}

export default AllRoutes
