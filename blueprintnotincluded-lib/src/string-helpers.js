"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringHelpers {
    static stripHtml(html) {
        // TODO FIX ME
        return html;
    }
    static createUrl(ressource, ui) {
        return 'assets/images/' + (ui ? 'ui/' : '') + ressource + '.png';
    }
}
exports.StringHelpers = StringHelpers;
