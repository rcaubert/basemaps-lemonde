import { LayerSpecification } from "@maplibre/maplibre-gl-style-spec";
import { labels_layers, nolabels_layers } from "./base_layers";
import themes from "./themes";

export default function (source: string, key: string, lang: string): LayerSpecification[] {
  const theme = themes[key];
  return nolabels_layers(source, theme).concat(labels_layers(source, theme, lang));
}

export function noLabels(source: string, key: string): LayerSpecification[] {
  const theme = themes[key];
  return nolabels_layers(source, theme);
}

export function labels(source: string, key: string, lang: string): LayerSpecification[] {
  console.log("labels")
  const theme = themes[key];
  return labels_layers(source, theme, lang='fr');
}
