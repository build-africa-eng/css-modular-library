l// src/cssUtils.js
export const utilities = {
  tailwind: {
    primaryButton: 'tw-primary-button',
    heading: 'tw-heading',
  },
  bootstrap: {
    primaryButton: 'btn btn-primary',
    heading: 'display-3 fw-bold',
  },
  bulma: {
    primaryButton: 'button is-primary',
    heading: 'title is-1.5',
  },
  foundation: {
    primaryButton: 'button primary',
    heading: 'h1',
  },
};
export function applyUtility(element, framework, utility) {
  if (!utilities[framework] || !utilities[framework][utility]) {
    console.error(`Invalid framework or utility: ${framework}, ${utility}`);
    return;
  }
  element.classList.add(...utilities[framework][utility].split(' '));
}
export function removeUtility(element, framework, utility) {
  if (!utilities[framework] || !utilities[framework][utility]) {
    console.error(`Invalid utility: ${framework}, ${utility}`);
    return;
  }
  element.classList.remove(...utilities[framework][utility].split(' '));
}