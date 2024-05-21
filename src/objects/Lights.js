import { Group, SpotLight, PointLight, AmbientLight, HemisphereLight, Color } from 'three';

export default class BasicLights extends Group {
  constructor(...args) {
    super(...args);

    const point = new PointLight(0xFF5733, 1, 10, 1); // Цвет изменен на оранжево-красный
    const dir = new SpotLight(0xFF5733, 0.8, 7, 0.8, 1, 1); // Цвет изменен на зеленый
    const ambi = new AmbientLight(0xFF5733, 0.66); // Цвет изменен на серый
    const hemi = new HemisphereLight(0xFF5733, 0x003366, 1.15); // Верхний цвет изменен на синий, нижний - на темно-синий


    dir.position.set(5, 1, 2);
    dir.target.position.set(0,0,0);

    point.position.set(0, 1, 5);
    point.intensity = 0.5;

    this.add(point, ambi, hemi, dir);

  }
}
