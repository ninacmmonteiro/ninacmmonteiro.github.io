// Star Image
export const starImage = `
<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 465.551 603.789">
    <g id="Layer_1-2">
        <path class="cls-1" d="M285.84,337.246c59.189,18.803,118.378,37.607,177.568,56.41-59.379,9.711-118.758,19.423-178.137,29.134l-52.472,179.199c-17.218-60.302-34.436-120.604-51.653-180.906-59.652-9.142-119.304-18.285-178.956-27.427,59.273-18.803,118.545-37.607,177.818-56.41,17.597-111.35,35.194-222.7,52.791-334.05,17.68,111.35,35.361,222.7,53.041,334.05Z"/>
    </g>
</svg>
`;

// Optional: Export a function to create the SVG with dynamic properties
export function createStarImage(customClasses = '') {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = starImage;
  const svg = wrapper.firstElementChild;
  if (customClasses) {
    svg.classList.add(...customClasses.split(' '));
  }
  return svg;
} 