import { TOOLBAR_HEIGHT } from 'src/app/constants/scroll.const';

export const navigateToElementId = (elementId: string) => {
  const elementTop = document
    .querySelector(`#${elementId}`)
    ?.getBoundingClientRect()?.top as number;

  window.scroll({
    behavior: 'smooth',
    top: elementTop - TOOLBAR_HEIGHT,
  });
};
