const DataDescription = {
  "controls": {
    "#Ds": {
      "label": "Bild",
      "options": ["0", "1", "2", "3", "4", "5"]
    },
    "#method": {
      "label": "Segmentierung: Methode",
      "options": ["Huang", "Otsu", "Yen", "Triangle", "RenyiEntropy"]
    },
    "#sigma-x": {
      "label": "Vorprozessierung: Glättungsstärke",
      "options": ["1.0", "2.0", "3.0", "4.0", "5.0"]
    },
    "#min-particle-size": {
      "label": "Nachprozessierung: Maximale Größe (px²)",
      "options": ["0.0", "500.0", "1000.0", "1500.0", "2000.0"]
    }
  },
  "control-order": ["#sigma-x", "#method", "#min-particle-size"],
  "initial-state": {
    "#Ds": "0",
    "#method": "Otsu",
    "#sigma-x": "5.0",
    "#min-particle-size": "0.0"
  }
}

export default DataDescription;
