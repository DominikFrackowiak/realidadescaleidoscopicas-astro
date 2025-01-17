import { twMerge } from 'tailwind-merge'

import WordCloudVisualization from './WordCloudVisualization';

const wrapper =
	'flex flex-col mx-auto w-full px-4 md:px-0 md:max-w-[720px] lg:max-w-[1140px] gap-[40px]'

export default function WordCloudSectionContainer() {
  return (
    <section
      id="nube"
      className={twMerge(
        'flex justify-center items-center py-20 min-h-[80vh] w-full'
      )}
    >
      <div className={twMerge(wrapper, 'items-start')}>
        <h2 className="flex flex-col text-lightBlue font-tavares text-2xl md:text-4xl font-semibold self-center md:self-start">
          <span>Nube</span>
          <span className="pl-20">de palabras</span>
        </h2>

        <WordCloudVisualization />

        <blockquote className="text-lightRed text-lg text-center md:text-left">
          “El caleidoscopio permite ver las cosas de forma distinta y construir
          nuevas imágenes relacionadas con nuevas realidades. No es solo un tema
          de puntos de vista sino de puntos de acciones. El caleidoscopio es una
          herramienta que devuelve imágenes distintas, sin centros ni
          periferias. Haciendo rodear el caleidoscopio, moviendo los vidrios
          coloridos que están en su interior, la imagen se transforma y aparecen
          nuevas constelaciones coloridas. El caleidoscopio nos permite ver la
          “pluriversidad” del sistema mundo. Aceptar la propuesta decolonial no
          pasa solo por ponerse las lentes con las que miramos la realidad, sino
          cambiar las herramientas con la que la miramos, interpretamos y nos
          proyectamos en ella” (Rachele Borghi, 2020.
          <i>Decolonialitá e privilegio</i>)
        </blockquote>
      </div>
    </section>
  );
}
