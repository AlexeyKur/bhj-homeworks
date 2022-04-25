const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.querySelector('.tooltip');

hasTooltip.forEach(item => item.addEventListener('click', (e) => {
  e.preventDefault();
  const { top, left } = item.getBoundingClientRect()
  tooltip.textContent = item.title;
  tooltip.style.top = (top + 20 + 'px')
  tooltip.style.left = (left + 'px');
  tooltip.classList.contains('tooltip_active') ? tooltip.classList.remove('tooltip_active') : tooltip.classList.add('tooltip_active');
}));