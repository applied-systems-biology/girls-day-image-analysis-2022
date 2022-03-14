const DataDescription = {
  "controls": {
    "#Ds": {
      "label": "Bild",
      "options": ["0", "1", "2", "3", "4"]
    },
    "#method": {
      "label": "Segmentierung: Methode",
      "options": ["Huang", "Otsu", "Triangle"]
    },
    "#sigma-x": {
      "label": "Vorprozessierung: Glättungsstärke",
      "options": ["1.0", "3.0", "5.0"]
    },
    "#min-particle-size": {
      "label": "Nachprozessierung: Maximale Größe (px²)",
      "options": ["500.0", "1000.0", "1500.0"]
    }
  },
  "control-order": ["#sigma-x", "#method", "#min-particle-size"],
  "initial-state": {
    "#Ds": "0",
    "#method": "Otsu",
    "#sigma-x": "5.0",
    "#min-particle-size": "500.0"
  }
}

export default DataDescription;
