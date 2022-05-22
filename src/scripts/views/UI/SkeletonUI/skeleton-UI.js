import placeholderLarge from '../../../../public/images/Universal/placeholder-large.jpg';
import placeholderSmall from '../../../../public/images/Universal/placeholder-small.jpg';
import './skeleton-ui.scss';

const skeletonUI = (totalSkeleton) => {
  let skeletonTemplate = '';
  
  for (let i = 0; i < totalSkeleton; i++) {
    skeletonTemplate += `
      <article class="card-item skeleton-card__item">
        <img src="${placeholderLarge}" srcset="${placeholderSmall} 480w, ${placeholderLarge} 800w"
          sizes="(max-width: 600px) 480px, 800px"
         width="100%" alt="skeleton image">
        <div class="card-item__description">
          <p class="card-item__description-rating" arial-label="skeleton rating">Rating : Loading....</p>
          <h3 aria-label="skeleton title">Loading....</h3>
          <p aria-label="skeleton description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt
            interdum, nisi nisl aliquam nunc, eget egestas nunc nisl euismod nunc.
            interdum, nisi nisl aliquam nunc, eget egestas nunc nisl euismod nunc
          </p>
        </div>
      </article>
    `;
  }
  
  return skeletonTemplate;
};

export default skeletonUI;
