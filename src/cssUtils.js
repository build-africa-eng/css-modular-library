export const utilities = {
  tailwind: {
    primaryButton: 'tw-primary-button',
    heading: 'tw-heading',
  },
  bootstrap: {
    primaryButton: 'btn btn-primary',
    heading: 'display-4',
  },
  bulma: {
    primaryButton: 'button is-primary',
    heading: 'title is-1',
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
    console.error(`Invalid framework or utility: ${framework}, ${utility}`);
    return;
  }
  element.classList.remove(...utilities[framework][utility].split(' '));
}