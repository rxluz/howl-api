'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Get the list of recent tags
 * @returns {tags}
 */
function recent(req, res) {
  return res.json({ hello: 'tags_recent' });
}

/**
 * Get the list of featured tags
 * @returns {tags}
 */
function featured(req, res) {
  return res.json({ hello: 'tags_featured' });
}

/**
 * Get the selected tags medias
 * @returns {medias}
 */
function medias(req, res) {
  return res.json({ hello: 'tags_medias' });
}

exports.default = { recent: recent, featured: featured, medias: medias };
module.exports = exports['default'];
//# sourceMappingURL=tags.controller.js.map
