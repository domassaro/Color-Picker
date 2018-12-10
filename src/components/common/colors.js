import chromaJs from "chroma-js";
import { decorate, observable } from "mobx"

export default class ColorStore {
  constructor() {
    let basicColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown'];
    let generatedColors = new Set();
    basicColors.forEach(color => {
      const modifyCount = 5;
      const amount = 0.3;
      this.addAllToSet(generatedColors, this.generateColor(color, modifyCount, this.darken, amount));
      this.addAllToSet(generatedColors, this.generateColor(color, modifyCount, this.brighten, amount));
      this.addAllToSet(generatedColors, this.generateColor(color, modifyCount, this.saturate, amount));
      this.addAllToSet(generatedColors, this.generateColor(color, modifyCount, this.desaturate, amount));
    });

    this.colors = Array.from(generatedColors);
    this.currentColorSelected = null;
    this.currentPage = null;
  }

  selectColor = (color) => {
    this.currentColorSelected = color;
  }

  getCurrentColor() {
    return this.currentColorSelected;
  }

  addAllToSet(set, arr) {
    for (let i = 0; i < arr.length; i++) {
      set.add(arr[i]);
    }
    return set;
  }

  darken(color, amount) {
    return chromaJs(color).darken(amount);
  }

  brighten(color, amount) {
    return chromaJs(color).brighten(amount);
  }

  saturate(color, amount) {
    return chromaJs(color).saturate(amount);
  }

  desaturate(color, amount) {
    return chromaJs(color).desaturate(amount);
  }

  generateColor(color, count, colorFunc, amount) {
    let colors = [];
    let currentColor = color;
    for (let i = 0; i < count; i++) {
      let newColor = colorFunc(currentColor, amount).hex();
      colors.push(newColor);
      currentColor = newColor;
    }
    return colors;
  }
}

decorate(ColorStore, {
  colors: observable,
  currentColorSelected: observable,
  currentPage: observable
});