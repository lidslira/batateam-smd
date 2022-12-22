import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillCaretDownFill, BsFillCaretRightFill } from "react-icons/bs";
import { Helmet } from "react-helmet";

import Footer from '../../components/footer';
import Header  from '../../components/header';
import bg from '../../assets/faq-bg.png';
import useScript from '../../hooks/useScript';
import renderHTML from 'react-render-html';


import * as S from './styles';

function Planner() {
  const navigate = useNavigate();
  // useScript('./script.js');
  
  return (
      <S.ContainerDiv>
        <Header/>
        <>
          <div style={{ position: 'fixed', bottom: 0, left: 0, zIndex: -1, objectFit: 'contain'}}>
            <img src={bg} alt="" loading="eager" height={`${window.screen.height}`} width={`${window.screen.width}`}/>
          </div>
        </>
        <S.Container>
      <h1>Planejamento</h1>
      <p>Organize o seus horários com mais facilidade!</p>
      <main>
      <div className="modal" id="todo_form">
        <div className="header">
          <div className="title">Adicionar Disciplina</div>
          <button className="btn close-modal">&times;</button>
        </div>
        <div className="body">
          <select name="disciplinas" id="todo_input">
            <option value="" disabled></option>
            <option value="" disabled>-- OBRIGATÓRIAS --</option>

            <option value="AUTORAÇÃO MULTIMÍDIA I">AUTORAÇÃO MULTIMÍDIA I</option>
            <option value="DESENHO I">DESENHO I</option>
            <option value="HISTÓRIA DO DESIGN">HISTÓRIA DO DESIGN</option>
            <option value="INTRODUÇÃO A SISTEMAS E MÍDIAS DIGITAIS">INTRODUÇÃO A SISTEMAS E MÍDIAS DIGITAIS</option>
            <option value="PROGRAMAÇÃO I">PROGRAMAÇÃO I</option>
            <option value="COGNIÇÃO E TECNOLOGIAS DIGITAIS">COGNIÇÃO E TECNOLOGIAS DIGITAIS</option>
            <option value="COMUNICAÇÃO VISUAL I">COMUNICAÇÃO VISUAL I</option>
            <option value="MATEMÁTICA APLICADA À MULTIMÍDIA I">MATEMÁTICA APLICADA À MULTIMÍDIA I</option>
            <option value="NARRATIVAS MULTIMÍDIA">NARRATIVAS MULTIMÍDIA</option>
            <option value="PROGRAMAÇÃO II">PROGRAMAÇÃO II</option>
            <option value="	AUTORAÇÃO MULTIMÍDIA II">AUTORAÇÃO MULTIMÍDIA II</option>
            <option value="DESIGN DE INTERFACES GRÁFICAS">DESIGN DE INTERFACES GRÁFICAS</option>
            <option value="INTERAÇÃO HUMANO-COMPUTADOR I">INTERAÇÃO HUMANO-COMPUTADOR I</option>
            <option value="INTRODUÇÃO À CIBERCULTURA">INTRODUÇÃO À CIBERCULTURA</option>
            <option value="PROJETO INTEGRADO I">PROJETO INTEGRADO I
            </option>
            <option value="METODOLOGIA DE PESQUISA CIENTÍFICA">METODOLOGIA DE PESQUISA CIENTÍFICA</option>
            <option value="ÉTICA E POLÍTICA AUTORAL">ÉTICA E POLÍTICA AUTORAL</option>
            <option value="GESTÃO DE PROJETOS MULTIMÍDIA">GESTÃO DE PROJETOS MULTIMÍDIA</option>
            <option value="PROJETO INTEGRADO II">PROJETO INTEGRADO II</option>
            <option value="PROJETO DE TRABALHO FINAL">PROJETO DE TRABALHO FINAL</option>
            <option value="SEMINÁRIOS EM MULTIMÍDIA">SEMINÁRIOS EM MULTIMÍDIA</option>

            <option value="" disabled></option>
            <option value="" disabled>-- ELETIVAS --</option>

            <option value="ANÁLISE E PROJETO DE SISTEMAS">ANÁLISE E PROJETO DE SISTEMAS</option>
            <option value="DESENHO II">DESENHO II</option>
            <option value="ESTRUTURA DE DADOS">ESTRUTURA DE DADOS</option>
            <option value="FOTOGRAFIA DIGITAL">FOTOGRAFIA DIGITAL</option>
            <option value="REDES DE COMPUTADORES">REDES DE COMPUTADORES</option>
            <option value="SEMIÓTICA APLICADA">SEMIÓTICA APLICADA</option>
            <option value="BANCO DE DADOS I">BANCO DE DADOS I</option>
            <option value="COMUNICAÇÃO VISUAL II">COMUNICAÇÃO VISUAL II</option>
            <option value="DESIGN DE SOM">DESIGN DE SOM</option>
            <option value="ENGENHARIA DE SOFTWARE">ENGENHARIA DE SOFTWARE</option>

            <option value="" disabled></option>
            <option value="" disabled>-- OPTATIVAS --</option>

            <option value="ADMINISTRAÇÃO MERCADOLÓGICA I">ADMINISTRAÇÃO MERCADOLÓGICA I</option>
            <option value="AMBIENTES VIRTUAIS DE APRENDIZAGEM">AMBIENTES VIRTUAIS DE APRENDIZAGEM</option>
            <option value="ANÁLISE DE DESEMPENHO">ANÁLISE DE DESEMPENHO</option>
            <option value="CIBERCULTURA E EDUCAÇÃO: NOVAS PRÁTICAS">CIBERCULTURA E EDUCAÇÃO: NOVAS PRÁTICAS</option>
            <option value="COMPUTAÇÃO FÍSICA">COMPUTAÇÃO FÍSICA</option>
            <option value="COMPUTAÇÃO GRÁFICA">COMPUTAÇÃO GRÁFICA</option>
            <option value="COMPUTAÇÃO MÓVEL E UBÍQUA">COMPUTAÇÃO MÓVEL E UBÍQUA</option>
            <option value="CONCEPÇÃO DE CENÁRIOS E DE PERSONAGENS">CONCEPÇÃO DE CENÁRIOS E DE PERSONAGENS</option>
            <option value="CULTURA DE JOGOS">CULTURA DE JOGOS</option>
            <option value="DESENVOLVIMENTO DE JOGOS CASUAIS">DESENVOLVIMENTO DE JOGOS CASUAIS</option>
            <option value="DESIGN DE JOGOS DIGITAIS">DESIGN DE JOGOS DIGITAIS</option>
            <option value="DESIGN EMOCIONAL">DESIGN EMOCIONAL</option>
            <option value="DESIGN INSTRUCIONAL">DESIGN INSTRUCIONAL</option>
            <option value="	DIREÇÃO DE ARTE PARA MULTIMÍDIA">DIREÇÃO DE ARTE PARA MULTIMÍDIA</option>
            <option value="EDIÇÃO AUDIOVISUAL">EDIÇÃO AUDIOVISUAL</option>
            <option value="EDUCOMUNICAÇÃO">	EDUCOMUNICAÇÃO</option>
            <option value="EXPERIMENTOS EM MULTIMÍDIA I">EXPERIMENTOS EM MULTIMÍDIA I</option>
            <option value="FERRAMENTAS DE MODELAGEM TRIDIMENSIONAL I">FERRAMENTAS DE MODELAGEM TRIDIMENSIONAL I</option>
            <option value="FILOSOFIA DA TECNOLOGIA">FILOSOFIA DA TECNOLOGIA</option>
            <option value="FUNDAMENTOS DE MATERIAL DIDATICO PARA ED A DISTÂNCIA">FUNDAMENTOS DE MATERIAL DIDATICO PARA ED A DISTÂNCIA</option>
            <option value="GESTÃO DE NEGOCIOS EM MULTIMÍDIA">GESTÃO DE NEGOCIOS EM MULTIMÍDIA</option>
            <option value="IDENTIDADE SONORA DE MARCAS">IDENTIDADE SONORA DE MARCAS</option>
            <option value="INSTALAÇÕES MULTIMÍDIA">INSTALAÇÕES MULTIMÍDIA</option>
            <option value="INTERAÇÃO HUMANO-COMPUTADOR II">INTERAÇÃO HUMANO-COMPUTADOR II</option>
            <option value="JOGOS DISTRIBUÍDOS">JOGOS DISTRIBUÍDOS</option>
            <option value="JOGOS MULTIPLATAFORMA">JOGOS MULTIPLATAFORMA</option>
            <option value="LABORATÓRIO DE CRIATIVIDADE">LABORATÓRIO DE CRIATIVIDADE</option>
            <option value="LINGUAGEM AUDIOVISUAL">LINGUAGEM AUDIOVISUAL</option>
            <option value="LINGUAGEM DE PROGRAMAÇÃO SCRIPT">LINGUAGEM DE PROGRAMAÇÃO SCRIPT</option>
            <option value="MATEMÁTICA E FÍSICA PARA JOGOS">MATEMÁTICA E FÍSICA PARA JOGOS</option>
            <option value="MITOLOGIAS UNIVERSAIS">MITOLOGIAS UNIVERSAIS</option>
            <option value="MITOS E ARQUETIPOS">MITOS E ARQUETIPOS</option>
            <option value="PRODUÇÃO AUDIOVISUAL">PRODUÇÃO AUDIOVISUAL</option>
            <option value="PRODUÇÃO AUDIOVISUAL PARA CRIANÇAS E ADOLESCENTES">PRODUÇÃO AUDIOVISUAL PARA CRIANÇAS E ADOLESCENTES</option>
            <option value="PROGRAMAÇÃO ORIENTADA A OBJETOS">PROGRAMAÇÃO ORIENTADA A OBJETOS</option>
            <option value="PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS">PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS</option>
            <option value="PROGRAMAÇÃO PARA JOGOS I">PROGRAMAÇÃO PARA JOGOS I</option>
            <option value="PROGRAMAÇÃO PARA WEB I">PROGRAMAÇÃO PARA WEB I</option>
            <option value="PROTOTIPAÇAO DE JOGOS TRIDIMENSIONAIS">PROTOTIPAÇAO DE JOGOS TRIDIMENSIONAIS</option>
            <option value="REDAÇÃO PARA MÍDIAS DIGITAIS">REDAÇÃO PARA MÍDIAS DIGITAIS</option>
            <option value="SISTEMAS DISTRIBUÍDOS">SISTEMAS DISTRIBUÍDOS</option>
            <option value="	SISTEMAS EMBARCADOS">SISTEMAS EMBARCADOS</option>
            <option value="TÉCNICAS DE ANIMAÇÃO 2D">TÉCNICAS DE ANIMAÇÃO 2D</option>
            <option value="TÉCNICAS DE ANIMAÇÃO 3D I">TÉCNICAS DE ANIMAÇÃO 3D I</option>
            <option value="TEORIA E CRÍTICA DO DESIGN">TEORIA E CRÍTICA DO DESIGN</option>
            <option value="TÓPICOS AVANÇADOS EM DESIGN DE INTERFACES GRÁFICAS">TÓPICOS AVANÇADOS EM DESIGN DE INTERFACES GRÁFICAS</option>
            <option value="VIDEOGRAFISMO">VIDEOGRAFISMO</option>
          </select>
          <input type="submit" value="Adicionar" id="todo_submit" />
        </div>
      </div>
      <button id="add_btn" data-target-modal="#todo_form">+ Adicionar Disciplina</button>
  
  <table>
    <tr>
      <th>Disciplinas</th>
      <th>Horários</th>
      <th>Segunda</th>
      <th>Terça</th>
      <th>Quarta</th>
      <th>Quinta</th>
      <th>Sexta</th>
    </tr>
    <tr>
      <td className="status" id="no_status" rowSpan={6}></td>
      <td className="manha horario">08:00 - 10:00</td>
      <td className="status manha"></td>
      <td className="status manha"></td>
      <td className="status manha"></td>
      <td className="status manha"></td>
      <td className="status manha"></td>
      
    </tr>
    
    <tr>
      <td className="manha horario">10:00 - 12:00</td>
      <td className="status manha"></td>
      <td className="status manha"></td>
      <td className="status manha"></td>
      <td className="status manha"></td>
      <td className="status manha"></td>
    </tr>
    <tr>
      <td className="tarde horario">14:00 - 16:00</td>
      <td className="status tarde"></td>
      <td className="status tarde"></td>
      <td className="status tarde "></td>
      <td className="status tarde"></td>
      <td className="status tarde"></td>
    </tr>
    <tr>
      <td className="tarde horario">16:00 - 18:00</td>
      <td className="status tarde"></td>
      <td className="status tarde"></td>
      <td className="status tarde"></td>
      <td className="status tarde"></td>
      <td className="status tarde"></td>
    </tr>
    <tr>
      <td className="noite horario">18:00 - 20:00</td>
      <td className="status noite"></td>
      <td className="status noite"></td>
      <td className="status noite"></td>
      <td className="status noite"></td>
      <td className="status noite"></td>
    </tr>
    <tr>
      <td className="noite horario">20:00 - 22:00</td>
      <td className="status noite"></td>
      <td className="status noite"></td>
      <td className="status noite"></td>
      <td className="status noite"></td>
      <td className="status noite"></td>
    </tr>
    </table>
    <Helmet> <script src="./script.js" type="text/javascript"></script> </Helmet>
  </main>
  </S.Container>
  <Footer/>
  </S.ContainerDiv>
  );
}

export default Planner;