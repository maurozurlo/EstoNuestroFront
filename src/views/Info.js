import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  margin: 0 auto;
  width: 100%;
  max-width: 650px;
  padding: 0 10px;
  p {
    color: var(--text-dark);
    font-weight: 500;
    font-size: 1em;
    background: var(--text-light);
    border: 1px solid #5f5f5f7a;
    padding: 1em;
    border-radius: 4px;
  }
  ol {
    counter-reset: item;
    list-style: none;
    
    padding-left: 40px;
    li {
      margin: 0 0 0.5rem 0;
      counter-increment: item;
      position: relative;
      font-weight: 400;
      font-size: .9em;
      &::before {
        content: counter(item);
        color: var(--text-light);
        font-size: 1em;
        font-weight: 600;
        position: absolute;
        --size: 24px;
        left: calc(-1 * var(--size) - 10px);
        line-height: var(--size);
        width: var(--size);
        height: var(--size);
        top: 0;
        background: var(--primary);
        border-radius: 3px;
        text-align: center;
      }
    }
  }

  h2{
      color: var(--text-dark);
      font-size: 1.3em;
      text-align: center;
    }
`

const Info = (props) => {
  return (
    <Wrapper>
        <p><a href="https://instagram.com/estonuestro">@EstoNuestro</a> es un espacio creado a modo de “escenario virtual” en Instagram, donde lxs artistas pueden sumarse a mostrar su arte día a día, y contando con falicilitadorxs en el grupo dispuestxs a ayudarles con cualquier duda.</p>
        <ol>
          <li>Podés invitar al grupo de WhatsApp a cualquier artista que deseés integrar al proyecto.</li>
          <li>Podés participar <strong>todas las veces que quieras</strong> mientras tengas mínimo un bloque de por medio entre cada transmisión. (exceptuando a los vivos realizados entre más de dos personas)</li>
          <li>Una vez <strong>anotadx, un día antes de tocar, pasá una foto tuya</strong> por mensaje privado de Instagram a @estonuestro para que podamos publicarla junto al flyer, éste se publicará (junto a las fotografías recibidas) siempre tres horas antes de que comience el primer directo del día.</li>
          <li>Durante tu vivo <strong>podés hacer un comentario escribiendo el nombre de su Instagram personal</strong>, y manteniéndolo presionado, o dándole doble click, te da la opción de fijarlo.</li>
          <li>Para aprender cómo hacer un vivo, <a href='https://docs.google.com/document/d/1Ow7tgtoLjvvyypAQUbfEgV7vMjmYJzt4l05HSFMf02c'>hacé click acá!</a></li>
          <li>Los horarios están puestos en el <a href="http://googl.com/#q=que+hora+es+en+argentina">huso horario de Argentina GMT -3</a>, por favor chequeá esto para evitar confusiones.</li>
          <li>El feed de la cuenta solo se usará para <strong>publicar flyers de los directos y videos de personas que no puedan hacer transmisiones</strong> en vivo por motivos de fuerza mayor.</li>
          <li>Desde <strong>@EstoNuestro</strong> nos encargaremos de compartir las historias en las que nos etiqueten lxs artistas que hagan vivos en el día, pedimos <strong>paciencia</strong> al respecto ya que no podremos difundir mientras hayan directos en curso.</li>
          <li><strong>Si vas a poner reproducir música</strong> desde internet mientras hacés el vivo, tené en cuenta que no tenga copyright, porque sino instagram cancelará tu directo y no permitirá hacer más de los mismos por un tiempo.</li>
          <li>Si querés seguirnos y que te sigamos a tu cuenta personal, <a href="https://docs.google.com/document/d/1Ki6IyE-V-wQQJtWdg3P_RxzJqMhJekb2xHi6dPyd5uY/edit?usp=sharing">hacé click acá!</a> seguinos y agregá tu nombre al final</li>
        </ol>
        <p>Si tenés alguna otra duda, por favor no dejes de contactarnos por mensaje directo a <a href="https://instagram.com/estonuestro">@EstoNuestro</a> o en el grupo de WhatsApp.
        <br /><br />
        Como alternativa podes contactarnos directamente a alguno de los tres organizadores:<br />
         <a href="https://instagram.com/zoelisgris">Zoe Lis</a>, <a href="https://instagram.com/leia_oriana">Leia Oriana</a> y <a href="https://instagram.com/elmiauro">Mauro Zurlo</a>
        </p>

        <h2>Desde todo el equipo de @EstoNuestro esperamos que tengas una experiencia muy amable :)</h2>
    </Wrapper>
  )

}


export default Info