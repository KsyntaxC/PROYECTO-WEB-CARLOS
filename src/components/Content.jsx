import ActorCard from './ActorCard';
import MovieModal from './MovieModal';

function Content({ page }) {
  if (page === "principal") {
    return (
      <div className="container my-4">
        <h2 className="text-center mb-4">Actores Famosos</h2>
        <div className="d-flex justify-content-center">
          <ActorCard nombre="Iñaki Godoy" pelicula="One Piece - Netflix" imagen="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/02/one-piece-netflix-inaki-godoy-habla-esperada-segunda-temporada-serie-eiichiro-oda-3276209.jpg?tf=3840x" />
          <ActorCard nombre="Robert Downey Jr." pelicula="Iron Man" imagen="https://images.thedirect.com/media/article_full/robert-downey-jr-best-films.jpg" />
          <ActorCard nombre="Hugo Pozo" pelicula="Chuquiago" imagen="https://abi.bo/images/2024/Noviembre/04/HPOZO_1.jpg" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="container my-4 text-center">
        <h2>Películas Bolivianas</h2>
        <div className="d-flex flex-wrap justify-content-center gap-3"> {/* Añadí flex-wrap y gap para mejor disposición */}
          <MovieModal 
            titulo="Zona Sur" 
            resumen="Drama que explora las tensiones de clase en una familia adinerada de La Paz." 
            imagen="https://m.media-amazon.com/images/S/pv-target-images/b699480be3d447444531b4a5a9843c8860396b299780b71dd5b0890eac956c7b.jpg"
          />
          <MovieModal 
            titulo="Yawar Mallku" 
            resumen="Clásico del cine boliviano (1969) sobre la resistencia indígena y la esterilización forzada." 
            imagen="https://www.retinalatina.org/wp-content/uploads/2021/03/po-yawarmallku.jpg"
          />
          <MovieModal 
            titulo="El Cementerio de Elefantes" 
            resumen="Película policial boliviana (2023) que sigue a un detective en Santa Cruz." 
            imagen="https://frombolivia.com/wp-content/uploads/2012/09/Ceneterio-de-los-elefefantes-2008.jpg"
          />
          <MovieModal 
            titulo="Vuelve Sebastiana" 
            resumen="Documental (1953) sobre la cultura Chipaya, considerado el primer filme indígena de Bolivia." 
            imagen="https://cdn.bolivia.com/cine/2010/10/e6a3b1acee504e3f8e289bba9650c09a.jpg"
          />
          <MovieModal 
            titulo="Los Andes no creen en Dios" 
            resumen="Adaptación (2007) de la novela homónima sobre la vida en el altiplano a principios del siglo XX." 
            imagen="https://m.media-amazon.com/images/M/MV5BNjZlZTI3MzAtNjViYi00NTczLWIyZTUtNjhlY2Y0NDE0YjZiXkEyXkFqcGc@._V1_.jpg"
          />
        </div>
      </div>
    );
  }
}

export default Content;