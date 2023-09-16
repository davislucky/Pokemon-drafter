/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("const pokedex = document.getElementById(\"pokedex-list\");\nconst displayEntry = document.querySelector(\".display\");\nconst fetchPokedex = async () => {\n  const url = `https://pokeapi.co/api/v2/pokemon?limit=10`; // want to eventually limit this query based on user's limits\n  const res = await fetch(url);\n  const data = await res.json();\n  const dexEntries = data.results.map((result, index) => ({\n    ...result,\n    id: index + 1,\n    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`\n  }));\n  displayDexEntries(dexEntries);\n};\nconst displayDexEntries = dexEntries => {\n  dexEntries.forEach(entry => {\n    const li = document.createElement(\"li\");\n    const img = document.createElement(\"img\");\n    const h2 = document.createElement(\"h2\");\n    img.src = entry.sprite;\n    h2.innerHTML = entry.id + \". \" + entry.name;\n    li.appendChild(h2);\n    li.appendChild(img);\n    li.classList.add(\"display\");\n    pokedex.append(li);\n  });\n};\nconst fetchPokemonData = async id => {\n  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;\n  const res = await fetch(url);\n  const pokemon = await res.json();\n  const abilities = pokemon.abilities.map(ability => ability.ability.name);\n  pokemon.abilities = abilities;\n  const type = pokemon.types.map(type => type.type.name);\n  pokemon.types = type;\n  const moves = pokemon.moves.map(move => move.move.name);\n  pokemon.moves = moves;\n  const baseStats = pokemon.stats.map(baseStat => baseStat.base_stat);\n  pokemon.base_stat = baseStats;\n  const baseStatName = pokemon.stats.map(name => name.stat.name);\n  const evs = pokemon.stats.map(ev => ev.effort);\n  const height = pokemon.height; // measured in meters so divide by 10\n  const weight = pokemon.weight; //measured in kgs so divide by 10\n\n  displayPokemon(pokemon);\n};\nconst displayPokemon = pokemon => {\n  console.log(pokemon.name);\n};\n\n// displayEntry.addEventListener(\"click\", displayPokemon)\n\nfetchPokedex();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJwb2tlZGV4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpc3BsYXlFbnRyeSIsInF1ZXJ5U2VsZWN0b3IiLCJmZXRjaFBva2VkZXgiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZGV4RW50cmllcyIsInJlc3VsdHMiLCJtYXAiLCJyZXN1bHQiLCJpbmRleCIsImlkIiwic3ByaXRlIiwiZGlzcGxheURleEVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJpbWciLCJoMiIsInNyYyIsImlubmVySFRNTCIsIm5hbWUiLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImZldGNoUG9rZW1vbkRhdGEiLCJwb2tlbW9uIiwiYWJpbGl0aWVzIiwiYWJpbGl0eSIsInR5cGUiLCJ0eXBlcyIsIm1vdmVzIiwibW92ZSIsImJhc2VTdGF0cyIsInN0YXRzIiwiYmFzZVN0YXQiLCJiYXNlX3N0YXQiLCJiYXNlU3RhdE5hbWUiLCJzdGF0IiwiZXZzIiwiZXYiLCJlZmZvcnQiLCJoZWlnaHQiLCJ3ZWlnaHQiLCJkaXNwbGF5UG9rZW1vbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3Bva2Vtb25fZHJhZnRlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBva2VkZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBva2VkZXgtbGlzdFwiKTtcbmNvbnN0IGRpc3BsYXlFbnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheVwiKTtcblxuY29uc3QgZmV0Y2hQb2tlZGV4ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9MTBgOyAvLyB3YW50IHRvIGV2ZW50dWFsbHkgbGltaXQgdGhpcyBxdWVyeSBiYXNlZCBvbiB1c2VyJ3MgbGltaXRzXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zdCBkZXhFbnRyaWVzID0gZGF0YS5yZXN1bHRzLm1hcCgocmVzdWx0LCBpbmRleCkgPT4oe1xuICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgIGlkOiBpbmRleCArIDEsXG4gICAgICAgIHNwcml0ZTogYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi8ke2luZGV4ICsgMX0ucG5nYFxuICAgIH0pKTtcbiAgICBkaXNwbGF5RGV4RW50cmllcyhkZXhFbnRyaWVzKTtcbn1cblxuY29uc3QgZGlzcGxheURleEVudHJpZXMgPSAoZGV4RW50cmllcykgPT4ge1xuICAgZGV4RW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT57XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGltZy5zcmMgPSBlbnRyeS5zcHJpdGU7XG4gICAgaDIuaW5uZXJIVE1MID0gZW50cnkuaWQgKyBcIi4gXCIgKyBlbnRyeS5uYW1lO1xuICAgIGxpLmFwcGVuZENoaWxkKGgyKTtcbiAgICBsaS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpXG4gICAgcG9rZWRleC5hcHBlbmQobGkpXG4gICB9KTtcbn1cblxuY29uc3QgZmV0Y2hQb2tlbW9uRGF0YSA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtpZH0vYFxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc3QgYWJpbGl0aWVzID0gcG9rZW1vbi5hYmlsaXRpZXMubWFwKChhYmlsaXR5KSA9PiBhYmlsaXR5LmFiaWxpdHkubmFtZSk7XG4gICAgcG9rZW1vbi5hYmlsaXRpZXMgPSBhYmlsaXRpZXM7XG4gICAgY29uc3QgdHlwZSA9IHBva2Vtb24udHlwZXMubWFwKCh0eXBlKSA9PiB0eXBlLnR5cGUubmFtZSk7XG4gICAgcG9rZW1vbi50eXBlcyA9IHR5cGU7XG4gICAgY29uc3QgbW92ZXMgPSBwb2tlbW9uLm1vdmVzLm1hcCgobW92ZSkgPT4gbW92ZS5tb3ZlLm5hbWUpO1xuICAgIHBva2Vtb24ubW92ZXMgPSBtb3Zlc1xuICAgIFxuICAgIGNvbnN0IGJhc2VTdGF0cyA9IHBva2Vtb24uc3RhdHMubWFwKChiYXNlU3RhdCkgPT4gYmFzZVN0YXQuYmFzZV9zdGF0KTtcbiAgICBwb2tlbW9uLmJhc2Vfc3RhdCA9IGJhc2VTdGF0c1xuICAgIGNvbnN0IGJhc2VTdGF0TmFtZSA9IHBva2Vtb24uc3RhdHMubWFwKChuYW1lKSA9PiBuYW1lLnN0YXQubmFtZSk7XG5cbiAgICBjb25zdCBldnMgPSBwb2tlbW9uLnN0YXRzLm1hcCgoZXYpID0+IGV2LmVmZm9ydCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gcG9rZW1vbi5oZWlnaHQgLy8gbWVhc3VyZWQgaW4gbWV0ZXJzIHNvIGRpdmlkZSBieSAxMFxuICAgIGNvbnN0IHdlaWdodCA9IHBva2Vtb24ud2VpZ2h0IC8vbWVhc3VyZWQgaW4ga2dzIHNvIGRpdmlkZSBieSAxMFxuXG4gICAgZGlzcGxheVBva2Vtb24ocG9rZW1vbilcbn1cblxuY29uc3QgZGlzcGxheVBva2Vtb24gPSAocG9rZW1vbikgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBva2Vtb24ubmFtZSlcbn1cblxuLy8gZGlzcGxheUVudHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UG9rZW1vbilcblxuXG5cbmZldGNoUG9rZWRleCgpO1xuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUM7QUFDdkQsTUFBTUMsWUFBWSxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxVQUFVLENBQUM7QUFFdkQsTUFBTUMsWUFBWSxHQUFHLE1BQUFBLENBQUEsS0FBWTtFQUM3QixNQUFNQyxHQUFHLEdBQUksNENBQTJDLENBQUMsQ0FBQztFQUMxRCxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFHLENBQUM7RUFDNUIsTUFBTUcsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDN0IsTUFBTUMsVUFBVSxHQUFHRixJQUFJLENBQUNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQU0sRUFBRUMsS0FBSyxNQUFLO0lBQ25ELEdBQUdELE1BQU07SUFDVEUsRUFBRSxFQUFFRCxLQUFLLEdBQUcsQ0FBQztJQUNiRSxNQUFNLEVBQUcsNEVBQTJFRixLQUFLLEdBQUcsQ0FBRTtFQUNsRyxDQUFDLENBQUMsQ0FBQztFQUNIRyxpQkFBaUIsQ0FBQ1AsVUFBVSxDQUFDO0FBQ2pDLENBQUM7QUFFRCxNQUFNTyxpQkFBaUIsR0FBSVAsVUFBVSxJQUFLO0VBQ3ZDQSxVQUFVLENBQUNRLE9BQU8sQ0FBRUMsS0FBSyxJQUFJO0lBQzVCLE1BQU1DLEVBQUUsR0FBR3BCLFFBQVEsQ0FBQ3FCLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDdkMsTUFBTUMsR0FBRyxHQUFHdEIsUUFBUSxDQUFDcUIsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6QyxNQUFNRSxFQUFFLEdBQUd2QixRQUFRLENBQUNxQixhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3ZDQyxHQUFHLENBQUNFLEdBQUcsR0FBR0wsS0FBSyxDQUFDSCxNQUFNO0lBQ3RCTyxFQUFFLENBQUNFLFNBQVMsR0FBR04sS0FBSyxDQUFDSixFQUFFLEdBQUcsSUFBSSxHQUFHSSxLQUFLLENBQUNPLElBQUk7SUFDM0NOLEVBQUUsQ0FBQ08sV0FBVyxDQUFDSixFQUFFLENBQUM7SUFDbEJILEVBQUUsQ0FBQ08sV0FBVyxDQUFDTCxHQUFHLENBQUM7SUFDbkJGLEVBQUUsQ0FBQ1EsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQzNCOUIsT0FBTyxDQUFDK0IsTUFBTSxDQUFDVixFQUFFLENBQUM7RUFDbkIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE1BQU1XLGdCQUFnQixHQUFHLE1BQU9oQixFQUFFLElBQUs7RUFDbkMsTUFBTVYsR0FBRyxHQUFJLHFDQUFvQ1UsRUFBRyxHQUFFO0VBQ3RELE1BQU1ULEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUcsQ0FBQztFQUM1QixNQUFNMkIsT0FBTyxHQUFHLE1BQU0xQixHQUFHLENBQUNHLElBQUksQ0FBQyxDQUFDO0VBQ2hDLE1BQU13QixTQUFTLEdBQUdELE9BQU8sQ0FBQ0MsU0FBUyxDQUFDckIsR0FBRyxDQUFFc0IsT0FBTyxJQUFLQSxPQUFPLENBQUNBLE9BQU8sQ0FBQ1IsSUFBSSxDQUFDO0VBQzFFTSxPQUFPLENBQUNDLFNBQVMsR0FBR0EsU0FBUztFQUM3QixNQUFNRSxJQUFJLEdBQUdILE9BQU8sQ0FBQ0ksS0FBSyxDQUFDeEIsR0FBRyxDQUFFdUIsSUFBSSxJQUFLQSxJQUFJLENBQUNBLElBQUksQ0FBQ1QsSUFBSSxDQUFDO0VBQ3hETSxPQUFPLENBQUNJLEtBQUssR0FBR0QsSUFBSTtFQUNwQixNQUFNRSxLQUFLLEdBQUdMLE9BQU8sQ0FBQ0ssS0FBSyxDQUFDekIsR0FBRyxDQUFFMEIsSUFBSSxJQUFLQSxJQUFJLENBQUNBLElBQUksQ0FBQ1osSUFBSSxDQUFDO0VBQ3pETSxPQUFPLENBQUNLLEtBQUssR0FBR0EsS0FBSztFQUVyQixNQUFNRSxTQUFTLEdBQUdQLE9BQU8sQ0FBQ1EsS0FBSyxDQUFDNUIsR0FBRyxDQUFFNkIsUUFBUSxJQUFLQSxRQUFRLENBQUNDLFNBQVMsQ0FBQztFQUNyRVYsT0FBTyxDQUFDVSxTQUFTLEdBQUdILFNBQVM7RUFDN0IsTUFBTUksWUFBWSxHQUFHWCxPQUFPLENBQUNRLEtBQUssQ0FBQzVCLEdBQUcsQ0FBRWMsSUFBSSxJQUFLQSxJQUFJLENBQUNrQixJQUFJLENBQUNsQixJQUFJLENBQUM7RUFFaEUsTUFBTW1CLEdBQUcsR0FBR2IsT0FBTyxDQUFDUSxLQUFLLENBQUM1QixHQUFHLENBQUVrQyxFQUFFLElBQUtBLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDO0VBQ2hELE1BQU1DLE1BQU0sR0FBR2hCLE9BQU8sQ0FBQ2dCLE1BQU0sRUFBQztFQUM5QixNQUFNQyxNQUFNLEdBQUdqQixPQUFPLENBQUNpQixNQUFNLEVBQUM7O0VBRTlCQyxjQUFjLENBQUNsQixPQUFPLENBQUM7QUFDM0IsQ0FBQztBQUVELE1BQU1rQixjQUFjLEdBQUlsQixPQUFPLElBQUs7RUFDaENtQixPQUFPLENBQUNDLEdBQUcsQ0FBQ3BCLE9BQU8sQ0FBQ04sSUFBSSxDQUFDO0FBQzdCLENBQUM7O0FBRUQ7O0FBSUF0QixZQUFZLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlbW9uX2RyYWZ0ZXIvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;