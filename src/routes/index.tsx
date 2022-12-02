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
        <Route path="/help" element={ <FAQ/> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </Router>
  )
}

export default AllRoutes
