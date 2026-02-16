/**
 * Slugifies a string into an ICP-friendly hostname label.
 * Converts to lowercase, replaces spaces and special chars with hyphens,
 * removes consecutive hyphens, and enforces 5-50 character constraint.
 */
export function slugify(text: string): string {
  let slug = text
    .toLowerCase()
    .trim()
    // Replace spaces and ampersands with hyphens
    .replace(/[\s&]+/g, '-')
    // Remove all non-alphanumeric characters except hyphens
    .replace(/[^a-z0-9-]/g, '')
    // Replace multiple consecutive hyphens with a single hyphen
    .replace(/-+/g, '-')
    // Remove leading and trailing hyphens
    .replace(/^-+|-+$/g, '');

  // Enforce 5-50 character constraint
  if (slug.length < 5) {
    slug = slug.padEnd(5, '-');
  }
  if (slug.length > 50) {
    slug = slug.substring(0, 50).replace(/-+$/, '');
  }

  return slug;
}

/**
 * Returns the slugified version of "azhari tours & travels"
 */
export function getAppSlug(): string {
  return slugify('azhari tours & travels');
}
