/**
 * Get CSS computed property of the given element
 */
export function getStyleComputedProperty(element: Element): CSSStyleDeclaration;
export function getStyleComputedProperty(element: Element, property?: string): string | string[];
export function getStyleComputedProperty(element: Element, property?: string): string | string[] | CSSStyleDeclaration {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  const window = element.ownerDocument.defaultView;
  const css = window.getComputedStyle(element, null);

  return property ? css[property] : css;
}
