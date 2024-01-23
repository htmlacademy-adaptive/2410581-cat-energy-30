/* в этот файл добавляет скрипты*/
import '../scripts/nojs';
import '../scripts/map';
import '../scripts/burger';
import '../scripts/slider';

// function getTextNodesIn(elem, opt_fnFilter) {
//   var textNodes = [];
//   if (elem) {
//     for (var nodes = elem.childNodes, i = nodes.length; i--;) {
//       var node = nodes[i],
//         nodeType = node.nodeType;
//       if (nodeType == 3) {
//         if (!opt_fnFilter || opt_fnFilter(node, elem)) {
//           if (node.data.trim() !== '') {
//             textNodes.push(node.data.trim() !== '' ? node : '');

//           }
//         }
//       } else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
//         textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter));
//       }
//     }
//   }
//   return textNodes;
// }

// getTextNodesIn(document.body).forEach((item) => { item.textContent = "енот полоскун полоскает полоску" })
