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

eval("const pokedex = document.getElementById(\"pokedex\");\nconst displayEntry = document.querySelector(\".display\");\nconst fetchPokedex = async () => {\n  const url = `https://pokeapi.co/api/v2/pokemon?limit=10`; // want to eventually limit this query based on user's limits\n  const res = await fetch(url);\n  const data = await res.json();\n  const dexEntries = data.results.map((result, index) => ({\n    ...result,\n    id: index + 1,\n    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`\n  }));\n  displayDexEntries(dexEntries);\n};\nconst displayDexEntries = dexEntries => {\n  dexEntries.forEach(entry => {\n    const li = document.createElement(\"li\");\n    const img = document.createElement(\"img\");\n    const h2 = document.createElement(\"h2\");\n    img.src = entry.sprite;\n    h2.innerHTML = entry.id + \". \" + entry.name;\n    li.appendChild(h2);\n    li.appendChild(img);\n    li.classList.add(\"display\");\n    pokedex.append(li);\n  });\n};\nconst fetchPokemonData = async id => {\n  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;\n  const res = await fetch(url);\n  const pokemon = await res.json();\n  const abilities = pokemon.abilities.map(ability => ability.ability.name);\n  pokemon.abilities = abilities;\n  const type = pokemon.types.map(type => type.type.name);\n  pokemon.types = type;\n  const moves = pokemon.moves.map(move => move.move.name);\n  pokemon.moves = moves;\n  const baseStats = pokemon.stats.map(baseStat => baseStat.base_stat);\n  pokemon.base_stat = baseStats;\n  const baseStatName = pokemon.stats.map(name => name.stat.name);\n  const evs = pokemon.stats.map(ev => ev.effort);\n  const height = pokemon.height; // measured in meters so divide by 10\n  const weight = pokemon.weight; //measured in kgs so divide by 10\n\n  displayPokemon(pokemon);\n};\nconst displayPokemon = pokemon => {\n  console.log(pokemon.name);\n};\n\n// displayEntry.addEventListener(\"click\", displayPokemon)\n\nfetchPokedex();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJwb2tlZGV4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpc3BsYXlFbnRyeSIsInF1ZXJ5U2VsZWN0b3IiLCJmZXRjaFBva2VkZXgiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZGV4RW50cmllcyIsInJlc3VsdHMiLCJtYXAiLCJyZXN1bHQiLCJpbmRleCIsImlkIiwic3ByaXRlIiwiZGlzcGxheURleEVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJpbWciLCJoMiIsInNyYyIsImlubmVySFRNTCIsIm5hbWUiLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImZldGNoUG9rZW1vbkRhdGEiLCJwb2tlbW9uIiwiYWJpbGl0aWVzIiwiYWJpbGl0eSIsInR5cGUiLCJ0eXBlcyIsIm1vdmVzIiwibW92ZSIsImJhc2VTdGF0cyIsInN0YXRzIiwiYmFzZVN0YXQiLCJiYXNlX3N0YXQiLCJiYXNlU3RhdE5hbWUiLCJzdGF0IiwiZXZzIiwiZXYiLCJlZmZvcnQiLCJoZWlnaHQiLCJ3ZWlnaHQiLCJkaXNwbGF5UG9rZW1vbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3Bva2Vtb25fZHJhZnRlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBva2VkZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBva2VkZXhcIik7XG5jb25zdCBkaXNwbGF5RW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlcIik7XG5cbmNvbnN0IGZldGNoUG9rZWRleCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTEwYDsgLy8gd2FudCB0byBldmVudHVhbGx5IGxpbWl0IHRoaXMgcXVlcnkgYmFzZWQgb24gdXNlcidzIGxpbWl0c1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc3QgZGV4RW50cmllcyA9IGRhdGEucmVzdWx0cy5tYXAoKHJlc3VsdCwgaW5kZXgpID0+KHtcbiAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICBpZDogaW5kZXggKyAxLFxuICAgICAgICBzcHJpdGU6IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vJHtpbmRleCArIDF9LnBuZ2BcbiAgICB9KSk7XG4gICAgZGlzcGxheURleEVudHJpZXMoZGV4RW50cmllcyk7XG59XG5cbmNvbnN0IGRpc3BsYXlEZXhFbnRyaWVzID0gKGRleEVudHJpZXMpID0+IHtcbiAgIGRleEVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+e1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBpbWcuc3JjID0gZW50cnkuc3ByaXRlO1xuICAgIGgyLmlubmVySFRNTCA9IGVudHJ5LmlkICsgXCIuIFwiICsgZW50cnkubmFtZTtcbiAgICBsaS5hcHBlbmRDaGlsZChoMik7XG4gICAgbGkuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKVxuICAgIHBva2VkZXguYXBwZW5kKGxpKVxuICAgfSk7XG59XG5cbmNvbnN0IGZldGNoUG9rZW1vbkRhdGEgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7aWR9L2BcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IHBva2Vtb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnN0IGFiaWxpdGllcyA9IHBva2Vtb24uYWJpbGl0aWVzLm1hcCgoYWJpbGl0eSkgPT4gYWJpbGl0eS5hYmlsaXR5Lm5hbWUpO1xuICAgIHBva2Vtb24uYWJpbGl0aWVzID0gYWJpbGl0aWVzO1xuICAgIGNvbnN0IHR5cGUgPSBwb2tlbW9uLnR5cGVzLm1hcCgodHlwZSkgPT4gdHlwZS50eXBlLm5hbWUpO1xuICAgIHBva2Vtb24udHlwZXMgPSB0eXBlO1xuICAgIGNvbnN0IG1vdmVzID0gcG9rZW1vbi5tb3Zlcy5tYXAoKG1vdmUpID0+IG1vdmUubW92ZS5uYW1lKTtcbiAgICBwb2tlbW9uLm1vdmVzID0gbW92ZXNcbiAgICBcbiAgICBjb25zdCBiYXNlU3RhdHMgPSBwb2tlbW9uLnN0YXRzLm1hcCgoYmFzZVN0YXQpID0+IGJhc2VTdGF0LmJhc2Vfc3RhdCk7XG4gICAgcG9rZW1vbi5iYXNlX3N0YXQgPSBiYXNlU3RhdHNcbiAgICBjb25zdCBiYXNlU3RhdE5hbWUgPSBwb2tlbW9uLnN0YXRzLm1hcCgobmFtZSkgPT4gbmFtZS5zdGF0Lm5hbWUpO1xuXG4gICAgY29uc3QgZXZzID0gcG9rZW1vbi5zdGF0cy5tYXAoKGV2KSA9PiBldi5lZmZvcnQpO1xuICAgIGNvbnN0IGhlaWdodCA9IHBva2Vtb24uaGVpZ2h0IC8vIG1lYXN1cmVkIGluIG1ldGVycyBzbyBkaXZpZGUgYnkgMTBcbiAgICBjb25zdCB3ZWlnaHQgPSBwb2tlbW9uLndlaWdodCAvL21lYXN1cmVkIGluIGtncyBzbyBkaXZpZGUgYnkgMTBcblxuICAgIGRpc3BsYXlQb2tlbW9uKHBva2Vtb24pXG59XG5cbmNvbnN0IGRpc3BsYXlQb2tlbW9uID0gKHBva2Vtb24pID0+IHtcbiAgICBjb25zb2xlLmxvZyhwb2tlbW9uLm5hbWUpXG59XG5cbi8vIGRpc3BsYXlFbnRyeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVBva2Vtb24pXG5cblxuXG5mZXRjaFBva2VkZXgoKTtcblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDO0FBQ2xELE1BQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsVUFBVSxDQUFDO0FBRXZELE1BQU1DLFlBQVksR0FBRyxNQUFBQSxDQUFBLEtBQVk7RUFDN0IsTUFBTUMsR0FBRyxHQUFJLDRDQUEyQyxDQUFDLENBQUM7RUFDMUQsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO0VBQzVCLE1BQU1HLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUksQ0FBQyxDQUFDO0VBQzdCLE1BQU1DLFVBQVUsR0FBR0YsSUFBSSxDQUFDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLEVBQUVDLEtBQUssTUFBSztJQUNuRCxHQUFHRCxNQUFNO0lBQ1RFLEVBQUUsRUFBRUQsS0FBSyxHQUFHLENBQUM7SUFDYkUsTUFBTSxFQUFHLDRFQUEyRUYsS0FBSyxHQUFHLENBQUU7RUFDbEcsQ0FBQyxDQUFDLENBQUM7RUFDSEcsaUJBQWlCLENBQUNQLFVBQVUsQ0FBQztBQUNqQyxDQUFDO0FBRUQsTUFBTU8saUJBQWlCLEdBQUlQLFVBQVUsSUFBSztFQUN2Q0EsVUFBVSxDQUFDUSxPQUFPLENBQUVDLEtBQUssSUFBSTtJQUM1QixNQUFNQyxFQUFFLEdBQUdwQixRQUFRLENBQUNxQixhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLE1BQU1DLEdBQUcsR0FBR3RCLFFBQVEsQ0FBQ3FCLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDekMsTUFBTUUsRUFBRSxHQUFHdkIsUUFBUSxDQUFDcUIsYUFBYSxDQUFDLElBQUksQ0FBQztJQUN2Q0MsR0FBRyxDQUFDRSxHQUFHLEdBQUdMLEtBQUssQ0FBQ0gsTUFBTTtJQUN0Qk8sRUFBRSxDQUFDRSxTQUFTLEdBQUdOLEtBQUssQ0FBQ0osRUFBRSxHQUFHLElBQUksR0FBR0ksS0FBSyxDQUFDTyxJQUFJO0lBQzNDTixFQUFFLENBQUNPLFdBQVcsQ0FBQ0osRUFBRSxDQUFDO0lBQ2xCSCxFQUFFLENBQUNPLFdBQVcsQ0FBQ0wsR0FBRyxDQUFDO0lBQ25CRixFQUFFLENBQUNRLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUMzQjlCLE9BQU8sQ0FBQytCLE1BQU0sQ0FBQ1YsRUFBRSxDQUFDO0VBQ25CLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxNQUFNVyxnQkFBZ0IsR0FBRyxNQUFPaEIsRUFBRSxJQUFLO0VBQ25DLE1BQU1WLEdBQUcsR0FBSSxxQ0FBb0NVLEVBQUcsR0FBRTtFQUN0RCxNQUFNVCxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFHLENBQUM7RUFDNUIsTUFBTTJCLE9BQU8sR0FBRyxNQUFNMUIsR0FBRyxDQUFDRyxJQUFJLENBQUMsQ0FBQztFQUNoQyxNQUFNd0IsU0FBUyxHQUFHRCxPQUFPLENBQUNDLFNBQVMsQ0FBQ3JCLEdBQUcsQ0FBRXNCLE9BQU8sSUFBS0EsT0FBTyxDQUFDQSxPQUFPLENBQUNSLElBQUksQ0FBQztFQUMxRU0sT0FBTyxDQUFDQyxTQUFTLEdBQUdBLFNBQVM7RUFDN0IsTUFBTUUsSUFBSSxHQUFHSCxPQUFPLENBQUNJLEtBQUssQ0FBQ3hCLEdBQUcsQ0FBRXVCLElBQUksSUFBS0EsSUFBSSxDQUFDQSxJQUFJLENBQUNULElBQUksQ0FBQztFQUN4RE0sT0FBTyxDQUFDSSxLQUFLLEdBQUdELElBQUk7RUFDcEIsTUFBTUUsS0FBSyxHQUFHTCxPQUFPLENBQUNLLEtBQUssQ0FBQ3pCLEdBQUcsQ0FBRTBCLElBQUksSUFBS0EsSUFBSSxDQUFDQSxJQUFJLENBQUNaLElBQUksQ0FBQztFQUN6RE0sT0FBTyxDQUFDSyxLQUFLLEdBQUdBLEtBQUs7RUFFckIsTUFBTUUsU0FBUyxHQUFHUCxPQUFPLENBQUNRLEtBQUssQ0FBQzVCLEdBQUcsQ0FBRTZCLFFBQVEsSUFBS0EsUUFBUSxDQUFDQyxTQUFTLENBQUM7RUFDckVWLE9BQU8sQ0FBQ1UsU0FBUyxHQUFHSCxTQUFTO0VBQzdCLE1BQU1JLFlBQVksR0FBR1gsT0FBTyxDQUFDUSxLQUFLLENBQUM1QixHQUFHLENBQUVjLElBQUksSUFBS0EsSUFBSSxDQUFDa0IsSUFBSSxDQUFDbEIsSUFBSSxDQUFDO0VBRWhFLE1BQU1tQixHQUFHLEdBQUdiLE9BQU8sQ0FBQ1EsS0FBSyxDQUFDNUIsR0FBRyxDQUFFa0MsRUFBRSxJQUFLQSxFQUFFLENBQUNDLE1BQU0sQ0FBQztFQUNoRCxNQUFNQyxNQUFNLEdBQUdoQixPQUFPLENBQUNnQixNQUFNLEVBQUM7RUFDOUIsTUFBTUMsTUFBTSxHQUFHakIsT0FBTyxDQUFDaUIsTUFBTSxFQUFDOztFQUU5QkMsY0FBYyxDQUFDbEIsT0FBTyxDQUFDO0FBQzNCLENBQUM7QUFFRCxNQUFNa0IsY0FBYyxHQUFJbEIsT0FBTyxJQUFLO0VBQ2hDbUIsT0FBTyxDQUFDQyxHQUFHLENBQUNwQixPQUFPLENBQUNOLElBQUksQ0FBQztBQUM3QixDQUFDOztBQUVEOztBQUlBdEIsWUFBWSxDQUFDLENBQUMifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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