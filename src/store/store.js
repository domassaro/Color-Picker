import * as mobx from 'mobx';

export const colorsStore = mobx.observable({
    currentColorSelected : null,
     currentPage : null
});

colorsStore.selectColor = function(color) {
    colorsStore.currentColorSelected = color;
};
export function getCurrentColor() {
    return colorsStore.currentColorSelected;
}
